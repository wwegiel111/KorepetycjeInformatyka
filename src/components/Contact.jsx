import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="container-px mx-auto py-16 sm:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .5 }}
        className="text-center text-3xl font-semibold"
      >
        Kontakt
      </motion.h2>
      <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-zinc-200 bg-white/70 p-6 shadow-soft dark:border-zinc-800 dark:bg-zinc-950/60">
        <div className="grid gap-3 sm:grid-cols-2">
          <a href="mailto:wwegiel@icloud.com" className="rounded-2xl border border-zinc-200 p-4 hover:shadow-sm dark:border-zinc-800">
            <div className="text-sm text-zinc-500">E-mail</div>
            <div className="font-medium">wwegiel@icloud.com</div>
          </a>
          <a href="tel:+48539015644" className="rounded-2xl border border-zinc-200 p-4 hover:shadow-sm dark:border-zinc-800">
            <div className="text-sm text-zinc-500">Telefon</div>
            <div className="font-medium">+48 539 015 644</div>
          </a>
        </div>
        <div className="mt-6 text-center">
          <a
            href="#offer"
            className="inline-flex rounded-full bg-gradient-to-r from-brand-500 to-cyan-400 px-5 py-2.5 text-white shadow-soft hover:opacity-95 transition"
          >
            Sprawdź dostępne terminy
          </a>
        </div>
      </div>
    </section>
  )
}
