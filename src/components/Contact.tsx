import { motion } from 'framer-motion'
import { Phone, Mail, ClipboardList } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { BOOKING_URL, PHONE, PHONE_HREF, EMAIL } from '@/lib/utils'

const contactMethods = [
  {
    icon: Phone,
    label: 'Call / Text',
    value: PHONE,
    href: PHONE_HREF,
    cta: 'Call Now',
    color: '#00E5FF',
    description: 'Available 7 days a week',
  },
  {
    icon: Mail,
    label: 'Email',
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    cta: 'Send Email',
    color: '#FFE03D',
    description: 'We reply within 24 hours',
  },
  {
    icon: ClipboardList,
    label: 'Online Booking',
    value: 'Fill out our quick booking form',
    href: BOOKING_URL,
    cta: 'Book Online',
    color: '#FF2D78',
    description: 'Fast, easy, secure',
    external: true,
  },
]

export function Contact() {
  return (
    <>
      <SEO
        title="Book a Party Bus on Cape Cod | Contact & Reservations"
        description="Book your Cape Cod party bus today. Call (508)-241-1800, email partybuscapecod@gmail.com, or fill out our online form. 15 & 22-seat buses from $200/hr. We respond within 24 hours."
        canonical="/contact"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Party Bus Cape Cod',
          telephone: '+15082411800',
          email: 'partybuscapecod@gmail.com',
          url: 'https://partybuscapecod.com',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+15082411800',
            contactType: 'reservations',
            email: 'partybuscapecod@gmail.com',
            availableLanguage: 'English',
          },
        }}
      />
    <section
      id="contact"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0A0A14 0%, #1A0A14 50%, #0A0A14 100%)',
      }}
    >
      {/* Background glows */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,45,120,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }}
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: '#FF2D78', fontFamily: 'DM Sans, sans-serif' }}
          >
            Get In Touch
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl text-white leading-tight"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
          >
            Contact Party Bus Cape Cod
          </h1>
          <p
            className="mt-4 text-lg text-white/60 max-w-xl mx-auto"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Three easy ways to book your perfect Cape Cod party bus experience.
          </p>
        </motion.div>

        {/* Contact Method Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method, i) => {
            const Icon = method.icon
            return (
              <motion.div
                key={method.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, type: 'spring', stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.03, y: -4 }}
                className="rounded-2xl p-8 text-center"
                style={{
                  background: 'rgba(18,18,31,0.9)',
                  border: `1px solid ${method.color}25`,
                  boxShadow: `0 0 20px ${method.color}10`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: `${method.color}15`, border: `1px solid ${method.color}30` }}
                  aria-hidden="true"
                >
                  <Icon size={28} style={{ color: method.color }} />
                </div>
                <p
                  className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {method.label}
                </p>
                <p
                  className="text-white font-semibold text-base mb-1 leading-tight"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {method.value}
                </p>
                <p
                  className="text-white/40 text-xs mb-6"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {method.description}
                </p>
                <a
                  href={method.href}
                  target={method.external ? '_blank' : undefined}
                  rel={method.external ? 'noopener noreferrer' : undefined}
                  aria-label={`${method.cta} - ${method.label}`}
                  className="inline-block w-full py-3 rounded-xl text-sm font-bold no-underline transition-all duration-200 hover:scale-105"
                  style={{
                    background: method.color === '#FF2D78' ? '#FF2D78' : 'transparent',
                    border: method.color !== '#FF2D78' ? `2px solid ${method.color}` : 'none',
                    color: method.color !== '#FF2D78' ? method.color : '#fff',
                    boxShadow: `0 0 15px ${method.color}30`,
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 25px ${method.color}60` }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 0 15px ${method.color}30` }}
                >
                  {method.cta}
                </a>
              </motion.div>
            )
          })}
        </div>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book your party bus now - fill out our booking form"
            className="inline-block px-12 py-5 rounded-full text-xl font-bold text-white no-underline transition-all duration-200 hover:scale-105 mb-4"
            style={{
              background: 'linear-gradient(135deg, #FF2D78, #C4186A)',
              boxShadow: '0 0 40px rgba(255,45,120,0.6), 0 0 80px rgba(255,45,120,0.3)',
              fontFamily: 'DM Sans, sans-serif',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 60px rgba(255,45,120,0.9), 0 0 100px rgba(255,45,120,0.5)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(255,45,120,0.6), 0 0 80px rgba(255,45,120,0.3)' }}
          >
            Book Your Party Bus Now
          </a>

          <div className="flex items-center justify-center gap-4 mt-4">
            <a
              href={PHONE_HREF}
              aria-label={`Call Party Bus Cape Cod at ${PHONE}`}
              className="inline-block px-8 py-3 rounded-full text-base font-bold no-underline transition-all duration-200 pulse-glow hover:scale-105"
              style={{
                color: '#00E5FF',
                border: '2px solid #00E5FF',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              Call Now
            </a>
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-white/40 text-sm italic"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Your shoreline shuttle to unforgettable nights.
          </motion.p>
        </motion.div>
      </div>
    </section>
    </>
  )
}
