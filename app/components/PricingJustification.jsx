'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Star, Camera, Clock } from 'lucide-react';

const reasons = [
  {
    icon: <Camera className="w-7 h-7 text-[#D4AF37]" />,
    title: 'Traditional Expertise',
    description: 'We’re deeply familiar with Indian cultural events – ensuring every sacred moment is captured authentically.',
  },
  {
    icon: <Clock className="w-7 h-7 text-[#D4AF37]" />,
    title: 'No Rush Sessions',
    description: 'Our shoots respect your pace and rituals – no time pressure or shortcuts.',
  },
  {
    icon: <Star className="w-7 h-7 text-[#D4AF37]" />,
    title: 'Handcrafted Edits',
    description: 'Every photo is carefully color-graded and edited to match ethnic tones and event mood.',
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-[#D4AF37]" />,
    title: 'Reliable Service',
    description: 'Punctual, responsive, and trusted by 500+ families across the UK.',
  },
];

export default function PricingJustification() {
  return (
    <section className="bg-white px-6 py-16">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#800000]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Why Our Prices Reflect True Value
        </motion.h2>
        <motion.p
          className="text-[#5D4037] mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          More than just photography — it's cultural storytelling with heart and heritage.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#FFF8E1] p-6 rounded-lg border-l-4 border-[#D4AF37] shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-3">
              {item.icon}
              <h3 className="text-lg font-semibold text-[#800000]">{item.title}</h3>
            </div>
            <p className="text-[#5D4037]">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
