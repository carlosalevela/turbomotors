import { useEffect, useRef, useState } from 'react'
import { SHOP_INFO } from '../config/shopInfo'
import { TIKTOK_VIDEOS } from '../data/videos'

function TikTokIcon({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
      <path d="M16.5 3c.4 2.1 1.8 3.6 4 3.9v2.6c-1.4 0-2.7-.4-4-1.2v6.4c0 3.1-2.5 5.3-5.3 5.3S5.9 17.8 5.9 14.7c0-3 2.4-5.3 5.4-5.3.4 0 .8 0 1.1.1v2.7c-.3-.1-.7-.2-1.1-.2-1.5 0-2.7 1.2-2.7 2.7s1.2 2.7 2.7 2.7 2.8-1.1 2.8-2.7V3h2.4Z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-current" aria-hidden="true">
      <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
    </svg>
  )
}

// Reproductor: el iframe de TikTok solo se carga al abrir el video (la página no se pone lenta).
function VideoPlayer({ video, onClose }) {
  const panelRef = useRef(null)

  useEffect(() => {
    panelRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={video.title}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div ref={panelRef} tabIndex={-1} className="clay-pop relative w-full max-w-[380px] outline-none">
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar video"
          className="clay clay-btn absolute -top-3 -right-3 z-10 flex h-10 w-10 items-center justify-center text-xl"
        >
          ×
        </button>
        <div className="clay overflow-hidden rounded-[32px] p-2">
          <iframe
            title={video.title}
            src={`https://www.tiktok.com/player/v1/${video.id}?autoplay=1&music_info=1&description=1&rel=0`}
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            className="aspect-[9/16] max-h-[72vh] w-full rounded-[24px] border-0 bg-black"
          />
        </div>
        {/* Respaldo por si el reproductor de TikTok no carga: abre la publicación en TikTok. */}
        <a
          href={`${SHOP_INFO.tiktokUrl}/${video.kind === 'fotos' ? 'photo' : 'video'}/${video.id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="clay clay-btn mt-3 flex items-center justify-center gap-2 px-5 py-3 text-sm"
        >
          <TikTokIcon className="h-4 w-4" />
          Ver en TikTok
        </a>
      </div>
    </div>
  )
}

export default function TikTokSection() {
  const [playing, setPlaying] = useState(null)
  const profileUrl = SHOP_INFO.tiktokUrl

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="sm:clay-box grid items-center gap-5 sm:gap-8 lg:grid-cols-[1fr_1.3fr]">
        <div className="flex flex-col items-start">
          <span className="clay-chip flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold tracking-wide uppercase">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accion)] opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accion)]" />
            </span>
            Directos en la noche
          </span>
          <h2 className="clay-display mt-4 text-4xl sm:mt-5 sm:text-5xl">Míralo en TikTok</h2>
          <p className="clay-muted mt-2 sm:hidden">Videos del taller y directos en la noche.</p>
          <p className="clay-muted mt-3 hidden max-w-md sm:block">
            Subimos videos de los trabajos del taller y hacemos directos en la noche. Síguenos y TikTok te avisa cuando
            estemos en vivo.
          </p>
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="clay-btn clay-red mt-6 hidden sm:flex items-center gap-2 px-6 py-3.5 text-sm"
          >
            <TikTokIcon className="h-4.5 w-4.5" />
            Seguir {SHOP_INFO.socialHandle}
          </a>
        </div>

        {TIKTOK_VIDEOS.length > 0 ? (
          <div className="clay-scroll-row flex snap-x scroll-px-4 gap-3 overflow-x-auto sm:gap-4">
            {TIKTOK_VIDEOS.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setPlaying(v)}
                className="clay-well clay-lift group relative w-[9.5rem] shrink-0 snap-start text-left sm:w-44"
                aria-label={`Ver video: ${v.title}`}
              >
                {v.thumb ? (
                  <img src={v.thumb} alt="" loading="lazy" className="aspect-[9/16] w-full rounded-[18px] object-cover" />
                ) : (
                  <span className="clay-dark block aspect-[9/16] w-full rounded-[18px]" />
                )}
                <span className="absolute inset-2 flex flex-col justify-between rounded-[18px] bg-gradient-to-t from-black/75 via-transparent to-black/10 p-3">
                  <span className="flex items-center justify-between text-white/90">
                    <TikTokIcon className="h-4 w-4" />
                    <span className="rounded-full bg-black/40 px-2 py-0.5 text-[11px] font-bold">
                      {v.kind === 'fotos' ? 'Fotos' : v.duration ?? 'Video'}
                    </span>
                  </span>
                  <span>
                    <span className="clay-red mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full transition group-hover:scale-110">
                      <PlayIcon />
                    </span>
                    <span className="line-clamp-2 text-sm font-bold text-white">{v.title}</span>
                  </span>
                </span>
              </button>
            ))}
          </div>
        ) : (
          // Sin videos cargados todavía: tarjeta que lleva al perfil.
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="clay-pressed clay-lift group mx-auto flex aspect-[9/12] w-full max-w-xs flex-col items-center justify-center gap-4 rounded-[32px] p-6 text-center"
          >
            <span className="clay-red flex h-16 w-16 items-center justify-center rounded-full transition group-hover:scale-110">
              <PlayIcon />
            </span>
            <span className="clay-display text-2xl">{SHOP_INFO.socialHandle}</span>
            <span className="clay-muted text-sm">Videos del taller y directos en la noche</span>
          </a>
        )}

        {/* En celular el botón va después de los videos */}
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="clay-btn clay flex items-center justify-center gap-2 px-5 py-3 text-sm sm:hidden"
        >
          <TikTokIcon className="h-4 w-4" />
          Seguir {SHOP_INFO.socialHandle}
        </a>
      </div>

      {playing && <VideoPlayer video={playing} onClose={() => setPlaying(null)} />}
    </section>
  )
}
