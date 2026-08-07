import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { REAL_PHOTOS, CATEGORIES } from '../data/services'
import { SHOP_INFO } from '../config/shopInfo'
import 'swiper/css'
import 'swiper/css/pagination'

const SLIDES = [
  {
    image: REAL_PHOTOS.mantenimientoDesarmada,
    eyebrow: `Bienvenido a ${SHOP_INFO.name}`,
    title: 'Mecánica de motos en la que puedes confiar',
    subtitle: 'Cambios de aceite, frenos, motor y mantenimiento general con atención honesta.',
    ctaLabel: 'Ver servicios',
    ctaTo: '/servicios',
  },
  {
    image: REAL_PHOTOS.frenosLiquido,
    eyebrow: 'Frenos',
    title: 'Revisión y cambio de frenos',
    subtitle: 'Pastillas, discos y purga del sistema para que frenes con seguridad.',
    ctaLabel: 'Ver frenos',
    ctaTo: '/servicios?categoria=FRENOS',
  },
  {
    image: REAL_PHOTOS.kitArrastreDespues,
    eyebrow: 'Motor',
    title: 'Cambio de kit de arrastre',
    subtitle: 'Cadena, piñón y corona nuevos para que tu moto rinda como el primer día.',
    ctaLabel: 'Ver motor',
    ctaTo: '/servicios?categoria=MOTOR',
  },
]

export default function Hero() {
  return (
    <div className="relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5500, disableOnInteraction: false }}
        className="tm-hero w-full min-w-0"
      >
        {SLIDES.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div className="relative flex h-[460px] items-center overflow-hidden bg-neutral-950 sm:h-[560px]">
              <img
                src={slide.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/50 to-black/10" />
              <div className="relative z-10 mx-auto w-full max-w-7xl px-4">
                <div className="max-w-xl">
                  <span className="text-sm font-semibold tracking-wide text-red-400 uppercase">
                    {slide.eyebrow}
                  </span>
                  <h1 className="mt-2 text-3xl leading-tight font-extrabold text-white uppercase sm:text-4xl lg:text-5xl">
                    {slide.title}
                  </h1>
                  <p className="mt-4 max-w-md text-base text-neutral-200 sm:text-lg">{slide.subtitle}</p>
                  <Link
                    to={slide.ctaTo}
                    className="mt-6 inline-block rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
                  >
                    {slide.ctaLabel}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Categorías rápidas — solo en pantallas medianas/grandes */}
      <div className="pointer-events-none absolute bottom-6 left-0 z-20 hidden w-full px-4 sm:block">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.value}
              to={`/servicios?categoria=${cat.value}`}
              className="pointer-events-auto rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-neutral-900 backdrop-blur transition hover:bg-white"
            >
              {cat.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Tarjeta del mecánico — solo en pantallas medianas/grandes */}
      <div className="absolute right-4 bottom-6 z-20 hidden max-w-xs items-center gap-3 rounded-xl bg-white p-3 shadow-lg sm:flex lg:right-[calc((100%-80rem)/2+1rem)]">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-700">
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
            <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1c0-2.76-3.58-5-8-5Z" />
          </svg>
        </span>
        <div>
          <p className="text-sm font-bold text-neutral-900">{SHOP_INFO.mechanic}</p>
          <p className="text-xs text-neutral-500">Mecánico</p>
        </div>
      </div>
    </div>
  )
}
