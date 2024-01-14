import { notFound } from 'next/navigation'
import { Mdx } from '@/app/components/articles/mdx'
import { Header } from '../components/content/header'
import '../components/content/mdx.css'
import { ReportView } from '../components/content/view'
import { Redis } from '@upstash/redis'
import Image from 'next/image'
import { Metadata, ResolvingMetadata } from 'next'
import Link from 'next/link'
import Subscribe from '../components/footer/subscribe'
import { Post } from 'contentlayer/generated'
import { allTags } from '@/util/data'

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

export const revalidate = 60
const redis = Redis.fromEnv()

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams (): Promise<Props['params'][]> {
  return allPosts
    .filter(post => post.published)
    .map(p => ({
      slug: p.slug
    }))
}

export async function generateMetadata (
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params?.slug
  const post = allPosts.find(post => post.slug === slug)

  if (!post) {
    return {
      title: 'Not Found'
    }
  }

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: post.title,
    openGraph: {
      images: [post.hero, ...previousImages]
    }
  }
}

export default async function PostPage ({ params }: Props) {
  const slug = params?.slug
  const post = allPosts.find(post => post.slug === slug)

  if (!post) {
    notFound()
  }

  const views =
    (await redis.get<number>(['pageviews', 'posts', slug].join(':'))) ?? 0

  return (
    <>
      <section className='min-h-screen max-w-4xl mx-auto px-8 text-zinc-300'>
        <Header post={post} views={views} />
        <ReportView slug={post.slug} />
        <header className='mx-auto max-w-3xl text-center content pt-20 sm:pt-28'>
          <h1 className='text-white mb-8'>{post.title}</h1>
        </header>

        <Image
          className='rounded-xl mx-auto'
          style={{ minWidth: '80%' }}
          loading='lazy'
          src={post.hero}
          alt={post.title}
          width={800}
          height={427}
        />

        <small className='text-zinc-400 flex flex-col font-bold uppercase sm:flex-row text-center pb-8 place-content-center py-6 px-6'>
          <span className='mb-2 sm:mb-0'>
            {post.updated && <span>Updated on</span>}{' '}
            <time
              dateTime={new Date(post.updated || post.date).toISOString()}
              className={`${
                post.updated ? 'underline underline-offset-4' : undefined
              }`}
            >
              {Intl.DateTimeFormat(undefined, {
                dateStyle: 'medium'
              }).format(new Date(post.updated || post.date))}
            </time>{' '}
            <span className='px-4'>•</span>
            <span>{post.readTime} min read</span>
          </span>
          <span className='hidden px-4 sm:block'>|</span>
          <div className='flex flex-wrap'>
            {post.tags &&
              post.tags.map((tagName, index) => {
                const tag = allTags.find(tag => tag.name === tagName)
                return (
                  <div key={index}>
                    <Link
                      href={`/tags/${tag?.name || tagName}`}
                      className='text-hot-pink font-bold underline underline-offset-4 py-3 px-1 hover:text-white'
                    >
                      {tag?.label || tagName}
                    </Link>
                    {index !== (post.tags?.length ?? 0) - 1 && (
                      <span className='px-1'>•</span>
                    )}
                  </div>
                )
              })}
          </div>
        </small>

        <article className='px-6 content pb-12'>
          <Mdx code={post.body.code} />
        </article>
      </section>
      <Subscribe />
    </>
  )
}
