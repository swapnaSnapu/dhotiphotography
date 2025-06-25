'use client';
import { motion } from 'framer-motion';

export default function VideoHighlight() {
  return (
    <section id="VideoHighlight" className="bg-gradient-to-br from-[#FFF3E0] to-[#FFE0B2] py-20 px-6 mt-0 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Custom Video Shape */}
        <motion.div
          className="relative rounded-tl-[80px] rounded-br-[80px] overflow-hidden border-4 border-[#D4AF37] shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-full overflow-hidden rounded-tl-[80px] rounded-br-[80px] border-4 border-[#D4AF37] shadow-xl">
  <iframe
    className="w-full h-[300px] md:h-[500px]"
    src="https://www.youtube.com/embed/GNqKYcgqt4U"
    title="Dhoti Function Video"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>
{/* <video
            controls
            className="w-full h-full object-cover"
            poster="/images/video-thumbnail.jpg"
          >
            <source src="https://youtu.be/GNqKYcgqt4U" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}


        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-[#6A1B1A] mb-6 leading-tight">
            Capture the Event Highlight
          </h2>
          <p className="text-[#4E342E] text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl mb-8">
            Experience the vibrancy and emotion of traditional events through our curated highlight reels. Each frame tells a story, capturing smiles, rituals, and timeless moments.
          </p>

          <a
            href="#gallery"
            className="inline-block px-6 py-3 bg-[#D4AF37] text-white font-semibold rounded-lg shadow-md hover:bg-[#b5952f] transition"
          >
            Explore Gallery
          </a>
        </motion.div>
      </div>
    </section>
  );
}
