import Navbar from './components/navbar'
import Footer from './components/footer/footer'
import HomeHeader from './components/home-header'
import ArticleCard from './components/article-card'
import { Post, allPosts } from 'contentlayer/generated'
import { Key } from 'react'

export const revalidate = 60

export default function Home () {
  const topPosts = allPosts
    .sort(
      (a: Post, b: Post) =>
        new Date(b.pubDate ?? Number.POSITIVE_INFINITY).valueOf() -
        new Date(a.pubDate ?? Number.POSITIVE_INFINITY).valueOf()
    )
    .slice(0, 3)

  const title = 'Top Articles'
  console.log(topPosts.length)

  return (
    <body className='bg-white text-black font-body leading-normal personality-casual'>
      <Navbar />
      <main className='py-12 lg:py-20'>
        <article className='max-w-6xl mx-auto px-3'>
          <HomeHeader title={title} />
          <section
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8'
            data-test='articles-section'
          >
            {topPosts.length > 0 &&
              topPosts.map((post: Post, index: Key) => (
                <div className='col-span-1' key={index}>
                  <ArticleCard post={post} />
                </div>
              ))}
          </section>
        </article>
      </main>

      <section className='flex space-x-8 justify-center text-xl pt-8 font-bold'>
        <a href='/posts' className='mr-8' data-test='see-all-link'>
          See All<span className='squiggle'>&rarr;</span>
        </a>
      </section>
      <Footer />
    </body>
  )
}
