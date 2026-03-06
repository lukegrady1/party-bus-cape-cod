import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { SEO } from '@/components/SEO'
import { BOOKING_URL } from '@/lib/utils'

const faqs = [
  {
    question: 'How do I book a party bus?',
    answer:
      'Simply click the "Book Now" button on any page and fill out our quick online booking form. You can also call or text us at (508)-241-1800, or email partybuscapecod@gmail.com. We\'ll get back to you quickly to confirm your reservation.',
  },
  {
    question: 'Is there a minimum rental time?',
    answer:
      'Yes, we typically require a minimum rental of 2 hours. This allows us to ensure you have enough time to enjoy your event fully. Contact us for specific event requirements.',
  },
  {
    question: 'What\'s included in the rental?',
    answer:
      'Every rental includes a professional licensed driver, premium sound system, LED lighting, climate control, and leather seating. The 22-seat Cape Classic also includes dance floor space and an extra bar area.',
  },
  {
    question: 'Do you require a deposit?',
    answer:
      'Yes, a deposit is required to secure your reservation. The deposit amount varies depending on the event type and rental duration. Final payment details will be provided when you book.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We are based on Cape Cod and primarily serve the entire Cape Cod area including Barnstable, Falmouth, Yarmouth, Dennis, Harwich, Chatham, Orleans, Eastham, Wellfleet, Truro, and Provincetown. Contact us for trips outside Cape Cod.',
  },
  {
    question: 'Can we bring our own drinks?',
    answer:
      'Yes! You\'re welcome to bring your own beverages. We ask that all passengers are of legal drinking age (21+) when consuming alcohol, and that you drink responsibly. Our buses include cooler space for your convenience.',
  },
  {
    question: 'How much does a party bus cost on Cape Cod?',
    answer:
      'Our 15-passenger Shoreline Cruiser starts at $200/hr and our 22-passenger Cape Classic starts at $250/hr, with a 2-hour minimum. Final pricing depends on trip length, date, and event type. Split between a group, it often costs less than rideshares or a traditional limo rental.',
  },
  {
    question: 'Is a party bus cheaper than a limo on Cape Cod?',
    answer:
      'Per person, absolutely. A party bus fits 15-22 people starting at $200/hr, while a limo typically seats 6-10 for a similar hourly rate. You get more space, a better sound system, room to stand and dance, and a way better vibe — all at a lower per-person cost.',
  },
  {
    question: 'Can you do winery or brewery tours?',
    answer:
      'Yes! Winery and brewery tours are one of our most popular bookings. We can create a custom route through Cape Cod\'s best spots including Truro Vineyards, First Crush Winery, Cape Cod Beer, Hog Island Beer Co., and more. Most groups book 3-4 hours.',
  },
  {
    question: 'Do you serve areas outside Cape Cod?',
    answer:
      'We\'re based on Cape Cod and serve all towns from Sandwich to Provincetown, including Hyannis, Barnstable, Falmouth, Chatham, Yarmouth, Dennis, Harwich, Orleans, Eastham, Wellfleet, and Truro. We also serve Plymouth and parts of the South Shore — contact us for trips beyond Cape Cod.',
  },
]

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      className="rounded-xl overflow-hidden"
      style={{ border: '1px solid rgba(255,45,120,0.15)', background: 'rgba(18,18,31,0.8)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left"
        aria-expanded={open}
        style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
      >
        <span
          className="font-semibold text-white text-base pr-4"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
          style={{ color: '#FF2D78' }}
          aria-hidden="true"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div
              className="px-6 pb-4 text-white/70 text-sm leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif', borderTop: '1px solid rgba(255,45,120,0.1)' }}
            >
              <div className="pt-3">{answer}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export function Pricing() {
  return (
    <>
      <SEO
        title="How Much Is a Party Bus on Cape Cod? | Prices from $200/hr"
        description="Cape Cod party bus prices: 15-seat bus from $200/hr, 22-seat from $250/hr. No hidden fees, 2-hour minimum. Cheaper than a limo with more room & more fun. Get a free quote — call (508)-241-1800."
        canonical="/rates"
        schema={faqSchema}
      />
    <section
      id="rates"
      className="py-20 md:py-28"
      style={{ background: '#12121F' }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            No Surprises
          </p>
          <h1
            className="text-5xl sm:text-6xl md:text-7xl text-white leading-tight"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
          >
            Party Bus Pricing &amp; Rates
          </h1>
          <p
            className="mt-4 text-lg text-white/60"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            No hidden fees. No surprise charges. Just pure party.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6"
        >
          {[
            { name: '15-Seat Bus', sub: 'The Shoreline Cruiser', price: '$200', color: '#00E5FF' },
            { name: '22-Seat Bus', sub: 'The Cape Classic', price: '$250', color: '#FF2D78', badge: 'Most Popular' },
          ].map((tier) => (
            <div
              key={tier.name}
              className="relative rounded-2xl p-8 text-center"
              style={{
                background: 'rgba(10,10,20,0.8)',
                border: `1px solid ${tier.color}40`,
                boxShadow: `0 0 30px ${tier.color}15`,
              }}
            >
              {tier.badge && (
                <span
                  className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: tier.color, color: '#0A0A14', fontFamily: 'DM Sans, sans-serif' }}
                >
                  {tier.badge}
                </span>
              )}
              <p className="text-white/60 text-sm mb-1" style={{ fontFamily: 'DM Sans, sans-serif' }}>{tier.sub}</p>
              <h3 className="text-white text-xl font-bold mb-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>{tier.name}</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span
                  className="text-6xl font-bold"
                  style={{ fontFamily: 'Bebas Neue, sans-serif', color: tier.color, textShadow: `0 0 20px ${tier.color}60` }}
                >
                  {tier.price}
                </span>
                <span className="text-white/50 text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>/hr</span>
              </div>
              <p className="text-white/40 text-xs mt-2" style={{ fontFamily: 'DM Sans, sans-serif' }}>starting at</p>
            </div>
          ))}
        </motion.div>

        {/* Pricing note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-white/40 text-sm mb-16 italic"
          style={{ fontFamily: 'DM Sans, sans-serif' }}
        >
          * Final pricing varies based on trip length, date, and event type. Contact us for a custom quote.
        </motion.p>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2
            className="text-3xl sm:text-4xl text-white text-center mb-8"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
          >
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h2
            className="text-3xl sm:text-4xl text-white mb-6"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
          >
            Ready to Get the Party Started?
          </h2>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book your party bus now"
            className="inline-block px-10 py-4 rounded-full text-lg font-bold text-white no-underline transition-all duration-200 hover:scale-105"
            style={{
              background: '#FF2D78',
              boxShadow: '0 0 30px rgba(255,45,120,0.6)',
              fontFamily: 'DM Sans, sans-serif',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 50px rgba(255,45,120,0.9)' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(255,45,120,0.6)' }}
          >
            Book Now
          </a>
        </motion.div>
      </div>
    </section>
    </>
  )
}
