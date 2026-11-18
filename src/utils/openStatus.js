import { SHOP_INFO } from '../config/shopInfo'

const DAY_NAMES = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']
const WEEKDAYS = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }

function formatHour(h) {
  const suffix = h < 12 ? 'a.m.' : 'p.m.'
  return `${h % 12 === 0 ? 12 : h % 12}:00 ${suffix}`
}

// Hora actual en Colombia, sin importar la zona horaria del teléfono de quien visita.
function nowInColombia(date) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Bogota',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    hourCycle: 'h23',
  }).formatToParts(date)
  const get = (type) => parts.find((p) => p.type === type)?.value
  return { day: WEEKDAYS[get('weekday')], hour: Number(get('hour')) + Number(get('minute')) / 60 }
}

// Devuelve { open, label } para el indicador del taller, p. ej. "Abierto · hasta las 6:00 p.m.".
export function getOpenStatus(date = new Date()) {
  const { openDays, openHour, closeHour } = SHOP_INFO
  const { day, hour } = nowInColombia(date)

  if (openDays.includes(day) && hour >= openHour && hour < closeHour) {
    return { open: true, label: `Abierto · hasta las ${formatHour(closeHour)}` }
  }
  if (openDays.includes(day) && hour < openHour) {
    return { open: false, label: `Cerrado · abre hoy a las ${formatHour(openHour)}` }
  }
  for (let i = 1; i <= 7; i += 1) {
    const next = (day + i) % 7
    if (openDays.includes(next)) {
      const when = i === 1 ? 'mañana' : `el ${DAY_NAMES[next]}`
      return { open: false, label: `Cerrado · abre ${when} a las ${formatHour(openHour)}` }
    }
  }
  return { open: false, label: 'Cerrado' }
}
