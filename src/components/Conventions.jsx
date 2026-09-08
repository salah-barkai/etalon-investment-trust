const photos = [
  { src: '/stallion/conventions/c1-06.jpeg', caption: 'Une poignée de main, une nouvelle étape', rotate: -5, big: true },
  { src: '/stallion/conventions/c1-01.jpeg', caption: 'Autour de la table des négociations', rotate: 4 },
  { src: '/stallion/conventions/c1-05.jpeg', caption: 'La délégation au complet', rotate: -3, shift: true },
  { src: '/stallion/conventions/c1-03.jpeg', caption: 'Signature, sourires de circonstance', rotate: 6 },
  { src: '/stallion/conventions/c1-07.jpeg', caption: 'Les derniers détails avant la signature', rotate: -6, shift: true },
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

        <div className="polaroid-wall">
          {photos.map((p, i) => (
            <figure
              className={`polaroid${p.big ? ' big' : ''}${p.shift ? ' shift' : ''}`}
              key={p.src}
              data-reveal
              style={{ '--i': i, '--r': `${p.rotate}deg` }}
            >
              <img src={p.src} alt={p.caption} loading="lazy" />
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
