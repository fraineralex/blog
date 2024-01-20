import { allPostsDev } from '@/util/monks'
import { allPosts as allPostsProd } from 'contentlayer/generated'
import { allTags } from '@/util/data'
const allPosts: typeof allPostsProd =
  process.env.NODE_ENV === 'development' ? allPostsDev : allPostsProd

export default async function sitemap () {
  const site_url =
    process.env.NODE_ENV === 'production'
      ? 'https://frainer-blog.vercel.app'
      : 'http://localhost:3000'

  const lastPostDate = allPosts[allPosts.length - 1].date

  const articles = allPosts.map(post => ({
    url: `${site_url}/${post.slug}`,
    lastModified: lastPostDate
  }))

  const tags = allTags.map(tag => ({
    url: `${site_url}/${tag.name}`,
    lastModified: lastPostDate
  }))

  const routes = ['', '/tags', '/feed.xml'].map(route => ({
    url: `${site_url}${route}`,
    lastModified: lastPostDate
  }))

  return [...routes, ...articles, ...tags]
}
