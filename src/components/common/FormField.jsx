export default function FormField({ label, name, err, errors, children }) {
  return (
    <div className={`form__field${err(name) ? ' form__field--error' : ''}`}>
      <label>{label}</label>
      {children}
      {err(name) && <span className="form__error">{errors[name]}</span>}
    </div>
  )
}
