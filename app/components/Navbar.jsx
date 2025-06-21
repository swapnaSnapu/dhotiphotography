'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white sticky top-0 z-50 w-full shadow-md">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left side: Logo + Title */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={60}
              height={60}
              className="object-contain"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#800000] bg-clip-text text-transparent">
              Snap U Photography
            </span>
          </div> {/* ✅ Added this closing div */}

          {/* Right side: Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {['Home','About Us','Services', 'Gallery', 'Packages', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                className="text-black hover:text-[#FFD700] transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-4 pb-4">
          <nav className="flex flex-col space-y-3">
            {['Home', 'Services', 'Gallery', 'Packages', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
                className="text-white hover:text-[#FFD700] transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </nav>
  );
}
