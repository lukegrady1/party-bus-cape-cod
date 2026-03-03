import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { BOOKING_URL, PHONE_HREF, PHONE } from '@/lib/utils'

function MobileBottomBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex"
      style={{
        background: 'rgba(10,10,20,0.95)',
        backdropFilter: 'blur(12px)',
        borderTop: '1px solid rgba(255,45,120,0.3)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
      aria-label="Quick contact options"
    >
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book your party bus now"
        className="flex-1 flex items-center justify-center py-4 text-sm font-bold text-white no-underline"
        style={{ background: '#FF2D78', fontFamily: 'DM Sans, sans-serif' }}
      >
        Book Now
      </a>
      <a
        href={PHONE_HREF}
        aria-label={`Call Party Bus Cape Cod at ${PHONE}`}
        className="flex-1 flex items-center justify-center py-4 text-sm font-bold no-underline"
        style={{
          color: '#00E5FF',
          background: 'rgba(0,229,255,0.08)',
          borderLeft: '1px solid rgba(0,229,255,0.2)',
          fontFamily: 'DM Sans, sans-serif',
        }}
      >
        Call Now
      </a>
    </div>
  )
}

export function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div
      style={{ minHeight: '100vh', background: '#0A0A14', paddingBottom: '60px' }}
      className="md:pb-0"
    >
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <MobileBottomBar />
    </div>
  )
}
