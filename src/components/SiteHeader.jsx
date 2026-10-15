import { useState } from 'react'
import { Menu, Star, X } from 'lucide-react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#work', label: 'Work' },
]

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="header-inner page-shell mx-auto max-w-6xl">
        <a className="brand" href="#top" aria-label="Portfolio home">
          <span className="brand-mark" aria-hidden="true">
            <Star size={19} fill="currentColor" strokeWidth={1.5} />
          </span>
          <span className="brand-copy">
            Jordan Colinco
            <span>IT Support · UI/UX</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact">
            Get in touch
          </a>
        </nav>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        {isMenuOpen && (
          <nav
            className="mobile-nav"
            id="mobile-navigation"
            aria-label="Mobile navigation"
          >
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={closeMenu}>
              Get in touch
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}

export default SiteHeader
