const photos = [
  { src: '/stallion/conventions/c1-06.jpeg', caption: 'Signature d’un accord de partenariat', big: true },
  { src: '/stallion/conventions/c1-01.jpeg', caption: 'Cérémonie de signature, Maroc' },
  { src: '/stallion/conventions/c1-03.jpeg', caption: 'Délégation internationale' },
  { src: '/stallion/conventions/c1-07.jpeg', caption: 'Lecture des conventions' },
]

export default function Conventions() {
  return (
    <section className="conventions">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <div>
            <span className="eyebrow">Moments clés</span>
            <h2>Des conventions qui engagent</h2>
          </div>
          <span className="count">Signatures internationales issues du socle Stallion</span>
        </div>

        <div className="convention-grid">
          {photos.map((p, i) => (
            <figure className={`convention-photo${p.big ? ' big' : ''}`} key={p.src} data-reveal style={{ '--i': i }}>
              <img src={p.src} alt={p.caption} loading="lazy" />
              <figcaption>
                <span>{p.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
