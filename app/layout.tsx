import '../global.css'
import { Inter } from 'next/font/google'
import LocalFont from 'next/font/local'
import { Metadata } from 'next'
import { Analytics } from './components/articles/analytics'
import '../styles/main.scss'
import Footer from './components/footer/footer'

export const metadata: Metadata = {
  title: {
    default: "Frainer's Blog",
    template: "%s | Frainer's Blog"
  },
  description:
    "Frainer's Blog when he share his thoughts about software, technology, and life.",
  openGraph: {
    title: "Frainer's Blog",
    description: 'Some of my thoughts on software, technology, and life.',
    url: 'https://frainer-blog.vercel.app',
    siteName: 'fraineralex.com',
    images: [
      {
        url: 'https://frainer-blog.vercel.app/og.png',
        width: 1920,
        height: 1080
      }
    ],
    locale: 'en-US',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  twitter: {
    title: "Frainer's Blog",
    card: 'summary_large_image'
  },
  icons: {
    shortcut: '/favicon.ico'
  }
}
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const calSans = LocalFont({
  src: '../public/fonts/CalSans-SemiBold.ttf',
  variable: '--font-calsans'
})

const londrinaSolid = LocalFont({
  src: '../public/fonts/LondrinaSolid-Regular.ttf',
  variable: '--font-londrina'
})

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={[
        inter.variable,
        calSans.variable,
        londrinaSolid.variable
      ].join(' ')}
    >
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === 'development' ? 'debug-screens' : undefined
        }`}
      >
        <main className='relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 blog'>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
