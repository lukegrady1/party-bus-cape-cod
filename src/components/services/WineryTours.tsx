import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Wine, Check, ArrowRight } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { BOOKING_URL, PHONE, PHONE_HREF } from '@/lib/utils'

const benefits = [
  'Visit multiple wineries and breweries without anyone worrying about driving between stops',
  'Bring the tasting room energy onto the bus — our coolers keep your bottles chilled',
  'A custom route through Cape Cod\'s best vineyards and craft breweries',
  'Comfortable leather seating and climate control between every pour',
]

export function WineryTours() {
  return (
    <>
      <SEO
        title="Winery Tour Party Bus Cape Cod | Sip Your Way Across the Cape"
        description="Cape Cod winery tour by party bus. Visit multiple vineyards and breweries with your crew — no driving, all tasting. Premium buses from $200/hr. Book today."
        canonical="/services/winery-tours"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Winery Tour Party Bus',
          provider: { '@type': 'LocalBusiness', name: 'Party Bus Cape Cod' },
          areaServed: 'Cape Cod, MA',
          description: 'Winery and brewery tour party bus on Cape Cod. Visit multiple tasting rooms with a professional driver.',
        }}
      />
      <section className="py-20 md:py-28" style={{ background: '#0A0A14' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: 'rgba(255,224,61,0.1)', border: '1px solid rgba(255,224,61,0.2)' }}
              aria-hidden="true"
            >
              <Wine size={32} style={{ color: '#FFE03D' }} />
            </div>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl text-white leading-tight mb-6"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
            >
              Cape Cod Winery Tour by Party Bus
            </h1>
            <p
              className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Cape Cod's wine and craft beer scene keeps growing — and the best way to experience it is with your whole crew on one bus. Sip, taste, and explore without thinking twice about who's driving home.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl p-8 mb-12"
            style={{ background: 'rgba(18,18,31,0.9)', border: '1px solid rgba(255,224,61,0.15)' }}
          >
            <h2
              className="text-3xl text-white mb-6"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
            >
              Why a Bus Beats Driving Between Wineries
            </h2>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  <Check size={18} style={{ color: '#FFE03D', flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
                  <span className="text-white/70 text-base leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <p
              className="text-lg text-white/60 mb-8"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Starting at $200/hr. Most winery groups book 3-4 hours to hit 3-4 stops comfortably.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book your winery tour bus"
                className="px-10 py-4 rounded-full text-base font-bold text-white no-underline transition-all duration-200 hover:scale-105"
                style={{ background: '#FF2D78', boxShadow: '0 0 25px rgba(255,45,120,0.5)', fontFamily: 'DM Sans, sans-serif' }}
              >
                Book Your Winery Tour
              </a>
              <a
                href={PHONE_HREF}
                aria-label={`Call us at ${PHONE}`}
                className="px-10 py-4 rounded-full text-base font-bold no-underline transition-all duration-200 hover:scale-105"
                style={{ color: '#00E5FF', border: '2px solid #00E5FF', fontFamily: 'DM Sans, sans-serif' }}
              >
                Call {PHONE}
              </a>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold no-underline mt-8 transition-all duration-200 hover:gap-3"
              style={{ color: '#FF2D78', fontFamily: 'DM Sans, sans-serif' }}
              aria-label="Back to all services"
            >
              <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} aria-hidden="true" /> All Services
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
