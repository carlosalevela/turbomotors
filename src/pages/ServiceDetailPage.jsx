import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SERVICES, CATEGORIES } from '../data/services'
import { buildWhatsAppUrl } from '../config/shopInfo'
import ServiceCard from '../components/ServiceCard'
import { AddButton, MoreLink, WhatsAppIcon } from '../components/ui'
import usePageMeta from '../hooks/usePageMeta'

function Photo({ src, alt, label, labelClass }) {
  return (
    <div className="clay-well flex flex-col">
      <img src={src} alt={alt} className="aspect-square w-full rounded-[18px] object-cover" />
      {label && <p className={`mt-2 rounded-full py-1 text-center text-xs font-bold uppercase ${labelClass}`}>{label}</p>}
    </div>
  )
}

export default function ServiceDetailPage() {
  const { id } = useParams()
  const service = SERVICES.find((s) => String(s.id) === id)

  usePageMeta(
    service ? `${service.name} en Pasto` : 'Servicio no encontrado',
    service
      ? `${service.description} Cotiza por WhatsApp en Turbo Motors, taller de motos en Pasto, Nariño.`
      : undefined,
  )

  // Datos estructurados (schema.org) del servicio para Google.
  useEffect(() => {
    if (!service) return undefined

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.description,
      provider: {
        '@type': 'AutoRepair',
        name: 'Turbo Motors',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Carrera 10 Este, El Triunfo',
          addressLocality: 'Pasto',
          addressRegion: 'Nariño',
          addressCountry: 'CO',
        },
      },
      areaServed: 'Pasto, Nariño, Colombia',
    })
    document.head.appendChild(script)

    return () => script.remove()
  }, [service])

  if (!service) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="clay-display text-4xl">Servicio no encontrado</h1>
        <p className="clay-muted mt-3">Puede que el enlace esté mal escrito.</p>
        <div className="mt-8">
          <MoreLink to="/servicios">Ver todos los servicios</MoreLink>
        </div>
      </div>
    )
  }

  const category = CATEGORIES.find((c) => c.value === service.category)
  const related = SERVICES.filter((s) => s.category === service.category && s.id !== service.id)

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:pt-12">
        <Link to="/servicios" className="clay-muted text-sm font-semibold hover:text-[var(--accion)]">
          ← Todos los servicios
        </Link>

        <div className="mt-6 grid items-start gap-8 md:grid-cols-2">
          <div className="clay p-3">
            {service.beforeImageUrl ? (
              <div className="grid grid-cols-2 gap-3">
                <Photo
                  src={service.beforeImageUrl}
                  alt={`${service.name} - antes`}
                  label="Antes"
                  labelClass="clay-muted"
                />
                <Photo
                  src={service.imageUrl}
                  alt={`${service.name} - después`}
                  label="Después"
                  labelClass="clay-accion-text"
                />
              </div>
            ) : (
              <Photo src={service.imageUrl} alt={service.name} />
            )}
          </div>

          <div className="flex flex-col gap-5 md:pt-4">
            {category && (
              <Link
                to={`/servicios?categoria=${category.value}`}
                className="clay-chip w-fit rounded-full px-4 py-1.5 text-xs font-bold tracking-wide uppercase"
              >
                {category.label}
              </Link>
            )}
            <h1 className="clay-display text-4xl sm:text-5xl">{service.name}</h1>
            <p className="clay-muted text-lg">{service.description}</p>
            <p className="clay-muted text-sm">
              El precio depende de tu moto. Agrégalo a tu cotización o pregúntanos directo por WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3">
              <AddButton id={service.id} size="lg" labels={['Agregar a cotización', 'Agregado a cotización']} />
              <a
                href={buildWhatsAppUrl(`Hola, quiero cotizar: ${service.name}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="clay-btn clay flex items-center gap-2 px-7 py-4 text-sm"
              >
                <WhatsAppIcon className="h-4 w-4 text-[var(--verde)]" />
                Preguntar solo por este
              </a>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pt-16">
          <h2 className="clay-display text-3xl sm:text-4xl">Otros servicios de {category?.label.toLowerCase()}</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
          </div>
        </section>
      )}
    </>
  )
}
