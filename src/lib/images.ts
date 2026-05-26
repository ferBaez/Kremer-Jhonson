export const carouselImages = [
  'images/Captura de pantalla 2026-05-25 a la(s) 2_opt.jpeg',
  'images/Captura de pantalla 2026-05-25 a la(s) 3_opt.jpeg',
  'images/Copia de image_opt 10.jpeg',
  'images/Copia de image_opt 11.jpeg',
  'images/Copia de image_opt 12.jpeg',
  'images/Copia de image_opt 13.jpeg',
  'images/Copia de image_opt 2.jpeg',
  'images/Copia de image_opt 3.jpeg',
  'images/Copia de image_opt 4.jpeg',
  'images/Copia de image_opt 5.jpeg',
  'images/Copia de image_opt 6.jpeg',
  'images/Copia de image_opt 7.jpeg',
  'images/Copia de image_opt 8.jpeg',
  'images/Copia de image_opt 9.jpeg',
  'images/Copia de image_opt.jpeg',
  'images/image_opt.jpeg'
].map(path => `${import.meta.env.BASE_URL}${path}`);

export const galleryImages = [
  ...carouselImages
];

