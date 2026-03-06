import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, Star, Bus, PartyPopper } from 'lucide-react'
import { BOOKING_URL, PHONE, PHONE_HREF } from '@/lib/utils'

// Confetti particle
interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  speedX: number
  speedY: number
  opacity: number
  shape: 'circle' | 'rect' | 'star'
}

const COLORS = ['#FF2D78', '#00E5FF', '#FFE03D', '#FF9F1C', '#A855F7']
const PARTICLE_COUNT = 60

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function ConfettiCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      x: randomBetween(0, window.innerWidth),
      y: randomBetween(-200, window.innerHeight),
      size: randomBetween(4, 10),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      speedX: randomBetween(-0.5, 0.5),
      speedY: randomBetween(0.3, 1.2),
      opacity: randomBetween(0.4, 0.9),
      shape: (['circle', 'rect', 'star'] as const)[Math.floor(Math.random() * 3)],
    }))

    function drawStar(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
      ctx.beginPath()
      for (let i = 0; i < 5; i++) {
        const a = (i * 4 * Math.PI) / 5 - Math.PI / 2
        ctx.lineTo(x + r * Math.cos(a), y + r * Math.sin(a))
      }
      ctx.closePath()
    }

    function animate() {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particlesRef.current) {
        p.x += p.speedX
        p.y += p.speedY
        if (p.y > canvas.height + 20) {
          p.y = -20
          p.x = randomBetween(0, canvas.width)
        }

        ctx.globalAlpha = p.opacity
        ctx.fillStyle = p.color

        if (p.shape === 'circle') {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2)
          ctx.fill()
        } else if (p.shape === 'rect') {
          ctx.fillRect(p.x, p.y, p.size, p.size * 0.6)
        } else {
          drawStar(ctx, p.x, p.y, p.size)
          ctx.fill()
        }
      }

      ctx.globalAlpha = 1
      rafRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none', zIndex: 1 }}
      aria-hidden="true"
    />
  )
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
} as const

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0A0A14 0%, #0F0A1E 50%, #0A0A14 100%)' }}
    >
      {/* Background radial glows */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255,45,120,0.2) 0%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,229,255,0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Confetti */}
      <ConfettiCanvas />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display text-white mb-4 leading-tight"
            style={{
              fontFamily: 'Permanent Marker, cursive',
              textShadow: '0 0 30px rgba(255,45,120,0.6), 0 0 60px rgba(255,45,120,0.3)',
            }}
          >
            Your Party<br />In Motion
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Cape Cod's #1 Party Bus Rental — Serving Hyannis, Provincetown & All of Cape Cod
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book your party bus now"
              className="px-8 py-4 rounded-full text-lg font-bold text-white no-underline transition-all duration-200 hover:scale-105 w-full sm:w-auto text-center"
              style={{
                background: '#FF2D78',
                boxShadow: '0 0 30px rgba(255,45,120,0.6), 0 0 60px rgba(255,45,120,0.3)',
                fontFamily: 'DM Sans, sans-serif',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 40px rgba(255,45,120,0.9), 0 0 80px rgba(255,45,120,0.5)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(255,45,120,0.6), 0 0 60px rgba(255,45,120,0.3)'
              }}
            >
              Book Your Bus Now
            </a>
            <a
              href={PHONE_HREF}
              aria-label={`Call us at ${PHONE}`}
              className="px-8 py-4 rounded-full text-lg font-bold no-underline transition-all duration-200 hover:scale-105 w-full sm:w-auto text-center"
              style={{
                color: '#00E5FF',
                border: '2px solid #00E5FF',
                boxShadow: '0 0 20px rgba(0,229,255,0.3)',
                fontFamily: 'DM Sans, sans-serif',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(0,229,255,0.6), 0 0 60px rgba(0,229,255,0.3)'
                ;(e.currentTarget as HTMLElement).style.background = 'rgba(0,229,255,0.1)'
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(0,229,255,0.3)'
                ;(e.currentTarget as HTMLElement).style.background = 'transparent'
              }}
            >
              Call {PHONE}
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-white/70"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            <div className="flex items-center gap-2">
              <Star size={16} style={{ color: '#FFE03D' }} aria-hidden="true" />
              <span>5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2 border-l border-white/20 pl-4 sm:pl-8">
              <Bus size={16} style={{ color: '#00E5FF' }} aria-hidden="true" />
              <span>15 &amp; 22 Seat Buses</span>
            </div>
            <div className="flex items-center gap-2 border-l border-white/20 pl-4 sm:pl-8">
              <PartyPopper size={16} style={{ color: '#FF2D78' }} aria-hidden="true" />
              <span>All Occasions</span>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll arrow */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Link
          to="/services"
          className="text-white/60 hover:text-white no-underline"
          aria-label="View our services"
        >
          <ChevronDown size={32} />
        </Link>
      </motion.div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10" aria-hidden="true">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12 sm:h-16">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#050509" />
        </svg>
      </div>
    </section>
  )
}
