export const SHOP_INFO = {
  name: 'Turbo Motors',
  whatsappNumber: '573008049620', // formato: código país + número, sin + ni espacios
  address: 'Carrera 10 Este, El Triunfo, Pasto, Nariño, Colombia',
  mapEmbedUrl:
    'https://www.google.com/maps?q=1.191361,-77.263806&output=embed',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=1.191361,-77.263806',
  hours: 'Lunes a sábado: 8:00 a.m. – 6:00 p.m.',
  // Para el indicador "Abierto / Cerrado" (hora de Colombia). Días: 1 = lunes … 6 = sábado.
  openDays: [1, 2, 3, 4, 5, 6],
  openHour: 8,
  closeHour: 18,
  socialHandle: '@turbomotors.96',
  instagramUrl: 'https://www.instagram.com/turbomotors.96/',
  tiktokUrl: 'https://www.tiktok.com/@turbomotors.96',
}

export function buildWhatsAppUrl(message) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${SHOP_INFO.whatsappNumber}?text=${text}`
}
