import RSS from 'rss'
import { format } from 'date-fns'
import { allPostsDev } from '@/util/monks'
import { allPosts as allPostsProd } from 'contentlayer/generated'
const allPosts: typeof allPostsProd =
  process.env.NODE_ENV === 'development' ? allPostsDev : allPostsProd

export async function GET () {
  const site_url =
    process.env.NODE_ENV === 'production'
      ? 'https://frainer-blog.vercel.app'
      : 'http://localhost:3000'

  const feed = new RSS({
    title: "Frainer's Blog 📝",
    description:
      "I'm Frainer Encarnación, a Full Stack Developer in Dominican Republic. I write about tech, projects and whatever else I'm thinking about! Here you will find articles about web development, software engineering, and many more geeky things in the world of programming.",
    site_url: site_url,
    feed_url: `${site_url}/feed.xml`,
    image_url: `${site_url}/images/og.png`,
    pubDate: format(new Date(), 'EEE, dd MMM yyyy HH:mm:ss xx'),
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
      guid: post.slug,
      author: 'Frainer Encarnación',
      enclosure: {
        url: `${site_url}${post.hero}`,
        type: 'image/png'
      },
      custom_elements: [{ 'content:encoded': post.body.code }]
    })
  })

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8'
    }
  })
}
