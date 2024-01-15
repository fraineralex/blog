import React from 'react'
import { Navigation } from '../components/nav/nav'
import { ArticlesByTags } from '../components/tags/articles-by-tags'

export default async function TagsPage () {
  return (
    <div className='relative pb-16'>
      <Navigation />
      <div className='px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-26'>
        <header className='mx-auto max-w-2xl text-center content pb-14'>
          <h1 className='font-bold text-zinc-100 font-londrina'>Articles</h1>
          <p className='text-zinc-400 -mt-20 text-lg leading-relaxed'>
            Some of my thoughts on software engineering, web development, and
            life.
          </p>
        </header>
        <ArticlesByTags displayAllTags />
      </div>
    </div>
  )
}
