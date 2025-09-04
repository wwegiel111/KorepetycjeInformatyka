import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Offer from './components/Offer.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  // Dark mode preference
  const [dark, setDark] = useState(() => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className="relative min-h-screen bg-radial">
      {/* Decorative grid bg */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid [background-size:24px_24px] opacity-40 dark:opacity-20"></div>

      <Header dark={dark} setDark={setDark} />

      {/* Sections */}
      <main>
        <Hero />
        <About />
        <Offer />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
