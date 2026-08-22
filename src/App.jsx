import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Intro from './components/Intro.jsx'
import Domains from './components/Domains.jsx'
import Location from './components/Location.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Intro />
        <hr className="divider" />
        <Domains />
        <hr className="divider" />
        <Location />
      </main>
      <Footer />
    </>
  )
}
