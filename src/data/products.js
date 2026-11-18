// Productos a la venta en el taller. Sin precios: se cotizan por WhatsApp junto con los servicios.
// Las fotos son recortes de la foto real del estante (src/assets/work/estante-aceites.jpeg).
// `use` describe el uso según la etiqueta del envase. Revisar la lista cuando cambie el inventario.

import motul3000 from '../assets/productos/motul-3000-20w50.jpg'
import motul5000w30 from '../assets/productos/motul-5000-10w30.jpg'
import motul5000w40 from '../assets/productos/motul-5000-10w40.jpg'
import motulNgen5w40 from '../assets/productos/motul-ngen5-10w40.jpg'
import motulNgen5w50 from '../assets/productos/motul-ngen5-15w50.jpg'
import motulNgen7 from '../assets/productos/motul-ngen7-10w40.jpg'
import yamazuki20w50 from '../assets/productos/yamazuki-20w50.jpg'
import yamazukiScooter from '../assets/productos/yamazuki-10w40-scooter.jpg'
import yamazuki2t from '../assets/productos/yamazuki-2t.jpg'
import superMoto from '../assets/productos/super-moto-20w50.jpg'
import maxter from '../assets/productos/maxter-10w40.jpg'
import estanteAceites from '../assets/work/estante-aceites.jpeg'

export const SHELF_PHOTO = estanteAceites

function oil(id, brand, line, viscosity, engine, use, imageUrl) {
  return { id, kind: 'product', group: 'ACEITE', brand, line, viscosity, engine, use, imageUrl, name: `${brand} ${line} ${viscosity}`.trim() }
}

export const OILS = [
  oil('p-motul-3000-20w50', 'Motul', '3000', '20W-50', '4T', 'Uso diario y trabajo', motul3000),
  oil('p-motul-5000-10w30', 'Motul', '5000', '10W-30', '4T', 'Uso diario y recreativo', motul5000w30),
  oil('p-motul-5000-10w40', 'Motul', '5000', '10W-40', '4T', 'Uso diario y recreativo', motul5000w40),
  oil('p-motul-ngen5-10w40', 'Motul', 'NGEN 5', '10W-40', '4T', 'Ciudad y paseo', motulNgen5w40),
  oil('p-motul-ngen5-15w50', 'Motul', 'NGEN 5', '15W-50', '4T', 'Ciudad y paseo', motulNgen5w50),
  oil('p-motul-ngen7-10w40', 'Motul', 'NGEN 7', '10W-40', '4T', 'Deportivas y doble propósito', motulNgen7),
  oil('p-yamazuki-20w50', 'Yamazuki', 'Evolution', '20W-50', '4T', 'Full synthetic', yamazuki20w50),
  oil('p-yamazuki-10w40-scooter', 'Yamazuki', 'Premium Scooter', '10W-40', '4T', 'Para scooter', yamazukiScooter),
  oil('p-super-moto-20w50', 'Super Moto', '4T', '20W-50', '4T', 'Uso diario', superMoto),
  oil('p-maxter-10w40', 'Maxter', 'Motofull', '10W-40', '4T', 'Full synthetic', maxter),
  oil('p-yamazuki-2t', 'Yamazuki', '2 Tiempos', '', '2T', 'Para motores de dos tiempos', yamazuki2t),
]

function extra(id, name, use) {
  return { id, kind: 'product', group: 'MANTENIMIENTO', name, use, imageUrl: null }
}

export const MAINTENANCE_PRODUCTS = [
  extra('p-liquido-frenos-dot3', 'Líquido de frenos DOT 3', 'Para el sistema hidráulico de frenos'),
  extra('p-aceite-horquilla-iso68', 'Aceite de horquilla ISO 68', 'Para barras telescópicas'),
  extra('p-lubricante-cadena', 'Lubricante de cadena en aerosol', 'Protege la cadena del desgaste'),
  extra('p-limpiador-carburador', 'Limpiador de carburador', 'Quita la suciedad del carburador'),
  extra('p-limpiador-contactos', 'Limpiador de contactos eléctricos', 'Para conectores y suiches'),
  extra('p-lubricante-multiusos', 'Lubricante multiusos', 'Afloja y protege piezas'),
]

export const PRODUCTS = [...OILS, ...MAINTENANCE_PRODUCTS]
