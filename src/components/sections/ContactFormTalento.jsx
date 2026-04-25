import { useState } from 'react'

export default function ContactFormTalento() {
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
      <h3>Registrá tu perfil</h3>
      <p>Te avisamos cuando surjan oportunidades que se ajusten a vos.</p>
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
            <label>Email</label>
            <input type="email" placeholder="tu@email.com" required />
          </div>
          <div className="form-group">
            <label>Teléfono</label>
            <input type="tel" placeholder="+54 9 11 ..." />
          </div>
        </div>
        <div className="form-group">
          <label>Posición buscada</label>
          <input type="text" placeholder="¿Qué tipo de posición buscás?" />
        </div>
        <div className="form-group">
          <label>Área de experiencia</label>
          <select>
            <option value="">Seleccioná tu área</option>
            <option>Recursos Humanos</option>
            <option>Administración y Finanzas</option>
            <option>Comercial / Ventas</option>
            <option>Marketing</option>
            <option>Tecnología / IT</option>
            <option>Operaciones / Logística</option>
            <option>Legal</option>
            <option>Otro</option>
          </select>
        </div>
        <div className="form-group">
          <label>Presentación breve</label>
          <textarea placeholder="Contanos sobre tu experiencia..." />
        </div>
        <button type="submit" className={`btn-submit${sent ? ' sent' : ''}`}>
          {sent ? '¡Perfil registrado!' : 'Registrar perfil'}
        </button>
      </form>
    </div>
  )
}
