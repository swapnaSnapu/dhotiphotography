'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, User } from 'lucide-react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send data to backend or third-party (e.g., Formspree)
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="bg-[#FFF8E1] py-16 px-6">
      <div className="text-center mb-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#800000]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-[#5D4037] mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          We'd love to hear from you — book your Dhoti ceremony shoot today!
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-md p-6 space-y-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full border border-[#D4AF37] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full border border-[#D4AF37] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            required
            className="w-full border border-[#D4AF37] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
          ></textarea>
          <button
            type="submit"
            className="bg-[#800000] text-white px-6 py-2 rounded hover:bg-[#a30000] transition"
          >
            Send Message
          </button>
          {submitted && (
            <motion.p
              className="text-green-600 text-sm pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✅ Thank you! We’ll get back to you shortly.
            </motion.p>
          )}
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="text-[#5D4037] space-y-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="flex items-center gap-2 text-lg font-medium">
            <User className="text-[#D4AF37]" /> Snap U Photography
          </p>
          <p className="flex items-center gap-2 text-base">
            <Phone className="text-[#D4AF37]" /> +44 1234 567890
          </p>
          <p className="flex items-center gap-2 text-base">
            <Mail className="text-[#D4AF37]" /> info@snapuphotos.co.uk
          </p>
          <p className="pt-2">
            Available across the UK – London, Birmingham, Leicester, and more.
            <br />
            Traditional event photography with cultural respect and creative style.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
