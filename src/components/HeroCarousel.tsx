import { motion } from 'motion/react';
import { carouselImages } from '../lib/images';

export function HeroCarousel() {
  return (
    <header className="relative h-[100svh] flex flex-col justify-center items-center px-6 text-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-black flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 45, repeat: Infinity }}
          className="flex h-full min-w-max"
        >
          {[...carouselImages, ...carouselImages].map((src, idx) => (
            <div key={idx} className="h-full flex-shrink-0 border-r border-white/10 overflow-hidden">
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className="h-full w-auto opacity-60 grayscale-[10%] brightness-[0.85] transition-all duration-500 hover:opacity-95 hover:grayscale-0"
              />
            </div>
          ))}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black z-10 pointer-events-none" />
      </div>
    </header>
  );
}

