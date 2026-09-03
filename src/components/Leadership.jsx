import { LineChart, HardHat, Gavel, Handshake } from 'lucide-react'

const team = [
  { icon: LineChart, title: 'Stratégie & Investissement', description: "Structuration financière, analyse et pilotage des projets d'investissement." },
  { icon: HardHat, title: 'Technique & Projets', description: "Ingénieurs et experts sectoriels qui pilotent l'exécution sur le terrain." },
  { icon: Gavel, title: 'Juridique & Conformité', description: "Encadrement réglementaire et gouvernance à chaque étape des projets." },
  { icon: Handshake, title: 'Partenariats & Développement', description: 'Développement de nouvelles collaborations au Maroc et à l’international.' },
]

export default function Leadership() {
  return (
    <>
      <section id="direction">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <span className="eyebrow">Direction</span>
              <h2>Une direction qui a déjà fait ses preuves</h2>
            </div>
            <p className="section-aside">La continuité Stallion → Étalon, incarnée.</p>
          </div>

          <div className="leader-card" data-reveal>
            <div className="leader-photo">
              <img src="/leadership-ndiya-kabadi.jpg" alt="Ndiya Kabadi, Directeur Général" width="810" height="1080" />
            </div>
            <div className="leader-info">
              <span className="leader-role">Directeur Général</span>
              <h3>Ndiya Kabadi</h3>
              <p>
                À la tête de <strong>Stallion Investment</strong> puis d'<strong>Étalon Investment Trust</strong>,
                Ndiya Kabadi structure des projets à forte valeur ajoutée entre le Tchad, le Maroc et
                l'international. Sa démarche conjugue vision stratégique, exécution rigoureuse et discipline
                financière — la même exigence de mesure que son nom évoque.
              </p>
              <p className="leader-quote">« La rigueur est la mesure de toute ambition. »</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section id="equipe">
        <div className="wrap">
          <div className="section-head" data-reveal>
            <div>
              <span className="eyebrow">Collaboration</span>
              <h2>Une équipe dynamique</h2>
            </div>
            <p className="section-aside">
              Comme chez Stallion Investment, Étalon s'appuie sur une équipe pluridisciplinaire mobilisée sur
              ses 26 domaines d'intervention.
            </p>
          </div>

          <div className="team-list">
            {team.map(({ icon: Icon, title, description }, i) => (
              <div className="team-card" key={title} data-reveal style={{ '--i': i }}>
                <Icon className="team-icon" strokeWidth={1.4} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
