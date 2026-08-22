import { useState } from 'react'

const initialForm = { name: '', email: '', company: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        throw new Error(data.error || "L'envoi a échoué. Merci de réessayer.")
      }

      setStatus('sent')
      setForm(initialForm)
    } catch (err) {
      setStatus('error')
      setError(err.message)
    }
  }

  if (status === 'sent') {
    return (
      <div className="contact-confirm">
        <span className="eyebrow">Message envoyé</span>
        <p>Merci, votre message a bien été transmis. Nous revenons vers vous rapidement.</p>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name">Nom</label>
        <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
      </div>
      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
      </div>
      <div className="form-row">
        <label htmlFor="company">Société (facultatif)</label>
        <input id="company" name="company" type="text" value={form.company} onChange={handleChange} />
      </div>
      <div className="form-row">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="4" required value={form.message} onChange={handleChange} />
      </div>

      {status === 'error' && <p className="form-error">{error}</p>}

      <button type="submit" className="submit-btn" disabled={status === 'sending'}>
        {status === 'sending' ? 'Envoi…' : 'Envoyer'}
      </button>
    </form>
  )
}
