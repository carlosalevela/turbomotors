import { Link } from 'react-router-dom'
import { CATEGORIES } from '../data/services'

const DESCRIPTIONS = {
  ACEITE: 'Aceite y filtro nuevo para proteger tu motor.',
  FRENOS: 'Pastillas, discos y purga del sistema hidráulico.',
  MOTOR: 'Diagnóstico, ajuste y cambio de kit de arrastre.',
  SUSPENSION: 'Amortiguadores y horquilla a punto.',
  ELECTRICO: 'Batería, luces y sistema de carga.',
  MANTENIMIENTO: 'Revisión completa preventiva.',
}

export default function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {CATEGORIES.map((cat) => (
        <Link
          key={cat.value}
          to={`/servicios?categoria=${cat.value}`}
          className="group relative flex h-44 flex-col justify-end overflow-hidden rounded-xl p-4"
        >
          <img
            src={cat.image}
            alt={cat.label}
            className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-black/10" />
          <div className="relative z-10">
            <h3 className="text-lg font-bold text-white">{cat.label}</h3>
            <p className="mt-1 text-sm text-neutral-300">{DESCRIPTIONS[cat.value]}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
