import { motion } from 'framer-motion'
import { Check, Bus, Sparkles } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { BOOKING_URL } from '@/lib/utils'

const buses = [
  {
    name: 'The Shoreline Cruiser',
    seats: 15,
    price: '$200',
    badge: null,
    color: '#00E5FF',
    features: [
      'Premium sound system',
      'LED accent lighting',
      'Climate control',
      'Leather seating',
      'Bluetooth connectivity',
      'Onboard cooler',
    ],
    cta: 'Book the Cruiser',
    Icon: Bus,
  },
  {
    name: 'The Cape Classic',
    seats: 22,
    price: '$250',
    badge: 'POPULAR',
    color: '#FF2D78',
    features: [
      'Everything in Cruiser',
      'Dance floor space',
      'Extra bar area',
      'Upgraded sound system',
      'Party lighting package',
      'More room to celebrate',
    ],
    cta: 'Book the Classic',
    Icon: Sparkles,
  },
]

export function Fleet() {
  return (
    <>
      <SEO
        title="Party Bus Fleet Cape Cod | 15 & 22-Passenger Buses"
        description="Choose from our 15-seat Shoreline Cruiser ($200/hr) or 22-seat Cape Classic ($250/hr). Premium sound, LED lighting, leather seating & more. Book online today."
        canonical="/fleet"
      />
    <section
      id="fleet"
      className="py-20 md:py-28"
      style={{ background: '#0A0A14' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            style={{ color: '#00E5FF', fontFamily: 'DM Sans, sans-serif' }}
          >
            Our Fleet
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl text-white leading-tight"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
          >
            Our Cape Cod Party Bus Fleet
          </h1>
          <p
            className="mt-4 text-lg text-white/60 max-w-xl mx-auto"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Two premium buses built for the ultimate Cape Cod experience.
          </p>
        </motion.div>

        {/* Bus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {buses.map((bus, i) => (
            <motion.div
              key={bus.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, type: 'spring', stiffness: 300, damping: 20 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="relative rounded-2xl overflow-hidden"
            >
              {/* Glowing border */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${bus.color}30, transparent 60%, ${bus.color}20)`,
                  border: `1px solid ${bus.color}40`,
                }}
                aria-hidden="true"
              />

              <div
                className="relative p-8"
                style={{ background: 'rgba(18,18,31,0.95)', borderRadius: '1rem', border: `1px solid ${bus.color}30` }}
              >
                {/* Badge */}
                {bus.badge && (
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold text-dark"
                    style={{ background: bus.color, fontFamily: 'DM Sans, sans-serif', color: '#0A0A14' }}
                    aria-label="Most popular option"
                  >
                    {bus.badge}
                  </div>
                )}

                {/* Bus icon */}
                <div className="mb-4" aria-hidden="true">
                  <bus.Icon size={40} style={{ color: bus.color }} />
                </div>

                {/* Name */}
                <h3
                  className="text-2xl font-bold text-white mb-1"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {bus.name}
                </h3>
                <p
                  className="text-sm mb-4"
                  style={{ color: bus.color, fontFamily: 'DM Sans, sans-serif' }}
                >
                  {bus.seats} Passengers
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-6">
                  <span
                    className="text-5xl font-bold"
                    style={{
                      fontFamily: 'Bebas Neue, sans-serif',
                      color: bus.color,
                      textShadow: `0 0 20px ${bus.color}60`,
                    }}
                  >
                    {bus.price}
                  </span>
                  <span
                    className="text-white/50 text-lg"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    /hr
                  </span>
                  <span
                    className="text-white/40 text-sm ml-1"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    starting at
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {bus.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-white/80 text-sm"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      <Check size={16} style={{ color: bus.color, flexShrink: 0 }} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Book ${bus.name}`}
                  className="block w-full py-4 rounded-xl text-center font-bold text-white no-underline transition-all duration-200 hover:scale-105"
                  style={{
                    background: bus.color === '#FF2D78'
                      ? '#FF2D78'
                      : 'transparent',
                    border: bus.color === '#00E5FF' ? `2px solid ${bus.color}` : 'none',
                    color: bus.color === '#00E5FF' ? bus.color : '#fff',
                    boxShadow: `0 0 20px ${bus.color}40`,
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${bus.color}80`
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${bus.color}40`
                  }}
                >
                  {bus.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
