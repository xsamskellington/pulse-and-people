import { useEffect } from 'react'

export default function ComingSoon() {
  useEffect(() => {
    document.title = 'Pulse & People | Muy pronto'
  }, [])

  return (
    <div className="cs">
      <div className="cs__visual">
        <img src="/assets/logo-blanco.png" alt="" className="cs__watermark" />
      </div>

      <div className="cs__content">
        <img src="/assets/logo-color.png" alt="Pulse & People" className="cs__logo" />

        <div className="cs__divider" />

        <p className="cs__eyebrow">Consultora de Recursos Humanos</p>

        <h1 className="cs__heading">
          Estamos<br />
          <em>construyendo</em><br />
          algo para vos.
        </h1>

        <p className="cs__sub">
          Muy pronto vas a poder conocer todo lo que tenemos preparado.
          Mientras tanto, podés escribirnos.
        </p>

        <a
          href="https://wa.me/5491165541669"
          className="cs__cta"
          target="_blank"
          rel="noopener"
        >
          Escribinos por WhatsApp →
        </a>

        <a href="mailto:comercial@pulseandpeople.com" className="cs__email">
          comercial@pulseandpeople.com
        </a>
      </div>
    </div>
  )
}
