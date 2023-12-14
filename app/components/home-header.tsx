interface Props {
  title: string
  subtitle?: string
}

export default function HomeHeader ({ title, subtitle }: Props) {
  return (
    <header className='mx-auto max-w-2xl text-center content'>
      <h1 className='mb-4' data-test='header-title'>
        {title}
      </h1>
      <p data-test='header-description'>{subtitle}</p>
    </header>
  )
}
