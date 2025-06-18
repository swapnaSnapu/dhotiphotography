'use client';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const packages = [
  {
    name: 'Bronze',
    price: '£149',
    features: [
      '2-Hour Shoot',
      '15 Edited Photos',
      'One Traditional Outfit',
      'One Outdoor/Indoor Location',
    ],
    bg: 'bg-[#FFF8E1]',
    text: 'text-[#5D4037]',
    border: 'border-[#D4AF37]',
  },
  {
    name: 'Silver',
    price: '£249',
    features: [
      '4-Hour Shoot',
      '30 Edited Photos',
      'Two Outfit Changes',
      'Location + Decor Shots',
      'Short Highlight Video',
    ],
    bg: 'bg-[#FAF3DD]',
    text: 'text-[#5D4037]',
    border: 'border-[#CDA434]',
  },
  {
    name: 'Gold',
    price: '£399',
    features: [
      'Full-Day Shoot',
      '60+ Edited Photos',
      'Unlimited Outfits',
      'Pre/Post Event Coverage',
      'Highlight Video + Reels',
      'Traditional Poses & Candid',
    ],
    bg: 'bg-[#FFF3E0]',
    text: 'text-[#5D4037]',
    border: 'border-[#B8860B]',
  },
];

export default function PackagesSection() {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#800000]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Choose Your Package
        </motion.h2>
        <motion.p
          className="text-[#5D4037] mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Select a package that suits your celebration and traditions.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            className={`p-6 rounded-xl border-2 ${pkg.bg} ${pkg.border} shadow-sm hover:shadow-md transition`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-2xl font-bold text-center mb-2 ${pkg.text}`}>{pkg.name} Package</h3>
            <p className="text-center text-[#800000] text-xl font-semibold mb-4">{pkg.price}</p>

            <ul className="space-y-3 mb-6">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2 text-[#5D4037]">
                  <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="text-center">
              <button className="bg-[#800000] text-white py-2 px-6 rounded-full hover:bg-[#a52a2a] transition">
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
