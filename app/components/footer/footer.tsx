import SocialMedia from './social-media'
import Squiggle from './squiggle'

export default function Footer () {
  return (
    <>
      <footer className='py-6 lg:py-12 text-center'>
        <div className='text-sm' data-test='footer-text'>
          &copy; <span>{new Date().getFullYear().toString()}</span> Frainer
          Encarnción
        </div>
        <SocialMedia />
      </footer>

      <Squiggle />

      {/* Prism JS */}
      {/* <script src='https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/prism.min.js'></script>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/toolbar/prism-toolbar.min.js'></script>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js'></script>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/plugins/autoloader/prism-autoloader.min.js'></script> */}
    </>
  )
}
