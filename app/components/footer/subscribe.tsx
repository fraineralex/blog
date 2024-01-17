'use client'

import { useState } from 'react'
import { NewsLetterAlert } from './newsletter-alert'

export default function Subscribe () {
  const [alert, setAlert] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email')
    /* const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: email
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const { error } = await res.json()

    if (error) {
      console.log(error)
      setAlert(true)

      return
    } */

    setAlert(true)
    // wait for 5 seconds
    setTimeout(() => {
      setAlert(false)
    }, 5000)
  }

  return (
    <aside className='text-center py-16 max-w-3x mx-auto'>
      {alert && <NewsLetterAlert setAlert={setAlert} />}
      <div className='w-full border-t-2 mb-8 border-zinc-200 squiggle'></div>
      <h3 className='font-londrina text-4xl uppercase font-bold leading-none text-zinc-100 mb-4'>
        Subscribe to the newsletter
      </h3>
      <iframe
        src='https://fraineralex.substack.com/embed'
        width='100%'
        height='150'
        className='bg-transparent border-0 flex mx-auto'
        frameBorder='0'
        scrolling='no'
      ></iframe>
      <div className='w-full border-b-2 mt-8 border-zinc-200 squiggle'></div>
    </aside>
  )
}
