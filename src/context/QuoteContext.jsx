import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { SERVICES } from '../data/services'
import { PRODUCTS } from '../data/products'

// "Cotización": lista de servicios y productos que el cliente quiere preguntar.
// Se guarda en localStorage para que no se pierda al navegar o recargar.
const STORAGE_KEY = 'turbomotors-cotizacion'

const QuoteContext = createContext(null)

// Servicios (id numérico) y productos (id 'p-...') comparten la misma lista.
const CATALOG = [...SERVICES.map((s) => ({ ...s, kind: 'service' })), ...PRODUCTS]
const findItem = (id) => CATALOG.find((x) => x.id === id)

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return {
      ids: Array.isArray(saved?.ids) ? saved.ids.filter((id) => findItem(id)) : [],
      details: { name: '', moto: '', note: '', ...saved?.details },
    }
  } catch {
    return { ids: [], details: { name: '', moto: '', note: '' } }
  }
}

export function QuoteProvider({ children }) {
  const [state, setState] = useState(loadState)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const toggle = useCallback((id) => {
    setState((s) => ({
      ...s,
      ids: s.ids.includes(id) ? s.ids.filter((x) => x !== id) : [...s.ids, id],
    }))
  }, [])

  const remove = useCallback((id) => {
    setState((s) => ({ ...s, ids: s.ids.filter((x) => x !== id) }))
  }, [])

  const clear = useCallback(() => setState((s) => ({ ...s, ids: [] })), [])

  const setDetail = useCallback((field, value) => {
    setState((s) => ({ ...s, details: { ...s.details, [field]: value } }))
  }, [])

  const value = useMemo(
    () => ({
      items: state.ids.map(findItem).filter(Boolean),
      details: state.details,
      has: (id) => state.ids.includes(id),
      toggle,
      remove,
      clear,
      setDetail,
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
    }),
    [state, isOpen, toggle, remove, clear, setDetail],
  )

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>
}

export function useQuote() {
  const ctx = useContext(QuoteContext)
  if (!ctx) throw new Error('useQuote debe usarse dentro de <QuoteProvider>')
  return ctx
}
