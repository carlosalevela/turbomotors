import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import CategoryCarousel from '../components/CategoryCarousel'
import FeaturedServices from '../components/FeaturedServices'
import WhatsAppButton from '../components/WhatsAppButton'
import { STOCK_PHOTOS } from '../data/services'
import { SHOP_INFO } from '../config/shopInfo'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />

      <section className="w-full min-w-0 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 max-w-2xl">
            <span className="text-sm font-semibold tracking-wide text-red-600 uppercase">
              Nuestros servicios
            </span>
            <h2 className="mt-1 text-2xl font-bold text-neutral-900 sm:text-3xl">
              Descubre nuestros servicios de mecánica
            </h2>
            <p className="mt-3 text-neutral-600">
              Desde un cambio de aceite hasta un ajuste completo de motor, con atención directa
              y sin vueltas.
            </p>
          </div>
          <CategoryCarousel />
        </div>
      </section>

      <section className="w-full min-w-0 bg-neutral-100 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl">
            <img
              src={STOCK_PHOTOS.heroMechanic}
              alt="Taller Turbo Motors"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="text-sm font-semibold tracking-wide text-red-600 uppercase">
              Sobre nosotros
            </span>
            <h2 className="mt-2 text-2xl font-bold text-neutral-900 uppercase sm:text-3xl">
              Mecánica honesta, hecha por expertos
            </h2>
            <p className="mt-4 text-neutral-600">
              En {SHOP_INFO.name} nos encargamos de tu moto como si fuera nuestra: diagnóstico
              claro, repuestos de calidad y explicación de cada trabajo antes de hacerlo. Sin
              sorpresas en la factura.
            </p>
            <Link
              to="/servicios"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-red-700 hover:text-red-800"
            >
              Ver todos los servicios
              <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-current" fill="none" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full min-w-0 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <span className="text-sm font-semibold tracking-wide text-red-600 uppercase">
                Los más solicitados
              </span>
              <h2 className="mt-1 text-2xl font-bold text-neutral-900">Servicios destacados</h2>
            </div>
            <Link to="/servicios" className="text-sm font-medium text-neutral-700 hover:text-red-600">
              Ver todos →
            </Link>
          </div>
          <FeaturedServices />
        </div>
      </section>

      <section className="w-full min-w-0 bg-neutral-950 py-16 text-center">
        <div className="mx-auto max-w-2xl px-4">
          <h2 className="text-2xl font-bold text-white">¿Tu moto necesita revisión?</h2>
          <p className="mt-3 text-neutral-400">
            Escríbenos por WhatsApp y {SHOP_INFO.mechanic} te ayuda a diagnosticar el problema.
          </p>
          <div className="mt-6 flex justify-center">
            <WhatsAppButton message="Hola, quiero cotizar un servicio para mi moto">
              Cotizar por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </div>
  )
}
