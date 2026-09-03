import domains from '../data/domains.js'

export default function Domains() {
  return (
    <section id="domaines">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <div>
            <span className="eyebrow">Champ d'intervention</span>
            <h2>26 domaines d'activité</h2>
          </div>
          <span className="count">Tel qu'énuméré à l'Article 3 des statuts</span>
        </div>

        <div className="domain-list">
          {domains.map((d, i) => (
            <div className="domain" key={d.num} data-reveal style={{ '--i': i % 6 }}>
              <span className="domain-num">{d.num}</span>
              <div>
                <h3>{d.title}</h3>
                <p>{d.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
