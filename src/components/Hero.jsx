export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-orbit" aria-hidden="true">
        <span>ETALON</span>
        <span>INVESTMENT</span>
        <span>RABAT · MAROC</span>
      </div>
      <div className="wrap">
        <span className="eyebrow">Rabat, Maroc — Société à Responsabilité Limitée</span>
        <h1>
          La référence à laquelle se&nbsp;<em>calibrent</em> les investissements multisectoriels.
        </h1>

        <div className="hero-grid">
          <div>
            <p className="hero-lede">
              Étalon Investment Trust conçoit, structure et déploie des projets au Maroc et à l'étranger,
              de l'intelligence artificielle aux infrastructures, de la finance à l'aménagement urbain —
              avec la même exigence de mesure et de rigueur que son nom évoque.
            </p>
            <a className="hero-cta" href="/domaines">
              Découvrir nos domaines <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="badges">
            <span className="badge">Forme <b>SARL</b></span>
            <span className="badge">Siège <b>Rabat</b></span>
            <span className="badge">Domaines <b>26</b></span>
            <span className="badge">Portée <b>Maroc &amp; international</b></span>
          </div>
        </div>
      </div>

      <div className="gauge-band" role="presentation">
        <span className="gauge-marker">RÉFÉRENCE</span>
      </div>
    </section>
  )
}
