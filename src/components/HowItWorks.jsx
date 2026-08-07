const STEPS = [
  { title: 'Escríbenos', desc: 'Contáctanos por WhatsApp cuando quieras.' },
  { title: 'Cuéntanos el problema', desc: 'Describe qué le pasa a tu moto.' },
  { title: 'Revisamos tu moto', desc: 'Diagnóstico en el taller.' },
  { title: 'Cotización clara', desc: 'Te explicamos el trabajo y el precio.' },
  { title: 'Servicio listo', desc: 'Recoges tu moto lista para rodar.' },
]

export default function HowItWorks() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-5">
      {STEPS.map((step, i) => (
        <div key={step.title} className="flex flex-col items-center gap-2 text-center">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-950 text-sm font-bold text-white">
            {i + 1}
          </span>
          <h3 className="text-sm font-semibold text-neutral-900">{step.title}</h3>
          <p className="text-xs text-neutral-500">{step.desc}</p>
        </div>
      ))}
    </div>
  )
}
