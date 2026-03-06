import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Waves, Check, ArrowRight } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { BOOKING_URL, PHONE, PHONE_HREF } from '@/lib/utils'

const benefits = [
  'Hit every waterfront bar from Hyannis to Provincetown without anyone needing to drive',
  'Build a custom route — you pick the stops, we map the best path between them',
  'Bring your own cooler on board and keep the vibe going between bars',
  'No surge pricing, no waiting for rides, no splitting up the group',
]

export function BeachBarCrawls() {
  return (
    <>
      <SEO
        title="Cape Cod Bar Crawl Bus | Beach Bar Crawl Party Bus Rental"
        description="The best way to bar crawl Cape Cod by party bus. Custom routes from Hyannis to Provincetown — hit every beach bar, no driving, no stress. 15 & 22-seat buses from $200/hr. Book today."
        canonical="/services/beach-bar-crawls"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Beach Bar Crawl Party Bus',
          provider: { '@type': 'LocalBusiness', name: 'Party Bus Cape Cod' },
          areaServed: 'Cape Cod, MA',
          description: 'Beach bar crawl party bus on Cape Cod. Custom routes to every waterfront bar from Hyannis to Provincetown.',
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
              style={{ background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.2)' }}
              aria-hidden="true"
            >
              <Waves size={32} style={{ color: '#00E5FF' }} />
            </div>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl text-white leading-tight mb-6"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
            >
              Cape Cod Beach Bar Crawl by Party Bus
            </h1>
            <p
              className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Cape Cod has too many great bars to pick just one. Load up the crew, map out your route through Hyannis, Yarmouth, Dennis, Chatham, or all the way to Provincetown, and let us drive you from spot to spot while the party rolls between stops. This is how you do a Cape Cod bar crawl right.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl p-8 mb-12"
            style={{ background: 'rgba(18,18,31,0.9)', border: '1px solid rgba(0,229,255,0.15)' }}
          >
            <h2
              className="text-3xl text-white mb-6"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
            >
              Why the Bus Beats a Bar Crawl on Foot
            </h2>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  <Check size={18} style={{ color: '#00E5FF', flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
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
              Starting at $200/hr. Most bar crawl groups book 3-4 hours for the full Cape experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book your bar crawl party bus"
                className="px-10 py-4 rounded-full text-base font-bold text-white no-underline transition-all duration-200 hover:scale-105"
                style={{ background: '#FF2D78', boxShadow: '0 0 25px rgba(255,45,120,0.5)', fontFamily: 'DM Sans, sans-serif' }}
              >
                Book Your Bar Crawl
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
