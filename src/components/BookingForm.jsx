import { useState } from 'react'
import { CATEGORIES, REAL_PHOTOS } from '../data/services'
import { buildWhatsAppUrl } from '../config/shopInfo'

const initialForm = { name: '', phone: '', model: '', service: '', time: '' }

export default function BookingForm() {
  const [form, setForm] = useState(initialForm)

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const serviceLabel = CATEGORIES.find((c) => c.value === form.service)?.label
    const lines = [
      'Hola, quiero cotizar un servicio para mi moto:',
      form.name && `Nombre: ${form.name}`,
      form.phone && `Teléfono: ${form.phone}`,
      form.model && `Moto: ${form.model}`,
      serviceLabel && `Servicio: ${serviceLabel}`,
      form.time && `Horario preferido: ${form.time}`,
    ].filter(Boolean)
    window.open(buildWhatsAppUrl(lines.join('\n')), '_blank', 'noopener,noreferrer')
  }

  const inputClass =
    'w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-white placeholder:text-neutral-400 focus:border-red-500 focus:outline-none'

  return (
    <div className="grid grid-cols-1 overflow-hidden rounded-2xl bg-neutral-900 lg:grid-cols-2">
      <div className="hidden lg:block">
        <img
          src={REAL_PHOTOS.frenosLiquido}
          alt="Revisión de frenos en Turbo Motors"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6 sm:p-10">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          ¿Tu moto necesita <span className="text-red-500">revisión hoy?</span>
        </h2>
        <p className="mt-2 text-neutral-400">
          Completa el formulario y te escribimos por WhatsApp para confirmar.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Nombre"
            value={form.name}
            onChange={handleChange('name')}
            className={inputClass}
          />
          <input
            type="tel"
            placeholder="Teléfono"
            value={form.phone}
            onChange={handleChange('phone')}
            className={inputClass}
          />
          <input
            type="text"
            placeholder="Modelo de moto"
            value={form.model}
            onChange={handleChange('model')}
            className={inputClass}
          />
          <select
            value={form.service}
            onChange={handleChange('service')}
            className={`${inputClass} ${form.service ? 'text-white' : 'text-neutral-400'}`}
          >
            <option value="" className="text-neutral-900">
              Servicio necesitado
            </option>
            {CATEGORIES.map((cat) => (
              <option key={cat.value} value={cat.value} className="text-neutral-900">
                {cat.label}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Horario preferido"
            value={form.time}
            onChange={handleChange('time')}
            className={`${inputClass} sm:col-span-2`}
          />
          <button
            type="submit"
            className="mt-1 inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700 sm:col-span-2"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.13c-.24.68-1.4 1.31-1.93 1.36-.5.05-1.03.24-3.46-.72-2.92-1.16-4.8-4.1-4.94-4.29-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.28.58-.35.78-.35.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.1.19-.15.32-.3.49-.14.17-.3.38-.43.51-.14.14-.3.3-.13.58.17.28.75 1.24 1.62 2.01 1.11 1 2.05 1.3 2.32 1.45.28.14.44.12.6-.07.17-.19.72-.84.91-1.13.19-.28.38-.24.63-.14.26.1 1.64.77 1.92.91.28.14.47.21.53.33.07.12.07.68-.17 1.36Z" />
            </svg>
            Cotizar por WhatsApp
          </button>
        </form>
      </div>
    </div>
  )
}
