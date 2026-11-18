import { useEffect, useRef } from 'react'
import { SERVICES } from '../data/services'
import { useQuote } from '../context/QuoteContext'

// Vista previa de un trabajo del taller: foto grande + qué se hizo + servicio relacionado.
export default function WorkViewer({ photos, index, onClose, onChange }) {
  const photo = photos[index]
  const service = SERVICES.find((s) => s.id === photo.serviceId)
  const { has, toggle } = useQuote()
  const panelRef = useRef(null)
  const touchX = useRef(null)

  const prev = () => onChange((index - 1 + photos.length) % photos.length)
  const next = () => onChange((index + 1) % photos.length)

  useEffect(() => {
    panelRef.current?.focus()
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onChange((index - 1 + photos.length) % photos.length)
      if (e.key === 'ArrowRight') onChange((index + 1) % photos.length)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [index, photos.length, onClose, onChange])

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    if (touchX.current === null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    if (Math.abs(dx) > 50) (dx > 0 ? prev : next)()
    touchX.current = null
  }

  const added = service && has(service.id)
  const arrowClass = 'clay clay-btn flex h-11 w-11 shrink-0 items-center justify-center text-lg'

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="work-title"
    >
      <div className="absolute inset-0 bg-[rgb(var(--sombra)/0.55)] backdrop-blur-sm" onClick={onClose} />

      <div
        ref={panelRef}
        tabIndex={-1}
        className="clay clay-pop relative flex max-h-[92vh] outline-none w-full max-w-5xl flex-col overflow-y-auto rounded-b-none p-3 sm:rounded-[32px] md:grid md:grid-cols-[1.3fr_1fr] md:overflow-hidden"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="clay clay-btn absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center text-xl"
        >
          ×
        </button>

        <div className="clay-well relative md:h-full" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            className="clay-pop h-[52vh] w-full rounded-[18px] bg-black/80 object-contain md:h-[80vh]"
          />
          <span className="clay-chip absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-bold">
            {index + 1} / {photos.length}
          </span>
        </div>

        <div className="flex flex-col gap-4 p-4 sm:p-6 md:overflow-y-auto md:pt-16">
          {photo.moto && (
            <span className="clay-chip w-fit rounded-full px-3 py-1 text-xs font-bold tracking-wide uppercase">
              {photo.moto}
            </span>
          )}

          <h2 id="work-title" className="clay-display text-3xl sm:text-4xl">
            {photo.title}
          </h2>
          <p className="clay-muted text-base leading-relaxed">{photo.summary}</p>

          {service && (
            <div className="clay-pressed mt-2 flex flex-col gap-3 rounded-3xl p-4">
              <p className="clay-muted text-xs font-bold tracking-wide uppercase">¿Tu moto necesita algo así?</p>
              <div className="flex items-center gap-3">
                <img src={service.imageUrl} alt="" className="h-12 w-12 rounded-xl object-cover" />
                <span className="flex-1 text-sm font-semibold">{service.name}</span>
              </div>
              <button
                type="button"
                onClick={() => toggle(service.id)}
                aria-pressed={added}
                className={`clay-btn px-4 py-3 text-sm ${added ? 'clay text-[var(--verde)]' : 'clay-red'}`}
              >
                {added ? '✓ Agregado a tu cotización' : '+ Agregar a cotización'}
              </button>
            </div>
          )}

          <div className="mt-auto flex items-center justify-between gap-3 pt-2">
            <button type="button" onClick={prev} aria-label="Trabajo anterior" className={arrowClass}>
              ←
            </button>
            <span className="clay-muted text-xs">Desliza o usa las flechas</span>
            <button type="button" onClick={next} aria-label="Trabajo siguiente" className={arrowClass}>
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
