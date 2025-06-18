'use client';
import { motion } from 'framer-motion';
import { Award, Users, ShieldCheck, Globe } from 'lucide-react';

const trustPoints = [
  {
    icon: <Award className="w-8 h-8 text-[#D4AF37]" />,
    title: '10+ Years Experience',
    description: 'We’ve covered over 700+ traditional events including housewarming, weddings, and birthdays.',
  },
  {
    icon: <Users className="w-8 h-8 text-[#D4AF37]" />,
    title: '500+ Happy Clients',
    description: 'Families across London, Leicester, Birmingham, and other UK cities trust our ethnic photo coverage.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />,
    title: 'Trusted & Verified',
    description: 'Registered, punctual, and ethically respectful to every cultural value we photograph.',
  },
  {
    icon: <Globe className="w-8 h-8 text-[#D4AF37]" />,
    title: 'UK-Wide Service',
    description: 'From temples to homes, we serve across the UK with a smile and a lens of tradition.',
  },
];

export default function WhyTrustUs() {
  return (
    <section className="bg-[#F9F5EC] py-16 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#800000]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Why Trust Snap U Photography?
        </motion.h2>
        <motion.p
          className="text-[#5D4037] mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          We honour culture, time, and quality — making us a preferred photography partner for Indian families in the UK.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {trustPoints.map((point, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl border-l-4 border-[#D4AF37] shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-3">
              {point.icon}
              <h3 className="text-xl font-semibold text-[#800000]">{point.title}</h3>
            </div>
            <p className="text-[#5D4037]">{point.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
