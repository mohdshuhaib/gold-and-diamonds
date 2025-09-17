// app/components/Gallery.tsx
'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCreative } from 'swiper/modules'; // Import EffectCreative
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative'; // Import Creative effect styles

const galleryItems = [
    { id: 1, src: "https://images.unsplash.com/photo-1674465992629-f8f81a8fb6d9?q=80&w=912&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "The Solitaire Ring" },
    { id: 2, src: "https://images.unsplash.com/photo-1625908733875-efa9c75c084d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Eternity Necklace" },
    { id: 3, src: "https://images.unsplash.com/photo-1693212793367-60001caf3b5e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Diamond Hoops" },
    { id: 4, src: "https://images.unsplash.com/photo-1738412147349-deff47bb23e3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Gold Bangle" },
    { id: 5, src: "https://images.unsplash.com/photo-1724937721130-c9a9a4ee477e?q=80&w=863&auto=format&fit=crop&ixlib=rb-4.1.0&id=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", name: "Ruby Pendant" },
];

export function Gallery() {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                staggerChildren: 0.2,
            },
        },
    } as const;

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    } as const;

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
                        modules={[Navigation, Pagination, Autoplay, EffectCreative]}
                        grabCursor={true}
                        loop={true}
                        effect={'creative'}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: [0, 0, -400],
                            },
                            next: {
                                translate: ['100%', 0, 0],
                            },
                        }}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        navigation={true}
                        className="w-full md:w-4/5 lg:w-3/5 h-[500px] md:h-[600px] rounded-lg"
                    >
                        {galleryItems.map((item) => (
                            <SwiperSlide key={item.id} className="relative group overflow-hidden bg-black">
                                <img
                                    src={item.src}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-80"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-8">
                                    <h3 className="text-white text-3xl font-serif drop-shadow-lg">{item.name}</h3>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </motion.div>
            </div>
        </motion.section>
    );
}