🎉 Party Bus Cape Cod — Website Build Prompt
Project Overview
Build a complete, production-ready Vite + React + TypeScript website for Party Bus Cape Cod, a party bus rental company serving Cape Cod, MA. The site must be visually electric, playful, and fun — think neon lights, beach party energy, late-night celebration vibes. Every section must drive toward a booking conversion.
Tech Stack: Vite, React, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion
Contact Info (use throughout):

Phone: (508)-241-1800
Email: partybuscapecod@gmail.com
Booking Form: https://docs.google.com/forms/d/e/1FAIpQLSf1toGLwOt0ZsQzzajdnhGMYI5_S-bbERylF0h0eBbm4vAGKw/viewform


Design Direction & Aesthetic
Tone: Maximalist playful chaos meets Cape Cod coastal cool. Think: neon signs on a beach boardwalk at night, confetti, glowing bus headlights, summer energy.
Color Palette (CSS variables):
css--primary: #FF2D78       /* hot pink / neon magenta */
--secondary: #00E5FF     /* electric cyan / ocean blue */
--accent: #FFE03D        /* party yellow */
--dark: #0A0A14          /* near-black with purple undertone */
--surface: #12121F       /* card backgrounds */
--text: #FFFFFF
--text-muted: #A0A0B8
```

**Typography:**
- Display/Headlines: `Pacifico` (Google Fonts) — fun, retro, beachy
- Subheadings: `Bebas Neue` — bold, impactful
- Body: `DM Sans` — clean, readable
- Never use Inter, Roboto, Arial, or Space Grotesk

**Visual Details:**
- Animated confetti particles floating in the hero background
- Neon glow effects on CTAs (`box-shadow: 0 0 20px var(--primary)`)
- Subtle grain texture overlay on the dark background
- Glowing gradient borders on cards
- Star/sparkle SVG decorations scattered throughout
- Wave SVG dividers between sections with pink/cyan fills
- Bus silhouette graphic in hero area

**Motion (Framer Motion):**
- Hero entrance: staggered fade-up animations (title → subtitle → CTA buttons)
- Cards: spring-based hover lift with scale(1.03)
- Pricing cards: flip-in reveal on scroll
- Phone number: pulse glow animation drawing attention
- Scroll-triggered section reveals using `whileInView` with `viewport={{ once: true }}`
- Navigation: slide-down on mount, background blur on scroll

---

## Site Structure & Pages

### 1. Navigation (`/components/Navbar.tsx`)
- Sticky, blurred glass background on scroll (`backdrop-blur-md bg-dark/80`)
- Logo: Party Bus Cape Cod with a 🚌 emoji or small bus SVG, displayed in Pacifico font
- Nav links: Home, About, Services, Rates, Gallery, Contact
- Prominent CTA button: **"Book Now"** → hot pink, glowing, links to Google Form
- Mobile: hamburger menu with animated slide-down drawer
- Framer Motion: animate navbar background opacity change on scroll

### 2. Hero Section (`/components/Hero.tsx`)
- Full-viewport dark background with animated confetti/particles
- Layered gradient: radial pink glow top-left, cyan glow bottom-right
- Main headline (Pacifico): **"Your Party Starts Here 🎉"** — massive, 6xl-8xl
- Sub-headline (DM Sans): *"Cape Cod's Premier Party Bus Experience — Safe, Fun & Unforgettable"*
- Two CTA buttons side by side:
  1. **"Book Your Bus Now"** — filled pink, neon glow, links to Google Form
  2. **"Call (508)-241-1800"** — outlined cyan, phone link
- Below buttons: trust indicators in a row — ⭐ "5-Star Rated" | 🚌 "15 & 22 Seat Buses" | 🎉 "All Occasions"
- Animated floating bus silhouette or party emoji decorations
- Scroll-down arrow bouncing at the bottom

### 3. Occasions / Services Section (`/components/Occasions.tsx`)
- Section title (Bebas Neue): **"Every Occasion Deserves a Party Bus"**
- 6-card grid with glassmorphism cards (dark surface, glowing border on hover):
  1. 🎂 **Birthday Parties** — "Make your birthday unforgettable"
  2. 💍 **Bachelorette/Bachelor** — "The best pre-wedding night out"
  3. 🏖️ **Beach Bar Crawls** — "Hit every spot on the Cape"
  4. 🎓 **Prom & Homecoming** — "Arrive in style, leave in legend"
  5. 🎄 **Corporate Events** — "Team nights done right"
  6. 🍷 **Winery Tours** — "Sip your way through Cape Cod"
- Each card: emoji icon, title, short description, subtle "Book Now →" link
- Framer Motion: stagger children animation on scroll entry

### 4. Fleet / Buses Section (`/components/Fleet.tsx`)
- Section title: **"Choose Your Ride"**
- Two large cards side by side (or stacked on mobile):
  
  **Bus 1 — The Shoreline Cruiser**
  - Seats: 15 passengers
  - Starting at: **$200/hr**
  - Features: Premium sound system, LED lighting, climate control, leather seating
  - CTA: "Book the Cruiser"

  **Bus 2 — The Cape Classic**
  - Seats: 22 passengers
  - Starting at: **$250/hr**
  - Features: Everything in Cruiser + dance floor space, extra bar area
  - CTA: "Book the Classic"
  
- Cards have a "POPULAR" badge on the 22-seater
- Pricing displayed large (Bebas Neue) with "/hr" in smaller text
- Both cards have glowing pink border and "Book Now" CTA linking to Google Form

### 5. Pricing Section (`/components/Pricing.tsx`)
- Transparent pricing explainer — no hidden fees messaging
- Section title: **"Simple, Transparent Pricing"**
- Visual pricing table or card layout:
  - 15-Seat Bus: from $200/hr
  - 22-Seat Bus: from $250/hr
  - Note: *"Final pricing varies based on trip length, date, and event type"*
- FAQ accordion (shadcn/ui Accordion component) with 5-6 questions:
  - "How do I book a party bus?" 
  - "Is there a minimum rental time?"
  - "What's included in the rental?"
  - "Do you require a deposit?"
  - "What areas do you serve?"
  - "Can we bring our own drinks?"
- Large CTA below: **"Ready to Get the Party Started?"** → Book Now button

### 6. Gallery Section (`/components/Gallery.tsx`)
- Section title: **"Capture the Fun"**
- Masonry or CSS grid gallery layout — 9 placeholder image slots
- Use gradient placeholder cards with party emojis if no real images provided
- Lightbox-style hover overlay with zoom icon
- Note in code: `// TODO: Replace placeholder images with client photos`
- Framer Motion: staggered grid reveal on scroll

### 7. About Section (`/components/About.tsx`)
- Section title: **"About Party Bus Cape Cod"**
- Two-column layout: text left, decorative graphic/image right
- Mission text: *"At Party Bus Cape Cod, we strive to provide the ultimate transportation experience for your group adventures. Our mission is to ensure you have a fun, safe, and memorable journey, no matter the occasion."*
- Stat counters (animated count-up on scroll entry):
  - 🎉 **500+** Happy Passengers
  - ⭐ **5-Star** Rated Service
  - 🚌 **2** Premium Buses
  - 📍 **Cape Cod** Based & Local
- CTA below stats: **"Book Your Adventure"** button

### 8. Contact / Booking Section (`/components/Contact.tsx`)
- Full-width dark section with pink gradient overlay
- Section title: **"Let's Get This Party Started!"**
- Three contact method cards:
  1. 📞 **Call/Text** — "(508)-241-1800" (large, tappable)
  2. 📧 **Email** — "partybuscapecod@gmail.com"
  3. 📋 **Online Booking** — "Fill out our quick booking form"
- Primary CTA: large **"Book Your Party Bus Now"** button → Google Form
- Secondary: **"Call Now"** button → tel link
- Tagline: *"Your shoreline shuttle to unforgettable nights."*

### 9. Footer (`/components/Footer.tsx`)
- Dark background, logo top
- Three columns: Navigation Links | Contact Info | Quick Book
- Copyright: "© 2026 Party Bus Cape Cod — All Rights Reserved"
- Social media icon placeholders (Instagram, Facebook, TikTok)
- Small disclaimer: "All rides provided by licensed and insured operators"

---

## Component Architecture
```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Occasions.tsx
│   ├── Fleet.tsx
│   ├── Pricing.tsx
│   ├── Gallery.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ui/               ← shadcn components
├── hooks/
│   └── useScrollPosition.ts
├── lib/
│   └── utils.ts
├── App.tsx
├── main.tsx
└── index.css
```

---

## CTA Strategy (implement these throughout)

Every section must have at least one CTA. Prioritize:
1. **Primary CTA** → Book Now (Google Form link) — always hot pink/glowing
2. **Secondary CTA** → Call (508)-241-1800 — always cyan/outlined

**Sticky mobile bottom bar:** On mobile viewports, show a fixed bottom bar with two buttons side by side: "📋 Book Now" and "📞 Call Now" — always visible, high contrast.

---

## Technical Requirements

- **TypeScript** — all components fully typed, no `any`
- **Tailwind** — use `tailwind.config.ts` with custom theme extending the color palette above
- **shadcn/ui** — use for: Accordion (FAQ), Button, Card, Sheet (mobile nav drawer)
- **Framer Motion** — `motion.div` on all major sections with `whileInView`, `initial`, `animate` variants
- **Google Fonts** — load Pacifico, Bebas Neue, DM Sans via `@import` in `index.css`
- **Responsive** — mobile-first, test all breakpoints: 375px, 768px, 1280px, 1440px
- **Accessibility** — all CTAs have `aria-label`, images have `alt` text, color contrast AA compliant
- **Performance** — lazy load gallery images, use `will-change: transform` sparingly

---

## Booking Link (use everywhere)
```
https://docs.google.com/forms/d/e/1FAIpQLSf1toGLwOt0ZsQzzajdnhGMYI5_S-bbERylF0h0eBbm4vAGKw/viewform

Vibe Reference
Think: neon boardwalk signage + Cape Cod nautical summer + late-night celebration energy. The site should feel like you're already at the party before you even book. Bold, loud, fun — but not cheap. This is a premium experience with personality.