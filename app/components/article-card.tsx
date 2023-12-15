import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Post } from 'contentlayer/generated'

interface Props {
  post: Post
}

export default function ArticleCard ({ post }: Props) {
  return (
    <>
      <Link
        href={post.slug}
        className='transition-all duration-75 ease-in-out h-full block relative top-0 hover:-top-2 shadow-lg hover:shadow-xl bg-white rounded-xl overflow-hidden'
        data-test='article-card'
      >
        <Image
          style={{ width: '100%', aspectRatio: 15 / 7, objectFit: 'cover' }}
          className='squiggle'
          src={post.hero}
          alt={post.title}
          width='360'
          height='192'
        />
        <div className='py-6 px-8'>
          <h2 className='font-bold text-2xl leading-tight'>{post.title}</h2>
          <p className='text-xs text-gray-600 mt-4 flex items-center'>
            {post.pubDate ? (
              <time dateTime={new Date(post.pubDate).toISOString()}>
                {Intl.DateTimeFormat(undefined, { dateStyle: 'medium' }).format(
                  new Date(post.pubDate)
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
