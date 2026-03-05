import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Instagram } from 'lucide-react'
import { BOOKING_URL, PHONE, PHONE_HREF, EMAIL } from '@/lib/utils'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Rates', to: '/rates' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

// TikTok icon (not in lucide)
function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.72a4.85 4.85 0 01-1.01-.03z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer
      className="py-16 relative overflow-hidden"
      style={{ background: '#050509', borderTop: '1px solid rgba(255,45,120,0.1)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* Logo + About Column */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 no-underline mb-4"
              aria-label="Party Bus Cape Cod - Go to home"
            >
              <span
                className="text-lg text-white"
                style={{ fontFamily: 'Permanent Marker, cursive', textShadow: '0 0 10px rgba(255,45,120,0.4)' }}
              >
                Party Bus Cape Cod
              </span>
            </Link>
            <p
              className="text-white/40 text-sm leading-relaxed mb-4"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Cape Cod's premier party bus experience. Safe, fun, and unforgettable rides for every occasion.
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/partybuscapecod"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Party Bus Cape Cod on Instagram"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors no-underline"
                style={{ background: 'rgba(255,45,120,0.1)', border: '1px solid rgba(255,45,120,0.2)' }}
              >
                <Instagram size={18} aria-hidden="true" />
              </a>

              <a
                href="https://www.tiktok.com/@partybuscapecod"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Party Bus Cape Cod on TikTok"
                className="w-10 h-10 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors no-underline"
                style={{ background: 'rgba(255,224,61,0.1)', border: '1px solid rgba(255,224,61,0.2)' }}
              >
                <TikTokIcon size={18} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4
              className="text-white font-semibold mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-white/50 hover:text-white text-sm no-underline transition-colors duration-200"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Quick Book Column */}
          <div>
            <h4
              className="text-white font-semibold mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Contact Info
            </h4>
            <div className="space-y-3 mb-6">
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wider mb-0.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>Phone</p>
                <a
                  href={PHONE_HREF}
                  className="text-white/70 hover:text-white text-sm no-underline transition-colors"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                  aria-label={`Call us at ${PHONE}`}
                >
                  {PHONE}
                </a>
              </div>
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wider mb-0.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>Email</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-white/70 hover:text-white text-sm no-underline transition-colors"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                  aria-label={`Email us at ${EMAIL}`}
                >
                  {EMAIL}
                </a>
              </div>
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wider mb-0.5" style={{ fontFamily: 'DM Sans, sans-serif' }}>Location</p>
                <p className="text-white/70 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>Cape Cod, MA</p>
              </div>
            </div>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Quick book - open the booking form"
              className="inline-block w-full py-3 rounded-xl text-center text-sm font-bold text-white no-underline transition-all duration-200 hover:scale-105"
              style={{
                background: '#FF2D78',
                boxShadow: '0 0 15px rgba(255,45,120,0.4)',
                fontFamily: 'DM Sans, sans-serif',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px rgba(255,45,120,0.7)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 15px rgba(255,45,120,0.4)' }}
            >
              Quick Book Now
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} className="pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p
              className="text-white/30 text-xs"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              © 2026 Party Bus Cape Cod — All Rights Reserved
            </p>
            <p
              className="text-white/20 text-xs text-center"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              All rides provided by licensed and insured operators | Designed &amp; built by <a href="https://gradydigital.com" target="_blank" rel="noopener noreferrer" className="no-underline hover:text-white transition-colors" style={{ color: '#FF2D78' }}>Grady Digital</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
