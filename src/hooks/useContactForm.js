import { useState } from 'react'
import { validateName, validateEmail, validatePhone, filterPhone, filterLetters } from '../utils/validation'

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

export function useContactForm(initial, type) {
  const [form, setForm] = useState(initial)
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
        body: JSON.stringify({ type, ...form }),
      })
      if (!res.ok) throw new Error()
      setSent(true)
      setTimeout(() => {
        setSent(false)
        setForm(initial)
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

  return { form, errors, sent, loading, serverError, fieldProps, err, handleSubmit }
}
