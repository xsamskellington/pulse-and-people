import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const TO = 'comercial@pulseandpeople.com'

function empresaHtml(d) {
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#282626">
      <div style="background:#F77A36;padding:24px 32px">
        <h2 style="color:white;margin:0;font-size:20px">Nueva consulta de empresa</h2>
      </div>
      <div style="padding:32px;background:#FFFBF7">
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#767574;width:160px">Nombre</td><td style="padding:8px 0"><strong>${d.nombre} ${d.apellido}</strong></td></tr>
          ${d.empresa   ? `<tr><td style="padding:8px 0;color:#767574">Empresa</td><td style="padding:8px 0">${d.empresa}</td></tr>` : ''}
          ${d.posicion  ? `<tr><td style="padding:8px 0;color:#767574">Posición</td><td style="padding:8px 0">${d.posicion}</td></tr>` : ''}
          <tr><td style="padding:8px 0;color:#767574">Email</td><td style="padding:8px 0"><a href="mailto:${d.email}" style="color:#F77A36">${d.email}</a></td></tr>
          ${d.telefono  ? `<tr><td style="padding:8px 0;color:#767574">Teléfono</td><td style="padding:8px 0">${d.telefono}</td></tr>` : ''}
          ${d.servicio  ? `<tr><td style="padding:8px 0;color:#767574">Servicio</td><td style="padding:8px 0">${d.servicio}</td></tr>` : ''}
        </table>
        ${d.mensaje ? `<div style="margin-top:24px;padding:20px;background:#FFF5E4;border-radius:8px"><p style="margin:0 0 8px;color:#767574;font-size:12px;text-transform:uppercase;letter-spacing:1px">Mensaje</p><p style="margin:0">${d.mensaje.replace(/\n/g, '<br>')}</p></div>` : ''}
      </div>
      <div style="padding:16px 32px;background:#FDD9AF;font-size:12px;color:#767574;text-align:center">
        Pulse &amp; People — comercial@pulseandpeople.com
      </div>
    </div>
  `
}

function talentoHtml(d) {
  return `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#282626">
      <div style="background:#000000;padding:24px 32px">
        <h2 style="color:white;margin:0;font-size:20px">Nuevo registro de perfil</h2>
      </div>
      <div style="padding:32px;background:#FFFBF7">
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:8px 0;color:#767574;width:160px">Nombre</td><td style="padding:8px 0"><strong>${d.nombre} ${d.apellido}</strong></td></tr>
          <tr><td style="padding:8px 0;color:#767574">Email</td><td style="padding:8px 0"><a href="mailto:${d.email}" style="color:#F77A36">${d.email}</a></td></tr>
          ${d.telefono     ? `<tr><td style="padding:8px 0;color:#767574">Teléfono</td><td style="padding:8px 0">${d.telefono}</td></tr>` : ''}
          ${d.posicion     ? `<tr><td style="padding:8px 0;color:#767574">Posición buscada</td><td style="padding:8px 0">${d.posicion}</td></tr>` : ''}
          ${d.area         ? `<tr><td style="padding:8px 0;color:#767574">Área</td><td style="padding:8px 0">${d.area}</td></tr>` : ''}
        </table>
        ${d.presentacion ? `<div style="margin-top:24px;padding:20px;background:#FFF5E4;border-radius:8px"><p style="margin:0 0 8px;color:#767574;font-size:12px;text-transform:uppercase;letter-spacing:1px">Presentación</p><p style="margin:0">${d.presentacion.replace(/\n/g, '<br>')}</p></div>` : ''}
      </div>
      <div style="padding:16px 32px;background:#FDD9AF;font-size:12px;color:#767574;text-align:center">
        Pulse &amp; People — comercial@pulseandpeople.com
      </div>
    </div>
  `
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { type, ...data } = req.body

  const subjects = {
    empresa: `Consulta Empresas — ${data.nombre} ${data.apellido}`,
    talento: `Registro de Perfil — ${data.nombre} ${data.apellido}`,
    general: `Consulta — ${data.nombre} ${data.apellido}`,
  }

  const htmls = {
    empresa: empresaHtml(data),
    talento: talentoHtml(data),
    general: empresaHtml(data),
  }

  const { error } = await resend.emails.send({
    from: 'Pulse & People <noreply@pulseandpeople.com>',
    to: TO,
    reply_to: data.email,
    subject: subjects[type] ?? `Consulta — ${data.nombre} ${data.apellido}`,
    html: htmls[type] ?? empresaHtml(data),
  })

  if (error) {
    console.error('Resend error:', error)
    return res.status(500).json({ error: 'No se pudo enviar el email' })
  }

  return res.status(200).json({ ok: true })
}
