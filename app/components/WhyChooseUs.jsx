'use client';
import { motion } from 'framer-motion';
import { Heart, Camera, Star, Users } from 'lucide-react';

const features = [
  {
    icon: <Camera className="w-8 h-8 text-[#D4AF37]" />,
    title: 'Cultural Expertise',
    description: 'We specialize in traditional Indian events – capturing rituals, attire, and ambiance with authenticity.',
  },
  {
    icon: <Star className="w-8 h-8 text-[#D4AF37]" />,
    title: 'Elegant Editing',
    description: 'Our editing style honors cultural tones and vibrant colors, giving your photos timeless beauty.',
  },
  {
    icon: <Heart className="w-8 h-8 text-[#D4AF37]" />,
    title: 'Emotional Moments',
    description: 'We focus on capturing the joy, emotion, and spiritual essence of your event with great care.',
  },
  {
    icon: <Users className="w-8 h-8 text-[#D4AF37]" />,
    title: 'Trusted Across UK',
    description: 'Over 500+ happy clients in London, Birmingham, Leicester, and beyond.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F9F5EC] px-6 py-16">
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#800000]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Why Choose Us?
        </motion.h2>
        <motion.p
          className="text-[#5D4037] mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Experience the difference with our traditional photography service
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl border-l-4 border-[#D4AF37] shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              {feature.icon}
              <h3 className="text-xl font-semibold text-[#800000]">{feature.title}</h3>
            </div>
            <p className="text-[#5D4037]">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
