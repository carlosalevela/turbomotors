// TODO: reemplazar la direccion por la real cuando la tengan — hoy es un ejemplo (placeholder).
export const SHOP_INFO = {
  name: 'Turbo Motors',
  mechanic: 'David Palacios',
  whatsappNumber: '573008049620', // formato: código país + número, sin + ni espacios
  address: 'Dirección por confirmar, Pasto, Nariño, Colombia',
  mapEmbedUrl:
    'https://www.google.com/maps?q=Pasto,+Nari%C3%B1o,+Colombia&output=embed',
  hours: 'Lunes a sábado: 8:00 a.m. – 6:00 p.m.',
}

export function buildWhatsAppUrl(message) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${SHOP_INFO.whatsappNumber}?text=${text}`
}
