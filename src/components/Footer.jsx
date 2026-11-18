import { Link } from 'react-router-dom'
import { SHOP_INFO, buildWhatsAppUrl } from '../config/shopInfo'
import { getOpenStatus } from '../utils/openStatus'
import logo from '../assets/logo.svg'
import { WhatsAppIcon } from './ui'

const SECTIONS = [
  { to: '/servicios', label: 'Servicios' },
  { to: '/aceites', label: 'Aceites' },
  { to: '/taller', label: 'Taller' },
  { to: '/ubicacion', label: 'Ubicación' },
]

function InfoRow({ icon, center = false, children }) {
  return (
    <li className={`flex gap-3 py-4 first:pt-0 last:pb-0 ${center ? 'items-center' : ''}`}>
      <svg
        viewBox="0 0 24 24"
        className={`h-5 w-5 shrink-0 stroke-current text-white/70 ${center ? '' : 'mt-0.5'}`}
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {icon}
      </svg>
      <div className="min-w-0 flex-1 text-sm text-white">{children}</div>
    </li>
  )
}

function SocialButton({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="clay-btn flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25"
    >
      {children}
    </a>
  )
}

export default function Footer() {
  const status = getOpenStatus()

  return (
    <footer className="mx-auto mt-10 w-full max-w-6xl px-4">
      <div className="clay-dark rounded-[40px] p-6 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          {/* Invitación final */}
          <div className="flex flex-col items-start">
            <span
              className={`flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold ${
                status.open ? 'bg-black/30 text-[#8ff0b5]' : 'bg-black/25 text-white/85'
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${status.open ? 'animate-pulse bg-[#8ff0b5]' : 'bg-white/50'}`}
                aria-hidden="true"
              />
              {status.label}
            </span>
            <h2 className="clay-display mt-5 text-4xl text-white sm:text-5xl">¿Tu moto necesita algo?</h2>
            <p className="mt-3 max-w-sm text-white/75">
              Escríbenos y te respondemos por WhatsApp con el precio. Sin compromiso.
            </p>
            <a
              href={buildWhatsAppUrl('Hola, quiero cotizar un servicio para mi moto')}
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn clay-green mt-6 flex items-center gap-2 px-7 py-4"
            >
              <WhatsAppIcon />
              Escribir por WhatsApp
            </a>
          </div>

          {/* Datos de contacto */}
          <ul className="divide-y divide-white/15 self-center">
            <InfoRow icon={<path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12zm0-9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />}>
              <p>{SHOP_INFO.address}</p>
              <a
                href={SHOP_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block font-bold underline decoration-white/50 underline-offset-4 hover:decoration-white"
              >
                Cómo llegar →
              </a>
            </InfoRow>
            <InfoRow
              icon={
                <>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </>
              }
            >
              {SHOP_INFO.hours}
            </InfoRow>
            <InfoRow
              center
              icon={
                <>
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                </>
              }
            >
              <div className="flex items-center justify-between gap-3">
                <span>
                  Síguenos <span className="text-white/70">{SHOP_INFO.socialHandle}</span>
                </span>
                <div className="flex gap-2">
                  <SocialButton href={SHOP_INFO.instagramUrl} label="Instagram de Turbo Motors">
                    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 stroke-current" fill="none" strokeWidth="2" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  </SocialButton>
                  <SocialButton href={SHOP_INFO.tiktokUrl} label="TikTok de Turbo Motors">
                    <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current" aria-hidden="true">
                      <path d="M16.5 3c.4 2.1 1.8 3.6 4 3.9v2.6c-1.4 0-2.7-.4-4-1.2v6.4c0 3.1-2.5 5.3-5.3 5.3S5.9 17.8 5.9 14.7c0-3 2.4-5.3 5.4-5.3.4 0 .8 0 1.1.1v2.7c-.3-.1-.7-.2-1.1-.2-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7 2.8-1.1 2.8-2.7V3h2.4Z" />
                    </svg>
                  </SocialButton>
                </div>
              </div>
            </InfoRow>
          </ul>
        </div>

        {/* Fila inferior */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="" className="h-8 w-8 rounded-full object-cover" />
            <span className="clay-display text-lg text-white">{SHOP_INFO.name}</span>
          </Link>
          <nav aria-label="Secciones" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/75">
            {SECTIONS.map((s) => (
              <Link key={s.to} to={s.to} className="hover:text-white">
                {s.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <p className="clay-muted py-6 text-center text-xs">
        © {new Date().getFullYear()} {SHOP_INFO.name} · Mecánica de motos y venta de aceites en Pasto, Nariño.
      </p>
    </footer>
  )
}
