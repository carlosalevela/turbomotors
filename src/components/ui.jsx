import { Link } from 'react-router-dom'
import { useQuote } from '../context/QuoteContext'

// Piezas pequeñas del estilo "clay" que se repiten en varias páginas.

export function PageTitle({ title, children }) {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-10 pb-4 sm:pt-16">
      <h1 className="clay-display text-5xl sm:text-6xl">{title}</h1>
      {children && <p className="clay-muted mt-4 max-w-xl text-lg">{children}</p>}
    </div>
  )
}

export function MoreLink({ to, children }) {
  return (
    <Link to={to} className="clay-btn clay inline-flex items-center gap-2 px-6 py-3 text-sm">
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  )
}

// Agrega/quita un servicio o producto de la cotización. Al agregarlo, el botón se "hunde".
export function AddButton({ id, size = 'md', className = '', labels = ['Agregar', 'Agregado'] }) {
  const { has, toggle } = useQuote()
  const added = has(id)
  const sizes = { sm: 'px-4 py-2', md: 'px-4 py-3', lg: 'px-7 py-4' }

  return (
    <button
      type="button"
      onClick={() => toggle(id)}
      aria-pressed={added}
      className={`clay-btn flex items-center justify-center gap-2 text-sm ${sizes[size]} ${
        added ? 'clay-pressed text-[var(--verde)]' : 'clay-red'
      } ${className}`}
    >
      {added ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-current" fill="none" strokeWidth="3" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L19 7" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4 stroke-current" fill="none" strokeWidth="3" aria-hidden="true">
          <path strokeLinecap="round" d="M12 5v14M5 12h14" />
        </svg>
      )}
      {added ? labels[1] : labels[0]}
    </button>
  )
}

export function WhatsAppIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2Zm5.8 14.13c-.24.68-1.4 1.31-1.93 1.36-.5.05-1.03.24-3.46-.72-2.92-1.16-4.8-4.1-4.94-4.29-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.27-.28.58-.35.78-.35.19 0 .39 0 .56.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.1.19-.15.32-.3.49-.14.17-.3.38-.43.51-.14.14-.3.3-.13.58.17.28.75 1.24 1.62 2.01 1.11 1 2.05 1.3 2.32 1.45.28.14.44.12.6-.07.17-.19.72-.84.91-1.13.19-.28.38-.24.63-.14.26.1 1.64.77 1.92.91.28.14.47.21.53.33.07.12.07.68-.17 1.36Z" />
    </svg>
  )
}
