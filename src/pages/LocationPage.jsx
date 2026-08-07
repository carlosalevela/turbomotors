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
          <div className="flex flex-wrap gap-3">
            <WhatsAppButton message="Hola, quiero cotizar un servicio para mi moto">
              Escríbenos por WhatsApp
            </WhatsAppButton>
            <a
              href={SHOP_INFO.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-4 py-2 font-medium text-neutral-900 transition hover:bg-neutral-100"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                />
              </svg>
              Cómo llegar
            </a>
          </div>
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
