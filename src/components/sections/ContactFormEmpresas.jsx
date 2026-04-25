import { useState } from 'react'

export default function ContactFormEmpresas() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      e.target.reset()
    }, 3000)
  }

  return (
    <div className="form-card">
      <h3>Consultá con nosotros</h3>
      <p>Completá el formulario y nos contactaremos a la brevedad.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre" required />
          </div>
          <div className="form-group">
            <label>Apellido</label>
            <input type="text" placeholder="Tu apellido" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Empresa</label>
            <input type="text" placeholder="Nombre de la empresa" />
          </div>
          <div className="form-group">
            <label>Posición</label>
            <input type="text" placeholder="Tu cargo actual" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="tu@empresa.com" required />
          </div>
          <div className="form-group">
            <label>Teléfono</label>
            <input type="tel" placeholder="+54 9 11 ..." />
          </div>
        </div>
        <div className="form-group">
          <label>Servicio de interés</label>
          <select>
            <option value="">Seleccioná un servicio</option>
            <option>Reclutamiento y Selección</option>
            <option>Capacitación y Desarrollo</option>
            <option>Clima Organizacional</option>
            <option>Transformación Cultural</option>
            <option>Comunicación Interna</option>
            <option>Organización de Eventos</option>
            <option>Pulse &amp; People On Demand</option>
            <option>Otro</option>
          </select>
        </div>
        <div className="form-group">
          <label>Mensaje</label>
          <textarea placeholder="Contanos más sobre lo que necesitás..." />
        </div>
        <button type="submit" className={`btn-submit${sent ? ' sent' : ''}`}>
          {sent ? '¡Enviado!' : 'Enviar consulta'}
        </button>
      </form>
    </div>
  )
}
