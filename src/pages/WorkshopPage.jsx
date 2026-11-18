import { useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'
import { GALLERY } from '../data/services'
import { MoreLink, PageTitle } from '../components/ui'
import WorkViewer from '../components/WorkViewer'
import usePageMeta from '../hooks/usePageMeta'

export default function WorkshopPage() {
  usePageMeta(
    'Trabajos de Mecánica de Motos en Pasto',
    'Fotos reales de trabajos hechos en Turbo Motors, Pasto: clutch, cajas de cambios, motores de arranque, frenos, cambios de aceite y más.',
  )

  // La foto abierta va en la URL (?foto=3) para poder compartir un trabajo puntual.
  const [params, setParams] = useSearchParams()
  const raw = Number(params.get('foto'))
  const open = Number.isInteger(raw) && raw >= 1 && raw <= GALLERY.length ? raw - 1 : null

  const show = useCallback((i) => setParams({ foto: String(i + 1) }, { replace: open !== null }), [setParams, open])
  const close = useCallback(() => setParams({}, { replace: true }), [setParams])

  return (
    <>
      <PageTitle title="El taller">
        Trabajos reales hechos en el taller. Toca una foto para ver qué se le hizo a cada moto.
      </PageTitle>

      <section className="mx-auto max-w-6xl px-4 pt-4">
        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {GALLERY.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => show(i)}
              className="clay clay-lift group block w-full break-inside-avoid rounded-[32px] p-2 text-left"
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" className="w-full rounded-[24px] object-cover" />
              <span className="block px-2 pt-2 pb-1 text-sm font-bold group-hover:text-[var(--accion)]">
                {photo.title}
              </span>
            </button>
          ))}
        </div>
        <div className="mt-10 text-center">
          <MoreLink to="/servicios">Ver servicios y cotizar</MoreLink>
        </div>
      </section>

      {open !== null && <WorkViewer photos={GALLERY} index={open} onClose={close} onChange={show} />}
    </>
  )
}
