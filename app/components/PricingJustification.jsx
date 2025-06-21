// 'use client';
// import { motion } from 'framer-motion';
// import { ShieldCheck, Star, Camera, Clock } from 'lucide-react';

// const reasons = [
//   {
//     icon: <Camera className="w-7 h-7 text-[#D4AF37]" />,
//     title: 'Traditional Expertise',
//     description: 'We’re deeply familiar with Indian cultural events – ensuring every sacred moment is captured authentically.',
//   },
//   {
//     icon: <Clock className="w-7 h-7 text-[#D4AF37]" />,
//     title: 'No Rush Sessions',
//     description: 'Our shoots respect your pace and rituals – no time pressure or shortcuts.',
//   },
//   {
//     icon: <Star className="w-7 h-7 text-[#D4AF37]" />,
//     title: 'Handcrafted Edits',
//     description: 'Every photo is carefully color-graded and edited to match ethnic tones and event mood.',
//   },
//   {
//     icon: <ShieldCheck className="w-7 h-7 text-[#D4AF37]" />,
//     title: 'Reliable Service',
//     description: 'Punctual, responsive, and trusted by 500+ families across the UK.',
//   },
// ];

// export default function PricingJustification() {
//   return (
//     <section className="bg-white px-6 py-16">
//       <div className="max-w-5xl mx-auto text-center mb-12">
//         <motion.h2
//           className="text-3xl md:text-4xl font-bold text-[#800000]"
//           initial={{ opacity: 0, y: -20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//         >
//           Why Our Prices Reflect True Value
//         </motion.h2>
//         <motion.p
//           className="text-[#5D4037] mt-2"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           More than just photography — it's cultural storytelling with heart and heritage.
//         </motion.p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
//         {reasons.map((item, index) => (
//           <motion.div
//             key={index}
//             className="bg-[#FFF8E1] p-6 rounded-lg border-l-4 border-[#D4AF37] shadow-sm"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2 }}
//             viewport={{ once: true }}
//           >
//             <div className="flex items-center gap-4 mb-3">
//               {item.icon}
//               <h3 className="text-lg font-semibold text-[#800000]">{item.title}</h3>
//             </div>
//             <p className="text-[#5D4037]">{item.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Star, Camera, Clock } from 'lucide-react';

const reasons = [
  {
    icon: <Camera className="w-7 h-7 text-[#D4AF37]" />,
    title: 'Traditional Expertise',
    description:
      'We’re deeply familiar with Indian cultural events – ensuring every sacred moment is captured authentically.',
  },
  {
    icon: <Clock className="w-7 h-7 text-[#D4AF37]" />,
    title: 'No Rush Sessions',
    description:
      'Our shoots respect your pace and rituals – no time pressure or shortcuts.',
  },
  {
    icon: <Star className="w-7 h-7 text-[#D4AF37]" />,
    title: 'Handcrafted Edits',
    description:
      'Every photo is carefully color-graded and edited to match ethnic tones and event mood.',
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-[#D4AF37]" />,
    title: 'Reliable Service',
    description:
      'Punctual, responsive, and trusted by 500+ families across the UK.',
  },
];

export default function PricingJustification() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-[#FFF8E1] via-[#FAF3DC] to-white">
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5 pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-[#800000] tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Our Prices Reflect True Value
        </motion.h2>
        <motion.p
          className="text-[#5D4037] mt-4 text-lg md:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          More than just photography — it's cultural storytelling with heart and heritage.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 relative z-10">
        {reasons.map((item, index) => (
          <motion.div
            key={index}
            className="relative bg-white bg-opacity-95 backdrop-blur-md p-10 rounded-3xl border border-[#D4AF37] shadow-[0_10px_30px_rgba(128,0,0,0.1)] transition-all duration-300 hover:scale-[1.02] group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-7 left-7 bg-[#800000] p-4 rounded-full border-4 border-[#FFF8E1] shadow-lg group-hover:rotate-[6deg] transition-transform duration-300">
              {item.icon}
            </div>
            <div className="pt-4 pl-20">
              <h3 className="text-2xl font-bold text-[#800000] mb-2 drop-shadow-sm">
                {item.title}
              </h3>
              <p className="text-[#5D4037] text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


// 'use client';
// import { motion } from 'framer-motion';
// import { ShieldCheck, Star, Camera, Clock } from 'lucide-react';

// const reasons = [
//   {
//     icon: <Camera className="w-7 h-7 text-[#D4AF37]" />,
//     title: 'Authentic Ritual Captures',
//     description:
//       'Every thread of the dhoti and every prayer gesture — documented with spiritual sensitivity.',
//   },
//   {
//     icon: <Clock className="w-7 h-7 text-[#D4AF37]" />,
//     title: 'Patient & Respectful Timing',
//     description:
//       'We never rush rituals. Our flow respects the traditions and sacred pace of your event.',
//   },
//   {
//     icon: <Star className="w-7 h-7 text-[#D4AF37]" />,
//     title: 'Cultural Color Grading',
//     description:
//       'Our edits enhance ethnic wear tones, temple light, and floral decor to bring emotion forward.',
//   },
//   {
//     icon: <ShieldCheck className="w-7 h-7 text-[#D4AF37]" />,
//     title: 'Families Trust Us',
//     description:
//       'Over 500+ South Indian families across the UK have trusted us for their son’s Dhoti ceremony.',
//   },
// ];

// export default function PricingJustification() {
//   return (
//     <section className="relative bg-[#FFF8E1] py-24 px-6 overflow-hidden">
//       {/* Optional background cultural motif */}
//       <div className="absolute inset-0 bg-[url('/motif.png')] bg-repeat opacity-5 pointer-events-none" />

//       {/* Section Header */}
//       <div className="max-w-5xl mx-auto text-center mb-20 z-10 relative">
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold text-[#800000] tracking-wide"
//           initial={{ opacity: 0, y: -30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           Why Families Choose Us for Dhoti Ceremonies
//         </motion.h2>
//         <motion.p
//           className="text-[#5D4037] mt-4 text-lg md:text-xl max-w-2xl mx-auto"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           viewport={{ once: true }}
//         >
//           We don’t just capture photos — we preserve blessings, rituals, and generational pride.
//         </motion.p>
//       </div>

//       {/* Themed Cards */}
//       <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto z-10 relative">
//         {reasons.map((item, index) => (
//           <motion.div
//             key={index}
//             className="relative group transition-all duration-300 hover:scale-105"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2 }}
//             viewport={{ once: true }}
//           >
//             <div className="bg-white p-10 pt-16 rounded-[40px_40px_16px_16px] shadow-xl border-[3px] border-[#D4AF37] relative">
//               {/* Temple arch / garland top */}
//               <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#800000] w-14 h-14 rounded-full border-4 border-[#FFF8E1] flex items-center justify-center shadow-lg">
//                 {item.icon}
//               </div>

//               {/* Content */}
//               <div className="text-center">
//                 <h3 className="text-2xl font-semibold text-[#800000] mb-3">
//                   {item.title}
//                 </h3>
//                 <p className="text-[#5D4037] text-base leading-relaxed">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Bottom floral divider (optional) */}
//       <div className="absolute bottom-0 left-0 w-full h-24 bg-[url('/flower-border.png')] bg-repeat-x bg-bottom" />
//     </section>
//   );
// }



