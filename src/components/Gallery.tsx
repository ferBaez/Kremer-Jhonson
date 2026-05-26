import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { galleryImages } from '../lib/images';

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedIndex]);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1);
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index % 4 * 0.1 }}
              className="aspect-[4/5] relative group cursor-pointer overflow-hidden bg-[#111]"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={src}
                alt={`Portfolio piece ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <a
            href="https://drive.google.com/file/d/1GFB0HSvH2uZQvRlLkL7R5jHD7wW-fwGI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-[#F27D26] hover:text-white transition-all shadow-xl text-center"
          >
            Portafolios
          </a>
        </div>
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
          >
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 bg-black/40 p-2 rounded-full"
            >
              <X className="w-8 h-8" />
            </button>
            
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#F27D26] border border-white/15 text-white rounded-full p-3 transition-all cursor-pointer z-50 md:left-8"
            >
              <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 stroke-[1.5]" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#F27D26] border border-white/15 text-white rounded-full p-3 transition-all cursor-pointer z-50 md:right-8"
            >
              <ChevronRight className="w-8 h-8 md:w-10 md:h-10 stroke-[1.5]" />
            </button>

            <motion.img
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={galleryImages[selectedIndex]}
              alt="Gallery Preview"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
