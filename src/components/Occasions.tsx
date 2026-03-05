import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Cake, Heart, Waves, GraduationCap, Briefcase, Wine, type LucideIcon } from 'lucide-react'
import { SEO } from '@/components/SEO'

const occasions: { icon: LucideIcon; title: string; description: string; slug: string }[] = [
  {
    icon: Cake,
    title: 'Birthday Parties',
    description: 'Make your birthday unforgettable with a full party bus experience your crew will talk about for years.',
    slug: 'birthday-parties',
  },
  {
    icon: Heart,
    title: 'Bachelorette/Bachelor',
    description: 'The best pre-wedding night out on the Cape — dance, drink, and celebrate in style.',
    slug: 'bachelorette-bachelor-parties',
  },
  {
    icon: Waves,
    title: 'Beach Bar Crawls',
    description: 'Hit every hot spot on Cape Cod without worrying about a designated driver.',
    slug: 'beach-bar-crawls',
  },
  {
    icon: GraduationCap,
    title: 'Prom & Homecoming',
    description: 'Arrive in style, leave in legend. Make it the night everyone remembers.',
    slug: 'prom-homecoming',
  },
  {
    icon: Briefcase,
    title: 'Corporate Events',
    description: 'Team nights done right — we handle transportation so your crew can focus on the fun.',
    slug: 'corporate-events',
  },
  {
    icon: Wine,
    title: 'Winery Tours',
    description: 'Sip your way through Cape Cod\'s finest wineries in total comfort and luxury.',
    slug: 'winery-tours',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
} as const

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function Occasions() {
  return (
    <>
      <SEO
        title="Party Bus Services Cape Cod | Birthdays, Bachelorettes & More"
        description="Party bus rentals for every occasion on Cape Cod. Birthdays, bachelorette parties, prom, winery tours, beach bar crawls & corporate events. Book your ride today!"
        canonical="/services"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Party Bus Cape Cod Services',
          description: 'Party bus rental services for every occasion on Cape Cod.',
          itemListElement: occasions.map((o, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: o.title,
            description: o.description,
          })),
        }}
      />
    <section
      id="services"
      className="py-20 md:py-28"
      style={{ background: '#12121F' }}
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
            style={{ color: '#FF2D78', fontFamily: 'DM Sans, sans-serif' }}
          >
            We Go Anywhere
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl text-white leading-tight"
            style={{
              fontFamily: 'Bebas Neue, sans-serif',
              letterSpacing: '0.02em',
            }}
          >
            Party Bus Services on Cape Cod
          </h1>
          <p
            className="mt-4 text-lg text-white/60 max-w-2xl mx-auto"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Whatever you're celebrating, we've got the perfect ride to make it legendary.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {occasions.map((occasion) => (
            <motion.div
              key={occasion.title}
              variants={cardVariants}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="gradient-border p-6 group"
              style={{
                background: 'rgba(18,18,31,0.9)',
                border: '1px solid rgba(255,45,120,0.15)',
                borderRadius: '1rem',
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(255,45,120,0.1)', border: '1px solid rgba(255,45,120,0.2)' }}
                aria-hidden="true"
              >
                <occasion.icon size={26} style={{ color: '#FF2D78' }} />
              </div>
              <h3
                className="text-xl font-bold text-white mb-2"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {occasion.title}
              </h3>
              <p
                className="text-white/60 text-sm leading-relaxed mb-4"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {occasion.description}
              </p>
              <Link
                to={`/services/${occasion.slug}`}
                aria-label={`Learn more about ${occasion.title}`}
                className="text-sm font-semibold no-underline transition-all duration-200"
                style={{
                  color: '#FF2D78',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </section>
    </>
  )
}
