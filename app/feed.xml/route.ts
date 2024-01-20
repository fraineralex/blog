export const runtime = 'nodejs'

import RSS from 'rss'
import fs from 'fs'
import path from 'path'
import { marked } from 'marked'
import matter from 'gray-matter'

const posts = fs
  .readdirSync('./content/posts')
  .filter(file => path.extname(file) === '.mdx')
  .map(file => {
    const postContent = fs.readFileSync(`./content/posts/${file}`, 'utf8')
    const { data, content }: { data: any; content: string } =
      matter(postContent)
    return { ...data, body: content, slug: file.replace('.mdx', '') }
  })
  .sort(
    (a, b) =>
      new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
      new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
  )

const renderer = new marked.Renderer()

renderer.link = (href: string, _: any, text: string) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`

marked.setOptions({
  gfm: true,
  breaks: true,
  renderer
})

const renderPost = (md: string) => marked.parse(md)

export async function GET () {
  const lastPostDate = posts[posts.length - 1].date
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
    pubDate: lastPostDate,
    language: 'en-US',
    categories: ['tech', 'programming', 'software'],
    custom_elements: [{ 'dc:creator': 'Frainer Encarnación' }]
  })

  posts.map(post => {
    feed.item({
      title: post.title,
      url: `${site_url}/${post.slug}`,
      date: post.date,
      description: post.description,
      categories: post.tags?.map((tag: string) => tag) || [],
      guid: `${site_url}/${post.slug}`,
      author: 'Frainer Encarnación',
      enclosure: {
        url: `${site_url}${post.hero}`,
        type: `image/${post.hero?.split('.').pop() || 'webp'}`
      },
      custom_elements: [{ 'content:encoded': renderPost(post.body) }]
    })
  })

  return new Response(feed.xml({ indent: true }), {
    headers: { 'Content-Type': 'application/xml' },
    status: 200,
    statusText: 'OK'
  })
}
