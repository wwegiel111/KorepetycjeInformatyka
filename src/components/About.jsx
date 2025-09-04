import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="container-px mx-auto py-16 sm:py-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="text-3xl font-semibold"
        >
          O mnie
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6, delay: .05 }}
          className="mt-4 text-zinc-600 dark:text-zinc-300"
        >
          Jestem studentem Data Science na Politechnice Łódzkiej z 4‑letnim doświadczeniem jako korepetytor.
          Przygotowałem ponad 80 uczniów do egzaminów INF.02/INF.03, a w pracy stawiam na praktykę, proste tłumaczenia
          i zadania dokładnie takie, jak na egzaminie.
        </motion.p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {[
            { title: 'Doświadczenie', body: '4+ lata korepetycji, projekty web + admin + sieci' },
            { title: 'Edukacja', body: 'Technik Informatyk (94%), PŁ — Inż. Data Science' },
            { title: 'Zakres', body: 'Strony WWW, PHP/JS, Linux/Windows, sieci, SQL' },
            { title: 'Styl pracy', body: 'Checklisty, ściągi, szybkie przygotowanie do INF.02/03' }
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .45, delay: .05 * i }}
              className="rounded-2xl border border-zinc-200 bg-white/70 p-5 shadow-soft backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/60"
            >
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
