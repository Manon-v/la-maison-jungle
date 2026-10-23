import footerDesktop from '../assets/footer-desktop.svg'
import footerMobile from '../assets/footer-mobile.svg'

export default function Footer() {
  return (
    <footer className="footer">
      <picture>
        <source
          media="(max-width: 768px)"
          srcSet={footerMobile}
        />
        <img
          src={footerDesktop}
          alt="Kasa — © 2020 Kasa. All rights reserved"
        />
      </picture>
    </footer>
  )
}