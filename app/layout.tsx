import type { Metadata } from 'next'
import './styles/main.scss'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    "Frainer Encarnación's personal blog to share his development experiences and thoughts."
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='bg-white text-black font-body leading-normal personality-casual'>
        {children}
      </body>
    </html>
  )
}
