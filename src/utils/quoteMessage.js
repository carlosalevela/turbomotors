// Arma el texto de WhatsApp a partir de lo elegido (servicios y/o productos) y los datos opcionales.
export function buildQuoteMessage(items, details) {
  const services = items.filter((x) => x.kind !== 'product')
  const products = items.filter((x) => x.kind === 'product')
  const list = (xs) => xs.map((x, i) => `${i + 1}. ${x.name}`)

  let lines
  if (products.length === 0) {
    lines = [
      services.length === 1
        ? 'Hola, quiero cotizar este servicio para mi moto:'
        : 'Hola, quiero cotizar estos servicios para mi moto:',
      ...list(services),
    ]
  } else if (services.length === 0) {
    lines = [
      products.length === 1 ? 'Hola, quiero preguntar por este producto:' : 'Hola, quiero preguntar por estos productos:',
      ...list(products),
    ]
  } else {
    lines = ['Hola, quiero cotizar para mi moto:', '', 'Servicios:', ...list(services), '', 'Productos:', ...list(products)]
  }

  const extra = [
    details.moto.trim() && `Moto: ${details.moto.trim()}`,
    details.name.trim() && `Nombre: ${details.name.trim()}`,
    details.note.trim() && `Comentario: ${details.note.trim()}`,
  ].filter(Boolean)
  if (extra.length) lines.push('', ...extra)
  return lines.join('\n')
}
