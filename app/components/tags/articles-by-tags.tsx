import Link from 'next/link'
import { ReactIcon } from '../common/svg-icons'
import Image from 'next/image'
import { displayTags, allTags } from '@/util/data'

export function ArticlesByTags ({
  displayAllTags
}: {
  displayAllTags?: boolean
}) {
  const tags = displayAllTags ? allTags : displayTags
  return (
    <section className='mx-auto lg:mx-0 w-full pb-3'>
      <h2 className='text-3xl font-bold tracking-wide text-zinc-500 sm:text-4xl pb-5 font-londrina'>
        Articles by theme
      </h2>
      <div className='w-full h-px bg-zinc-700' />
      <article className='mt-10 flex flex-rows flex-wrap gap-5'>
        {tags &&
          tags.map((tag, index) => (
            <Link
              key={index}
              href={`/tags/${tag.name}`}
              className='border-2 border-zinc-400 group hover:border-zinc-100 items-center rounded-full flex h-14 text-xl px-6 relative transition-all'
            >
              {tag.name === 'react' ? (
                <ReactIcon className='h-7 w-7 text-[#149ECA] opacity-90 group-hover:opacity-100 block align-middle max-w-full' />
              ) : (
                <Image
                  src={tag.image}
                  className='h-7 w-7 opacity-90 group-hover:opacity-100 block align-middle max-w-full object-contain'
                  alt={`${tag.label} Logo`}
                  width={28}
                  height={28}
                />
              )}{' '}
              <span className='font-semibold text-xl text-zinc-400 pl-3 group-hover:text-zinc-100'>
                {tag.label}
              </span>
            </Link>
          ))}
      </article>
    </section>
  )
}
