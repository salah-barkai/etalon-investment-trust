const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Imm+9+Rue+Ryad+Appt+5+Hassan+Rabat+Maroc'

export default function Location() {
  return (
    <section id="localisation">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <div>
            <span className="eyebrow">Siège social</span>
            <h2>Nous localiser à Rabat</h2>
          </div>
        </div>

        <div className="loc-grid" data-reveal>
          <div className="coord-panel">
            <div className="coord-row">
              <span className="coord-label">Adresse</span>
              <span className="coord-value address">
                Imm 9, Rue Ryad, Appt N° 5
                <br />
                Hassan, Rabat, Maroc
              </span>
            </div>
            <div className="coord-row">
              <span className="coord-label">Domiciliation</span>
              <span className="coord-value">Chez la société Domway Consulting SARL</span>
            </div>
            <div className="coord-row">
              <span className="coord-label">Quartier</span>
              <span className="coord-value">Hassan</span>
            </div>
            <div className="coord-row">
              <span className="coord-label">Ville</span>
              <span className="coord-value">Rabat, Maroc</span>
            </div>
          </div>

          <div className="map-card">
            <div className="pin" aria-hidden="true" />
            <div className="map-caption">
              <a className="maps-link" href={MAPS_URL} target="_blank" rel="noopener">
                Ouvrir dans Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
