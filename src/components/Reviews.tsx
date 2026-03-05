import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Riley Bent',
    text: 'Great experience overall! Busses are a great setup for a larger group. Will totally rent again from party bus cape cod!',
    timeAgo: '3 months ago',
  },
  {
    name: 'Jack Avellar',
    text: 'Had an awesome time with Party Bus Cape Cod! The bus was clean, the music setup was great, and our driver was chill and professional. Easy booking, no stress, and a really fun night overall. Definitely recommend and would use them again!',
    timeAgo: '3 months ago',
  },
  {
    name: 'Lexi Hoffman',
    text: 'Best party bus service on Cape!! The buses are clean and the drivers are epic. Totally recommend.',
    timeAgo: '1 month ago',
  },
  {
    name: 'Mikey Gray',
    text: 'What a great experience from the top all the way down! Great service and a unforgettable experience. I would highly recommend, you will have the time of your lives definitely will be booking again!!',
    timeAgo: '3 months ago',
  },
]

function StarRating() {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill="#FFE03D" style={{ color: '#FFE03D' }} aria-hidden="true" />
      ))}
    </div>
  )
}

export function Reviews() {
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
            style={{ color: '#FFE03D', fontFamily: 'DM Sans, sans-serif' }}
          >
            Real Reviews
          </p>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl text-white leading-tight"
            style={{ fontFamily: 'Bebas Neue, sans-serif', letterSpacing: '0.02em' }}
          >
            What Our Riders Say
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <StarRating />
            <span
              className="text-white/60 text-base"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              5.0 on Google
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-7"
              style={{
                background: 'rgba(18,18,31,0.9)',
                border: '1px solid rgba(255,224,61,0.12)',
              }}
            >
              <StarRating />
              <p
                className="text-white/80 text-sm leading-relaxed mt-4 mb-5"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{
                      background: 'rgba(255,45,120,0.15)',
                      color: '#FF2D78',
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                    aria-hidden="true"
                  >
                    {review.name.charAt(0)}
                  </div>
                  <span
                    className="text-white font-semibold text-sm"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {review.name}
                  </span>
                </div>
                <span
                  className="text-white/30 text-xs"
                  style={{ fontFamily: 'DM Sans, sans-serif' }}
                >
                  {review.timeAgo}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
