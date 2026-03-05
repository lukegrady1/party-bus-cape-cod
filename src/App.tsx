import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { Home } from '@/components/Home'
import { Occasions } from '@/components/Occasions'
import { Fleet } from '@/components/Fleet'
import { Pricing } from '@/components/Pricing'
import { Gallery } from '@/components/Gallery'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { NotFound } from '@/components/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Occasions />} />
          <Route path="fleet" element={<Fleet />} />
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
