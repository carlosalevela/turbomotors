import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { SHOP_INFO, buildWhatsAppUrl } from '../config/shopInfo'
import logo from '../assets/logo.jpg'
import QuoteSheet, { QuoteBar } from './QuoteSheet'

// icon: trazo SVG (24x24) para la barra inferior del celular.
const NAV = [
  { to: '/', label: 'Inicio', end: true, mobileOnly: true, icon: 'M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z' },
  {
    to: '/servicios',
    label: 'Servicios',
    icon: 'M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z',
  },
  { to: '/aceites', label: 'Aceites', icon: 'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z' },
  {
    to: '/taller',
    label: 'Taller',
    icon: 'M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zm8 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z',
  },
  {
    to: '/ubicacion',
    label: 'Ubicación',
    icon: 'M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12zm0-9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  },
]

// Barra de navegación inferior, solo en celular (en pantallas grandes el menú va arriba).
function MobileTabBar() {
  return (
    <nav
      aria-label="Navegación principal"
      className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:hidden"
    >
      <div className="clay flex justify-between rounded-[28px] p-1.5">
        {NAV.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `clay-btn flex flex-1 flex-col items-center gap-0.5 rounded-[22px] py-2 text-[11px] ${
                isActive ? 'clay-pressed clay-accion-text' : 'clay-muted'
              }`
            }
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5 stroke-current"
              fill="none"
              strokeWidth="2"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d={item.icon} />
            </svg>
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="clay clay-btn flex h-10 w-10 items-center justify-center"
    >
      {children}
    </a>
  )
}

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const navClass = ({ isActive }) =>
    `clay-btn px-4 py-2 text-sm ${isActive ? 'clay-pressed clay-accion-text' : 'hover:bg-white/60'}`

  return (
    <div className="clay-page flex flex-col pb-32 sm:pb-24">
      <header className="sticky top-3 z-40 px-3">
        <div className="clay mx-auto flex max-w-6xl items-center justify-between gap-2 rounded-full py-2 pr-2 pl-2 sm:pl-3">
          <Link to="/" className="flex shrink-0 items-center gap-2">
            <img src={logo} alt="" className="h-9 w-9 rounded-full object-cover" />
            <span className="clay-display text-lg">Turbo Motors</span>
          </Link>
          <nav className="hidden gap-1 font-semibold sm:flex">
            {NAV.filter((item) => !item.mobileOnly).map((item) => (
              <NavLink key={item.to} to={item.to} className={navClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mx-auto mt-20 w-full max-w-6xl px-4 text-sm">
        <div className="clay grid gap-8 rounded-[32px] p-6 sm:grid-cols-3 sm:p-8">
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="" className="h-9 w-9 rounded-full object-cover" />
              <span className="clay-display text-xl">Turbo Motors</span>
            </div>
            <p className="clay-muted mt-2">Mecánica de motos y venta de aceites en Pasto, Nariño.</p>
            <div className="mt-4 flex gap-3">
              <SocialLink href={SHOP_INFO.instagramUrl} label="Instagram de Turbo Motors">
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 stroke-current" fill="none" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </SocialLink>
              <SocialLink href={SHOP_INFO.tiktokUrl} label="TikTok de Turbo Motors">
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current">
                  <path d="M16.5 3c.4 2.1 1.8 3.6 4 3.9v2.6c-1.4 0-2.7-.4-4-1.2v6.4c0 3.1-2.5 5.3-5.3 5.3S5.9 17.8 5.9 14.7c0-3 2.4-5.3 5.4-5.3.4 0 .8 0 1.1.1v2.7c-.3-.1-.7-.2-1.1-.2-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7 2.8-1.1 2.8-2.7V3h2.4Z" />
                </svg>
              </SocialLink>
            </div>
          </div>

          <div>
            <p className="font-bold">Secciones</p>
            <ul className="clay-muted mt-3 grid grid-cols-2 gap-2 sm:grid-cols-1">
              {NAV.filter((item) => !item.mobileOnly).map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-[var(--accion)]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-bold">Contacto</p>
            <ul className="clay-muted mt-3 flex flex-col gap-2">
              <li>{SHOP_INFO.address}</li>
              <li>{SHOP_INFO.hours}</li>
              <li>
                <a
                  href={buildWhatsAppUrl('Hola, quiero más información')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[var(--verde)] hover:underline"
                >
                  Escribir por WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="clay-muted py-6 text-center text-xs">
          © {new Date().getFullYear()} {SHOP_INFO.name}. Todos los derechos reservados.
        </p>
      </footer>

      <QuoteBar />
      <QuoteSheet />
      <MobileTabBar />
    </div>
  )
}
