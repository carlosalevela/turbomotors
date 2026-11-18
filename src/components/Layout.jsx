import { useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import logo from '../assets/logo.svg'
import QuoteSheet, { QuoteHeaderButton } from './QuoteSheet'
import Footer from './Footer'

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

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const navClass = ({ isActive }) =>
    `clay-btn px-4 py-2 text-sm ${isActive ? 'clay-pressed clay-accion-text' : 'hover:bg-white/60'}`

  return (
    <div className="clay-page flex flex-col pb-28 sm:pb-12">
      <header className="sticky top-3 z-40 px-3">
        <div className="clay mx-auto flex max-w-6xl items-center justify-between gap-2 rounded-full py-2 pr-2 pl-2 sm:pl-3">
          <Link to="/" className="flex shrink-0 items-center gap-2">
            <img src={logo} alt="" className="h-9 w-9 rounded-full object-cover" />
            <span className="clay-display text-lg">Turbo Motors</span>
          </Link>
          <div className="flex items-center gap-1">
            <nav className="hidden gap-1 font-semibold sm:flex">
              {NAV.filter((item) => !item.mobileOnly).map((item) => (
                <NavLink key={item.to} to={item.to} className={navClass}>
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <QuoteHeaderButton />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      <QuoteSheet />
      <MobileTabBar />
    </div>
  )
}
