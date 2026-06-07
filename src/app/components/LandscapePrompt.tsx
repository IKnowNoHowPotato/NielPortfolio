import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RotateCw } from 'lucide-react';

export function LandscapePrompt() {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isMobile = window.innerWidth <= 768;
      const isInPortrait = window.innerHeight > window.innerWidth;
      setIsPortrait(isMobile && isInPortrait);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  return (
    <AnimatePresence>
      {isPortrait && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-gradient-to-b from-blue-500 via-indigo-400 to-blue-500 flex items-center justify-center"
        >
          <div className="text-center text-white p-8">
            <motion.div
              animate={{ rotate: 90 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              className="mb-6 flex justify-center"
            >
              <RotateCw size={80} strokeWidth={1.5} />
            </motion.div>
            <h2 className="text-3xl font-light mb-4">Please Rotate Your Device</h2>
            <p className="text-lg text-white/80">
              This app works best in landscape mode
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
