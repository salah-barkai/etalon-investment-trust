import conventions from '../data/conventions.js'

const preview = conventions.slice(0, 5)

export default function Conventions() {
  return (
    <section className="conventions">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <div>
            <span className="eyebrow">Moments clés</span>
            <h2>Des conventions qui engagent</h2>
          </div>
          <span className="count">Rencontres et signatures, de Stallion à Étalon</span>
        </div>

        <div className="polaroid-wall">
          {preview.map((p, i) => (
            <figure
              className={`polaroid${p.big ? ' big' : ''}${p.shift ? ' shift' : ''}`}
              key={p.src}
              data-reveal
              style={{ '--i': i % 5, '--r': `${p.rotate}deg` }}
            >
              <img src={p.src} alt={p.caption} loading="lazy" />
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>

        <a className="conventions-more" href="/conventions" data-reveal>
          Voir toutes les conventions <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}
