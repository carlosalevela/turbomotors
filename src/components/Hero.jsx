import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { REAL_PHOTOS } from '../data/services'
import { SHOP_INFO, buildWhatsAppUrl } from '../config/shopInfo'
import 'swiper/css'
import 'swiper/css/pagination'

const SLIDES = [
  {
    image: REAL_PHOTOS.mantenimientoDesarmada,
    eyebrow: `Bienvenido a ${SHOP_INFO.name}`,
    title: 'Mecánica de motos',
    highlight: 'en la que confías',
    subtitle: 'Cambios de aceite, frenos, motor, suspensión y mantenimiento general con atención directa y honesta.',
  },
  {
    image: REAL_PHOTOS.frenosLiquido,
    eyebrow: 'Frenos',
    title: 'Revisión y cambio',
    highlight: 'de frenos',
    subtitle: 'Pastillas, discos y purga del sistema para que frenes con seguridad.',
  },
  {
    image: REAL_PHOTOS.kitArrastreDespues,
    eyebrow: 'Motor',
    title: 'Cambio de kit',
    highlight: 'de arrastre',
    subtitle: 'Cadena, piñón y corona nuevos para que tu moto rinda como el primer día.',
  },
]

const TRUST_ITEMS = [
  {
    label: 'Atención el mismo día',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    ),
  },
  {
    label: 'Trato directo con el mecánico',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" />
    ),
  },
  {
    label: 'Repuestos de calidad',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4m5 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    ),
  },
  {
    label: 'Taller en Pasto, Nariño',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    ),
  },
]

export default function Hero() {
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        className="tm-hero w-full min-w-0"
      >
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="relative flex h-[520px] items-center overflow-hidden bg-neutral-950 sm:h-[600px]">
              <img
                src={slide.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-black/20" />
              <div className="relative z-10 mx-auto w-full max-w-7xl px-4">
                <div className="max-w-xl">
                  <span className="text-sm font-semibold tracking-wide text-red-400 uppercase">
                    {slide.eyebrow}
                  </span>
                  <h1 className="mt-2 text-4xl leading-tight font-extrabold text-white sm:text-5xl">
                    {slide.title}
                    <br />
                    <span className="text-red-500">{slide.highlight}</span>
                  </h1>
                  <p className="mt-4 max-w-md text-base text-neutral-200 sm:text-lg">
                    {slide.subtitle}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={buildWhatsAppUrl('Hola, quiero cotizar un servicio para mi moto')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
                    >
                      Cotizar servicio
                    </a>
                    <Link
                      to="/servicios"
                      className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
                    >
                      Ver servicios
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="bg-neutral-900">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 sm:grid-cols-4">
          {TRUST_ITEMS.map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 stroke-red-500" fill="none" strokeWidth="2">
                {item.icon}
              </svg>
              <span className="text-sm font-medium text-neutral-200">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
