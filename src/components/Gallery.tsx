import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { cn } from '../lib/utils';

const galleryImages = [
  '1492691527719-9d1e07e534b4', '1534528741775-53994a69daeb', '1551316671-2d44cedd851a', '1501127122049-74d5c4142171',
  '1485872299829-c673f5194813', '1515886657613-9f3515b0c78f', '1479936343636-73cdc5aae0c3', '1513360371669-4adf3dd7dff8',
  '1519750157634-b6d12a0fc964', '1520350094754-f5ebd19fd3b8', '1496345875659-11f878697b0a', '1500917293891-ef795e70e1f6',
  '1511406361295-0a1ff814c0ce', '1469334031218-e382a71b716b', '1490210214310-0fc1ccdc051f', '1456209503460-70f9ea771aeb'
].map(id => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=80`);

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

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
              onClick={() => setSelectedImage(src.replace('w=800', 'w=1600'))}
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
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
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
