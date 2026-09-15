import { Compass, Sparkles, Leaf, Construction, PlaneTakeoff, Truck, Building2, Hotel, Wheat } from 'lucide-react'

const pillars = [
  ['01', Compass, 'Rigueur stratégique', 'Des décisions structurées autour de la mesure, de la discipline et d’une vision de long terme.'],
  ['02', Sparkles, 'Innovation maîtrisée', 'Des solutions ambitieuses, ancrées dans les besoins réels des territoires et des marchés.'],
  ['03', Leaf, 'Impact durable', 'Des projets conçus pour créer une valeur pérenne pour les partenaires, les usagers et les écosystèmes.'],
]

const sectors = [
  ['Infrastructures', Construction],
  ['Aviation', PlaneTakeoff],
  ['Transport', Truck],
  ['Immobilier', Building2],
  ['Hôtellerie', Hotel],
  ['Agriculture', Wheat],
]

export default function Continuity() {
  return (
    <section className="continuity" id="continuite">
      <div className="wrap">
        <div className="continuity-top">
          <span className="eyebrow">Une continuité assumée</span>
          <span className="continuity-stamp">STALLION → ÉTALON</span>
        </div>
        <div className="continuity-intro" data-reveal>
          <h2>Étalon prolonge une ambition déjà en mouvement.</h2>
          <p>
            Dans la continuité de <strong>Stallion Investment</strong>, Étalon Investment Trust élargit la
            démarche de développement stratégique à de nouveaux territoires, structures de financement et
            chaînes de valeur.
          </p>
        </div>

        <div className="continuity-content" data-reveal>
          <div className="sector-cloud" aria-label="Secteurs issus de l'expérience Stallion Investment">
            {sectors.map(([sector, Icon]) => (
              <span key={sector}>
                <Icon aria-hidden="true" strokeWidth={1.6} />
                {sector}
              </span>
            ))}
          </div>
          <div className="continuity-source">
            <p>
              L'expérience Stallion s'est développée autour de projets à forte valeur ajoutée dans ces
              secteurs. Étalon s'appuie sur ce socle pour poursuivre une vision multisectorielle.
            </p>
            <a href="https://www.stallioninvestment.td/" target="_blank" rel="noopener">
              Découvrir Stallion Investment <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="pillar-grid">
          {pillars.map(([number, Icon, title, description], i) => (
            <article className="pillar" key={number} data-reveal style={{ '--i': i }}>
              <Icon className="pillar-icon" aria-hidden="true" strokeWidth={1.2} />
              <span className="pillar-num">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
