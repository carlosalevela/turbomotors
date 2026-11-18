// Datos de ejemplo — mismo formato que usará la futura API real,
// así que reemplazarlos por datos reales o un fetch() no requiere tocar los componentes.

import kitArrastreAntes from '../assets/work/kit-arrastre-antes.jpeg'
import kitArrastreDespues from '../assets/work/kit-arrastre-despues.jpeg'
import frenosLiquido from '../assets/work/frenos-liquido.jpeg'
import mantenimientoDesarmada from '../assets/work/mantenimiento-desarmada.jpeg'
import filtroAceiteBajaj from '../assets/work/filtro-aceite-bajaj.jpeg'
import drenajeAceiteSuzuki from '../assets/work/drenaje-aceite-suzuki.jpeg'
import aceiteMotulHonda from '../assets/work/aceite-motul-honda.jpeg'
import aceiteCastrolBajaj from '../assets/work/aceite-castrol-bajaj.jpeg'
import pastillasFrenoNuevas from '../assets/work/pastillas-freno-nuevas.jpeg'
import bombaFrenoLiquidoContaminado from '../assets/work/bomba-freno-liquido-contaminado.jpeg'
import ajusteValvulas from '../assets/work/ajuste-valvulas.jpeg'
import horquillaDesmontada from '../assets/work/horquilla-desmontada.jpeg'
import yamahaMt09Suspension from '../assets/work/yamaha-mt09-suspension.jpeg'
import basculanteDesmontado from '../assets/work/basculante-desmontado.jpeg'
import cableDanado from '../assets/work/cable-danado.jpeg'
import cableadoReparado from '../assets/work/cableado-reparado.jpeg'
import diagnosticoMultimetro from '../assets/work/diagnostico-multimetro.jpeg'
import motorArranqueDesarmado from '../assets/work/motor-arranque-desarmado.jpeg'
import tapaMotorLimpieza from '../assets/work/tapa-motor-limpieza.jpeg'
import yamahaRxRestaurada from '../assets/work/yamaha-rx-restaurada.jpeg'
import engranajesArranque from '../assets/work/engranajes-arranque.jpeg'
import cajaCambiosAbierta from '../assets/work/caja-cambios-abierta.jpeg'
import clutchSuzuki from '../assets/work/clutch-suzuki.jpeg'
import clutchMotor2t from '../assets/work/clutch-motor-2t.jpeg'
import clutchDesarmado from '../assets/work/clutch-desarmado.jpeg'
import discosClutch from '../assets/work/discos-clutch.jpeg'
import pinonSalida from '../assets/work/pinon-salida.jpeg'
// Ilustración temporal hasta tener una foto real de un cambio de disco.
import discoFrenoIlustracion from '../assets/work/disco-freno-ilustracion.svg'

// Fotos reales de trabajos de Turbo Motors.
export const REAL_PHOTOS = {
  kitArrastreAntes,
  kitArrastreDespues,
  frenosLiquido,
  mantenimientoDesarmada,
  filtroAceiteBajaj,
  drenajeAceiteSuzuki,
  aceiteMotulHonda,
  pastillasFrenoNuevas,
  ajusteValvulas,
  horquillaDesmontada,
  yamahaMt09Suspension,
  cableDanado,
  cableadoReparado,
  diagnosticoMultimetro,
  tapaMotorLimpieza,
}

// Galería de trabajos del taller.
// title/summary: BORRADOR escrito a partir de lo que se ve en cada foto — el taller debe revisarlos.
// moto: modelo si se sabe (null si no). serviceId: servicio relacionado para cotizar algo similar.
export const GALLERY = [
  {
    src: yamahaRxRestaurada,
    alt: 'Yamaha RX de dos tiempos lista después de su mantenimiento en Turbo Motors',
    moto: 'Yamaha RX',
    title: 'Mantenimiento completo a una clásica',
    summary:
      'Una Yamaha RX de dos tiempos que salió del taller lista para rodar: revisión de motor, frenos y parte eléctrica antes de entregarla.',
    serviceId: 12,
  },
  {
    src: clutchDesarmado,
    alt: 'Clutch desarmado pieza por pieza para revisión y medición',
    moto: null,
    title: 'Clutch revisado pieza por pieza',
    summary:
      'Desarmamos el clutch completo para medir discos, resortes y canasta con calibrador, y cambiar solo lo que de verdad está gastado.',
    serviceId: 6,
  },
  {
    src: cajaCambiosAbierta,
    alt: 'Motor abierto con la caja de cambios expuesta para reparación',
    moto: null,
    title: 'Motor abierto: caja de cambios',
    summary:
      'Motor separado por mitades para revisar la caja de cambios: piñones, horquillas y rodamientos. Es el trabajo cuando los cambios se saltan o no entran.',
    serviceId: 6,
  },
  {
    src: discosClutch,
    alt: 'Paquete de discos de clutch retirado del motor',
    moto: null,
    title: 'Discos de clutch',
    summary:
      'Paquete de discos retirado para revisar el desgaste. Si la moto patina o el clutch no agarra, este es el primer lugar donde miramos.',
    serviceId: 6,
  },
  {
    src: motorArranqueDesarmado,
    alt: 'Motor de arranque desarmado para limpieza y revisión',
    moto: null,
    title: 'Reparación de motor de arranque',
    summary:
      'Motor de arranque desarmado: limpieza del inducido y revisión de escobillas y rodamientos, para que la moto vuelva a prender al primer toque.',
    serviceId: 10,
  },
  {
    src: engranajesArranque,
    alt: 'Engranajes del sistema de arranque eléctrico con la tapa retirada',
    moto: null,
    title: 'Engranajes del arranque',
    summary: 'Tapa retirada para revisar los engranajes del arranque eléctrico y el volante del motor.',
    serviceId: 10,
  },
  {
    src: clutchSuzuki,
    alt: 'Canasta de clutch de una moto Suzuki con la tapa lateral abierta',
    moto: 'Suzuki',
    title: 'Clutch de una Suzuki',
    summary: 'Tapa lateral abierta para revisar la canasta y el conjunto del clutch.',
    serviceId: 6,
  },
  {
    src: clutchMotor2t,
    alt: 'Clutch y pistón de un motor de dos tiempos en reparación',
    moto: 'Suzuki dos tiempos',
    title: 'Reparación de motor dos tiempos',
    summary: 'Clutch y pistón a la vista durante la reparación de un motor 2T, con el kit de empaques nuevo listo para armar.',
    serviceId: 6,
  },
  {
    src: bombaFrenoLiquidoContaminado,
    alt: 'Bomba de freno con líquido contaminado antes de la purga',
    moto: null,
    title: 'Líquido de frenos contaminado',
    summary:
      'Así estaba el depósito de la bomba de freno: líquido degradado y con sedimentos. Se limpió y se purgó todo el sistema.',
    serviceId: 5,
  },
  {
    src: aceiteCastrolBajaj,
    alt: 'Cambio de aceite Castrol Power1 20W-50 en una moto Bajaj',
    moto: 'Bajaj',
    title: 'Cambio de aceite',
    summary: 'Cambio de aceite con Castrol Power1 20W-50, el que recomienda el fabricante para este motor.',
    serviceId: 1,
  },
  {
    src: pinonSalida,
    alt: 'Piñón de salida instalado durante el cambio de kit de arrastre',
    moto: null,
    title: 'Piñón de salida',
    summary: 'Piñón de salida nuevo, instalado como parte del cambio de kit de arrastre.',
    serviceId: 7,
  },
  {
    src: basculanteDesmontado,
    alt: 'Basculante desmontado para revisión de bujes y suspensión trasera',
    moto: null,
    title: 'Basculante desmontado',
    summary: 'Basculante fuera de la moto para revisar bujes y suspensión trasera.',
    serviceId: 8,
  },
]

export const CATEGORIES = [
  {
    value: 'ACEITE',
    label: 'Cambio de aceite',
    image: REAL_PHOTOS.drenajeAceiteSuzuki,
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
    image: REAL_PHOTOS.yamahaMt09Suspension,
    seoDescription:
      'Revisión y cambio de suspensión para motos en Pasto: amortiguadores, horquilla y ajuste de precarga.',
  },
  {
    value: 'ELECTRICO',
    label: 'Sistema eléctrico',
    image: REAL_PHOTOS.diagnosticoMultimetro,
    seoDescription:
      'Servicio eléctrico para motos en Pasto: diagnóstico de batería, luces, pito y sistema de carga.',
  },
  {
    value: 'MANTENIMIENTO',
    label: 'Mantenimiento general',
    image: REAL_PHOTOS.tapaMotorLimpieza,
    seoDescription:
      'Mantenimiento general preventivo para motos en Pasto: aceite, frenos, cadena, luces y niveles en una sola revisión.',
  },
]

export const SERVICES = [
  {
    id: 1,
    name: 'Cambio de Aceite y Filtro',
    description: 'Cambio de aceite de motor con filtro nuevo. Incluye revisión de niveles.',
    category: 'ACEITE',
    imageUrl: REAL_PHOTOS.filtroAceiteBajaj,
  },
  {
    id: 2,
    name: 'Cambio de Aceite Sintético',
    description: 'Aceite sintético de alto rendimiento para mayor protección del motor.',
    category: 'ACEITE',
    imageUrl: REAL_PHOTOS.aceiteMotulHonda,
  },
  {
    id: 3,
    name: 'Cambio de Pastillas de Freno',
    description: 'Cambio de pastillas delanteras o traseras con revisión del sistema.',
    category: 'FRENOS',
    imageUrl: REAL_PHOTOS.pastillasFrenoNuevas,
  },
  {
    id: 4,
    name: 'Cambio de Disco de Freno',
    description: 'Reemplazo de disco de freno delantero o trasero, incluye mano de obra.',
    category: 'FRENOS',
    imageUrl: discoFrenoIlustracion,
  },
  {
    id: 5,
    name: 'Purga de Frenos',
    description: 'Cambio de líquido de frenos y purga del sistema hidráulico.',
    category: 'FRENOS',
    imageUrl: REAL_PHOTOS.frenosLiquido,
  },
  {
    id: 6,
    name: 'Revisión y Ajuste de Motor',
    description: 'Diagnóstico completo del motor: compresión, ruidos y ajustes generales.',
    category: 'MOTOR',
    imageUrl: REAL_PHOTOS.ajusteValvulas,
  },
  {
    id: 7,
    name: 'Cambio de Cadena y Piñonería',
    description: 'Reemplazo de kit de arrastre completo (cadena, piñón y corona).',
    category: 'MOTOR',
    imageUrl: REAL_PHOTOS.kitArrastreDespues,
    beforeImageUrl: REAL_PHOTOS.kitArrastreAntes,
  },
  {
    id: 8,
    name: 'Revisión de Suspensión',
    description: 'Diagnóstico de amortiguadores y horquilla, ajuste de precarga.',
    category: 'SUSPENSION',
    imageUrl: REAL_PHOTOS.horquillaDesmontada,
  },
  {
    id: 9,
    name: 'Cambio de Amortiguadores',
    description: 'Instalación de amortiguadores nuevos, delanteros o traseros.',
    category: 'SUSPENSION',
    imageUrl: REAL_PHOTOS.yamahaMt09Suspension,
  },
  {
    id: 10,
    name: 'Diagnóstico Eléctrico',
    description: 'Revisión de batería, luces, pito y sistema de carga.',
    category: 'ELECTRICO',
    imageUrl: REAL_PHOTOS.cableadoReparado,
    beforeImageUrl: REAL_PHOTOS.cableDanado,
  },
  {
    id: 11,
    name: 'Cambio de Batería',
    description: 'Suministro e instalación de batería nueva compatible con tu moto.',
    category: 'ELECTRICO',
    imageUrl: REAL_PHOTOS.diagnosticoMultimetro,
  },
  {
    id: 12,
    name: 'Mantenimiento General Preventivo',
    description: 'Revisión completa: aceite, frenos, cadena, luces y niveles. Ideal cada 3.000 km.',
    category: 'MANTENIMIENTO',
    imageUrl: REAL_PHOTOS.tapaMotorLimpieza,
  },
]
