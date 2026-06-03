import { useState } from 'react'
import useScrolled from '../../hooks/useScrolled'

const NAV_LINKS = [
  { label: 'Programs', href: '#programs' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Pricing',  href: '#pricing'  },
  { label: 'Gallery',  href: '#gallery'  },
  { label: 'Contact',  href: '#contact'  },
]

function smoothScroll(e, href) {
  e.preventDefault()
  const target = document.querySelector(href)
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolled = useScrolled(20)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* Main bar */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-in-out
          ${scrolled
            ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-black/30 py-3'
            : 'bg-transparent py-5'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => smoothScroll(e, '#hero')}
            className="flex items-center gap-2 group"
          >
            <span className="w-8 h-8 bg-red-600 rounded-sm flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M13 2L4.5 13.5H11L10 22L19.5 10H13L13 2Z" />
              </svg>
            </span>
            <span className="text-white font-bold text-xl tracking-tight">
              APEX<span className="text-red-500">GYM</span>
            </span>
          </a>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => smoothScroll(e, link.href)}
                className="text-sm font-medium tracking-wide text-gray-300 hover:text-white relative group transition-colors duration-200"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => smoothScroll(e, '#contact')}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
            >
              Sign In
            </a>
            <a
              href="#pricing"
              onClick={(e) => smoothScroll(e, '#pricing')}
              className="bg-red-600 hover:bg-red-500 active:scale-95 text-white text-sm font-semibold tracking-wide px-5 py-2.5 rounded-sm transition-all duration-200"
            >
              Join Now
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
          >
            <span
              className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                menuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
              }`}
            />
            <span
              className={`block h-0.5 bg-white rounded-full transition-all duration-300 ${
                menuOpen ? 'w-0 opacity-0' : 'w-4'
              }`}
            />
            <span
              className={`block h-0.5 bg-white rounded-full transition-all duration-300 origin-center ${
                menuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`
          fixed top-0 right-0 h-full w-72 z-50
          bg-zinc-950 border-l border-white/10
          flex flex-col md:hidden
          transition-transform duration-300 ease-in-out
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <span className="text-white font-bold text-lg tracking-tight">
            APEX<span className="text-red-500">GYM</span>
          </span>
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-5 h-5"
            >
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex flex-col px-6 py-8 gap-1 flex-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                smoothScroll(e, link.href)
                closeMenu()
              }}
              className="text-gray-300 hover:text-white hover:bg-white/5 font-medium text-base tracking-wide px-3 py-3 rounded-md transition-all duration-200 flex items-center justify-between group"
            >
              {link.label}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="w-4 h-4 text-gray-600 group-hover:text-red-500 transition-all"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 18l6-6-6-6"
                />
              </svg>
            </a>
          ))}
        </nav>

        {/* Drawer CTA */}
        <div className="px-6 pb-8 flex flex-col gap-3">
          <a
            href="#contact"
            onClick={(e) => {
              smoothScroll(e, '#contact')
              closeMenu()
            }}
            className="w-full text-center py-3 rounded-sm border border-white/20 hover:border-white/40 text-white text-sm font-medium transition-colors duration-200"
          >
            Sign In
          </a>
          <a
            href="#pricing"
            onClick={(e) => {
              smoothScroll(e, '#pricing')
              closeMenu()
            }}
            className="w-full text-center py-3 rounded-sm bg-red-600 hover:bg-red-500 text-white text-sm font-bold tracking-wide transition-colors duration-200"
          >
            Join Now
          </a>
        </div>
      </div>
    </>
  )
}
