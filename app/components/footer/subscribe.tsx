import '../content/mdx.css'

export default function Subscribe () {
  return (
    <aside className='text-center py-16 max-w-3x mx-auto subscribe'>
      <div className='w-full border-t-2 mb-8 border-zinc-200 squiggle'></div>
      <h3 className='font-londrina text-4xl uppercase font-bold leading-none text-zinc-100 mb-4'>
        Subscribe to the newsletter
      </h3>
      <iframe
        src='https://fraineralex.substack.com/embed'
        width='100%'
        height='150'
        className='bg-transparent border-0 flex mx-auto'
      ></iframe>
      <div className='w-full border-b-2 mt-8 border-zinc-200 squiggle'></div>
    </aside>
  )
}
