import projects from '../data/projects.js'

export default function Projects() {
  return (
    <section id="realisations">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <div>
            <span className="eyebrow">Socle Stallion Investment</span>
            <h2>Des réalisations qui parlent</h2>
          </div>
          <p className="section-aside">Le patrimoine immobilier sur lequel Étalon construit sa suite.</p>
        </div>

        <div className="project-list">
          {projects.map((p, i) => (
            <article className="project-card" key={p.name} data-reveal style={{ '--i': i }}>
              <div className="project-media">
                <img src={p.image} alt={p.name} loading="lazy" />
                <span className="project-tag">{p.tag}</span>
              </div>
              <div className="project-info">
                <span className="project-place">{p.place} · {p.year}</span>
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <span className="project-area">{p.area}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
