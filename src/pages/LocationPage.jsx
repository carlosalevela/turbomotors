import { SHOP_INFO } from '../config/shopInfo'
import WhatsAppButton from '../components/WhatsAppButton'

export default function LocationPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8">
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">Ubicación y contacto</h1>
        <p className="mt-1 text-neutral-600">Visítanos o escríbenos por WhatsApp para cotizar.</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-4 rounded-xl border border-neutral-200 bg-white p-6">
          <div>
            <h2 className="font-semibold text-neutral-900">Dirección</h2>
            <p className="text-neutral-600">{SHOP_INFO.address}</p>
          </div>
          <div>
            <h2 className="font-semibold text-neutral-900">Horario</h2>
            <p className="text-neutral-600">{SHOP_INFO.hours}</p>
          </div>
          <WhatsAppButton message="Hola, quiero cotizar un servicio para mi moto" className="w-fit">
            Escríbenos por WhatsApp
          </WhatsAppButton>
        </div>

        <div className="overflow-hidden rounded-xl border border-neutral-200">
          <iframe
            title="Ubicación en el mapa"
            src={SHOP_INFO.mapEmbedUrl}
            className="h-full min-h-72 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  )
}
