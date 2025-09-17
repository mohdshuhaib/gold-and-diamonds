// app/components/Footer.tsx
import { Gem, Twitter, Instagram, Facebook } from 'lucide-react';

export function Footer() {
    return (
        <footer id="contact" className="bg-card border-t border-primary/20 py-12">
            <div className="container mx-auto px-6 text-center text-foreground/70">
                <div className="flex justify-center items-center gap-2 mb-4">
                    <Gem className="text-primary h-5 w-5" />
                    <span className="text-lg font-serif font-semibold tracking-wider">AETHELRED</span>
                </div>
                <p className="mb-6">Crafting memories in gold and diamond since 1952.</p>
                <div className="flex justify-center gap-6 mb-8">
                    <a href="#" className="hover:text-primary transition-colors"><Twitter /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Instagram /></a>
                    <a href="#" className="hover:text-primary transition-colors"><Facebook /></a>
                </div>
                <p>&copy; {new Date().getFullYear()} Aethelred Jewels. All Rights Reserved.</p>
            </div>
        </footer>
    );
}