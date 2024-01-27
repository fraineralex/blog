import { allPosts } from 'contentlayer/generated'
//import allPosts from '@/util/monks'

export default function Page () {
  const postsJSON = JSON.stringify(allPosts, null, 2)

  return (
    <section className='text-zinc-100 px-2'>
      <pre>{postsJSON}</pre>
    </section>
  )
}
