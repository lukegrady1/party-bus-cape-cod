import { useState, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { BOOKING_URL, PHONE_HREF, PHONE } from '@/lib/utils'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Rates', to: '/rates' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const scrollY = useScrollPosition()
  const isScrolled = scrollY > 20
  const location = useLocation()

  const handleScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        backgroundColor: isScrolled ? 'rgba(10,10,20,0.85)' : 'transparent',
        borderBottom: isScrolled ? '1px solid rgba(255,45,120,0.15)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={handleScrollTop}
            className="flex items-center gap-2 no-underline"
            aria-label="Party Bus Cape Cod - Home"
          >
            <span
              className="text-lg md:text-xl font-display text-white leading-tight"
              style={{ fontFamily: 'Permanent Marker, cursive', textShadow: '0 0 10px rgba(255,45,120,0.5)' }}
            >
              Party Bus Cape Cod
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={link.to === '/' ? handleScrollTop : undefined}
                className="text-sm font-medium transition-colors duration-200 no-underline"
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  color: location.pathname === link.to ? '#FF2D78' : 'rgba(255,255,255,0.8)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="text-sm font-medium no-underline"
              style={{
                color: '#00E5FF',
                fontFamily: 'DM Sans, sans-serif',
              }}
              aria-label={`Call us at ${PHONE}`}
            >
              {PHONE}
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book your party bus now"
              className="px-5 py-2 rounded-full text-sm font-semibold text-white no-underline transition-all duration-200 hover:scale-105"
              style={{
                background: '#FF2D78',
                boxShadow: '0 0 20px rgba(255,45,120,0.5)',
                fontFamily: 'DM Sans, sans-serif',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(255,45,120,0.8), 0 0 60px rgba(255,45,120,0.4)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(255,45,120,0.5)'
              }}
            >
              Book Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden"
            style={{ backgroundColor: 'rgba(10,10,20,0.97)', borderBottom: '1px solid rgba(255,45,120,0.2)' }}
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => { setMenuOpen(false); if (link.to === '/') handleScrollTop(); }}
                  className="text-base font-medium hover:text-white no-underline py-2 border-b border-white/10 last:border-0"
                  style={{
                    fontFamily: 'DM Sans, sans-serif',
                    color: location.pathname === link.to ? '#FF2D78' : 'rgba(255,255,255,0.8)',
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-6 py-3 rounded-full text-center font-semibold text-white no-underline"
                style={{ background: '#FF2D78', boxShadow: '0 0 20px rgba(255,45,120,0.5)', fontFamily: 'DM Sans, sans-serif' }}
                aria-label="Book your party bus now"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
