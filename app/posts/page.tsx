import Navbar from '../components/navbar'
import Footer from '../components/footer/footer'
import HomeHeader from '../components/home-header'
import ArticleCard from '../components/article-card'

export default function Home () {
  const title = 'All Articles'
  const subtitle = 'A collection of 9 articles of software development'

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
          <HomeHeader title={title} subtitle={subtitle} />
          <section
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8'
            data-test='articles-section'
          >
            {/* <div className='col-span-1'>
              <ArticleCard post={examplePost} />
            </div>
            <div className='col-span-1'>
              <ArticleCard post={examplePost} />
            </div>
            <div className='col-span-1'>
              <ArticleCard post={examplePost} />
            </div> */}
          </section>
        </article>
      </main>

      <section className='flex space-x-8 justify-center text-xl pt-8 font-bold'></section>
      <Footer />
    </>
  )
}
