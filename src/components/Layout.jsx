import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { SHOP_INFO, buildWhatsAppUrl } from '../config/shopInfo'
import { CATEGORIES } from '../data/services'
import logo from '../assets/logo.jpg'

const NAV_LINKS = [
  { to: '/', label: 'Inicio' },
  { to: '/servicios', label: 'Servicios' },
  { to: '/ubicacion', label: 'Ubicación y contacto' },
]

export default function Layout() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen w-full min-w-0 flex-col bg-neutral-50">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 text-lg font-extrabold tracking-tight text-neutral-950"
          >
            <img src={logo} alt="Turbo Motors" className="h-9 w-9 rounded-full object-cover" />
            Turbo Motors
          </Link>

          <nav className="hidden gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  location.pathname === link.to
                    ? 'bg-red-50 text-red-700'
                    : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={buildWhatsAppUrl('Hola, quiero cotizar un servicio para mi moto')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-neutral-950 py-2 pr-2 pl-4 text-sm font-semibold text-white transition hover:bg-neutral-800 md:inline-flex"
          >
            Cotizar servicio
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 stroke-current" fill="none" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center rounded-md text-neutral-950 md:hidden"
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-current" fill="none" strokeWidth="2">
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-current" fill="none" strokeWidth="2">
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <nav className="flex flex-col gap-1 border-t border-neutral-200 px-4 py-3 md:hidden">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  location.pathname === link.to
                    ? 'bg-red-50 text-red-700'
                    : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={buildWhatsAppUrl('Hola, quiero cotizar un servicio para mi moto')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-1 rounded-md bg-neutral-950 px-3 py-2 text-center text-sm font-semibold text-white"
            >
              Cotizar servicio
            </a>
          </nav>
        )}
      </header>

      <main className="w-full min-w-0 flex-1">
        <Outlet />
      </main>

      <footer className="bg-neutral-950 text-neutral-400">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Turbo Motors" className="h-8 w-8 rounded-full object-cover" />
              <span className="text-lg font-extrabold tracking-tight text-white">Turbo Motors</span>
            </div>
            <p className="mt-2 text-sm">Mecánica de motos de confianza.</p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Servicios</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat.value}>
                  <Link to={`/servicios?categoria=${cat.value}`} className="hover:text-white">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Taller</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link to="/servicios" className="hover:text-white">
                  Todos los servicios
                </Link>
              </li>
              <li>
                <Link to="/ubicacion" className="hover:text-white">
                  Ubicación
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-white">Contacto</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>{SHOP_INFO.address}</li>
              <li>{SHOP_INFO.hours}</li>
              <li>
                <a
                  href={buildWhatsAppUrl('Hola, quiero más información')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-green-400 hover:text-green-300"
                >
                  Escríbenos por WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 py-4 text-center text-xs">
          © {new Date().getFullYear()} {SHOP_INFO.name}. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}
