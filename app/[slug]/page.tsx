import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import Navbar from '../components/navbar'
import BlogPost from '../components/blog-post'

export const revalidate = 60

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams (): Promise<Props['params'][]> {
  return allPosts
    .filter(p => p.published)
    .map(p => ({
      slug: p.slug
    }))
}

export default async function PostPage ({ params }: Props) {
  const slug = params?.slug
  const post = allPosts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <body>
      <Navbar />
      <main className='py-12 lg:py-20'>
        <BlogPost post={post} />
      </main>
    </body>
  )
}
