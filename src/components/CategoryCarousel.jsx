import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { CATEGORIES } from '../data/services'
import 'swiper/css'
import 'swiper/css/navigation'

export default function CategoryCarousel() {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={16}
      slidesPerView={2}
      breakpoints={{
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }}
      className="tm-categories w-full min-w-0"
    >
      {CATEGORIES.map((cat) => (
        <SwiperSlide key={cat.value}>
          <Link
            to={`/servicios?categoria=${cat.value}`}
            className="group relative block h-56 overflow-hidden rounded-xl"
          >
            <img
              src={cat.image}
              alt={cat.label}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/55" />
            <span className="absolute bottom-3 left-3 text-lg font-bold text-white">
              {cat.label}
            </span>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
