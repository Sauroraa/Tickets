import { useEffect, useRef } from 'react'
import { event } from '../data/eventData'
import './Billetterie.css'

export default function Billetterie() {
  const widgetRef = useRef(null)

  useEffect(() => {
    if (!widgetRef.current) return

    const link = document.createElement('a')
    link.title = 'Billetterie en ligne'
    link.href = event.weezevent.url
    link.className = 'weezevent-widget-integration'
    link.setAttribute('data-src', event.weezevent.url)
    link.setAttribute('data-id', event.weezevent.id)
    link.setAttribute('data-resize', '1')
    link.setAttribute('data-width_auto', '1')
    link.setAttribute('data-noscroll', '0')
    link.setAttribute('data-use-container', 'yes')
    link.setAttribute('data-type', 'neo')
    link.target = '_blank'
    link.textContent = 'Billetterie Weezevent'

    widgetRef.current.innerHTML = ''
    widgetRef.current.appendChild(link)

    const script = document.createElement('script')
    script.src = 'https://widget.weezevent.com/weez.js'
    script.async = true
    widgetRef.current.appendChild(script)
  }, [])

  return (
    <section id="billetterie" className="billetterie">
      <h2 className="section-title">BILLETTERIE OFFICIELLE</h2>
      <p className="billetterie__reassurance">
        Paiement sécurisé via Weezevent. Tickets envoyés instantanément par email.
      </p>
      <div className="billetterie__widget" ref={widgetRef} />
    </section>
  )
}
