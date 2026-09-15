import StatCounter from './StatCounter.jsx'

const stats = [
  { value: 150, suffix: '+', label: 'Projets réalisés' },
  { value: 200, suffix: '+', label: 'Clients satisfaits' },
  { value: 25, suffix: '+', label: 'Partenaires' },
  { value: 6, suffix: '+', label: "Années d'expérience" },
]

export default function StatsBand() {
  return (
    <section className="stats-band-section">
      <div className="wrap">
        <div className="stat-band" data-reveal>
          <span className="stat-band-label">Le socle Stallion Investment, en chiffres</span>
          <div className="stat-grid">
            {stats.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
