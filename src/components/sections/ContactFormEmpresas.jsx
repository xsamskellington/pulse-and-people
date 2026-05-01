import { useContactForm } from '../../hooks/useContactForm'
import FormField from '../common/FormField'
import serviciosOptions from '../../data/serviciosOptions'

const INITIAL = {
  nombre: '', apellido: '', empresa: '', posicion: '',
  email: '', telefono: '', servicio: '', mensaje: '',
}

export default function ContactFormEmpresas() {
  const cn = 'form'
  const { errors, sent, loading, serverError, fieldProps, err, handleSubmit } = useContactForm(INITIAL, 'empresa')

  return (
    <div className={cn}>
      <h3>Escribinos</h3>
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
          <FormField label="Empresa" name="empresa" err={err} errors={errors}>
            <input type="text" placeholder="Nombre de la empresa" {...fieldProps('empresa')} />
          </FormField>
          <FormField label="Posición" name="posicion" err={err} errors={errors}>
            <input type="text" placeholder="Tu cargo actual" {...fieldProps('posicion')} />
          </FormField>
        </div>
        <div className={`${cn}__row`}>
          <FormField label="Email" name="email" err={err} errors={errors}>
            <input type="email" placeholder="tu@empresa.com" {...fieldProps('email')} />
          </FormField>
          <FormField label="Teléfono" name="telefono" err={err} errors={errors}>
            <input type="tel" placeholder="+54 9 ..." {...fieldProps('telefono')} />
          </FormField>
        </div>
        <FormField label="Servicio de interés" name="servicio" err={err} errors={errors}>
          <select {...fieldProps('servicio')}>
            <option value="">Seleccioná un servicio</option>
            {serviciosOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
        </FormField>
        <FormField label="Mensaje" name="mensaje" err={err} errors={errors}>
          <textarea placeholder="Contanos más sobre lo que necesitás..." {...fieldProps('mensaje')} />
        </FormField>
        {serverError && <p className={`${cn}__error`} style={{ marginBottom: '12px' }}>{serverError}</p>}
        <button type="submit" className={`${cn}__submit${sent ? ` ${cn}__submit--sent` : ''}`} disabled={loading}>
          {sent ? '¡Enviado!' : loading ? 'Enviando...' : 'Enviar consulta'}
        </button>
      </form>
    </div>
  )
}
