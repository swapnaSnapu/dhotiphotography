'use client';
import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FooterSection() {
  return (
    <footer className="bg-[#4E342E] text-white py-12 px-6">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#D4AF37] mb-3">
            Snap U Photography
          </h3>
          <p className="text-sm text-gray-200">
            Capturing your cultural moments with care and creativity. Based in the UK, we specialize in Dhoti, naming, and family ceremonies.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-[#D4AF37]">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li><Link href="#why-choose-us" className="hover:underline">Why Choose Us</Link></li>
            <li><Link href="#packages" className="hover:underline">Packages</Link></li>
            <li><Link href="#services" className="hover:underline">Services</Link></li>
            <li><Link href="#gallery" className="hover:underline">Gallery</Link></li>
            <li><Link href="#contact" className="hover:underline">Contact</Link></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-[#D4AF37]">Contact Us</h4>
          <p className="flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4 text-[#D4AF37]" /> +44 1234 567890
          </p>
          <p className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4 text-[#D4AF37]" /> info@snapuphotos.co.uk
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" aria-label="Facebook" className="hover:text-[#D4AF37]">
              <Facebook />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#D4AF37]">
              <Instagram />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-300">
        © {new Date().getFullYear()} Snap U Photography. All rights reserved.
      </div>
    </footer>
  );
}
