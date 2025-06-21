

'use client';
import { motion } from 'framer-motion';
import { Award, Users, ShieldCheck, Globe, Camera, Star } from 'lucide-react';

const trustPoints = [
  {
    icon: <Award className="w-10 h-10 text-[#D4AF37]" />,
    title: '10+ Years Experience',
    description:
      'We’ve covered over 700+ traditional events including housewarming, weddings, and birthdays.',
    backText: 'Experience leads to anticipation — we know every ritual’s rhythm.',
  },
  {
    icon: <Users className="w-10 h-10 text-[#D4AF37]" />,
    title: '500+ Happy Clients',
    description:
      'Families across London, Leicester, Birmingham, and other UK cities trust our ethnic photo coverage.',
    backText: 'Every smile captured has a story — just ask our clients.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-[#D4AF37]" />,
    title: 'Trusted & Verified',
    description:
      'Registered, punctual, and ethically respectful to every cultural value we photograph.',
    backText: 'Your tradition, our responsibility — documented with respect.',
  },
  {
    icon: <Globe className="w-10 h-10 text-[#D4AF37]" />,
    title: 'UK-Wide Service',
    description:
      'From temples to homes, we serve across the UK with a smile and a lens of tradition.',
    backText: 'Wherever your event is, our devotion travels with us.',
  },
  {
    icon: <Camera className="w-10 h-10 text-[#D4AF37]" />,
    title: 'Event Specialization',
    description:
      'We focus on capturing dhoti functions, cultural rituals, and ceremonial moments authentically.',
    backText: 'We don’t just shoot — we spiritually sync with the ceremony.',
  },
  {
    icon: <Star className="w-10 h-10 text-[#D4AF37]" />,
    title: 'Top Rated',
    description:
      'Loved by over 500 families with consistent 5-star reviews for service and delivery.',
    backText: 'Excellence is our habit — your ratings reflect our respect.',
  },
];

export default function WhyTrustUs() {
  return (
    <section className="bg-[#F9F5EC] py-20 px-6">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#800000]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Trust Snap U Photography?
        </motion.h2>
        <motion.p
          className="text-[#5D4037] mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          We honour culture, time, and quality — making us a preferred photography partner for Indian families in the UK.
        </motion.p>
      </div>

      {/* Diamond Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-14">
        {trustPoints.map((point, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center card-flip perspective"
          >
            <div className="w-80 h-80 relative card-inner">
              {/* Front Side */}
              <div className="clip-diamond absolute inset-0 bg-white border-4 border-[#D4AF37] shadow-xl flex flex-col items-center justify-center text-center p-6 backface-hidden">
                <div className="mb-4">{point.icon}</div>
                <h3 className="text-xl font-bold text-[#800000] mb-2">{point.title}</h3>
                <p className="text-[#5D4037] text-sm">{point.description}</p>
              </div>

              {/* Back Side */}
              <div className="clip-diamond absolute inset-0 bg-[#FFF8E1] border-4 border-[#D4AF37] shadow-xl rotate-y-180 flex flex-col items-center justify-center text-center p-6 backface-hidden">
                <p className="text-[#800000] font-semibold text-base">
                  {point.backText}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
