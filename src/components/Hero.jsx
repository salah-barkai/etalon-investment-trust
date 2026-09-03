import { Building2, MapPin, LayoutGrid, Globe, Sparkles, TrendingUp, Cpu, Layers } from 'lucide-react'

const floaters = [
  { Icon: Sparkles, className: 'f1' },
  { Icon: TrendingUp, className: 'f2' },
  { Icon: Cpu, className: 'f3' },
  { Icon: Layers, className: 'f4' },
]

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-floaters" aria-hidden="true">
        {floaters.map(({ Icon, className }) => (
          <span className={`floater ${className}`} key={className}>
            <Icon strokeWidth={1.6} />
          </span>
        ))}
      </div>
      <div className="wrap">
        <span className="eyebrow">Rabat, Maroc — Société à Responsabilité Limitée</span>
        <h1>
          La référence à laquelle se&nbsp;<em>calibrent</em> les investissements multisectoriels.
        </h1>

        <div className="hero-grid">
          <div>
            <p className="hero-lede">
              Étalon Investment Trust conçoit et déploie des projets au Maroc et à l'international —
              de l'intelligence artificielle aux infrastructures.
            </p>
            <a className="hero-cta" href="/domaines">
              Découvrir nos domaines <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="badges">
            <span className="badge">
              <span className="badge-label"><Building2 strokeWidth={1.6} aria-hidden="true" /> Forme</span>
              <b>SARL</b>
            </span>
            <span className="badge">
              <span className="badge-label"><MapPin strokeWidth={1.6} aria-hidden="true" /> Siège</span>
              <b>Rabat</b>
            </span>
            <span className="badge">
              <span className="badge-label"><LayoutGrid strokeWidth={1.6} aria-hidden="true" /> Domaines</span>
              <b>26</b>
            </span>
            <span className="badge">
              <span className="badge-label"><Globe strokeWidth={1.6} aria-hidden="true" /> Portée</span>
              <b>Maroc &amp; international</b>
            </span>
          </div>
        </div>
      </div>

      <div className="gauge-band" role="presentation">
        <span className="gauge-marker">RÉFÉRENCE</span>
      </div>
    </section>
  )
}
