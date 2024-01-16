import Link from 'next/link'
import React from 'react'
import { Navigation } from './components/nav/nav'
import { Article } from './components/articles/article'
import { Redis } from '@upstash/redis'
import { Eye } from 'lucide-react'
import Image from 'next/image'
import { ArticlesByTags } from './components/tags/articles-by-tags'
import { allPostsDev } from '@/util/monks'
import { allPosts as allPostsProd } from 'contentlayer/generated'
const allPosts: typeof allPostsProd =
  process.env.NODE_ENV === 'development' ? allPostsDev : allPostsProd

const redis = Redis.fromEnv()

export const revalidate = 60
export default async function BlogPage () {
  const views = (
    await redis.mget<number[]>(
      ...allPosts.map(post => ['pageviews', 'posts', post?.slug].join(':'))
    )
  ).reduce((acc, v, i) => {
    acc[allPosts[i].slug] = v ?? 0
    return acc
  }, {} as Record<string, number>)

  const featured = allPosts.find(
    post => post?.slug === 'installing-go-on-a-mac'
  )!
  const top2 = allPosts.find(post => post?.slug === 'installing-go-on-a-mac')!
  const top3 = allPosts.find(post => post?.slug === 'installing-go-on-a-mac')!
  const sorted = allPosts
    .filter(post => post.published)
    .filter(
      post =>
        post?.slug !== featured.slug &&
        post?.slug !== top2?.slug &&
        post?.slug !== top3?.slug
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    )

  sorted.push(featured)

  const thereAreFourPosts = allPosts.length >= 4

  return (
    <div className='relative pb-16'>
      <Navigation />
      <div className='px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-26'>
        <header className='mx-auto max-w-2xl text-center content'>
          <h1 className='font-bold text-zinc-100 font-londrina pb-2 md:pb-3'>
            {' '}
            {thereAreFourPosts ? 'Blog Posts' : 'Articles'}
          </h1>
          <small className='text-zinc-400 md:text-lg leading-relaxed text-sm'>
            Some of my thoughts on software engineering, web development, and
            life.
          </small>
        </header>

        {thereAreFourPosts && (
          <>
            <div className='mx-auto lg:mx-0 w-full'>
              <h2 className='text-3xl font-bold tracking-wide text-zinc-500 sm:text-4xl pb-5 font-londrina'>
                Top Articles
              </h2>
              <div className='w-full h-px bg-zinc-700' />
            </div>

            <div className='grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2'>
              <Link
                href={`/${featured.slug}`}
                className='bg-gradient-to-br opacity-100  via-zinc-100/10 overflow-hidden relative border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600'
              >
                <Image
                  style={{
                    width: '100%',
                    aspectRatio: '15 / 5',
                    objectFit: 'cover'
                  }}
                  className='squiggle'
                  src={featured.hero}
                  alt={featured.title}
                  width='360'
                  height='192'
                />
                <article className='relative w-full h-full p-4 md:p-8'>
                  <div className='flex items-center justify-between gap-2'>
                    <div className='text-xs text-zinc-100'>
                      {featured.date ? (
                        <time dateTime={new Date(featured.date).toISOString()}>
                          {Intl.DateTimeFormat(undefined, {
                            dateStyle: 'medium'
                          }).format(new Date(featured.date))}
                        </time>
                      ) : (
                        <span>SOON</span>
                      )}
                    </div>
                    <span className='flex items-center gap-1 text-xs text-zinc-500'>
                      <Eye className='w-4 h-4' />{' '}
                      {Intl.NumberFormat('en-US', {
                        notation: 'compact'
                      }).format(views[featured.slug] ?? 0)}
                    </span>
                  </div>

                  <h2
                    id='featured-post'
                    className='mt-4 text-3xl sm:text-4xl font-bold text-zinc-100 group-hover:text-white  font-londrina'
                  >
                    {featured.title}
                  </h2>
                  <p className='mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300'>
                    {featured.description}
                  </p>
                  <div className='absolute bottom-52'>
                    <p className='hidden text-zinc-200 hover:text-zinc-50 lg:block'>
                      Just {featured.readTime} min read{' '}
                      <span aria-hidden='true'>&rarr;</span>
                    </p>
                  </div>
                </article>
              </Link>

              <div className='flex flex-col w-full gap-9 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 '>
                {[top2, top3].map((post, index) => (
                  <Article
                    key={post?.slug || index}
                    post={post}
                    views={views[post?.slug] ?? 0}
                    isTopArticle
                  />
                ))}
              </div>
            </div>
            <div className='mx-auto lg:mx-0 w-full'>
              <h2 className='text-3xl font-bold tracking-wide text-zinc-500 sm:text-4xl pb-5 font-londrina'>
                Latest Articles
              </h2>
              <div className='w-full h-px bg-zinc-700' />
            </div>
          </>
        )}

        <div className='grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3'>
          <div className='grid grid-cols-1 gap-4'>
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((post, index) => (
                <Article
                  key={post?.slug || index}
                  post={post}
                  views={views[post?.slug] ?? 0}
                />
              ))}
          </div>
          <div className='grid grid-cols-1 gap-4'>
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((post, index) => (
                <Article
                  key={post?.slug || index}
                  post={post}
                  views={views[post?.slug] ?? 0}
                />
              ))}
          </div>
          <div className='grid grid-cols-1 gap-4'>
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((post, index) => (
                <Article
                  key={post?.slug || index}
                  post={post}
                  views={views[post?.slug] ?? 0}
                />
              ))}
          </div>
        </div>
        <ArticlesByTags />
      </div>
    </div>
  )
}
