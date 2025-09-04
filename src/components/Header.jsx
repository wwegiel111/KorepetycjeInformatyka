import { useEffect, useRef, useState } from 'react'
import { Menu, Moon, Sun } from 'lucide-react'

export default function Header({ dark, setDark }) {
  const [open, setOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight)
      setProgress(Math.min(1, Math.max(0, scrolled)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClasses = "px-3 py-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition text-sm font-medium"

  return (
    <header ref={navRef} className="sticky top-0 z-50">
      <div className="backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-950/60 border-b border-zinc-200 dark:border-zinc-800">
        <div className="container-px mx-auto">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="font-semibold tracking-tight text-lg">
              <span className="bg-gradient-to-r from-brand-500 to-cyan-400 bg-clip-text text-transparent">Korepetycje</span> Informatyka
            </a>

            <nav className="hidden md:flex items-center gap-1">
              <a href="#about" className={linkClasses}>O mnie</a>
              <a href="#offer" className={linkClasses}>Oferta</a>
              <a href="#contact" className={linkClasses}>Kontakt</a>
            </nav>

            <div className="flex items-center gap-2">
              <button
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-700 px-3 py-1.5 text-sm hover:shadow-soft transition"
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              >
                Umów lekcję
              </button>
              <button
                aria-label="Przełącz motyw"
                className="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition"
                onClick={() => setDark(v => !v)}
                title={dark ? 'Tryb jasny' : 'Tryb ciemny'}
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button className="md:hidden rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition" onClick={() => setOpen(o => !o)} aria-label="Menu">
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll progress bar */}
        <div className="h-1 w-full bg-transparent">
          <div
            className="h-full bg-gradient-to-r from-brand-500 to-cyan-400 transition-[width] duration-200"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-950/90 backdrop-blur">
          <div className="container-px mx-auto py-3 flex flex-col gap-1">
            <a href="#about" onClick={() => setOpen(false)} className="py-2">O mnie</a>
            <a href="#offer" onClick={() => setOpen(false)} className="py-2">Oferta</a>
            <a href="#contact" onClick={() => setOpen(false)} className="py-2">Kontakt</a>
          </div>
        </div>
      )}
    </header>
  )
}
