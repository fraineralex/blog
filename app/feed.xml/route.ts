import RSS from 'rss'
import { format } from 'date-fns'
import { allPostsDev } from '@/util/monks'
import { allPosts as allPostsProd } from 'contentlayer/generated'
const allPosts: typeof allPostsProd =
  process.env.NODE_ENV === 'development' ? allPostsDev : allPostsProd

export async function GET () {
  const lastPostDate = allPosts[allPosts.length - 1].date
  const site_url =
    process.env.NODE_ENV === 'production'
      ? 'https://frainer-blog.vercel.app'
      : 'http://localhost:3000'

  const feed = new RSS({
    title: "Frainer's Blog 📝",
    description:
      "Recent articles from Frainer's Blog. I write about tech, programming and whatever else I'm thinking about!",
    site_url: `${site_url}/`,
    feed_url: `${site_url}/feed.xml`,
    image_url: `${site_url}/og.png`,
    pubDate: format(new Date(lastPostDate), 'EEE, dd MMM yyyy HH:mm:ss xx'),
    language: 'en-US',
    categories: ['tech', 'programming', 'software'],
    custom_elements: [{ 'dc:creator': 'Frainer Encarnación' }]
  })

  allPosts.map(post => {
    feed.item({
      title: post.title,
      url: `${site_url}/${post.slug}`,
      date: post.date,
      description: post.description,
      categories: post.tags?.map(tag => tag) || [],
      guid: `${site_url}/${post.slug}`,
      author: 'Frainer Encarnación',
      enclosure: {
        url: `${site_url}${post.hero}`,
        type: `image/${post.hero?.split('.').pop() || 'png'}`
      }
    })
  })

  return new Response(feed.xml({ indent: true }), {
    headers: { 'Content-Type': 'application/xml' },
    status: 200,
    statusText: 'OK'
  })
}
