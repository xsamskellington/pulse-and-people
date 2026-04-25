import { Link } from 'react-router-dom'

export default function TopBar() {
  return (
    <div className="top-bar">
      Consultora de Recursos Humanos &mdash; Buenos Aires, Argentina &mdash;{' '}
      <Link to="/nosotros">Contactanos</Link>
    </div>
  )
}
