export default function robots () {
  const site_url =
    process.env.NODE_ENV === 'production'
      ? 'https://frainer-blog.vercel.app'
      : 'http://localhost:3000'
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/']
      }
    ],
    sitemap: `${site_url}/sitemap.xml`,
    host: site_url
  }
}
