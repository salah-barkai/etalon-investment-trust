import { HardHat, Handshake, Construction, Landmark } from 'lucide-react'
import partners from '../data/partners.js'

const ICONS = { HardHat, Handshake, Construction, Landmark }

export default function Partners() {
  const marqueeItems = [...partners, ...partners]

  return (
    <section className="partners" id="partenaires">
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {marqueeItems.map((p, i) => (
            <span key={i}>{p.name}<span className="marquee-dot">✦</span></span>
          ))}
        </div>
      </div>

      <div className="wrap">
        <div className="section-head" data-reveal>
          <div>
            <span className="eyebrow">Alliances stratégiques</span>
            <h2>Un réseau de partenaires</h2>
          </div>
          <span className="count">Conventions signées dans la continuité Stallion → Étalon</span>
        </div>

        <div className="partner-list">
          {partners.map((p, i) => {
            const Icon = ICONS[p.icon]
            return (
              <article className="partner-card" key={p.name} data-reveal style={{ '--i': i }}>
                <Icon className="partner-icon" strokeWidth={1.4} aria-hidden="true" />
                <span className="partner-place">{p.place}</span>
                <h3>{p.name}</h3>
                <span className="partner-sector">{p.sector}</span>
                <p>{p.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
