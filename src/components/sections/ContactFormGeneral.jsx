import { useContactForm } from '../../hooks/useContactForm'
import FormField from '../common/FormField'

const INITIAL = { nombre: '', apellido: '', email: '', telefono: '', mensaje: '' }

export default function ContactFormGeneral() {
  const cn = 'form'
  const { errors, sent, loading, serverError, fieldProps, err, handleSubmit } = useContactForm(INITIAL, 'general')

  return (
    <div className={cn}>
      <h3>Envianos un mensaje</h3>
      <p>Completá el formulario y nos contactaremos a la brevedad.</p>
      <form onSubmit={handleSubmit} noValidate>
        <div className={`${cn}__row`}>
          <FormField label="Nombre" name="nombre" err={err} errors={errors}>
            <input type="text" placeholder="Tu nombre" {...fieldProps('nombre')} />
          </FormField>
          <FormField label="Apellido" name="apellido" err={err} errors={errors}>
            <input type="text" placeholder="Tu apellido" {...fieldProps('apellido')} />
          </FormField>
        </div>
        <div className={`${cn}__row`}>
          <FormField label="Email" name="email" err={err} errors={errors}>
            <input type="email" placeholder="tu@email.com" {...fieldProps('email')} />
          </FormField>
          <FormField label="Teléfono" name="telefono" err={err} errors={errors}>
            <input type="tel" placeholder="+54 9 ..." {...fieldProps('telefono')} />
          </FormField>
        </div>
        <FormField label="Mensaje" name="mensaje" err={err} errors={errors}>
          <textarea placeholder="¿En qué podemos ayudarte?" {...fieldProps('mensaje')} />
        </FormField>
        {serverError && <p className={`${cn}__error`} style={{ marginBottom: '12px' }}>{serverError}</p>}
        <button type="submit" className={`${cn}__submit${sent ? ` ${cn}__submit--sent` : ''}`} disabled={loading}>
          {sent ? '¡Enviado!' : loading ? 'Enviando...' : 'Enviar mensaje'}
        </button>
      </form>
    </div>
  )
}
