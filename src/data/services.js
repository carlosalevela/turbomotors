// Datos de ejemplo — mismo formato que usará la futura API real,
// así que reemplazarlos por datos reales o un fetch() no requiere tocar los componentes.

import kitArrastreAntes from '../assets/work/kit-arrastre-antes.jpeg'
import kitArrastreDespues from '../assets/work/kit-arrastre-despues.jpeg'
import frenosLiquido from '../assets/work/frenos-liquido.jpeg'
import mantenimientoDesarmada from '../assets/work/mantenimiento-desarmada.jpeg'

function unsplash(id, params = 'w=1200&q=80&auto=format&fit=crop') {
  return `https://images.unsplash.com/${id}?${params}`
}

// Fotos de stock (Unsplash, uso libre) — se usan solo donde todavía no hay foto real del taller.
export const STOCK_PHOTOS = {
  heroMechanic: unsplash('photo-1623220988124-bcd1bad9a408', 'w=1800&q=80&auto=format&fit=crop'),
  engine: unsplash('photo-1534755563369-ad37931ac77b'),
  brake: unsplash('photo-1696494561430-de087dd0bd69'),
  electrico: unsplash('photo-1777042510267-2c0543a0d715'),
}

// Fotos reales de trabajos de Turbo Motors (David Palacios).
export const REAL_PHOTOS = {
  kitArrastreAntes,
  kitArrastreDespues,
  frenosLiquido,
  mantenimientoDesarmada,
}

export const CATEGORIES = [
  {
    value: 'ACEITE',
    label: 'Cambio de aceite',
    image: STOCK_PHOTOS.engine,
    seoDescription:
      'Cambio de aceite y filtro para tu moto en Pasto, Nariño. Aceite mineral o sintético con revisión de niveles incluida.',
  },
  {
    value: 'FRENOS',
    label: 'Frenos',
    image: REAL_PHOTOS.frenosLiquido,
    seoDescription:
      'Servicio de frenos para motos en Pasto: pastillas, discos y purga del sistema hidráulico con repuestos de calidad.',
  },
  {
    value: 'MOTOR',
    label: 'Motor',
    image: REAL_PHOTOS.kitArrastreDespues,
    seoDescription:
      'Revisión y reparación de motor para motos en Pasto: diagnóstico, ajustes y cambio de kit de arrastre (cadena y piñonería).',
  },
  {
    value: 'SUSPENSION',
    label: 'Suspensión',
    image: STOCK_PHOTOS.heroMechanic,
    seoDescription:
      'Revisión y cambio de suspensión para motos en Pasto: amortiguadores, horquilla y ajuste de precarga.',
  },
  {
    value: 'ELECTRICO',
    label: 'Sistema eléctrico',
    image: STOCK_PHOTOS.electrico,
    seoDescription:
      'Servicio eléctrico para motos en Pasto: diagnóstico de batería, luces, pito y sistema de carga.',
  },
  {
    value: 'MANTENIMIENTO',
    label: 'Mantenimiento general',
    image: REAL_PHOTOS.mantenimientoDesarmada,
    seoDescription:
      'Mantenimiento general preventivo para motos en Pasto: aceite, frenos, cadena, luces y niveles en una sola revisión.',
  },
]

function placeholder(text, bg, fg) {
  return `https://placehold.co/600x450/${bg}/${fg}?text=${encodeURIComponent(text)}`
}

export const SERVICES = [
  {
    id: 1,
    name: 'Cambio de Aceite y Filtro',
    description: 'Cambio de aceite de motor con filtro nuevo. Incluye revisión de niveles.',
    category: 'ACEITE',
    price: 45000,
    priceNote: 'Desde',
    imageUrl: placeholder('Cambio de Aceite', 'fee2e2', '7f1d1d'),
  },
  {
    id: 2,
    name: 'Cambio de Aceite Sintético',
    description: 'Aceite sintético de alto rendimiento para mayor protección del motor.',
    category: 'ACEITE',
    price: 75000,
    priceNote: 'Desde',
    imageUrl: placeholder('Aceite Sintetico', 'fee2e2', '7f1d1d'),
  },
  {
    id: 3,
    name: 'Cambio de Pastillas de Freno',
    description: 'Cambio de pastillas delanteras o traseras con revisión del sistema.',
    category: 'FRENOS',
    price: 60000,
    priceNote: 'Desde',
    imageUrl: placeholder('Pastillas de Freno', 'fee2e2', '7f1d1d'),
  },
  {
    id: 4,
    name: 'Cambio de Disco de Freno',
    description: 'Reemplazo de disco de freno delantero o trasero, incluye mano de obra.',
    category: 'FRENOS',
    price: 120000,
    priceNote: 'Desde',
    imageUrl: placeholder('Disco de Freno', 'fee2e2', '7f1d1d'),
  },
  {
    id: 5,
    name: 'Purga de Frenos',
    description: 'Cambio de líquido de frenos y purga del sistema hidráulico.',
    category: 'FRENOS',
    price: 40000,
    priceNote: 'Desde',
    imageUrl: REAL_PHOTOS.frenosLiquido,
  },
  {
    id: 6,
    name: 'Revisión y Ajuste de Motor',
    description: 'Diagnóstico completo del motor: compresión, ruidos y ajustes generales.',
    category: 'MOTOR',
    price: 80000,
    priceNote: 'Desde',
    imageUrl: placeholder('Ajuste de Motor', 'fee2e2', '7f1d1d'),
  },
  {
    id: 7,
    name: 'Cambio de Cadena y Piñonería',
    description: 'Reemplazo de kit de arrastre completo (cadena, piñón y corona).',
    category: 'MOTOR',
    price: 180000,
    priceNote: 'Desde',
    imageUrl: REAL_PHOTOS.kitArrastreDespues,
    beforeImageUrl: REAL_PHOTOS.kitArrastreAntes,
  },
  {
    id: 8,
    name: 'Revisión de Suspensión',
    description: 'Diagnóstico de amortiguadores y horquilla, ajuste de precarga.',
    category: 'SUSPENSION',
    price: 50000,
    priceNote: 'Desde',
    imageUrl: placeholder('Suspension', 'fee2e2', '7f1d1d'),
  },
  {
    id: 9,
    name: 'Cambio de Amortiguadores',
    description: 'Instalación de amortiguadores nuevos, delanteros o traseros.',
    category: 'SUSPENSION',
    price: 220000,
    priceNote: 'Desde',
    imageUrl: placeholder('Amortiguadores', 'fee2e2', '7f1d1d'),
  },
  {
    id: 10,
    name: 'Diagnóstico Eléctrico',
    description: 'Revisión de batería, luces, pito y sistema de carga.',
    category: 'ELECTRICO',
    price: 35000,
    priceNote: 'Desde',
    imageUrl: STOCK_PHOTOS.electrico,
  },
  {
    id: 11,
    name: 'Cambio de Batería',
    description: 'Suministro e instalación de batería nueva compatible con tu moto.',
    category: 'ELECTRICO',
    price: 130000,
    priceNote: 'Desde',
    imageUrl: placeholder('Bateria', 'fee2e2', '7f1d1d'),
  },
  {
    id: 12,
    name: 'Mantenimiento General Preventivo',
    description: 'Revisión completa: aceite, frenos, cadena, luces y niveles. Ideal cada 3.000 km.',
    category: 'MANTENIMIENTO',
    price: 90000,
    priceNote: 'Desde',
    imageUrl: REAL_PHOTOS.mantenimientoDesarmada,
  },
]

export function formatCOP(value) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  }).format(value)
}
