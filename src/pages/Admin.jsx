import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

const STORAGE_KEY = 'pp_admin_auth'
const emptyForm = { titulo: '', empresa: '', modalidad: '', ubicacion: '', descripcion: '' }

export default function Admin() {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [auth, setAuth] = useState(() => sessionStorage.getItem(STORAGE_KEY) || '')
  const [loginLoading, setLoginLoading] = useState(false)
  const [error, setError] = useState('')
  const [vacantes, setVacantes] = useState([])
  const [form, setForm] = useState(emptyForm)
  const [formErrors, setFormErrors] = useState({})
  const [editing, setEditing] = useState(null)
  const [saving, setSaving] = useState(false)
  const [msg, setMsg] = useState('')

  useEffect(() => {
    if (auth) loadVacantes()
  }, [auth])

  async function loadVacantes() {
    const { data } = await supabase
      .from('vacantes')
      .select('*')
      .order('creada_en', { ascending: false })
    setVacantes(data || [])
  }

  async function handleLogin(e) {
    e.preventDefault()
    setLoginLoading(true)
    setError('')
    const res = await fetch('/api/vacancies', {
      method: 'GET',
      headers: { 'x-admin-password': password },
    })
    if (res.status === 401) {
      setError('Contraseña incorrecta')
      setLoginLoading(false)
      return
    }
    sessionStorage.setItem(STORAGE_KEY, password)
    setAuth(password)
    setLoginLoading(false)
  }

  async function apiCall(method, body) {
    const res = await fetch('/api/vacancies', {
      method,
      headers: { 'Content-Type': 'application/json', 'x-admin-password': auth },
      body: JSON.stringify(body),
    })
    if (res.status === 401) {
      sessionStorage.removeItem(STORAGE_KEY)
      setAuth('')
      setError('Sesión expirada. Ingresá de nuevo.')
      return null
    }
    return res.json()
  }

  function validate() {
    const errors = {}
    if (!form.titulo.trim()) errors.titulo = 'Requerido'
    if (!form.empresa.trim()) errors.empresa = 'Requerido'
    if (!form.modalidad.trim()) errors.modalidad = 'Requerido'
    if (!form.ubicacion.trim()) errors.ubicacion = 'Requerido'
    return errors
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errors = validate()
    if (Object.keys(errors).length > 0) { setFormErrors(errors); return }
    setFormErrors({})
    setSaving(true)
    setMsg('')
    const result = editing
      ? await apiCall('PUT', { id: editing, ...form, activa: true })
      : await apiCall('POST', { ...form, activa: true })
    if (result && !result.error) {
      setMsg(editing ? 'Vacante actualizada.' : '¡Vacante publicada!')
      setForm(emptyForm)
      setEditing(null)
      await loadVacantes()
    } else if (result?.error) {
      setMsg('Error: ' + result.error)
    }
    setSaving(false)
  }

  async function handleDelete(id) {
    if (!confirm('¿Eliminar esta vacante?')) return
    await apiCall('DELETE', { id })
    await loadVacantes()
  }

  function handleEdit(v) {
    setEditing(v.id)
    setFormErrors({})
    setMsg('')
    setForm({ titulo: v.titulo, empresa: v.empresa, modalidad: v.modalidad, ubicacion: v.ubicacion, descripcion: v.descripcion || '' })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!auth) {
    return (
      <div className="admin-login">
        <form onSubmit={handleLogin} className="admin-login__form">
          <img src="/assets/logo-color.png" alt="Pulse & People" className="admin-login__logo" />
          <h1>Panel de administración</h1>
          <div className="admin-login__input-wrap">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoFocus
            />
            <button type="button" className="admin-login__eye" onClick={() => setShowPassword(v => !v)}>
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
          {error && <p className="admin-login__error">{error}</p>}
          <button type="submit" disabled={loginLoading}>
            {loginLoading ? 'Verificando...' : 'Ingresar'}
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="admin">
      <div className="admin__header">
        <img src="/assets/logo-color.png" alt="Pulse & People" className="admin__logo" />
        <h1>Gestión de Vacantes</h1>
        <button className="admin__logout" onClick={() => { sessionStorage.removeItem(STORAGE_KEY); setAuth('') }}>
          Cerrar sesión
        </button>
      </div>

      <div className="admin__body container">
        <div className="admin__form-section">
          <h2>{editing ? 'Editar vacante' : 'Agregar nueva vacante'}</h2>
          <form onSubmit={handleSubmit} className="admin__form">
            <label>Título del puesto *
              <input value={form.titulo} onChange={(e) => setForm({ ...form, titulo: e.target.value })} />
              {formErrors.titulo && <span className="admin__field-error">{formErrors.titulo}</span>}
            </label>
            <label>Empresa / Cliente *
              <input value={form.empresa} onChange={(e) => setForm({ ...form, empresa: e.target.value })} />
              {formErrors.empresa && <span className="admin__field-error">{formErrors.empresa}</span>}
            </label>
            <label>Modalidad *
              <input value={form.modalidad} onChange={(e) => setForm({ ...form, modalidad: e.target.value })} placeholder="Ej: Remoto, Híbrido, Presencial" />
              {formErrors.modalidad && <span className="admin__field-error">{formErrors.modalidad}</span>}
            </label>
            <label>Ubicación *
              <input value={form.ubicacion} onChange={(e) => setForm({ ...form, ubicacion: e.target.value })} placeholder="Ej: Buenos Aires" />
              {formErrors.ubicacion && <span className="admin__field-error">{formErrors.ubicacion}</span>}
            </label>
            <label>Descripción / Requisitos
              <textarea rows={5} value={form.descripcion} onChange={(e) => setForm({ ...form, descripcion: e.target.value })} placeholder="Detallá el rol, requisitos, condiciones..." />
            </label>
            {msg && <p className="admin__msg">{msg}</p>}
            <div className="admin__form-actions">
              <button type="submit" disabled={saving}>{saving ? 'Guardando...' : editing ? 'Guardar cambios' : 'Publicar vacante'}</button>
              {editing && <button type="button" onClick={() => { setEditing(null); setForm(emptyForm); setFormErrors({}) }}>Cancelar</button>}
            </div>
          </form>
        </div>

        <div className="admin__list-section">
          <h2>Vacantes publicadas ({vacantes.length})</h2>
          {vacantes.length === 0 ? (
            <p className="admin__empty">No hay vacantes todavía.</p>
          ) : (
            <div className="admin__list">
              {vacantes.map((v) => (
                <div key={v.id} className="admin__item">
                  <div className="admin__item-info">
                    <strong>{v.titulo}</strong>
                    <span>{v.empresa} — {v.ubicacion} — {v.modalidad}</span>
                  </div>
                  <div className="admin__item-actions">
                    <button onClick={() => handleEdit(v)}>Editar</button>
                    <button onClick={() => handleDelete(v.id)} className="admin__delete">Eliminar</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
