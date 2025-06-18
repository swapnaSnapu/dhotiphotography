'use client';
import { motion } from 'framer-motion';
import { Heart, Baby, Gift, Users, Camera, Flower2 } from 'lucide-react';

const services = [
  {
    title: 'Dhoti Ceremony',
    icon: <Flower2 className="w-8 h-8 text-[#D4AF37]" />,
  },
  {
    title: 'Housewarming (Gruhapravesam)',
    icon: <HomeIcon className="w-8 h-8 text-[#D4AF37]" />,
  },
  {
    title: 'Baby Shower (Seemantham)',
    icon: <Baby className="w-8 h-8 text-[#D4AF37]" />,
  },
  {
    title: 'Naming Ceremony (Namakaranam)',
    icon: <Gift className="w-8 h-8 text-[#D4AF37]" />,
  },
  {
    title: 'Engagement & Pre-Wedding',
    icon: <Heart className="w-8 h-8 text-[#D4AF37]" />,
  },
  {
    title: 'Traditional Portraits',
    icon: <Camera className="w-8 h-8 text-[#D4AF37]" />,
  },
  {
    title: 'Birthday Events',
    icon: <Users className="w-8 h-8 text-[#D4AF37]" />,
  },
  {
    title: 'Family Group Shoots',
    icon: <Users className="w-8 h-8 text-[#D4AF37]" />,
  },
];

// Custom Home icon (since Lucide doesn't have it directly)
function HomeIcon({ className }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeWidth="2" d="M3 12l9-9 9 9M4 10v10h16V10" />
    </svg>
  );
}

export default function ServicesSection() {
  return (
    <section className="bg-[#FFF8E1] py-16 px-6">
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#800000]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Photography Services
        </motion.h2>
        <motion.p
          className="text-[#5D4037] mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Capturing sacred traditions, celebrations, and love — one frame at a time.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl border-l-4 border-[#D4AF37] shadow hover:shadow-lg text-center transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-3">{service.icon}</div>
            <h3 className="text-lg font-semibold text-[#5D4037]">{service.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
