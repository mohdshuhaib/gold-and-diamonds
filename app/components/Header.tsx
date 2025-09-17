// app/components/Header.tsx
import { Gem } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <Gem className="text-primary h-6 w-6" />
          <span className="text-xl font-serif font-semibold tracking-wider">AETHELRED</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-primary transition-colors duration-300">Home</a>
          <a href="#about" className="hover:text-primary transition-colors duration-300">About</a>
          <a href="#gallery" className="hover:text-primary transition-colors duration-300">Gallery</a>
        </nav>
        <a href="#contact" className="hidden md:block border border-primary text-primary px-4 py-2 rounded-sm hover:bg-primary hover:text-background transition-colors duration-300">
          Contact Us
        </a>
        {/* Mobile menu icon can be added here */}
      </div>
    </header>
  );
}