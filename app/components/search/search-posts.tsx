import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { SearchResult } from './search-result'
import { Modal } from './search-modal'

export function SearchPosts ({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <button
        aria-label='Search glog'
        type='button'
        onClick={() => setOpen(!open)}
      >
        <Search
          className={`${
            className ||
            'h-6 w-6 text-slate-100 hover:text-hot-pink hover:scale-110'
          }`}
        />
      </button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div className='relative mb-2 w-full md:mb-4'>
          <input
            autoFocus
            type='text'
            className='w-full placeholder-slate-500 bg-transparent border outline-none disabled:bg-slate-50 text-white border-slate-500 focus:bg-slate-900 focus:border-hot-pink rounded-full px-6 py-3'
            placeholder='Start typing to search'
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        <div className='relative w-full'>
          {!searchTerm && (
            <div className='my-4 flex flex-row items-center justify-center text-slate-300'>
              <Search className='h-5 w-5 me-2' />
              <h2 id='radix-:rh:' className='font-normal'>
                Search articles from this blog
              </h2>
            </div>
          )}
        </div>
        {searchTerm && <SearchResult searchTerm={searchTerm} />}
      </Modal>
    </>
  )
}
