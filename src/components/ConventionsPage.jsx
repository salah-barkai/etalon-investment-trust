import conventions from '../data/conventions.js'

export default function ConventionsPage() {
  return (
    <section id="conventions-page">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <div>
            <span className="eyebrow">Moments clés</span>
            <h2>Des conventions qui engagent</h2>
          </div>
          <p className="section-aside">Rencontres, signatures et partenariats, de Stallion à Étalon.</p>
        </div>
        <p className="conventions-intro" data-reveal>
          Chaque projet part d'une rencontre. Ces images retracent quelques-unes des conventions et
          signatures qui ont bâti le réseau de partenaires sur lequel Étalon Investment Trust s'appuie
          aujourd'hui — un socle hérité de Stallion Investment, élargi à mesure que de nouvelles alliances
          se forment.
        </p>

        <div className="convention-list">
          {conventions.map((c, i) => (
            <article className="project-card convention-card" key={c.src} data-reveal style={{ '--i': i % 6 }}>
              <div className="project-media">
                <img src={c.src} alt={c.caption} loading="lazy" />
                <span className="project-tag">{c.place}</span>
              </div>
              <div className="project-info">
                <h3>{c.caption}</h3>
                <p>{c.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
