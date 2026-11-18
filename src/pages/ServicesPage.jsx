import { useSearchParams } from 'react-router-dom'
import { CATEGORIES, SERVICES } from '../data/services'
import ServiceCard from '../components/ServiceCard'
import { PageTitle } from '../components/ui'
import usePageMeta from '../hooks/usePageMeta'

export default function ServicesPage() {
  // La categoría va en la URL (?categoria=FRENOS) para que cada filtro tenga su propio enlace y metadatos.
  const [searchParams, setSearchParams] = useSearchParams()
  const category = searchParams.get('categoria')
  const activeCategory = CATEGORIES.find((c) => c.value === category) ?? null

  usePageMeta(
    activeCategory ? `${activeCategory.label} para Motos en Pasto` : 'Servicios de Mecánica para Motos',
    activeCategory
      ? activeCategory.seoDescription
      : 'Cambio de aceite, frenos, motor, suspensión, sistema eléctrico y mantenimiento general para tu moto en Pasto, Nariño. Cotización por WhatsApp.',
  )

  const visible = activeCategory ? SERVICES.filter((s) => s.category === activeCategory.value) : SERVICES

  return (
    <>
      <PageTitle title={activeCategory ? activeCategory.label : 'Servicios'}>
        {activeCategory
          ? activeCategory.seoDescription
          : 'Agrega los que necesites y envíalos todos en un solo mensaje por WhatsApp.'}
      </PageTitle>

      <section className="mx-auto max-w-6xl px-4">
        <div className="clay-scroll-row flex gap-3 overflow-x-auto">
          {[{ value: null, label: 'Todos' }, ...CATEGORIES].map((cat) => {
            const active = (activeCategory?.value ?? null) === cat.value
            return (
              <button
                key={cat.label}
                type="button"
                onClick={() => setSearchParams(cat.value ? { categoria: cat.value } : {}, { replace: true })}
                aria-pressed={active}
                className={`clay-btn shrink-0 px-5 py-2.5 text-sm ${
                  active ? 'clay-pressed clay-accion-text' : 'clay'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>
    </>
  )
}
