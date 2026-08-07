import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import WhyChooseUs from '../components/WhyChooseUs'
import BookingForm from '../components/BookingForm'
import HowItWorks from '../components/HowItWorks'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />

      <section className="w-full min-w-0 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <span className="text-sm font-semibold tracking-wide text-red-600 uppercase">
                Nuestros servicios
              </span>
              <h2 className="mt-1 text-2xl font-bold text-neutral-900 sm:text-3xl">
                Servicios de <span className="text-red-600">mecánica</span>
              </h2>
            </div>
            <Link to="/servicios" className="hidden text-sm font-medium text-neutral-700 hover:text-red-600 sm:block">
              Ver todos →
            </Link>
          </div>
          <ServicesGrid />
          <Link
            to="/servicios"
            className="mt-6 block w-fit rounded-lg border border-neutral-300 px-6 py-2.5 text-sm font-semibold text-neutral-900 transition hover:bg-neutral-100 sm:hidden"
          >
            Ver todos los servicios
          </Link>
        </div>
      </section>

      <section className="w-full min-w-0 bg-neutral-100 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-10 text-center text-2xl font-bold text-neutral-900 sm:text-3xl">
            Por qué elegir <span className="text-red-600">Turbo Motors</span>
          </h2>
          <WhyChooseUs />
        </div>
      </section>

      <section className="w-full min-w-0 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <BookingForm />
        </div>
      </section>

      <section className="w-full min-w-0 bg-neutral-100 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-10 text-center text-2xl font-bold text-neutral-900 sm:text-3xl">
            Cómo <span className="text-red-600">funciona</span>
          </h2>
          <HowItWorks />
        </div>
      </section>
    </div>
  )
}
