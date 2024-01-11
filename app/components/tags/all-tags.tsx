import Link from 'next/link'
import { ReactIcon } from '../common/svg-icons'
import Image from 'next/image'

export function AllTags () {
  return (
    <section className='mx-auto lg:mx-0 w-full'>
      <h2 className='text-3xl font-bold tracking-wide text-zinc-500 sm:text-4xl pb-5 font-londrina'>
        Articles by theme
      </h2>
      <div className='w-full h-px bg-zinc-700' />
      <article className='mt-10 flex flex-rows flex-wrap gap-5'>
        <Link
          href='/tags/react'
          className='border-2 border-zinc-400 group hover:border-zinc-100 items-center rounded-full flex h-14 text-xl px-6 relative transition-all'
        >
          <ReactIcon className='h-7 w-7 text-[#149ECA] opacity-90 group-hover:opacity-100 block align-middle max-w-full' />{' '}
          <span className='font-semibold text-xl text-zinc-400 pl-3 group-hover:text-zinc-100'>
            React
          </span>
        </Link>
        <Link
          href='/tags/javascript'
          className='border-2 border-zinc-400 group hover:border-zinc-100 items-center rounded-full flex h-14 text-xl px-6 relative transition-all'
        >
          <Image
            src='/images/tags/javascript.png'
            className='h-7 w-7 opacity-90 group-hover:opacity-100 block align-middle max-w-full object-contain'
            alt='Javascript Logo'
            width={28}
            height={28}
          />{' '}
          <span className='font-semibold text-xl text-zinc-400 pl-3 group-hover:text-zinc-100'>
            JavaScript
          </span>
        </Link>
        <Link
          href='/tags/css'
          className='border-2 border-zinc-400 group hover:border-zinc-100 items-center rounded-full flex h-14 text-xl px-6 relative transition-all'
        >
          <Image
            src='/images/tags/css.png'
            className='h-7 w-7 opacity-90 group-hover:opacity-100 block align-middle max-w-full object-contain'
            alt='CSS Logo'
            width={28}
            height={28}
          />{' '}
          <span className='font-semibold text-xl text-zinc-400 pl-3 group-hover:text-zinc-100'>
            CSS
          </span>
        </Link>
        <Link
          href='/tags/node'
          className='border-2 border-zinc-400 group hover:border-zinc-100 items-center rounded-full flex h-14 text-xl px-6 relative transition-all'
        >
          <Image
            src='/images/tags/node.png'
            className='h-7 w-7 opacity-90 group-hover:opacity-100 block align-middle max-w-full object-contain'
            alt='Node Logo'
            width={28}
            height={28}
          />{' '}
          <span className='font-semibold text-xl text-zinc-400 pl-3 group-hover:text-zinc-100'>
            Node.js
          </span>
        </Link>
        <Link
          href='/tags/performance'
          className='border-2 border-zinc-400 group hover:border-zinc-100 items-center rounded-full flex h-14 text-xl px-6 relative transition-all'
        >
          <Image
            src='/images/tags/performance.png'
            className='h-7 w-7 opacity-90 group-hover:opacity-100 block align-middle max-w-full object-contain'
            alt='Javascript Logo'
            width={28}
            height={28}
          />{' '}
          <span className='font-semibold text-xl text-zinc-400 pl-3 group-hover:text-zinc-100'>
            Web Perf
          </span>
        </Link>
        <Link
          href='/tags/terminal'
          className='border-2 border-zinc-400 group hover:border-zinc-100 items-center rounded-full flex h-14 text-xl px-6 relative transition-all'
        >
          <Image
            src='/images/tags/terminal.png'
            className='h-7 w-7 opacity-90 group-hover:opacity-100 block align-middle max-w-full object-contain'
            alt='Terminal Logo'
            width={28}
            height={28}
          />{' '}
          <span className='font-semibold text-xl text-zinc-400 pl-3 group-hover:text-zinc-100'>
            Terminal
          </span>
        </Link>
        <Link
          href='/tags/python'
          className='border-2 border-zinc-400 group hover:border-zinc-100 items-center rounded-full flex h-14 text-xl px-6 relative transition-all'
        >
          <Image
            src='/images/tags/python.png'
            className='h-7 w-7 opacity-90 group-hover:opacity-100 block align-middle max-w-full object-contain'
            alt='Python Logo'
            width={28}
            height={28}
          />{' '}
          <span className='font-semibold text-xl text-zinc-400 pl-3 group-hover:text-zinc-100'>
            Python
          </span>
        </Link>
        <Link
          href='/tags/odoo'
          className='border-2 border-zinc-400 group hover:border-zinc-100 items-center rounded-full flex h-14 text-xl px-6 relative transition-all'
        >
          <Image
            src='/images/tags/odoo.ico'
            className='h-7 w-7 opacity-90 group-hover:opacity-100 block align-middle max-w-full object-contain'
            alt='Odoo Logo'
            width={28}
            height={28}
          />{' '}
          <span className='font-semibold text-xl text-zinc-400 pl-3 group-hover:text-zinc-100'>
            Odoo
          </span>
        </Link>
        <Link
          href='/tags/next'
          className='border-2 border-zinc-400 group hover:border-zinc-100 items-center rounded-full flex h-14 text-xl px-6 relative transition-all'
        >
          <Image
            src='/images/tags/next.ico'
            className='h-7 w-7 opacity-90 group-hover:opacity-100 block align-middle max-w-full object-contain'
            alt='Next Logo'
            width={28}
            height={28}
          />{' '}
          <span className='font-semibold text-xl text-zinc-400 pl-3 group-hover:text-zinc-100'>
            Next.js
          </span>
        </Link>
        <Link
          href='/tags/typescript'
          className='border-2 border-zinc-400 group hover:border-zinc-100 items-center rounded-full flex h-14 text-xl px-6 relative transition-all'
        >
          <Image
            src='/images/tags/typescript.png'
            className='h-7 w-7 opacity-90 group-hover:opacity-100 block align-middle max-w-full object-contain'
            alt='Next Logo'
            width={28}
            height={28}
          />{' '}
          <span className='font-semibold text-xl text-zinc-400 pl-3 group-hover:text-zinc-100'>
            TypeScript
          </span>
        </Link>
        <Link
          href='/tags/productivity'
          className='border-2 border-zinc-400 group hover:border-zinc-100 items-center rounded-full flex h-14 text-xl px-6 relative transition-all'
        >
          <Image
            src='/images/tags/productivity.png'
            className='h-7 w-7 opacity-90 group-hover:opacity-100 block align-middle max-w-full object-contain'
            alt='Productivity Logo'
            width={28}
            height={28}
          />{' '}
          <span className='font-semibold text-xl text-zinc-400 pl-3 group-hover:text-zinc-100'>
            Productivity
          </span>
        </Link>
        <Link
          href='/tags/life'
          className='border-2 border-zinc-400 group hover:border-zinc-100 items-center rounded-full flex h-14 text-xl px-6 relative transition-all'
        >
          <Image
            src='/images/tags/personal.png'
            className='h-7 w-7 opacity-90 group-hover:opacity-100 block align-middle max-w-full object-contain'
            alt='Life Logo'
            width={28}
            height={28}
          />{' '}
          <span className='font-semibold text-xl text-zinc-400 pl-3 group-hover:text-zinc-100'>
            Experience
          </span>
        </Link>
      </article>
    </section>
  )
}
