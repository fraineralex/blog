import Navbar from './components/navbar'
import Footer from './components/footer/footer'
import HomeHeader from './components/home-header'
import ArticleCard from './components/article-card'
import { Post, allPosts } from 'contentlayer/generated'
import { Key } from 'react'

export default function Home () {
  const sortedPosts = allPosts.sort(
    (a: any, b: any) =>
      new Date(b.frontmatter.pubDate).valueOf() -
      new Date(a.frontmatter.pubDate).valueOf()
  )
  const title = 'Top Articles'
  console.log(sortedPosts.length)

  const examplePost = {
    title: 'Manage your Node.js versions with NVM',
    url: '/posts/example-post',
    frontmatter: {
      hero: '/images/Golang-Basics.png',
      title: 'Manage your Node.js versions with NVM',
      pubDate: '2020-02-01'
    }
  }
  return (
    <>
      <Navbar />
      <main className='py-12 lg:py-20'>
        <article className='max-w-6xl mx-auto px-3'>
          <HomeHeader title={title} />
          <section
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8'
            data-test='articles-section'
          >
            {sortedPosts.length > 0 &&
              sortedPosts.map((post: Post, index: Key) => (
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
    </>
  )
}
