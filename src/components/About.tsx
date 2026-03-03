import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Star, Bus, MapPin, type LucideIcon } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { BOOKING_URL } from '@/lib/utils'

const stats: { value: number; label: string; Icon: LucideIcon; suffix: string; display?: string }[] = [
  { value: 500, label: 'Happy Passengers', Icon: Users, suffix: '+' },
  { value: 5, label: 'Rated Service', Icon: Star, suffix: '-Star' },
  { value: 2, label: 'Premium Buses', Icon: Bus, suffix: '' },
  { value: 1, label: 'Cape Cod Based & Local', Icon: MapPin, suffix: '', display: 'Cape Cod' },
]

function CountUp({ target, suffix, display }: { target: number; suffix: string; display?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!inView) return
    if (display) { setCount(target); return }
    let start = 0
    const duration = 1500
    const step = duration / target
    const timer = setInterval(() => {
      start += 1
      setCount(start)
      if (start >= target) clearInterval(timer)
    }, step)
    return () => clearInterval(timer)
  }, [inView, target, display])

  return (
    <span ref={ref}>
      {display ? display : count}{suffix}
    </span>
  )
}

export function About() {
  return (
    <>
      <SEO
        title="About Party Bus Cape Cod | Local Cape Cod Party Bus Company"
        description="Meet Party Bus Cape Cod — your local, licensed & insured party bus rental company. Cape Cod born and raised, serving all towns from Hyannis to Provincetown."
        canonical="/about"
      />
    <section
      id="about"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ background: '#12121F' }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,45,120,0.05) 0%, transparent 70%)', filter: 'blur(40px)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-sm font-semibold tracking-widest uppercase mb-3"
              style={{ color: '#FF2D78', fontFamily: 'DM Sans, sans-serif' }}
            >
              Our Story
            </p>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl text-white leading-tight mb-6"
              style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
            >
              About Party Bus Cape Cod
            </h1>
            <p
              className="text-lg text-white/70 leading-relaxed mb-8"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              At Party Bus Cape Cod, we strive to provide the ultimate transportation experience for your group adventures.
              Our mission is to ensure you have a fun, safe, and memorable journey, no matter the occasion.
            </p>
            <p
              className="text-base text-white/50 leading-relaxed mb-10"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Born and raised on the Cape, we know every back road, every beach bar, and every hidden gem.
              Let us be your guide to the ultimate Cape Cod night out.
            </p>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book your adventure with Party Bus Cape Cod"
              className="inline-block px-8 py-4 rounded-full text-base font-bold text-white no-underline transition-all duration-200 hover:scale-105"
              style={{
                background: '#FF2D78',
                boxShadow: '0 0 25px rgba(255,45,120,0.5)',
                fontFamily: 'DM Sans, sans-serif',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(255,45,120,0.8)' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px rgba(255,45,120,0.5)' }}
            >
              Book Your Adventure
            </a>
          </motion.div>

          {/* Stats Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-6 text-center"
                style={{
                  background: 'rgba(10,10,20,0.7)',
                  border: '1px solid rgba(255,45,120,0.15)',
                }}
              >
                <div className="mb-2 flex justify-center" aria-hidden="true">
                  <stat.Icon size={28} style={{ color: i % 2 === 0 ? '#FF2D78' : '#00E5FF' }} />
                </div>
                <div
                  className="text-3xl sm:text-4xl font-bold mb-1"
                  style={{
                    fontFamily: 'Bebas Neue, sans-serif',
                    color: i % 2 === 0 ? '#FF2D78' : '#00E5FF',
                    textShadow: `0 0 15px ${i % 2 === 0 ? 'rgba(255,45,120,0.5)' : 'rgba(0,229,255,0.5)'}`,
                  }}
                >
                  <CountUp target={stat.value} suffix={stat.suffix} display={stat.display} />
                </div>
                <p
                  className="text-white/60 text-xs leading-tight"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}

            {/* Decorative bus card */}
            <motion.div
              className="col-span-2 rounded-2xl p-6 text-center"
              style={{
                background: 'linear-gradient(135deg, rgba(255,45,120,0.1), rgba(0,229,255,0.1))',
                border: '1px solid rgba(255,45,120,0.2)',
              }}
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="mb-2 flex justify-center" aria-hidden="true">
                <MapPin size={32} style={{ color: '#00E5FF' }} />
              </div>
              <p
                className="text-white font-semibold"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Serving all of Cape Cod
              </p>
              <p
                className="text-white/40 text-sm"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                Hyannis to Provincetown & beyond
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  )
}
