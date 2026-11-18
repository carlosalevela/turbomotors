import { useState } from 'react'
import { OILS, MAINTENANCE_PRODUCTS, SHELF_PHOTO } from '../data/products'
import { SERVICES } from '../data/services'
import { useQuote } from '../context/QuoteContext'
import { AddButton as BaseAddButton, PageTitle } from '../components/ui'
import usePageMeta from '../hooks/usePageMeta'

const OIL_CHANGE = SERVICES.find((s) => s.id === 1)

function AddButton({ id, compact = false }) {
  return <BaseAddButton id={id} size={compact ? 'sm' : 'md'} className={compact ? 'shrink-0' : 'w-full'} />
}

function OilCard({ oil }) {
  return (
    <article className="clay flex flex-col p-3">
      <div className="clay-well relative">
        <img src={oil.imageUrl} alt={oil.name} loading="lazy" className="aspect-[3/4] w-full rounded-[18px] object-cover" />
        <span className="clay-chip absolute top-4 left-4 rounded-full px-2.5 py-0.5 text-xs font-bold">{oil.engine}</span>
      </div>
      <div className="flex flex-1 flex-col px-2 pt-3 pb-3">
        <p className="clay-muted text-xs font-bold tracking-wide uppercase">{oil.brand}</p>
        <h3 className="clay-display mt-1 text-lg leading-tight">
          {oil.line}
          {oil.viscosity && <span className="clay-accion-text block text-2xl">{oil.viscosity}</span>}
        </h3>
        <p className="clay-muted mt-1 text-sm">{oil.use}</p>
      </div>
      <AddButton id={oil.id} />
    </article>
  )
}

export default function OilsPage() {
  usePageMeta(
    'Aceite para Motos en Pasto: Motul, Yamazuki y más',
    'Venta de aceite para moto en Pasto, Nariño: Motul 3000, 5000, NGEN 5 y NGEN 7, Yamazuki, Maxter y más, para motores de 4 y 2 tiempos. Te lo cambiamos en el taller. Cotiza por WhatsApp.',
  )

  const [engine, setEngine] = useState('TODOS')
  const oils = engine === 'TODOS' ? OILS : OILS.filter((o) => o.engine === engine)
  const { has, toggle } = useQuote()
  const withChange = has(OIL_CHANGE.id)

  return (
    <>
      <PageTitle title="Aceites">
        Tenemos aceite para tu moto en el taller. Agrégalo a tu cotización y, si quieres, te lo cambiamos de una vez.
      </PageTitle>

      <section className="mx-auto max-w-6xl px-4">
        {/* Combo con el servicio de cambio de aceite */}
        <div className="clay mt-2 flex flex-col items-start gap-4 p-5 sm:flex-row sm:items-center sm:p-6">
          <img src={SHELF_PHOTO} alt="Estante de aceites para moto en Turbo Motors" className="h-20 w-20 rounded-2xl object-cover" />
          <div className="flex-1">
            <p className="clay-display text-xl">¿Te lo cambiamos?</p>
            <p className="clay-muted text-sm">
              Agrega también el <strong>{OIL_CHANGE.name}</strong> y te dejamos el aceite puesto.
            </p>
          </div>
          <button
            type="button"
            onClick={() => toggle(OIL_CHANGE.id)}
            aria-pressed={withChange}
            className={`clay-btn px-5 py-3 text-sm ${withChange ? 'clay-pressed text-[var(--verde)]' : 'clay-red'}`}
          >
            {withChange ? '✓ Cambio agregado' : '+ Agregar cambio de aceite'}
          </button>
        </div>

        <div className="clay-scroll-row mt-8 flex gap-3 overflow-x-auto">
          {[
            { value: 'TODOS', label: 'Todos' },
            { value: '4T', label: '4 tiempos' },
            { value: '2T', label: '2 tiempos' },
          ].map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setEngine(f.value)}
              aria-pressed={engine === f.value}
              className={`clay-btn shrink-0 px-5 py-2.5 text-sm ${
                engine === f.value ? 'clay-pressed clay-accion-text' : 'clay'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4">
          {oils.map((o) => (
            <OilCard key={o.id} oil={o} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-16">
        <h2 className="clay-display text-3xl sm:text-4xl">Para el mantenimiento</h2>
        <p className="clay-muted mt-2">También tenemos estos productos en el taller.</p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {MAINTENANCE_PRODUCTS.map((p) => (
            <li key={p.id} className="clay flex items-center gap-4 rounded-[28px] p-4 pl-6">
              <div className="flex-1">
                <p className="font-bold">{p.name}</p>
                <p className="clay-muted text-sm">{p.use}</p>
              </div>
              <AddButton id={p.id} compact />
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
