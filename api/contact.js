import { getDb } from '../lib/mongodb.js'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Méthode non autorisée.' })
  }

  const { name, email, company, message } = req.body || {}

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Nom, email et message sont requis.' })
  }
  if (typeof email !== 'string' || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Adresse email invalide.' })
  }

  try {
    const db = await getDb()
    await db.collection('contacts').insertOne({
      name: String(name).slice(0, 200),
      email: String(email).slice(0, 200),
      company: company ? String(company).slice(0, 200) : null,
      message: String(message).slice(0, 4000),
      createdAt: new Date(),
    })

    return res.status(201).json({ ok: true })
  } catch (err) {
    console.error('contact insert failed', err)
    return res.status(500).json({ error: 'Une erreur est survenue. Merci de réessayer.' })
  }
}
