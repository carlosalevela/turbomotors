import { Link } from 'react-router-dom'
import { SERVICES, GALLERY, REAL_PHOTOS } from '../data/services'
import { SHELF_PHOTO } from '../data/products'
import { buildWhatsAppUrl } from '../config/shopInfo'
import { getOpenStatus } from '../utils/openStatus'
import TikTokSection from './TikTokSection'
import { AddButton, WhatsAppIcon } from './ui'

// Inicio pensado para celular (lo usa HomePage en pantallas de menos de 640px).

const FEATURED_IDS = [1, 3, 7, 12]

// Accesos rápidos por categoría (ícono = trazo SVG 24x24).
const QUICK = [
  { value: 'ACEITE', label: 'Aceite', icon: 'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z' },
  {
    value: 'FRENOS',
    label: 'Frenos',
    icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 5.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z',
  },
  {
    value: 'MOTOR',
    label: 'Motor',
    icon: 'M4 9h3l2-2h5l2 2h2v3h2v4h-2v2h-4l-2 2H9l-2-2H4zM9 7V4h5v3',
  },
  { value: 'SUSPENSION', label: 'Suspensión', icon: 'M12 2v3M12 19v3M7 5h10M7 19h10M8 8l8 2-8 2 8 2-8 2' },
  { value: 'ELECTRICO', label: 'Eléctrico', icon: 'M13 2 4 14h7l-1 8 9-12h-7z' },
  {
    value: 'MANTENIMIENTO',
    label: 'General',
    icon: 'M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z',
  },
]

function SectionHeader({ title, to, linkLabel = 'Ver todo' }) {
  return (
    <div className="flex items-end justify-between px-4">
      <h2 className="clay-display text-2xl">{title}</h2>
      {to && (
        <Link to={to} className="clay-accion-text text-sm font-bold">
          {linkLabel} →
        </Link>
      )}
    </div>
  )
}

export default function MobileHome() {
  const featured = FEATURED_IDS.map((id) => SERVICES.find((s) => s.id === id))
  const status = getOpenStatus()

  return (
    <div className="flex flex-col gap-8 pt-4">
      {/* 1. Portada: foto de fondo con el título encima */}
      <section className="px-4">
        <div className="clay relative overflow-hidden rounded-[32px] p-2">
          <div className="relative overflow-hidden rounded-[26px]">
            <img
              src={REAL_PHOTOS.mantenimientoDesarmada}
              alt="Mecánico de Turbo Motors trabajando en una moto en el taller"
              className="h-[23rem] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3b1412] via-[#3b1412]/55 to-transparent" />
            <div className="absolute inset-x-0 top-0 flex justify-between p-4">
              <span
                className={`flex items-center gap-2 rounded-full bg-black/45 px-3 py-1.5 text-xs font-bold backdrop-blur ${
                  status.open ? 'text-[#8ff0b5]' : 'text-white/85'
                }`}
              >
                <span className={`h-2 w-2 rounded-full ${status.open ? 'animate-pulse bg-[#8ff0b5]' : 'bg-white/60'}`} />
                {status.label}
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-xs font-bold tracking-wide text-white/75 uppercase">Mecánica de motos · Pasto</p>
              <h1 className="clay-display mt-2 text-[2.4rem] text-white">
                Tu moto, en <span className="whitespace-nowrap text-[#ff8a80]">buenas manos</span>.
              </h1>
              <p className="mt-2 text-sm text-white/80">Elige lo que necesita y te cotizamos por WhatsApp.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 p-2 pt-3">
            <Link to="/servicios" className="clay-btn clay-red clay-soft-mobile flex justify-center py-3 text-[15px]">
              Ver servicios
            </Link>
            <a
              href={buildWhatsAppUrl('Hola, quiero cotizar un servicio para mi moto')}
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn clay-pressed flex items-center justify-center gap-2 py-3 text-[15px]"
            >
              <WhatsAppIcon className="h-4.5 w-4.5 text-[var(--verde)]" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 2. Accesos rápidos */}
      <section className="flex flex-col gap-3">
        <SectionHeader title="¿Qué necesita tu moto?" />
        <div className="grid grid-cols-3 gap-3 px-4">
          {QUICK.map((q) => (
            <Link
              key={q.value}
              to={`/servicios?categoria=${q.value}`}
              className="clay clay-lift flex flex-col items-center gap-2 rounded-[24px] px-2 py-4 text-center"
            >
              <span className="clay-pressed flex h-12 w-12 items-center justify-center rounded-2xl text-[var(--accion)]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 stroke-current"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d={q.icon} />
                </svg>
              </span>
              <span className="text-[13px] font-bold">{q.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. Lo más pedido: carrusel de tarjetas compactas */}
      <section className="flex flex-col gap-3">
        <SectionHeader title="Lo que más nos piden" to="/servicios" />
        <div className="px-4">
        <div className="clay-scroll-row flex snap-x scroll-px-4 gap-3 overflow-x-auto">
          {featured.map((s) => (
            <article key={s.id} className="clay flex w-[11.5rem] shrink-0 snap-start flex-col rounded-[26px] p-2">
              <Link to={`/servicios/${s.id}`} className="clay-well block p-1.5">
                <img src={s.imageUrl} alt={s.name} className="aspect-square w-full rounded-[16px] object-cover" />
              </Link>
              <Link to={`/servicios/${s.id}`} className="line-clamp-2 min-h-[2.6rem] px-1.5 pt-2.5 text-sm font-bold leading-tight">
                {s.name}
              </Link>
              <AddButton id={s.id} size="sm" className="mt-2" />
            </article>
          ))}
        </div>
        </div>
      </section>

      {/* 4. Aceites */}
      <section className="px-4">
        <Link to="/aceites" className="clay-dark clay-lift flex items-center gap-4 rounded-[28px] p-2.5 pr-5">
          <img src={SHELF_PHOTO} alt="" className="h-20 w-20 rounded-[20px] object-cover" />
          <div className="flex-1">
            <p className="clay-display text-xl text-white">También vendemos aceite</p>
            <p className="text-xs text-white/75">Motul, Yamazuki, Maxter y más</p>
          </div>
          <span className="text-xl text-white" aria-hidden="true">
            →
          </span>
        </Link>
      </section>

      {/* 5. Así trabajamos: carrusel */}
      <section className="flex flex-col gap-3">
        <SectionHeader title="Así trabajamos" to="/taller" linkLabel="Ver taller" />
        <div className="px-4">
        <div className="clay-scroll-row flex snap-x scroll-px-4 gap-3 overflow-x-auto">
          {GALLERY.slice(0, 6).map((photo, i) => (
            <Link
              key={photo.src}
              to={`/taller?foto=${i + 1}`}
              className="clay-well relative block w-[9.5rem] shrink-0 snap-start p-1.5"
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" className="aspect-[3/4] w-full rounded-[16px] object-cover" />
              <span className="absolute inset-x-1.5 bottom-1.5 rounded-b-[16px] bg-gradient-to-t from-black/80 to-transparent px-2.5 pt-6 pb-2 text-xs font-bold text-white">
                {photo.title}
              </span>
            </Link>
          ))}
        </div>
        </div>
      </section>

      {/* 6. TikTok (ya está pensado para celular) */}
      <div className="-my-8">
        <TikTokSection />
      </div>
    </div>
  )
}
