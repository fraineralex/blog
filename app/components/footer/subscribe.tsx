export default function Subscribe () {
  return (
    <aside className='text-center py-16 max-w-3xl mx-auto'>
      <div className='w-full border-t-2 mb-8 border-zinc-200 squiggle'></div>
      <h3 className='font-londrina text-4xl uppercase font-bold leading-none text-zinc-100'>
        Subscribe to the newsletter
      </h3>
      <form className='mt-8 flex flex-wrap items-center md:w-2/3 mx-auto'>
        <input
          name='email'
          className='w-full flex-1 bg-zinc-500 py-3 px-6 rounded text-white border-zinc-500'
          type='email'
          placeholder='Your email'
          required
          data-test='subscribe-input'
        />
        <button
          className='bg-hot-pink md:ml-3 mt-3 md:mt-0 w-full md:w-auto text-white py-3 px-6 rounded hover:squiggle font-semibold hover:bg-pink-600'
          type='submit'
          data-test='subscribe-submit-btn'
        >
          Subscribe
        </button>
      </form>
      <div className='w-full border-b-2 pt-12 border-zinc-200 squiggle'></div>
    </aside>
  )
}
