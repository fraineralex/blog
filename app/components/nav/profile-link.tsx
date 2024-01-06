import Image from 'next/image'
import Link from 'next/link'

export function ProfileLink () {
  return (
    <article className='hidden md:block pl-5'>
      <h2 className='blog-title text-lg md:text-lg text-left break-words font-heading font-semibold leading-normal md:font-bold text-zinc-400 font-calsans hover:text-zinc-100'>
        <Link
          href='/'
          className='focus-ring-base flex flex-row items-center focus-ring-colors-light-header'
          aria-label="Frainer's blog home page"
        >
          <figure className='mr-2 h-8 w-8 shrink-0 overflow-hidden rounded-full'>
            <span
              style={{
                boxSizing: 'border-box',
                display: 'inline-block',
                overflow: 'hidden',
                width: 'initial',
                height: 'initial',
                background: 'none',
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: 'relative',
                maxWidth: '100%'
              }}
            >
              <span
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  width: 'initial',
                  height: 'initial',
                  background: 'none',
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  maxWidth: '100%'
                }}
              >
                <Image
                  style={{
                    display: 'block',
                    maxWidth: '100%',
                    width: 'initial',
                    height: 'initial',
                    background: 'none',
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0
                  }}
                  alt=''
                  width={40}
                  height={40}
                  aria-hidden='true'
                  src='data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27400%27%20height=%27400%27/%3e'
                />
              </span>
              <Image
                alt="Frainer's blog home page"
                src='/images/profile.jpg'
                decoding='async'
                data-nimg='intrinsic'
                width={40}
                height={40}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  boxSizing: 'border-box',
                  padding: 0,
                  border: 'none',
                  margin: 'auto',
                  display: 'block',
                  width: 0,
                  height: 0,
                  minWidth: '100%',
                  maxWidth: '100%',
                  minHeight: '100%',
                  maxHeight: '100%'
                }}
              />
            </span>
          </figure>
          Frainer's blog
        </Link>
      </h2>
    </article>
  )
}
