import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative container-px mx-auto py-20 sm:py-28 lg:py-36">
      {/* blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl"></div>
        <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"></div>
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center lg:text-left"
        >
          <p className="text-sm uppercase tracking-widest text-zinc-500">Cześć, jestem</p>
          <h1 className="mt-2 bg-gradient-to-r from-brand-500 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Wiktor Węgiel
          </h1>
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-300">Korepetytor Informatyki • INF.02 / INF.03 • Programowanie • Sieci • Bazy danych</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="mailto:wwegiel@icloud.com"
              className="rounded-full bg-gradient-to-r from-brand-500 to-cyan-400 px-5 py-2.5 text-white shadow-soft hover:opacity-95 transition"
            >
              Napisz do mnie
            </a>
            <a
              href="#offer"
              className="rounded-full border border-zinc-300 px-5 py-2.5 hover:shadow-soft dark:border-zinc-700"
            >
              Zobacz ofertę
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: .96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: .6, delay: .1 }}
          className="mx-auto w-full max-w-sm"
        >
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-zinc-200 shadow-soft dark:border-zinc-800">
            <img
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1200&auto=format&fit=crop"
              alt="Praca przy komputerze — nauka"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-zinc-950/30 to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
