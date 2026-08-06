import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { SERVICES } from '../data/services'
import ServiceCard from './ServiceCard'
import 'swiper/css'
import 'swiper/css/navigation'

export default function FeaturedServices() {
  const featured = SERVICES.slice(0, 8)

  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={20}
      slidesPerView={1.15}
      breakpoints={{
        640: { slidesPerView: 2.2 },
        1024: { slidesPerView: 4 },
      }}
      className="tm-services w-full min-w-0"
    >
      {featured.map((service) => (
        <SwiperSlide key={service.id}>
          <ServiceCard service={service} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
