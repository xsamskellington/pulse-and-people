import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
)

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-admin-password')

  if (req.method === 'OPTIONS') return res.status(200).end()

  if (req.headers['x-admin-password'] !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: 'No autorizado' })
  }

  const { method, body } = req

  if (method === 'POST') {
    const { data, error } = await supabase
      .from('vacantes')
      .insert([body])
      .select()
    if (error) return res.status(500).json({ error: error.message })
    return res.status(201).json(data[0])
  }

  if (method === 'PUT') {
    const { id, ...fields } = body
    const { data, error } = await supabase
      .from('vacantes')
      .update(fields)
      .eq('id', id)
      .select()
    if (error) return res.status(500).json({ error: error.message })
    return res.status(200).json(data[0])
  }

  if (method === 'DELETE') {
    const { id } = body
    const { error } = await supabase.from('vacantes').delete().eq('id', id)
    if (error) return res.status(500).json({ error: error.message })
    return res.status(200).json({ ok: true })
  }

  return res.status(405).json({ error: 'Método no permitido' })
}
