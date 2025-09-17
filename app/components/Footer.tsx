// app/components/Footer.tsx
'use client'; // Required for client-side animations with Framer Motion

import { Gem, Twitter, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
    // Define animation variants for staggered appearance
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.1, // Delay before children start animating
                staggerChildren: 0.15, // Stagger each child's animation
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <footer id="contact" className="bg-card border-t border-primary/20 py-12 overflow-hidden">
            <motion.div
                className="container mx-auto px-6 text-center text-foreground/70"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }} // Animate once when 30% of the footer is visible
            >
                {/* Logo and Name */}
                <motion.div variants={itemVariants} className="flex justify-center items-center gap-2 mb-4">
                    <Gem className="text-primary h-5 w-5" />
                    <span className="text-lg font-serif font-semibold tracking-wider">AETHELRED</span>
                </motion.div>

                {/* Tagline */}
                <motion.p variants={itemVariants} className="mb-6 max-w-md mx-auto">
                    Crafting memories in gold and diamond since 1952.
                </motion.p>

                {/* Social Icons */}
                <motion.div variants={itemVariants} className="flex justify-center gap-6 mb-8">
                    <a href="#" className="hover:text-primary transition-colors">
                        <Twitter />
                    </a>
                    <a href="#" className="hover:text-primary transition-colors">
                        <Instagram />
                    </a>
                    <a href="#" className="hover:text-primary transition-colors">
                        <Facebook />
                    </a>
                </motion.div>

                {/* Copyright */}
                <motion.p variants={itemVariants}>
                    &copy; {new Date().getFullYear()} Aethelred Jewels. All Rights Reserved.
                </motion.p>
            </motion.div>
        </footer>
    );
}