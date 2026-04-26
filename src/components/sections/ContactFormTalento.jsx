import { useContactForm } from '../../hooks/useContactForm'
import FormField from '../common/FormField'
import areasOptions from '../../data/areasOptions'

const INITIAL = {
  nombre: '', apellido: '', email: '', telefono: '',
  posicion: '', area: '', presentacion: '',
}

export default function ContactFormTalento() {
  const cn = 'form'
  const { errors, sent, loading, serverError, fieldProps, err, handleSubmit } = useContactForm(INITIAL, 'talento')

  return (
    <div className={cn}>
      <h3>Registrá tu perfil</h3>
      <p>Te avisamos cuando surjan oportunidades que se ajusten a vos.</p>
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
            <input type="tel" placeholder="+54 9 11 ..." {...fieldProps('telefono')} />
          </FormField>
        </div>
        <FormField label="Posición buscada" name="posicion" err={err} errors={errors}>
          <input type="text" placeholder="¿Qué tipo de posición buscás?" {...fieldProps('posicion')} />
        </FormField>
        <FormField label="Área de experiencia" name="area" err={err} errors={errors}>
          <select {...fieldProps('area')}>
            <option value="">Seleccioná tu área</option>
            {areasOptions.map(opt => <option key={opt}>{opt}</option>)}
          </select>
        </FormField>
        <FormField label="Presentación breve" name="presentacion" err={err} errors={errors}>
          <textarea placeholder="Contanos sobre tu experiencia..." {...fieldProps('presentacion')} />
        </FormField>
        {serverError && <p className={`${cn}__error`} style={{ marginBottom: '12px' }}>{serverError}</p>}
        <button type="submit" className={`${cn}__submit${sent ? ` ${cn}__submit--sent` : ''}`} disabled={loading}>
          {sent ? '¡Perfil registrado!' : loading ? 'Enviando...' : 'Registrar perfil'}
        </button>
      </form>
    </div>
  )
}
