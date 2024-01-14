import { Post } from '@/.contentlayer/generated'
import { allTags } from '@/util/data'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  blog: Post
}

export function BlogCard ({ blog }: Props) {
  return (
    <Link
      tabIndex={0}
      data-testid='blog-search-result'
      href={blog.slug}
      className='block px-2 focus:outline-none border-slate-600 hover:bg-slate-700 focus:bg-slate-600 rounded max-w-5xl mr-5'
    >
      <div className='flex flex-col items-start justify-between py-8 border-slate-700 md:flex-row md:py-5 border-b '>
        <div className='md:mr-4 w-3/4'>
          <h1 className='mb-2 break-words text-2xl font-bold leading-normal tracking-tighthn-break-words text-slate-300 font-londrina'>
            {blog.title}
          </h1>
          <div className='mb-4 flex flex-row flex-wrap items-center font-medium text-slate-400 pr-5'>
            <p className='inline-block'>{blog.description}</p>
          </div>
          <small className='mb-4 text-slate-300 flex flex-col font-bold uppercase sm:flex-row text-center'>
            <span className='mb-2 sm:mb-0'>
              {blog.updated && <span>Updated on</span>}{' '}
              <time
                dateTime={new Date(blog.updated || blog.date).toISOString()}
                className={`${
                  blog.updated ? 'underline underline-offset-4' : undefined
                }`}
              >
                {Intl.DateTimeFormat(undefined, {
                  dateStyle: 'medium'
                }).format(new Date(blog.updated || blog.date))}
              </time>{' '}
              <span className='px-4'>•</span>
              <span>{blog.readTime} min read</span>
            </span>
            <span className='hidden px-4 sm:block'>|</span>
            <div className='flex flex-wrap'>
              {blog.tags &&
                blog.tags.map((tagName, index) => {
                  const tag = allTags.find(tag => tag.name === tagName)
                  return (
                    <div key={index}>
                      <Link
                        href={`/tags/${tag?.name}`}
                        className='text-hot-pink font-bold underline underline-offset-4 py-3 px-1 hover:text-white'
                      >
                        {tag?.label}
                      </Link>
                      {index !== (blog.tags?.length ?? 0) - 1 && (
                        <span className='px-1'>•</span>
                      )}
                    </div>
                  )
                })}
            </div>
          </small>
        </div>
        <Image
          className='w-1/4 shrink-0 rounded-xlmd:w-64 h-full pr-3 rounded-md'
          alt={blog.title}
          src={blog.hero}
          height={200}
          width={300}
          decoding='async'
          data-nimg='responsive'
          style={{
            inset: '0px',
            boxSizing: 'border-box',
            padding: '0px',
            border: 'none',
            margin: 'auto',
            display: 'block',
            objectFit: 'contain'
          }}
        />
      </div>
    </Link>
  )
}
