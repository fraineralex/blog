const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const marked = require('marked')
const RSS = require('rss')

const posts = fs
  .readdirSync(path.resolve(__dirname, '../content/posts/'))
  .filter(file => path.extname(file) === '.mdx')
  .map(file => {
    const postContent = fs.readFileSync(`./content/posts/${file}`, 'utf8')
    const { data, content } =
      matter(postContent)
    return { ...data, body: content, slug: file.replace('.mdx', '') }
  })
  .sort(
    (a, b) =>
      new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
      new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
  )

const renderer = new marked.Renderer()

renderer.link = (href, _, text) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`

marked.setOptions({
  gfm: true,
  breaks: true,
  renderer
})

const renderPost = (md) => marked.parse(md)

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
        feed_url: `${site_url}/rss.xml`,
        image_url: `${site_url}/og.webp`,
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
          categories: post.tags?.map((tag) => tag) || [],
          guid: `${site_url}/${post.slug}`,
          author: 'Frainer Encarnación',
          enclosure: {
            url: `${site_url}${post.hero}`,
            type: `image/${post.hero?.split('.').pop() || 'webp'}`
          },
          custom_elements: [{ 'content:encoded': renderPost(post.body) }]
        })
      })

  const rss = feed.xml({ indent: true })
  fs.writeFileSync(path.join(__dirname, '../public/rss.xml'), rss)
}

main()
