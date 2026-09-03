import ContactForm from './ContactForm.jsx'

export default function Footer({ showContact = false }) {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="footer-grid" data-reveal>
          <div>
            <img className="footer-logo" src="/etalon-logo.png" alt="Étalon Investment Trust" width="180" height="195" />
            <p className="footer-legal">
              Société à Responsabilité Limitée régie par la loi n° 5-96 relative aux sociétés à
              responsabilité limitée, en vigueur au Maroc.
            </p>
            <p className="footer-legal">
              Imm 9, Rue Ryad, Appt N° 5
              <br />
              Hassan, Rabat, Maroc
              <br />
              Domiciliée chez Domway Consulting SARL
            </p>
          </div>

          <div className="footer-contact">
            <span className="eyebrow">{showContact ? 'Nous écrire' : 'Une question ?'}</span>
            {showContact ? (
              <ContactForm />
            ) : (
              <div className="footer-cta">
                <p>Parlons de votre prochain projet et des opportunités à structurer ensemble.</p>
                <a href="/contact">Accéder au formulaire <span aria-hidden="true">→</span></a>
              </div>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Etalon Investment Trust SARL</span>
          <span>Rabat · Maroc</span>
        </div>
      </div>
    </footer>
  )
}
