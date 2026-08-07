export const SHOP_INFO = {
  name: 'Turbo Motors',
  mechanic: 'David Palacios',
  whatsappNumber: '573008049620', // formato: código país + número, sin + ni espacios
  address: 'Carrera 10 Este, El Triunfo, Pasto, Nariño, Colombia',
  mapEmbedUrl:
    'https://www.google.com/maps?q=1.191361,-77.263806&output=embed',
  hours: 'Lunes a sábado: 8:00 a.m. – 6:00 p.m.',
}

export function buildWhatsAppUrl(message) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${SHOP_INFO.whatsappNumber}?text=${text}`
}
