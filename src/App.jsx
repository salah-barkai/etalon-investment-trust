import { useEffect } from 'react'
import Preloader from './components/Preloader.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Intro from './components/Intro.jsx'
import Continuity from './components/Continuity.jsx'
import Domains from './components/Domains.jsx'
import Location from './components/Location.jsx'
import Leadership from './components/Leadership.jsx'
import Footer from './components/Footer.jsx'
import useReveal from './hooks/useReveal.js'

const pages = {
  '/': { title: 'Étalon Investment Trust', content: null },
  '/objet': { title: 'Notre objet', content: <Intro /> },
  '/continuite': { title: 'Stallion → Étalon', content: <Continuity /> },
  '/domaines': { title: 'Nos domaines', content: <Domains /> },
  '/leadership': { title: 'Direction & équipe', content: <Leadership /> },
  '/localisation': { title: 'Nous localiser', content: <Location /> },
  '/contact': { title: 'Nous contacter', content: null },
}

const REDIRECTS = { '/accueil': '/' }

function currentPath() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  return pages[path] ? path : '/'
}

export default function App() {
  const rawPath = window.location.pathname.replace(/\/$/, '') || '/'
  const redirectTo = REDIRECTS[rawPath]
  const path = currentPath()
  const page = pages[path]
  const isHome = path === '/'
  const isContact = path === '/contact'

  useEffect(() => {
    if (redirectTo) window.location.replace(redirectTo)
  }, [redirectTo])

  useEffect(() => {
    document.title = `${page.title} — Étalon Investment Trust`
  }, [page.title])

  useReveal([path])

  if (redirectTo) return null

  return (
    <>
      <Preloader />
      <Nav activePath={path} />
      <main id="top" className={isContact ? 'contact-page' : 'site-page'}>
        {isHome ? (
          <>
            <Hero />
            <Intro />
            <hr className="divider" />
            <Continuity />
            <hr className="divider" />
            <Domains />
            <hr className="divider" />
            <Location />
          </>
        ) : isContact ? (
          <section className="contact-intro">
            <div className="wrap">
              <span className="eyebrow">Prendre contact</span>
              <h1>Donnez une nouvelle<br />dimension à vos projets.</h1>
              <p>Partagez-nous votre besoin. Notre équipe vous répondra dans les meilleurs délais.</p>
            </div>
          </section>
        ) : (
          page.content
        )}
      </main>
      <Footer showContact={isContact || isHome} />
    </>
  )
}
