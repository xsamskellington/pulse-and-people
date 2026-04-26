import { useState } from 'react'
import { validateName, validateEmail, validatePhone, filterPhone, filterLetters } from '../../utils/validation'

const INITIAL = {
  nombre: '', apellido: '', empresa: '', posicion: '',
  email: '', telefono: '', servicio: '', mensaje: '',
}

function validate(form) {
  const errors = {}
  const nombre = validateName(form.nombre)
  if (nombre) errors.nombre = nombre
  const apellido = validateName(form.apellido)
  if (apellido) errors.apellido = apellido
  const email = validateEmail(form.email)
  if (email) errors.email = email
  const telefono = validatePhone(form.telefono)
  if (telefono) errors.telefono = telefono
  return errors
}

export default function ContactFormEmpresas() {
  const defaultClassName = 'form'
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [serverError, setServerError] = useState(null)

  const handleChange = (e) => {
    let { name, value } = e.target
    if (name === 'nombre' || name === 'apellido') value = filterLetters(value)
    if (name === 'telefono') value = filterPhone(value)
    setForm(f => ({ ...f, [name]: value }))
    if (touched[name]) {
      const all = validate({ ...form, [name]: value })
      setErrors(prev => ({ ...prev, [name]: all[name] }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(t => ({ ...t, [name]: true }))
    const all = validate(form)
    setErrors(prev => ({ ...prev, [name]: all[name] }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const all = validate(form)
    setErrors(all)
    setTouched({ nombre: true, apellido: true, email: true, telefono: true })
    if (Object.keys(all).length > 0) return

    setLoading(true)
    setServerError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'empresa', ...form }),
      })
      if (!res.ok) throw new Error()
      setSent(true)
      setTimeout(() => {
        setSent(false)
        setForm(INITIAL)
        setErrors({})
        setTouched({})
      }, 3000)
    } catch {
      setServerError('Hubo un problema al enviar. Intentá de nuevo o escribinos a comercial@pulseandpeople.com')
    } finally {
      setLoading(false)
    }
  }

  const fieldProps = (name) => ({
    name,
    value: form[name],
    onChange: handleChange,
    onBlur: handleBlur,
  })

  const err = (name) => touched[name] && errors[name]

  return (
    <div className={defaultClassName}>
      <h3>Consultá con nosotros</h3>
      <p>Completá el formulario y nos contactaremos a la brevedad.</p>
      <form onSubmit={handleSubmit} noValidate>
        <div className={`${defaultClassName}__row`}>
          <div className={`${defaultClassName}__field${err('nombre') ? ` ${defaultClassName}__field--error` : ''}`}>
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre" {...fieldProps('nombre')} />
            {err('nombre') && <span className={`${defaultClassName}__error`}>{errors.nombre}</span>}
          </div>
          <div className={`${defaultClassName}__field${err('apellido') ? ` ${defaultClassName}__field--error` : ''}`}>
            <label>Apellido</label>
            <input type="text" placeholder="Tu apellido" {...fieldProps('apellido')} />
            {err('apellido') && <span className={`${defaultClassName}__error`}>{errors.apellido}</span>}
          </div>
        </div>
        <div className={`${defaultClassName}__row`}>
          <div className={`${defaultClassName}__field`}>
            <label>Empresa</label>
            <input type="text" placeholder="Nombre de la empresa" {...fieldProps('empresa')} />
          </div>
          <div className={`${defaultClassName}__field`}>
            <label>Posición</label>
            <input type="text" placeholder="Tu cargo actual" {...fieldProps('posicion')} />
          </div>
        </div>
        <div className={`${defaultClassName}__row`}>
          <div className={`${defaultClassName}__field${err('email') ? ` ${defaultClassName}__field--error` : ''}`}>
            <label>Email</label>
            <input type="email" placeholder="tu@empresa.com" {...fieldProps('email')} />
            {err('email') && <span className={`${defaultClassName}__error`}>{errors.email}</span>}
          </div>
          <div className={`${defaultClassName}__field${err('telefono') ? ` ${defaultClassName}__field--error` : ''}`}>
            <label>Teléfono</label>
            <input type="tel" placeholder="+54 9 11 ..." {...fieldProps('telefono')} />
            {err('telefono') && <span className={`${defaultClassName}__error`}>{errors.telefono}</span>}
          </div>
        </div>
        <div className={`${defaultClassName}__field`}>
          <label>Servicio de interés</label>
          <select {...fieldProps('servicio')}>
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
        <div className={`${defaultClassName}__field`}>
          <label>Mensaje</label>
          <textarea placeholder="Contanos más sobre lo que necesitás..." {...fieldProps('mensaje')} />
        </div>
        {serverError && <p className={`${defaultClassName}__error`} style={{ marginBottom: '12px' }}>{serverError}</p>}
        <button type="submit" className={`${defaultClassName}__submit${sent ? ` ${defaultClassName}__submit--sent` : ''}`} disabled={loading}>
          {sent ? '¡Enviado!' : loading ? 'Enviando...' : 'Enviar consulta'}
        </button>
      </form>
    </div>
  )
}
