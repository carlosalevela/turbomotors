import { Link } from 'react-router-dom'
import { SERVICES, GALLERY, REAL_PHOTOS } from '../data/services'
import { SHELF_PHOTO } from '../data/products'
import { buildWhatsAppUrl } from '../config/shopInfo'
import ServiceCard from '../components/ServiceCard'
import QuoteTicket from '../components/QuoteTicket'
import { MoreLink } from '../components/ui'
import usePageMeta from '../hooks/usePageMeta'

// Los más pedidos: aceite y filtro, pastillas, kit de arrastre, mantenimiento general.
const FEATURED_IDS = [1, 3, 7, 12]

export default function HomePage() {
  usePageMeta(
    'Mecánica de Motos en Pasto, Nariño',
    'Taller de mecánica de motos en Pasto, Nariño: cambio de aceite, frenos, motor, suspensión, sistema eléctrico y mantenimiento general. Venta de aceites. Cotiza por WhatsApp.',
  )

  const featured = FEATURED_IDS.map((id) => SERVICES.find((s) => s.id === id))

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-10 pb-16 lg:grid-cols-[1.1fr_1fr] lg:pt-20">
        <div>
          <p className="clay-chip inline-block rounded-full px-4 py-1.5 text-xs font-bold tracking-wide uppercase">
            Mecánica de motos · Pasto, Nariño
          </p>
          <h1 className="clay-display mt-6 text-5xl sm:text-6xl lg:text-7xl">
            Tu moto, en <span className="clay-accion-text">buenas manos</span>.
          </h1>
          <p className="clay-muted mt-6 max-w-md text-lg">
            Taller de mecánica de motos en Pasto. Elige lo que necesita tu moto y te respondemos por WhatsApp con el
            precio.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/servicios" className="clay-btn clay-red px-7 py-4">
              Ver servicios
            </Link>
            <a
              href={buildWhatsAppUrl('Hola, quiero cotizar un servicio para mi moto')}
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn clay px-7 py-4"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>

        <div className="relative flex flex-col items-center lg:items-end">
          <div className="clay w-full max-w-md -rotate-2 p-3">
            <div className="clay-well">
              <img
                src={REAL_PHOTOS.mantenimientoDesarmada}
                alt="Mecánico de Turbo Motors trabajando en una moto en el taller"
                fetchPriority="high"
                className="aspect-[4/5] w-full rounded-[18px] object-cover"
              />
            </div>
          </div>
          <div className="-mt-28 w-full max-w-sm sm:-mr-6 lg:-mr-10">
            <QuoteTicket />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="clay-display text-4xl sm:text-5xl">Lo que más nos piden</h2>
          <MoreLink to="/servicios">Ver los {SERVICES.length} servicios</MoreLink>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-6">
        <Link to="/aceites" className="clay clay-lift group flex items-center gap-4 rounded-[32px] p-3 pr-6 sm:gap-6">
          <img src={SHELF_PHOTO} alt="" className="h-20 w-20 rounded-[22px] object-cover sm:h-24 sm:w-32" />
          <div className="flex-1">
            <h2 className="clay-display text-xl sm:text-2xl">También vendemos aceite</h2>
            <p className="clay-muted text-sm">Motul, Yamazuki, Maxter y más, para 4 y 2 tiempos.</p>
          </div>
          <span className="clay-accion-text text-2xl transition group-hover:translate-x-1" aria-hidden="true">
            →
          </span>
        </Link>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="clay-dark rounded-[40px] p-6 sm:p-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="clay-display text-4xl text-white sm:text-5xl">Así trabajamos</h2>
              <p className="mt-3 max-w-md text-white/75">Fotos reales del taller, sin filtros ni stock.</p>
            </div>
            <Link
              to="/taller"
              className="clay-btn rounded-full bg-white/10 px-6 py-3 text-sm text-white hover:bg-white/20"
            >
              Ver el taller →
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {GALLERY.slice(0, 4).map((photo, i) => (
              <Link
                key={photo.src}
                to={`/taller?foto=${i + 1}`}
                className={`clay-lift group relative block overflow-hidden rounded-3xl border-4 border-white/10 ${
                  i % 2 ? '-rotate-1' : 'rotate-1'
                }`}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" className="aspect-square w-full object-cover" />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pt-8 pb-3 text-left text-sm font-bold text-white">
                  {photo.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
