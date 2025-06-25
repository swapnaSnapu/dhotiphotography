'use client';
import { usePathname, useRouter } from 'next/navigation';
import { Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToHomeButton() {
  const pathname = usePathname();
  const router = useRouter();

  const showButton = pathname !== '/';

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          onClick={() => router.push('/')}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 bg-[#800000] text-white rounded-full p-4 shadow-lg hover:bg-[#a30000] z-50"
          aria-label="Back to Home"
        >
          <Home className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
