import { Building2, Users, Handshake, Award } from 'lucide-react'
import StatCounter from './StatCounter.jsx'

const stats = [
  { value: 150, suffix: '+', label: 'Projets réalisés', icon: Building2 },
  { value: 200, suffix: '+', label: 'Clients satisfaits', icon: Users },
  { value: 25, suffix: '+', label: 'Partenaires', icon: Handshake },
  { value: 6, suffix: '+', label: "Années d'expérience", icon: Award },
]

export default function StatsBand() {
  return (
    <section className="stats-band-section">
      <div className="wrap">
        <div className="stat-band" data-reveal>
          <span className="eyebrow">Le socle Stallion Investment, en chiffres</span>
          <div className="stat-grid">
            {stats.map((s, i) => (
              <StatCounter key={s.label} {...s} style={{ '--i': i }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
