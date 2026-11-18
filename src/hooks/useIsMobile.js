import { useSyncExternalStore } from 'react'

// true en pantallas de celular (menos de 640px, igual que el corte "sm" de Tailwind).
const QUERY = '(max-width: 639px)'

function subscribe(callback) {
  const mql = window.matchMedia(QUERY)
  mql.addEventListener('change', callback)
  return () => mql.removeEventListener('change', callback)
}

export default function useIsMobile() {
  return useSyncExternalStore(subscribe, () => window.matchMedia(QUERY).matches, () => false)
}
