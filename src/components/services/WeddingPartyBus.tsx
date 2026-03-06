import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Heart, Check, ArrowRight } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { BOOKING_URL, PHONE, PHONE_HREF } from '@/lib/utils'

const benefits = [
  'Shuttle the entire wedding party between venue, ceremony, photos, and reception — no carpool chaos',
  'Keep the bridal party together and on schedule with a professional, punctual driver',
  'Premium sound, LED lighting, and room to celebrate between stops',
  'A licensed, insured ride so everyone can toast the newlyweds worry-free',
]

export function WeddingPartyBus() {
  return (
    <>
      <SEO
        title="Wedding Party Bus Cape Cod | Wedding Transportation Rental"
        description="Cape Cod wedding party bus rental. Shuttle your wedding party between ceremony, photos & reception. 15 & 22-seat premium buses. Licensed & insured. From $200/hr. Call (508)-241-1800."
        canonical="/services/wedding-party-bus"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Wedding Party Bus Rental',
          provider: { '@type': 'LocalBusiness', name: 'Party Bus Cape Cod' },
          areaServed: 'Cape Cod, MA',
          description: 'Wedding party bus rentals on Cape Cod. Premium transportation for your wedding day — ceremony, photos, and reception.',
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
              <Heart size={32} style={{ color: '#FFE03D' }} />
            </div>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl text-white leading-tight mb-6"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
            >
              Wedding Party Bus on Cape Cod
            </h1>
            <p
              className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Your wedding day deserves better than a parking lot scramble. Load up the wedding party, shuttle between your Cape Cod ceremony, photo spots, and reception venue, and keep the celebration rolling all day long. We handle the driving — you handle the "I do's."
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
              Why Couples Choose Our Wedding Bus
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
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl p-8 mb-12"
            style={{ background: 'rgba(18,18,31,0.9)', border: '1px solid rgba(255,45,120,0.15)' }}
          >
            <h2
              className="text-3xl text-white mb-6"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
            >
              Popular Cape Cod Wedding Venues We Serve
            </h2>
            <p
              className="text-white/70 text-base leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              We provide wedding transportation across all of Cape Cod. Whether your venue is in Chatham, Falmouth, Barnstable, Provincetown, Harwich, Dennis, Yarmouth, or anywhere on the Cape — we'll get your wedding party there on time and in style. We also serve Plymouth and the South Shore for couples traveling from off-Cape.
            </p>
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
              Starting at $200/hr. Most wedding groups book 4-6 hours. Contact us for a custom wedding package.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book your wedding party bus"
                className="px-10 py-4 rounded-full text-base font-bold text-white no-underline transition-all duration-200 hover:scale-105"
                style={{ background: '#FF2D78', boxShadow: '0 0 25px rgba(255,45,120,0.5)', fontFamily: 'DM Sans, sans-serif' }}
              >
                Book Your Wedding Bus
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
