import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useQuote } from '../context/QuoteContext'
import { buildQuoteMessage } from '../utils/quoteMessage'
import { buildWhatsAppUrl } from '../config/shopInfo'
import { ItemThumb } from './QuoteTicket'
import { WhatsAppIcon } from './ui'

// Botón de cotización del encabezado: aparece cuando hay algo elegido y abre el panel.
// El número rebota cada vez que cambia, para que se note que se agregó algo.
export function QuoteHeaderButton() {
  const { items, open } = useQuote()
  if (items.length === 0) return null

  return (
    <button
      type="button"
      onClick={open}
      aria-label={`Ver cotización (${items.length} ${items.length === 1 ? 'elegido' : 'elegidos'})`}
      title="Ver cotización"
      className="clay-btn clay-red clay-pop relative flex h-11 w-11 shrink-0 items-center justify-center"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5.5 w-5.5 stroke-current"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 4h2l2.2 10.1a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.1L20.5 8H6" />
        <circle cx="9.5" cy="19.5" r="1.3" />
        <circle cx="17" cy="19.5" r="1.3" />
      </svg>
      <span
        key={items.length}
        className="clay-pop absolute -top-1.5 -right-1.5 flex h-5.5 min-w-5.5 items-center justify-center rounded-full bg-white px-1 text-xs font-extrabold text-[var(--accion)] shadow-[0_2px_6px_rgb(120_40_32/0.35)]"
      >
        {items.length}
      </span>
    </button>
  )
}

// Panel para revisar la cotización, poner la moto y un comentario, y enviarla por WhatsApp.
export default function QuoteSheet() {
  const { items, details, setDetail, remove, clear, isOpen, close } = useQuote()
  const panelRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined
    panelRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && close()
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen, close])

  if (!isOpen) return null

  const inputClass =
    'clay-pressed w-full rounded-2xl px-4 py-3 text-sm placeholder:text-[var(--texto-suave)] focus:outline-2 focus:outline-[var(--accion)]'

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="quote-title">
      <div className="absolute inset-0 bg-[rgb(var(--sombra)/0.5)] backdrop-blur-sm" onClick={close} />
      <div
        ref={panelRef}
        tabIndex={-1}
        className="clay clay-pop relative flex max-h-[90vh] w-full max-w-lg flex-col rounded-b-none outline-none sm:rounded-[32px]"
      >
        <div className="flex items-center justify-between px-6 pt-6 pb-3">
          <h2 id="quote-title" className="clay-display text-2xl">
            Tu cotización
          </h2>
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar"
            className="clay clay-btn flex h-10 w-10 items-center justify-center text-xl"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 pb-4">
          {items.length === 0 ? (
            <div className="clay-pressed clay-muted rounded-2xl px-4 py-8 text-center text-sm">
              Todavía no has elegido nada.
              <div className="mt-4 flex justify-center gap-2">
                <Link to="/servicios" onClick={close} className="clay-btn clay-red px-5 py-2.5 text-sm">
                  Ver servicios
                </Link>
                <Link to="/aceites" onClick={close} className="clay-btn clay px-5 py-2.5 text-sm">
                  Ver aceites
                </Link>
              </div>
            </div>
          ) : (
            <>
              <ul className="clay-pressed flex flex-col gap-1 rounded-2xl p-2">
                {items.map((s) => (
                  <li key={s.id} className="flex items-center gap-3 rounded-xl bg-white/60 px-3 py-2 text-sm">
                    <ItemThumb item={s} className="h-11 w-11 rounded-xl" />
                    <span className="flex-1 font-semibold">{s.name}</span>
                    <button
                      type="button"
                      onClick={() => remove(s.id)}
                      aria-label={`Quitar ${s.name}`}
                      className="clay-btn clay-muted h-8 w-8 text-lg hover:text-[var(--accion)]"
                    >
                      ×
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap justify-between gap-2 text-sm font-semibold">
                <div className="flex gap-4">
                  <Link to="/servicios" onClick={close} className="clay-accion-text">
                    + Servicios
                  </Link>
                  <Link to="/aceites" onClick={close} className="clay-accion-text">
                    + Aceites
                  </Link>
                </div>
                <button type="button" onClick={clear} className="clay-muted hover:text-[var(--texto)]">
                  Vaciar
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <label className="text-sm font-bold" htmlFor="quote-moto">
                  Tu moto <span className="clay-muted font-medium">(opcional)</span>
                </label>
                <input
                  id="quote-moto"
                  type="text"
                  placeholder="Marca, modelo y año"
                  value={details.moto}
                  onChange={(e) => setDetail('moto', e.target.value)}
                  className={inputClass}
                />
                <label className="text-sm font-bold" htmlFor="quote-note">
                  Comentario <span className="clay-muted font-medium">(opcional)</span>
                </label>
                <textarea
                  id="quote-note"
                  rows={2}
                  placeholder="Ej. hace un ruido al frenar"
                  value={details.note}
                  onChange={(e) => setDetail('note', e.target.value)}
                  className={`${inputClass} resize-none`}
                />
              </div>
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 pt-2 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            <a
              href={buildWhatsAppUrl(buildQuoteMessage(items, details))}
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn clay-green flex items-center justify-center gap-2 px-5 py-4"
            >
              <WhatsAppIcon />
              Enviar por WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
