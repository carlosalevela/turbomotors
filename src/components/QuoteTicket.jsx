import { useQuote } from '../context/QuoteContext'
import { buildQuoteMessage } from '../utils/quoteMessage'
import { buildWhatsAppUrl } from '../config/shopInfo'
import { WhatsAppIcon } from './ui'

export function ItemThumb({ item, className = 'h-9 w-9 rounded-lg' }) {
  return item.imageUrl ? (
    <img src={item.imageUrl} alt="" className={`${className} shrink-0 object-cover`} />
  ) : (
    <span className={`${className} clay-chip flex shrink-0 items-center justify-center text-xs font-bold`}>
      {item.name.charAt(0)}
    </span>
  )
}

// Ticket de cotización del inicio: se va llenando en vivo a medida que se agregan servicios.
export default function QuoteTicket() {
  const { items, details, remove } = useQuote()

  return (
    <div className="clay relative w-full max-w-sm rotate-[1.5deg] p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between">
        <p className="clay-display text-xl">Tu cotización</p>
        <span className="clay-chip rounded-full px-3 py-1 text-xs font-bold">
          {items.length} {items.length === 1 ? 'elegido' : 'elegidos'}
        </span>
      </div>

      {items.length === 0 ? (
        <div className="clay-pressed clay-muted rounded-2xl px-4 py-6 text-center text-sm">
          Toca <strong className="clay-accion-text">+ Agregar</strong> en un servicio o aceite y se va sumando aquí.
        </div>
      ) : (
        <ul className="clay-pressed flex flex-col gap-1 rounded-2xl p-2">
          {items.map((s) => (
            <li key={s.id} className="clay-pop flex items-center gap-3 rounded-xl bg-white/60 px-3 py-2 text-sm">
              <ItemThumb item={s} />
              <span className="flex-1 font-semibold">{s.name}</span>
              <button
                type="button"
                onClick={() => remove(s.id)}
                aria-label={`Quitar ${s.name}`}
                className="clay-btn clay-muted h-7 w-7 hover:text-[var(--accion)]"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}

      <a
        href={items.length ? buildWhatsAppUrl(buildQuoteMessage(items, details)) : undefined}
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={items.length === 0}
        className={`clay-btn mt-5 flex items-center justify-center gap-2 px-5 py-3.5 text-sm ${
          items.length ? 'clay-green' : 'clay-pressed clay-muted pointer-events-none'
        }`}
      >
        <WhatsAppIcon className="h-4 w-4" />
        Enviar por WhatsApp
      </a>
    </div>
  )
}
