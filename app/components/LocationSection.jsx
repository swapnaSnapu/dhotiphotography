'use client';
import { motion } from 'framer-motion';
import { MapPin, Globe } from 'lucide-react';

export default function LocationSection() {
  return (
    <section className="bg-[#FFF3E0] py-16 px-6">
      <div className="text-center mb-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#800000]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          We Serve Across the UK
        </motion.h2>
        <motion.p
          className="text-[#5D4037] mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Bringing traditional photography to your doorstep in every major city.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Map */}
        <motion.div
          className="rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197252.03160966658!2d-0.5103750302530865!3d51.28676016874561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00c6515eae3%3A0x26f496eb7e7b1845!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1718593080000!5m2!1sen!2sin"
            width="100%"
            height="300"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[300px] md:h-[350px]"
          ></iframe>
        </motion.div>

        {/* Location Info */}
        <motion.div
          className="text-[#5D4037] space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="flex items-center gap-2 text-lg font-medium">
            <Globe className="text-[#D4AF37]" />
            We proudly serve:
          </p>
          <ul className="list-disc list-inside ml-3 text-base">
            <li>London</li>
            <li>Birmingham</li>
            <li>Leicester</li>
            <li>Manchester</li>
            <li>West Midlands</li>
            <li>South East & more</li>
          </ul>
          <p className="pt-2">
            Whether it's a traditional dhoti ceremony or family ritual, Snap U captures every emotion with respect and clarity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
