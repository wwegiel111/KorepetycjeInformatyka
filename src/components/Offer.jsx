import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function Offer() {
  const items = [
    { title: 'INF.02 / INF.03 — pełne przygotowanie', bullets: ['Strony i aplikacje', 'PHP / JS', 'Linux / Windows', 'Sieci i urządzenia', 'Bazy danych / SQL', 'Pytania teoretyczne'] },
    { title: 'Projekty szkolne / licealne', bullets: ['Excel i analizy', 'Prezentacje i dokumenty', 'Konsultacje projektów', 'Wsparcie przy kolokwiach'] },
    { title: 'Indywidualny mentoring IT', bullets: ['Plan nauki', 'Code review', 'Ścieżka junior dev', 'Portfolio i GitHub'] }
  ]

  return (
    <section id="offer" className="container-px mx-auto py-16 sm:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .5 }}
        className="text-center text-3xl font-semibold"
      >
        Oferta
      </motion.h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((card, idx) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 12, scale: .98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .45, delay: idx * .06 }}
            className="group relative rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-soft backdrop-blur hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950/60"
          >
            <div className="absolute -top-6 right-4 rounded-full bg-gradient-to-r from-brand-500 to-cyan-400 px-3 py-1 text-xs text-white shadow-soft">
              Popularne
            </div>
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <ul className="mt-4 space-y-2">
              {card.bullets.map(b => (
                <li key={b} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
                  <Check size={16} className="shrink-0 text-brand-500" /> {b}
                </li>
              ))}
            </ul>
            <a href="#contact" className="mt-5 inline-flex rounded-full border border-zinc-300 px-4 py-2 text-sm hover:shadow-soft dark:border-zinc-700">
              Zapytaj o termin
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
