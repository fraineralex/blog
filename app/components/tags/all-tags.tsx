import Link from 'next/link'
import { ReactIcon } from '../common/svg-icons'

export function AllTags () {
  return (
    <article className='mx-auto lg:mx-0 w-full'>
      <h2 className='text-3xl font-bold tracking-wide text-zinc-500 sm:text-4xl pb-5 font-londrina'>
        Articles by theme
      </h2>
      <div className='w-full h-px bg-zinc-700' />
      <div className='mt-10'>
        <Link
          href='/tags/react'
          className='border-2 border-zinc-400 rounded-full xl p-5 place-content-center align-middle group hover:border-zinc-100'
        >
          <ReactIcon className='pl-1 h-8 w-8 text-[#149ECA] opacity-90 group-hover:opacity-100 inline' />{' '}
          <span className='font-semibold text-xl text-zinc-400 ml-2 pr-1 group-hover:text-zinc-100'>
            React
          </span>
        </Link>
      </div>
    </article>
  )
}
