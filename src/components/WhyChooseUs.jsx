const REASONS = [
  {
    label: 'Trato directo con el mecánico',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" />,
  },
  {
    label: 'Precios claros, sin sorpresas',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-3-5.5c0-1.1 1.34-2 3-2s3 .9 3 2-1.34 2-3 2-3 .9-3 2 1.34 2 3 2 3-.9 3-2" />,
  },
  {
    label: 'Diagnóstico honesto',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  },
  {
    label: 'Atención el mismo día',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  },
  {
    label: 'Repuestos de calidad',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M20 7 12 3 4 7m16 0-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
  },
  {
    label: 'Taller limpio y ordenado',
    icon: <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v4H4V4Zm0 6h16v10H4V10Zm4 4h8" />,
  },
]

export default function WhyChooseUs() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
      {REASONS.map((reason) => (
        <div key={reason.label} className="flex flex-col items-center gap-2 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
            <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-current" fill="none" strokeWidth="2">
              {reason.icon}
            </svg>
          </span>
          <span className="text-sm font-medium text-neutral-700">{reason.label}</span>
        </div>
      ))}
    </div>
  )
}
