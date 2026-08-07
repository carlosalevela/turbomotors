import { Link, useParams } from 'react-router-dom'
import { SERVICES, CATEGORIES, formatCOP } from '../data/services'
import WhatsAppButton from '../components/WhatsAppButton'

export default function ServiceDetailPage() {
  const { id } = useParams()
  const service = SERVICES.find((s) => String(s.id) === id)

  if (!service) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 text-center">
        <p className="text-neutral-600">Servicio no encontrado.</p>
        <Link to="/servicios" className="mt-4 inline-block text-sm font-medium text-neutral-900 underline">
          Volver a servicios
        </Link>
      </div>
    )
  }

  const categoryLabel = CATEGORIES.find((c) => c.value === service.category)?.label

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <Link to="/servicios" className="mb-6 inline-block text-sm text-neutral-500 hover:text-neutral-900">
        ← Volver a servicios
      </Link>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {service.beforeImageUrl ? (
          <div className="grid grid-cols-2 gap-2">
            <div className="flex h-full flex-col overflow-hidden rounded-xl bg-neutral-100">
              <img
                src={service.beforeImageUrl}
                alt={`${service.name} - antes`}
                className="aspect-square min-h-0 flex-1 object-cover"
              />
              <p className="shrink-0 bg-neutral-900 py-1 text-center text-xs font-semibold text-white uppercase">
                Antes
              </p>
            </div>
            <div className="flex h-full flex-col overflow-hidden rounded-xl bg-neutral-100">
              <img
                src={service.imageUrl}
                alt={`${service.name} - después`}
                className="aspect-square min-h-0 flex-1 object-cover"
              />
              <p className="shrink-0 bg-red-600 py-1 text-center text-xs font-semibold text-white uppercase">
                Después
              </p>
            </div>
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl bg-neutral-100">
            <img src={service.imageUrl} alt={service.name} className="h-full w-full object-cover" />
          </div>
        )}
        <div className="flex flex-col gap-4">
          <div>
            <span className="text-xs font-medium tracking-wide text-red-600 uppercase">
              {categoryLabel}
            </span>
            <h1 className="mt-1 text-2xl font-bold text-neutral-900">{service.name}</h1>
          </div>
          <p className="text-2xl font-bold text-red-700">
            {service.priceNote} {formatCOP(service.price)}
          </p>
          <p className="text-neutral-600">{service.description}</p>
          <WhatsAppButton
            message={`Hola, quiero cotizar: ${service.name}`}
            className="w-fit"
          >
            Cotizar por WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </div>
  )
}
