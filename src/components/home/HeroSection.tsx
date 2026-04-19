import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-transparent">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-transparent pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
        {/* Animated Central Logo */}
        <motion.div
          animate={{ 
            boxShadow: ['0px 0px 20px rgba(77,248,205,0.2)', '0px 0px 60px rgba(77,248,205,0.6)', '0px 0px 20px rgba(77,248,205,0.2)'] 
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-10 flex items-center justify-center relative"
        >
          {/* A soft glowing backdrop for the logo */}
          <div className="absolute inset-0 bg-neon/20 rounded-full blur-2xl"></div>
          <div className="absolute inset-0 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-neon/50 shadow-[0_0_30px_rgba(77,248,205,0.5)]">
            <img src="/logo.png" alt="Pioneera Logo" className="relative z-10 w-full h-full object-cover scale-110" />
          </div>
        </motion.div>

        {/* Headlines */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight leading-tight mb-4 text-gradient"
        >
          When no one is home, <br />
          <span className="text-gradient-cyan">Pioneera is.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-muted max-w-2xl mb-10 font-light"
        >
          TRANSFORMING HUMAN SUPPORT & COMMUNITY GROWTH THROUGH COMPASSIONATE INNOVATION.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button variant="primary" className="text-lg px-8 py-4">
            START YOUR JOURNEY
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
