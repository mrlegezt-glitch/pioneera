import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Hold the splash screen for 2.5 seconds
    const timer = setTimeout(() => {
      setIsAnimating(false);
      // Let the exit animation play before calling onComplete
      setTimeout(onComplete, 800); 
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#05080c]"
        >
          {/* Intense burst glow behind logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.5, 2], opacity: [0, 0.8, 0] }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute w-64 h-64 bg-neon/30 rounded-full blur-[100px]"
          />
          
          <motion.div
            initial={{ scale: 0.5, opacity: 0, filter: "blur(20px)" }}
            animate={{ scale: 1.2, opacity: 1, filter: "blur(0px)" }}
            exit={{ scale: 0.8, opacity: 0, filter: "blur(20px)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative flex flex-col items-center"
          >
            <img 
              src="/logo_neon.png" 
              alt="Pioneera Splash Logo" 
              className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-[0_0_40px_rgba(77,248,205,1)]"
            />
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-3xl md:text-5xl text-white font-display font-bold mt-6 tracking-widest"
            >
              PIONEERA
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
