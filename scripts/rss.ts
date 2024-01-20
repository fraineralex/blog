import fs from 'fs'
import RSS from 'rss'
import path from 'path'
import { marked } from 'marked'
import matter from 'gray-matter'

const posts = fs
  .readdirSync(path.resolve(__dirname, '../content/posts/'))
  .filter(file => path.extname(file) === '.mdx')
  .map(file => {
    const postContent = fs.readFileSync(`./content/posts/${file}`, 'utf8')
    const { data, content }: { data: any; content: string } =
      matter(postContent)
    return { ...data, body: content }
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

const renderer = new marked.Renderer()

renderer.link = (href, _, text) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`

marked.setOptions({
  gfm: true,
  breaks: true,
  renderer
})

const renderPost = (md: string) => marked.parse(md)

const main = () => {
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
    image_url: `${site_url}/og.webp`,
    pubDate: lastPostDate,
    language: 'en-US',
    categories: ['tech', 'programming', 'software'],
    custom_elements: [{ 'dc:creator': 'Frainer Encarnación' }]
  })

  posts.forEach(post => {
    const url = `${site_url}/${post.slug}`

    feed.item({
      title: post.title,
      description: renderPost(post.body) as string,
      date: new Date(post?.date),
      author: 'Frainer Encarnación',
      url,
      guid: url
    })
  })

  const rss = feed.xml({ indent: true })
  fs.writeFileSync(path.join(__dirname, '../public/rss.xml'), rss)
}

main()
