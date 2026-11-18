// Publicaciones de TikTok que se muestran en "Míralo en TikTok".
// id: el número largo del enlace (tiktok.com/@turbomotors.96/video/<id> o /photo/<id>).
// thumb: portada guardada en src/assets/videos/<id>.jpg, para no cargar TikTok hasta que alguien toque.
//        Si no hay portada, la tarjeta se muestra en arcilla con ▶ y la duración.
// kind: 'video' o 'fotos' (las publicaciones de fotos de TikTok también se ven en el reproductor).

import cambioAceiteYamazuki from '../assets/videos/7700710597192584468.jpg'
import aceitesMotul from '../assets/videos/7708418755356904725.jpg'
import barrasHorquilla from '../assets/videos/7706638674083007764.jpg'
import diagnosticoMultimetro from '../assets/videos/7699208888242982165.jpg'

export const TIKTOK_VIDEOS = [
  { id: '7700710597192584468', kind: 'video', title: 'Cambio de aceite con Yamazuki 20W-50', duration: '0:29', thumb: cambioAceiteYamazuki },
  { id: '7708418755356904725', kind: 'fotos', title: 'Aceites Motul en el taller', thumb: aceitesMotul },
  { id: '7706638674083007764', kind: 'video', title: 'Barras de horquilla listas para montar', duration: '0:13', thumb: barrasHorquilla },
  { id: '7699208888242982165', kind: 'fotos', title: 'Diagnóstico eléctrico con multímetro', thumb: diagnosticoMultimetro },
]
