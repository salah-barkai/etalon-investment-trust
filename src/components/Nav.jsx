import { useEffect, useState } from 'react'

const links = [
  ['/', 'Accueil'],
  ['/objet', 'Objet'],
  ['/continuite', 'Continuité'],
  ['/domaines', 'Domaines'],
  ['/leadership', 'Leadership'],
  ['/localisation', 'Localisation'],
  ['/contact', 'Contact'],
]

export default function Nav({ activePath }) {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      const top = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(top > 8)
      setProgress(max > 0 ? Math.min(1, top / max) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}${open ? ' open' : ''}`}>
        <div className="nav-inner">
          <a className="brand" href="/">
            <img className="brand-mark" src="/etalon-emblem.png" alt="Étalon Investment Trust" width="42" height="52" />
            <span className="brand-text">Étalon Investment Trust <span className="mark">SARL</span></span>
          </a>
          <nav className="navlinks" aria-label="Navigation principale">
            {links.map(([href, label]) => (
              <a className={activePath === href ? 'active' : ''} href={href} key={href}>
                {label}
              </a>
            ))}
          </nav>
          <button
            className="nav-burger"
            type="button"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
          <span className="nav-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
        </div>
      </header>

      <div className={`nav-drawer${open ? ' open' : ''}`} role="dialog" aria-modal="true" hidden={!open}>
        <nav aria-label="Navigation mobile">
          {links.map(([href, label], i) => (
            <a
              className={activePath === href ? 'active' : ''}
              href={href}
              key={href}
              style={{ '--i': i }}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </>
  )
}
