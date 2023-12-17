import Image from 'next/image'
import { Post } from '@/.contentlayer/generated'
import EmailSignup from './subscribe/email-signup'
import { getMDXComponent } from 'next-contentlayer/hooks'

interface Props {
  post: Post
}

export default function BlogPost ({ post: { title, hero, body } }: Props) {
  const Content = getMDXComponent(body.code)

  return (
    <article className='max-w-5xl mx-auto px-3'>
      <header className='mx-auto max-w-3xl text-center content'>
        <h1>{title}</h1>
      </header>

      {hero && (
        <Image
          className='rounded-xl mx-auto'
          style={{ minWidth: '80%' }}
          loading='lazy'
          src={hero}
          alt={title}
        />
      )}

      <section className='max-w-3xl mx-auto py-6 lg:py-12 content'>
        <Content />
      </section>

      <EmailSignup />
    </article>
  )
}
