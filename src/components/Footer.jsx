import ContactForm from './ContactForm.jsx'

export default function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Étalon Investment Trust</div>
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
            <span className="eyebrow">Nous contacter</span>
            <ContactForm />
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
