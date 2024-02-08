import { MetadataRoute } from 'next'

export default function manifest (): MetadataRoute.Manifest {
  return {
    name: "Frainer's Blog",
    short_name: "Frainer's Blog",
    description:
      "I'm Frainer Encarnación, a Full Stack Developer in Dominican Republic. I write about tech, projects and whatever else I'm thinking about! Here you will find articles about web development, software engineering, and many more geeky things in the world of programming.",
    start_url: '/',
    display: 'standalone',
    background_color: '#1F222A',
    theme_color: '#1F222A',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon'
      }
    ]
  }
}
