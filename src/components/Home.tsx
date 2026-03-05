import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ShieldCheck,
  Music,
  Users,
  Cake,
  Heart,
  Waves,
  GraduationCap,
  Briefcase,
  Wine,
  Check,
  ArrowRight,
  Bus,
  Sparkles,
} from 'lucide-react'
import { Hero } from '@/components/Hero'
import { Reviews } from '@/components/Reviews'
import { SEO } from '@/components/SEO'
import { BOOKING_URL } from '@/lib/utils'

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Party Bus Cape Cod',
  description: "Cape Cod's premier party bus rental company. Licensed and insured, serving birthdays, bachelorette parties, prom, corporate events, and more.",
  url: 'https://partybuscapecod.com',
  telephone: '+15082411800',
  email: 'partybuscapecod@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyannis',
    addressRegion: 'MA',
    addressCountry: 'US',
  },
  areaServed: 'Cape Cod, MA',
  priceRange: '$200–$250/hr',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '08:00',
    closes: '23:59',
  },
  sameAs: [
    'https://www.instagram.com/partybuscapecod',
    'https://www.tiktok.com/@partybuscapecod',
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    ratingCount: '5',
    reviewCount: '5',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Riley Bent' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody: 'Great experience overall! Busses are a great setup for a larger group. Will totally rent again from party bus cape cod!',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Jack Avellar' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody: 'Had an awesome time with Party Bus Cape Cod! The bus was clean, the music setup was great, and our driver was chill and professional. Easy booking, no stress, and a really fun night overall.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Lexi Hoffman' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody: 'Best party bus service on Cape!! The buses are clean and the drivers are epic. Totally recommend.',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Mikey Gray' },
      reviewRating: { '@type': 'Rating', ratingValue: '5' },
      reviewBody: 'What a great experience from the top all the way down! Great service and a unforgettable experience. I would highly recommend, you will have the time of your lives definitely will be booking again!!',
    },
  ],
}

// ─── Why Choose Us ────────────────────────────────────────────────────────────

const features = [
  {
    Icon: ShieldCheck,
    title: 'Licensed & Insured',
    description:
      'Every ride is operated by a licensed, insured professional driver so your group stays safe all night long.',
    color: '#00E5FF',
  },
  {
    Icon: Music,
    title: 'Premium Experience',
    description:
      'Upgraded sound systems, LED lighting, leather seating, and climate control — built for a real party.',
    color: '#FF2D78',
  },
  {
    Icon: Users,
    title: 'Groups of Any Size',
    description:
      'Two buses seating 15 or 22 passengers mean we can handle intimate birthdays or large group outings.',
    color: '#FFE03D',
  },
]

function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28" style={{ background: '#12121F' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            The Cape Cod Difference
          </p>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl text-white leading-tight"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
          >
            Why Ride With Us
          </h2>
          <p
            className="mt-4 text-lg text-white/60 max-w-2xl mx-auto"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            We've been delivering unforgettable nights on Cape Cod for years. Here's what sets us apart.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, i) => {
            const Icon = feat.Icon
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="rounded-2xl p-8 text-center"
                style={{
                  background: 'rgba(10,10,20,0.7)',
                  border: `1px solid ${feat.color}25`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: `${feat.color}15`, border: `1px solid ${feat.color}30` }}
                  aria-hidden="true"
                >
                  <Icon size={28} style={{ color: feat.color }} />
                </div>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {feat.title}
                </h3>
                <p
                  className="text-white/60 text-sm leading-relaxed"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {feat.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Services Teaser ──────────────────────────────────────────────────────────

const occasions = [
  { Icon: Cake, label: 'Birthday Parties', slug: 'birthday-parties' },
  { Icon: Heart, label: 'Bachelorette/Bachelor', slug: 'bachelorette-bachelor-parties' },
  { Icon: Waves, label: 'Beach Bar Crawls', slug: 'beach-bar-crawls' },
  { Icon: GraduationCap, label: 'Prom & Homecoming', slug: 'prom-homecoming' },
  { Icon: Briefcase, label: 'Corporate Events', slug: 'corporate-events' },
  { Icon: Wine, label: 'Winery Tours', slug: 'winery-tours' },
]

function ServiceTeaser() {
  return (
    <section className="py-20 md:py-28" style={{ background: '#0A0A14' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: '#00E5FF', fontFamily: 'DM Sans, sans-serif' }}
          >
            Every Occasion
          </p>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl text-white leading-tight"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
          >
            We Go Where the Party Goes
          </h2>
          <p
            className="mt-4 text-lg text-white/60 max-w-xl mx-auto"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            From beach bar crawls to prom night, there's no better way to travel with your crew.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07 } } }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10"
        >
          {occasions.map(({ Icon, label, slug }, i) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
              }}
            >
              <Link
                to={`/services/${slug}`}
                className="flex items-center gap-3 rounded-xl px-5 py-4 no-underline transition-all duration-200 hover:scale-[1.03]"
                style={{
                  background: 'rgba(18,18,31,0.9)',
                  border: '1px solid rgba(255,45,120,0.12)',
                }}
                aria-label={`Learn more about ${label}`}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(255,45,120,0.1)' }}
                  aria-hidden="true"
                >
                  <Icon size={18} style={{ color: i % 2 === 0 ? '#FF2D78' : '#00E5FF' }} />
                </div>
                <span
                  className="text-white/80 text-sm font-medium min-w-0 break-words"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {label}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold no-underline transition-all duration-200 hover:gap-3"
            style={{ color: '#FF2D78', fontFamily: 'DM Sans, sans-serif' }}
            aria-label="View all services"
          >
            View All Services <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Fleet Preview ────────────────────────────────────────────────────────────

const buses = [
  {
    name: 'The Shoreline Cruiser',
    seats: 15,
    price: '$200',
    color: '#00E5FF',
    Icon: Bus,
    highlights: ['Premium sound system', 'LED lighting', 'Climate control', 'Leather seating'],
  },
  {
    name: 'The Cape Classic',
    seats: 22,
    price: '$250',
    color: '#FF2D78',
    Icon: Sparkles,
    highlights: ['Everything in Cruiser', 'Dance floor space', 'Extra bar area', 'Upgraded sound'],
  },
]

function FleetPreview() {
  return (
    <section className="py-20 md:py-28" style={{ background: '#12121F' }}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: '#FFE03D', fontFamily: 'DM Sans, sans-serif' }}
          >
            Our Fleet
          </p>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl text-white leading-tight"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
          >
            Two Buses. Endless Fun.
          </h2>
          <p
            className="mt-4 text-lg text-white/60 max-w-xl mx-auto"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Choose the ride that fits your crew — both packed with premium features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {buses.map((bus, i) => {
            const Icon = bus.Icon
            return (
              <motion.div
                key={bus.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="relative rounded-2xl p-7"
                style={{
                  background: 'rgba(10,10,20,0.8)',
                  border: `1px solid ${bus.color}30`,
                }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${bus.color}15`, border: `1px solid ${bus.color}25` }}
                    aria-hidden="true"
                  >
                    <Icon size={24} style={{ color: bus.color }} />
                  </div>
                  <div>
                    <h3
                      className="text-lg font-bold text-white"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {bus.name}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: bus.color, fontFamily: 'DM Sans, sans-serif' }}
                    >
                      {bus.seats} passengers
                    </p>
                  </div>
                  <div className="ml-auto text-right">
                    <span
                      className="text-3xl font-bold"
                      style={{
                        fontFamily: 'Bebas Neue, sans-serif',
                        color: bus.color,
                        textShadow: `0 0 15px ${bus.color}50`,
                      }}
                    >
                      {bus.price}
                    </span>
                    <span
                      className="text-white/40 text-sm ml-1"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      /hr
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {bus.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-white/70 text-sm"
                      style={{ fontFamily: 'DM Sans, sans-serif' }}
                    >
                      <Check size={14} style={{ color: bus.color, flexShrink: 0 }} aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center"
        >
          <Link
            to="/rates"
            className="inline-flex items-center gap-2 text-sm font-semibold no-underline transition-all duration-200 hover:gap-3"
            style={{ color: '#00E5FF', fontFamily: 'DM Sans, sans-serif' }}
            aria-label="See pricing and rates"
          >
            See Pricing <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Bottom CTA ───────────────────────────────────────────────────────────────

function HomeCTA() {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0A0A14 0%, #1A0814 50%, #0A0A14 100%)' }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,45,120,0.1) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl text-white leading-tight mb-4"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
          >
            Ready to Book Your Ride?
          </h2>
          <p
            className="text-lg text-white/60 mb-10 max-w-xl mx-auto"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Fill out our quick booking form and we'll be in touch within 24 hours to confirm your reservation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book your party bus now"
              className="px-10 py-4 rounded-full text-base font-bold text-white no-underline transition-all duration-200 hover:scale-105"
              style={{
                background: '#FF2D78',
                boxShadow: '0 0 30px rgba(255,45,120,0.5)',
                fontFamily: 'DM Sans, sans-serif',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 50px rgba(255,45,120,0.8)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(255,45,120,0.5)' }}
            >
              Book Now
            </a>
            <Link
              to="/rates"
              className="px-10 py-4 rounded-full text-base font-bold no-underline transition-all duration-200 hover:scale-105"
              style={{
                color: '#00E5FF',
                border: '2px solid #00E5FF',
                fontFamily: 'DM Sans, sans-serif',
              }}
              aria-label="View pricing and rates"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(0,229,255,0.08)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = 'transparent'
              }}
            >
              View Rates
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// ─── Home Page ────────────────────────────────────────────────────────────────

export function Home() {
  return (
    <>
      <SEO
        title="Party Bus Rentals Cape Cod | Book Your Party Bus Today"
        description="Cape Cod's premier party bus rental service. Licensed & insured, 15 & 22-passenger buses for birthdays, bachelorettes, prom & more. Starting at $200/hr. Call (508)-241-1800."
        canonical="/"
        schema={localBusinessSchema}
      />
      <Hero />
      <WhyChooseUs />
      <Reviews />
      <ServiceTeaser />
      <FleetPreview />
      <HomeCTA />
    </>
  )
}
