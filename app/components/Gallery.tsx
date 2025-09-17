// app/components/Gallery.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Grid } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';

const galleryItems = [
    { id: 1, src: "https://images.unsplash.com/photo-1674465992629-f8f81a8fb6d9?q=80&w=912&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "The Solitaire Ring" },
    { id: 2, src: "https://images.unsplash.com/photo-1625908733875-efa9c75c084d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Eternity Necklace" },
    { id: 3, src: "https://images.unsplash.com/photo-1693212793367-60001caf3b5e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Diamond Hoops" },
    { id: 4, src: "https://images.unsplash.com/photo-1738412147349-deff47bb23e3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Gold Bangle" },
    { id: 5, src: "https://images.unsplash.com/photo-1724937721130-c9a9a4ee477e?q=80&w=863&auto=format&fit=crop&ixlib=rb-4.1.0&id=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Ruby Pendant" },
];

export function Gallery() {
    // Animation variants for the entire section
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    } as const; // FIX: Added 'as const'

    // Animation variants for individual items (title and swiper)
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    } as const; // FIX: Added 'as const'

    return (
        <motion.section
            id="gallery"
            className="py-20 md:py-32 bg-card overflow-hidden"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="container mx-auto px-6">
                <motion.h2
                    variants={itemVariants}
                    className="text-3xl md:text-5xl font-serif text-center text-primary mb-12"
                >
                    Our Signature Collection
                </motion.h2>

                <motion.div variants={itemVariants}>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay, Grid]}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                grid: { rows: 1 },
                            },
                            768: {
                                slidesPerView: 2,
                                grid: { rows: 1 },
                            },
                            1024: {
                                slidesPerView: 3,
                                grid: { rows: 2, fill: 'row' },
                                spaceBetween: 20,
                                loop: false,
                                autoplay: false,
                            },
                        }}
                        className="w-full h-[500px] md:h-[600px] lg:h-[700px] pb-12"
                    >
                        {galleryItems.map((item) => (
                            <SwiperSlide key={item.id} className="relative group overflow-hidden rounded-lg shadow-lg bg-card border border-primary/10">
                                <img
                                    src={item.src}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-white text-2xl font-serif drop-shadow-lg">{item.name}</h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </motion.section>
    );
}