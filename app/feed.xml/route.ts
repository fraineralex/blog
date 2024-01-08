import RSS from 'rss'
import { Post } from 'contentlayer/generated'

let allPosts: Array<Post>

if (process.env.NODE_ENV === 'development') {
  import('../../util/monks').then(module => {
    allPosts = module.allPostsDev
  })
} else {
  import('contentlayer/generated').then(module => {
    allPosts = module.allPosts
  })
}

export async function GET () {
  const site_url =
    process.env.NODE_ENV === 'production'
      ? 'https://fraineralex.com/blog'
      : 'http://localhost:3000'

  const feed = new RSS({
    title: "Frainer's Blog | ",
    description:
      "Recent content on Frainer's Blog | Web development, Programming, and Computer Science",
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/images/og.png`,
    pubDate: new Date(),
    language: 'en-US'
  })

  allPosts.map((post: Post) => {
    feed.item({
      title: post.title,
      url: `${site_url}/${post.slug}`,
      date: post.date,
      description: post.description,
      categories: post.tags?.map(({ label }) => label) || [],
      guid: post.slug,
      author: 'Frainer Encarnación'
    })
  })

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8'
    }
  })
}
