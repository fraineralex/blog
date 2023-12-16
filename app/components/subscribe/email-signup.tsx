export default function EmailSignup () {
  return (
    <aside className='text-center py-16 max-w-3xl mx-auto'>
      <div className='w-full border-t-2 mb-8 border-black squiggle'></div>
      <h3 className='font-display text-4xl uppercase font-bold leading-none'>
        Subscribe to the newsletter
      </h3>
      <form className='mt-8 flex flex-wrap items-center md:w-2/3 mx-auto'>
        <input
          name='email'
          className='w-full flex-1 bg-gray-200 py-3 px-6 rounded'
          type='email'
          placeholder='Your email'
          required
          data-test='subscribe-input'
        />
        <button
          className='bg-blue-500 md:ml-3 mt-3 md:mt-0 w-full md:w-auto text-white py-3 px-6 rounded hover:squiggle'
          type='submit'
          data-test='subscribe-submit-btn'
        >
          Subscribe
        </button>
      </form>
      <div className='w-full border-b-2 pt-12 border-black squiggle'></div>
    </aside>
  )
}
