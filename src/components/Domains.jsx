import {
  Cpu, RefreshCw, CreditCard, Server, Building2, Construction, HardHat, Wheat, Beef, Sun,
  Pickaxe, Fuel, Droplet, Hospital, PlaneTakeoff, Truck, Hotel, Palette, GraduationCap, Gavel,
  LineChart, Handshake, ShoppingBag, Building, Cable, Landmark,
} from 'lucide-react'
import domains from '../data/domains.js'

const ICONS = {
  Cpu, RefreshCw, CreditCard, Server, Building2, Construction, HardHat, Wheat, Beef, Sun,
  Pickaxe, Fuel, Droplet, Hospital, PlaneTakeoff, Truck, Hotel, Palette, GraduationCap, Gavel,
  LineChart, Handshake, ShoppingBag, Building, Cable, Landmark,
}

export default function Domains() {
  return (
    <section id="domaines">
      <div className="wrap">
        <div className="section-head" data-reveal>
          <div>
            <span className="eyebrow">Champ d'intervention</span>
            <h2>26 domaines d'activité</h2>
          </div>
          <span className="count">Tel qu'énuméré à l'Article 3 des statuts</span>
        </div>

        <div className="domain-list">
          {domains.map((d, i) => {
            const Icon = ICONS[d.icon]
            return (
              <div className="domain" key={d.num} data-reveal style={{ '--i': i % 6 }}>
                <div className="domain-top">
                  <Icon className="domain-icon" strokeWidth={1.4} aria-hidden="true" />
                  <span className="domain-num">{d.num}</span>
                </div>
                <h3>{d.title}</h3>
                <p className="domain-desc">{d.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
