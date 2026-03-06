import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Cake, Check, ArrowRight } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { BOOKING_URL, PHONE, PHONE_HREF } from '@/lib/utils'

const benefits = [
  'Pick up your entire crew and hit the town — no splitting into separate cars or waiting on rideshares',
  'LED lighting, premium sound, and a built-in party atmosphere from the second you step on',
  'A professional driver handles the road so the birthday star (and everyone else) can celebrate freely',
  'Custom routes across Cape Cod — bar hopping, dinner stops, beach cruises, whatever you want',
]

export function BirthdayParties() {
  return (
    <>
      <SEO
        title="Birthday Party Bus Cape Cod | Party Bus Rental for Birthdays"
        description="Make your birthday legendary with a Cape Cod party bus rental. 15 & 22-passenger buses with premium sound, LED lights & professional driver. From $200/hr. Serving Hyannis, Barnstable & all Cape Cod."
        canonical="/services/birthday-parties"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Birthday Party Bus Rental',
          provider: { '@type': 'LocalBusiness', name: 'Party Bus Cape Cod' },
          areaServed: 'Cape Cod, MA',
          description: 'Birthday party bus rentals on Cape Cod. 15 & 22-passenger premium buses starting at $200/hr.',
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
              style={{ background: 'rgba(255,45,120,0.1)', border: '1px solid rgba(255,45,120,0.2)' }}
              aria-hidden="true"
            >
              <Cake size={32} style={{ color: '#FF2D78' }} />
            </div>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl text-white leading-tight mb-6"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
            >
              Birthday Party Bus on Cape Cod
            </h1>
            <p
              className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Forget the usual dinner-and-drinks routine. Load up your friends, crank the music, and turn your birthday into a mobile celebration across Cape Cod. Our buses seat 15 or 22 and come ready to party.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl p-8 mb-12"
            style={{ background: 'rgba(18,18,31,0.9)', border: '1px solid rgba(255,45,120,0.15)' }}
          >
            <h2
              className="text-3xl text-white mb-6"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
            >
              Why a Party Bus Beats Everything Else
            </h2>
            <ul className="space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                  <Check size={18} style={{ color: '#FF2D78', flexShrink: 0, marginTop: 3 }} aria-hidden="true" />
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
              Buses start at $200/hr with a 2-hour minimum. Your birthday deserves better than a group text about who's driving.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book your birthday party bus"
                className="px-10 py-4 rounded-full text-base font-bold text-white no-underline transition-all duration-200 hover:scale-105"
                style={{ background: '#FF2D78', boxShadow: '0 0 25px rgba(255,45,120,0.5)', fontFamily: 'DM Sans, sans-serif' }}
              >
                Book Your Birthday Bus
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
