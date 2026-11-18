import { SHOP_INFO, buildWhatsAppUrl } from '../config/shopInfo'
import { PageTitle } from '../components/ui'
import usePageMeta from '../hooks/usePageMeta'

export default function LocationPage() {
  usePageMeta(
    'Ubicación y Contacto',
    `Visita nuestro taller en ${SHOP_INFO.address} o escríbenos por WhatsApp para cotizar el servicio de tu moto.`,
  )

  return (
    <>
      <PageTitle title="Ubicación">Escríbenos antes de venir para tener todo listo cuando llegues.</PageTitle>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 pt-4 lg:grid-cols-[1.4fr_1fr]">
        <div className="clay p-3">
          <div className="clay-well h-full">
            <iframe
              title="Mapa de Turbo Motors"
              src={SHOP_INFO.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full rounded-[18px] border-0 lg:h-full lg:min-h-96"
            />
          </div>
        </div>

        <div className="clay flex flex-col gap-6 p-6 sm:p-8">
          <div>
            <p className="clay-chip inline-block rounded-full px-3 py-1 text-xs font-bold uppercase">Dirección</p>
            <p className="mt-2 text-lg font-semibold">{SHOP_INFO.address}</p>
          </div>
          <div>
            <p className="clay-chip inline-block rounded-full px-3 py-1 text-xs font-bold uppercase">Horario</p>
            <p className="mt-2 text-lg font-semibold">{SHOP_INFO.hours}</p>
          </div>
          <div className="mt-auto flex flex-col gap-3">
            <a
              href={SHOP_INFO.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn clay-red px-6 py-3.5 text-center"
            >
              Cómo llegar
            </a>
            <a
              href={buildWhatsAppUrl('Hola, quiero ir al taller. ¿Están atendiendo hoy?')}
              target="_blank"
              rel="noopener noreferrer"
              className="clay-btn clay px-6 py-3.5 text-center"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
