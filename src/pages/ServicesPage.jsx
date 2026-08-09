import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CATEGORIES, SERVICES } from '../data/services'
import ServiceCard from '../components/ServiceCard'
import CategoryFilter from '../components/CategoryFilter'
import usePageMeta from '../hooks/usePageMeta'

export default function ServicesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [category, setCategory] = useState(searchParams.get('categoria'))

  const activeCategory = category ? CATEGORIES.find((c) => c.value === category) : null

  usePageMeta(
    activeCategory ? `${activeCategory.label} para Motos en Pasto` : 'Servicios de Mecánica para Motos',
    activeCategory
      ? activeCategory.seoDescription
      : 'Cambio de aceite, frenos, motor, suspensión, sistema eléctrico y mantenimiento general para tu moto en Pasto, Nariño. Precios y cotización por WhatsApp.',
  )

  const handleChange = (value) => {
    setCategory(value)
    setSearchParams(value ? { categoria: value } : {})
  }

  const filtered = useMemo(
    () => (category ? SERVICES.filter((s) => s.category === category) : SERVICES),
    [category],
  )

  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8">
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">
          {activeCategory ? `${activeCategory.label} para motos en Pasto` : 'Servicios de mecánica para motos en Pasto'}
        </h1>
        <p className="mt-1 text-neutral-600">
          {activeCategory
            ? activeCategory.seoDescription
            : 'Aceite, frenos, motor, suspensión, sistema eléctrico y mantenimiento general.'}
        </p>
      </div>

      <CategoryFilter selected={category} onChange={handleChange} />

      {filtered.length === 0 ? (
        <p className="py-12 text-center text-neutral-500">
          No hay servicios en esta categoría por ahora.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </div>
  )
}
