import React from 'react';
import { motion } from 'framer-motion';

const SponsorsSection: React.FC = () => {
  return (
    <section id="sponsors" className="py-24 relative bg-transparent overflow-hidden z-10">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-10">Sponsors & Partners</h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="border border-white/5 bg-white/5 backdrop-blur-sm rounded-3xl py-24 relative overflow-hidden group"
        >
          {/* Animated glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-neon/20 rounded-full blur-[60px] group-hover:bg-neon/40 group-hover:blur-[80px] transition-all duration-700"></div>
          
          <h3 className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300 relative z-10 animate-pulse">
            COMMING SOON
          </h3>
          <p className="mt-4 text-muted relative z-10">
            Sponsorship tiers and exclusive partner opportunities will be revealed shortly.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
