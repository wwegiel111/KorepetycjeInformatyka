import { motion } from 'framer-motion'

const opinions = [
  { img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop', alt: 'Opinia 1' },
  { img: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop', alt: 'Opinia 2' },
  { img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1200&auto=format&fit=crop', alt: 'Opinia 3' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="container-px mx-auto py-16 sm:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .5 }}
        className="text-center text-3xl font-semibold"
      >
        Opinie
      </motion.h2>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {opinions.map((o, i) => (
          <motion.div
            key={o.alt}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .45, delay: i * .05 }}
            className="overflow-hidden rounded-3xl border border-zinc-200 bg-white/70 shadow-soft dark:border-zinc-800 dark:bg-zinc-950/60"
          >
            <img src={o.img} alt={o.alt} className="aspect-[4/3] w-full object-cover" loading="lazy" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
