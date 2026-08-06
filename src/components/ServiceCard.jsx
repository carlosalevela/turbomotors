import { Link } from 'react-router-dom'
import { formatCOP } from '../data/services'

export default function ServiceCard({ service }) {
  return (
    <Link
      to={`/servicios/${service.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition hover:shadow-lg"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-neutral-100">
        <img
          src={service.imageUrl}
          alt={service.name}
          className="h-full w-full object-cover transition group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="font-semibold text-neutral-900">{service.name}</h3>
        <p className="line-clamp-2 text-sm text-neutral-500">{service.description}</p>
        <p className="mt-auto pt-2 text-lg font-bold text-red-700">
          {service.priceNote} {formatCOP(service.price)}
        </p>
      </div>
    </Link>
  )
}
