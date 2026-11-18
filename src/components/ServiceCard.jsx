import { Link } from 'react-router-dom'
import { AddButton } from './ui'

export default function ServiceCard({ service }) {
  const href = `/servicios/${service.id}`

  return (
    <article className="clay flex flex-col p-3">
      <Link to={href} className="clay-well group block">
        <img
          src={service.imageUrl}
          alt={service.name}
          loading="lazy"
          className="aspect-4/3 w-full rounded-[18px] object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-1 px-2 pt-4 pb-2">
        <h3 className="clay-display text-lg leading-tight">
          <Link to={href} className="hover:text-[var(--accion)]">
            {service.name}
          </Link>
        </h3>
        <p className="clay-muted text-sm">{service.description}</p>
      </div>
      <AddButton id={service.id} className="m-2 mt-3" />
    </article>
  )
}
