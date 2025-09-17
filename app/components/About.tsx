// app/components/About.tsx
'use client'; // Required for client-side animations with Framer Motion

import smith from '@/public/goldsmith.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function About() {
  return (
    // Add overflow-hidden to the section to contain the animations
    <section id="about" className="py-20 md:py-32 bg-card overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Animated Image Wrapper */}
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Start invisible and 100px to the left
          whileInView={{ opacity: 1, x: 0 }} // Animate to visible and its original position
          viewport={{ once: true }} // Only animate once when it enters the screen
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={smith}
            alt="Craftsman at work"
            className="rounded-md shadow-lg"
          />
        </motion.div>

        {/* Animated Text Wrapper */}
        <motion.div
          initial={{ opacity: 0, x: 100 }} // Start invisible and 100px to the right
          whileInView={{ opacity: 1, x: 0 }} // Animate to visible and its original position
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // Add a small delay
          className="text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-4">A Legacy of Brilliance</h2>
          <p className="text-foreground/80 leading-relaxed mb-4">
            For over three generations, Aethelred Jewels has been synonymous with exceptional quality and artistry. Our master craftsmen blend traditional techniques with contemporary design to create pieces that are not just jewelry, but heirlooms.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Each diamond is ethically sourced and meticulously selected, and every ounce of gold is shaped with passion and precision. We believe in creating beauty that lasts a lifetime and beyond.
          </p>
        </motion.div>
      </div>
    </section>
  );
}