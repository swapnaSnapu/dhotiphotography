'use client';
import { motion } from 'framer-motion';

export default function VideoHighlight() {
  return (
    <section className="bg-[#FFF8E1] py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#800000] mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Event Highlights
        </motion.h2>

        <motion.p
          className="text-[#5D4037] mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Watch a glimpse of our photography magic captured during real traditional events across the UK.
        </motion.p>

        <motion.div
          className="rounded-xl overflow-hidden shadow-lg border-4 border-[#D4AF37]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <video
            controls
            className="w-full h-auto"
            poster="/images/video-thumbnail.jpg"
          >
            <source src="/" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
}
