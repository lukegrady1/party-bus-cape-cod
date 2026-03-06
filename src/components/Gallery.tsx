import { motion } from 'framer-motion'
import { ZoomIn } from 'lucide-react'
import { SEO } from '@/components/SEO'

// TODO: Replace placeholder images with client photos

const placeholders = [
  { color: 'from-pink-900/40 to-purple-900/40', caption: 'Birthday Bash' },
  { color: 'from-cyan-900/40 to-blue-900/40', caption: 'Our Fleet' },
  { color: 'from-yellow-900/40 to-orange-900/40', caption: 'Beach Bar Crawl' },
  { color: 'from-pink-900/60 to-red-900/40', caption: 'Bachelorette Party' },
  { color: 'from-purple-900/40 to-pink-900/40', caption: 'Winery Tour' },
  { color: 'from-blue-900/40 to-cyan-900/40', caption: 'Prom Night' },
  { color: 'from-yellow-900/40 to-amber-900/40', caption: 'Corporate Event' },
  { color: 'from-green-900/40 to-teal-900/40', caption: 'Night Out' },
  { color: 'from-orange-900/40 to-pink-900/40', caption: 'Sunset Cruise' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export function Gallery() {
  return (
    <>
      <SEO
        title="Party Bus Cape Cod Photos | See Our Buses & Events"
        description="See Party Bus Cape Cod in action. Photos from bachelorette parties, bar crawls, weddings, prom nights, winery tours & birthday celebrations. 15 & 22-seat premium party buses. Book your ride today."
        canonical="/gallery"
      />
    <section
      id="gallery"
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
            style={{ color: '#FFE03D', fontFamily: 'DM Sans, sans-serif' }}
          >
            The Memories
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl text-white leading-tight"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
          >
            Party Bus Photo Gallery
          </h1>
          <p
            className="mt-4 text-lg text-white/60"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Every ride becomes a memory. Here's a glimpse at the party.
          </p>
        </motion.div>

        {/* Masonry-style Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4"
        >
          {placeholders.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${i === 0 || i === 4 ? 'row-span-1' : ''}`}
              style={{
                aspectRatio: i === 0 ? '1/1.2' : i === 4 ? '1/1.3' : '1/1',
                background: `linear-gradient(135deg, rgba(18,18,31,1) 0%, rgba(10,10,20,1) 100%)`,
                border: '1px solid rgba(255,45,120,0.1)',
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
                aria-hidden="true"
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                <span
                  className="text-white/80 text-sm font-medium"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {item.caption}
                </span>
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'rgba(255,45,120,0.4)', backdropFilter: 'blur(4px)' }}
                aria-hidden="true"
              >
                <ZoomIn size={32} color="white" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-white/30 text-sm mt-6 italic"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          More photos coming soon — follow us on Instagram &amp; TikTok for live updates!
        </motion.p>
      </div>
    </section>
    </>
  )
}
