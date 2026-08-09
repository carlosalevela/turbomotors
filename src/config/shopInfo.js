export const SHOP_INFO = {
  name: 'Turbo Motors',
  mechanic: 'David Palacios',
  whatsappNumber: '573008049620', // formato: código país + número, sin + ni espacios
  address: 'Carrera 10 Este, El Triunfo, Pasto, Nariño, Colombia',
  mapEmbedUrl:
    'https://www.google.com/maps?q=1.191361,-77.263806&output=embed',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=1.191361,-77.263806',
  hours: 'Lunes a sábado: 8:00 a.m. – 6:00 p.m.',
  instagramUrl: 'https://www.instagram.com/turbomotors.96/',
  tiktokUrl: 'https://www.tiktok.com/@turbomotors.96',
}

export function buildWhatsAppUrl(message) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${SHOP_INFO.whatsappNumber}?text=${text}`
}
