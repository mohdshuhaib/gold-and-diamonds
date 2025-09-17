// app/components/Gallery.tsx
'use client'; // This component uses client-side interactivity

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const galleryItems = [
  { id: 1, src: "https://images.unsplash.com/photo-1674465992629-f8f81a8fb6d9?q=80&w=912&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "The Solitaire Ring" },
  { id: 2, src: "https://images.unsplash.com/photo-1625908733875-efa9c75c084d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Eternity Necklace" },
  { id: 3, src: "https://images.unsplash.com/photo-1693212793367-60001caf3b5e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Diamond Hoops" },
  { id: 4, src: "https://images.unsplash.com/photo-1738412147349-deff47bb23e3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Gold Bangle" },
  { id: 5, src: "https://images.unsplash.com/photo-1724937721130-c9a9a4ee477e?q=80&w=863&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Ruby Pendant" },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-serif text-center text-primary mb-12">Our Signature Collection</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full h-[500px]"
        >
          {galleryItems.map((item) => (
            <SwiperSlide key={item.id} className="relative group overflow-hidden rounded-md">
              <img src={item.src} alt={item.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-2xl font-serif">{item.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}