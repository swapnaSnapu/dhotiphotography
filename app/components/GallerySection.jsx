'use client';
import { motion } from 'framer-motion';

const images = [
  '/img3.jpg',
  '/img4.jpg',
  '/img5.jpg',
  '/img6.jpg',
  '/img7.jpg',
  '/img8.jpg',
];

export default function GallerySection() {
  return (
    <section className="bg-[#FDF6E3] py-16 px-6">
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#800000]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Event Highlights
        </motion.h2>
        <motion.p
          className="text-[#5D4037] mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          A glimpse into our beautifully captured moments — traditional, vibrant, and full of emotion.
        </motion.p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="overflow-hidden rounded-xl shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={img}
              alt={`Event ${i + 1}`}
              className="w-full h-[250px] object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
