import { allPostsDev } from '@/util/monks'
import { allPosts as allPostsProd } from 'contentlayer/generated'
const allPosts: typeof allPostsProd =
  process.env.NODE_ENV === 'development' ? allPostsDev : allPostsProd

export default function Page () {
  const postsJSON = JSON.stringify(allPosts, null, 2)

  return (
    <section className='text-zinc-100 px-2'>
      <pre>{postsJSON}</pre>
    </section>
  )
}
