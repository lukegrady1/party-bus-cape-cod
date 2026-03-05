import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SEO } from '@/components/SEO'
import { BOOKING_URL, PHONE_HREF, PHONE } from '@/lib/utils'

export function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | Party Bus Cape Cod"
        description="This page doesn't exist. Head back to the homepage or book your Cape Cod party bus today."
        canonical="/404"
      />
      <section
        className="min-h-[80vh] flex items-center justify-center py-20"
        style={{ background: '#0A0A14' }}
      >
        <div className="max-w-xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-8xl sm:text-9xl font-bold mb-4"
              style={{
                fontFamily: 'Bebas Neue, sans-serif',
                color: '#FF2D78',
                textShadow: '0 0 30px rgba(255,45,120,0.5)',
              }}
            >
              404
            </p>
            <h1
              className="text-3xl sm:text-4xl text-white mb-4"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
            >
              Wrong Stop
            </h1>
            <p
              className="text-white/60 text-base mb-10"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              This page doesn't exist, but the party is still going. Let's get you back on the bus.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="px-8 py-4 rounded-full text-base font-bold text-white no-underline transition-all duration-200 hover:scale-105"
                style={{
                  background: '#FF2D78',
                  boxShadow: '0 0 25px rgba(255,45,120,0.5)',
                  fontFamily: 'DM Sans, sans-serif',
                }}
                aria-label="Go back to the homepage"
              >
                Back to Home
              </Link>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full text-base font-bold no-underline transition-all duration-200 hover:scale-105"
                style={{
                  color: '#00E5FF',
                  border: '2px solid #00E5FF',
                  fontFamily: 'DM Sans, sans-serif',
                }}
                aria-label="Book your party bus now"
              >
                Book Now
              </a>
            </div>

            <p className="mt-8 text-white/30 text-sm" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Or call us at{' '}
              <a
                href={PHONE_HREF}
                className="no-underline"
                style={{ color: '#00E5FF' }}
                aria-label={`Call us at ${PHONE}`}
              >
                {PHONE}
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}
