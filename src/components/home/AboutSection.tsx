import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 relative bg-transparent overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-cardbg border border-white/5 p-12 md:p-20 rounded-[2.5rem] relative"
        >
          {/* Decorative quotes */}
          <div className="absolute top-6 left-10 text-6xl text-neon/20 font-serif">"</div>
          <div className="absolute bottom-6 right-10 text-6xl text-neon/20 font-serif">"</div>

          <p className="text-2xl md:text-4xl leading-relaxed text-white font-display mb-8 relative z-10">
            A neighbor passed away alone because no one could take her to the hospital. <br className="hidden md:block" />
            <span className="text-neon">That day, Pioneera was born.</span>
          </p>
          
          <div className="flex items-center justify-center gap-4 text-muted">
            <div className="w-12 h-px bg-white/20"></div>
            <span className="text-sm tracking-widest uppercase font-medium">Our Story</span>
            <div className="w-12 h-px bg-white/20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
