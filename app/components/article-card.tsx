import Image from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'

interface Props {
  post: {
    title: string
    url: string
    frontmatter: {
      hero: string
      title: string
      pubDate: string
    }
  }
}

export default function ArticleCard ({ post }: Props) {
  return (
    <>
      <Link
        href={post.url}
        className='transition-all duration-75 ease-in-out h-full block relative top-0 hover:-top-2 shadow-lg hover:shadow-xl bg-white rounded-xl overflow-hidden'
        data-test='article-card'
      >
        <Image
          style={{ width: '100%', aspectRatio: 15 / 7, objectFit: 'cover' }}
          className='squiggle'
          src={post.frontmatter.hero}
          alt={post.frontmatter.title}
          width='360'
          height='192'
        />
        <div className='py-6 px-8'>
          <h2 className='font-bold text-2xl leading-tight'>
            {post.frontmatter.title}
          </h2>
          <p className='text-xs text-gray-600 mt-4 flex items-center'>
            {post.frontmatter.pubDate ? (
              <time dateTime={new Date(post.frontmatter.pubDate).toISOString()}>
                {Intl.DateTimeFormat(undefined, { dateStyle: 'medium' }).format(
                  new Date(post.frontmatter.pubDate)
                )}
              </time>
            ) : (
              <span>SOON</span>
            )}
          </p>
        </div>
      </Link>
    </>
  )
}
