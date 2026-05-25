import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Camera } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-5 md:px-12 flex justify-between items-center',
        scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md shadow-sm text-[#f5f5f5] py-4 border-b border-[#333]' : 'bg-transparent text-white'
      )}
    >
      <div className="text-xl font-bold tracking-widest uppercase flex items-center gap-2">
        <span>Kremer & Jhonson</span>
      </div>
      <div className="hidden md:flex gap-8 text-sm font-semibold tracking-widest uppercase">
        <a href="#about" className="hover:text-[#F27D26] transition-colors">Nosotros</a>
        <a href="#portfolio" className="hover:text-[#F27D26] transition-colors">Portfolio</a>
        <a href="#contact" className="hover:text-[#F27D26] transition-colors">Contacto</a>
      </div>
    </nav>
  );
}
