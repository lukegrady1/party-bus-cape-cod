import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { Home } from '@/components/Home'
import { Occasions } from '@/components/Occasions'
import { Pricing } from '@/components/Pricing'
import { Gallery } from '@/components/Gallery'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { NotFound } from '@/components/NotFound'
import { BirthdayParties } from '@/components/services/BirthdayParties'
import { BacheloretteParties } from '@/components/services/BacheloretteParties'
import { BeachBarCrawls } from '@/components/services/BeachBarCrawls'
import { PromHomecoming } from '@/components/services/PromHomecoming'
import { CorporateEvents } from '@/components/services/CorporateEvents'
import { WineryTours } from '@/components/services/WineryTours'

function App() {
  return (
    <BrowserRouter basename="/party-bus-cape-cod">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Occasions />} />
          <Route path="services/birthday-parties" element={<BirthdayParties />} />
          <Route path="services/bachelorette-bachelor-parties" element={<BacheloretteParties />} />
          <Route path="services/beach-bar-crawls" element={<BeachBarCrawls />} />
          <Route path="services/prom-homecoming" element={<PromHomecoming />} />
          <Route path="services/corporate-events" element={<CorporateEvents />} />
          <Route path="services/winery-tours" element={<WineryTours />} />
          <Route path="rates" element={<Pricing />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
