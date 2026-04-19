import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-24 relative bg-transparent border-t border-white/5 overflow-hidden z-10">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-neon/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="flex-1 space-y-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Easy Booking Process</h2>
            <div className="w-16 h-1 bg-neon rounded-full mb-6"></div>
            <p className="text-muted text-lg leading-relaxed">
              Our simple booking form allows you to select your preferred service, choose your area, set date and time, and get instant confirmation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-xl border-b border-white/10 pb-2">Service Details:</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted"><CheckCircle2 className="w-5 h-5 text-neon" /> Service area/location</li>
                <li className="flex items-center gap-3 text-muted"><CheckCircle2 className="w-5 h-5 text-neon" /> Date and time preferences</li>
                <li className="flex items-center gap-3 text-muted"><CheckCircle2 className="w-5 h-5 text-neon" /> Preferred gender</li>
                <li className="flex items-center gap-3 text-muted"><CheckCircle2 className="w-5 h-5 text-neon" /> Budget range</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-white font-semibold text-xl border-b border-white/10 pb-2">What You Get:</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-muted"><CheckCircle2 className="w-5 h-5 text-neon" /> Instant confirmation</li>
                <li className="flex items-center gap-3 text-muted"><CheckCircle2 className="w-5 h-5 text-neon" /> Provider profile & ratings</li>
                <li className="flex items-center gap-3 text-muted"><CheckCircle2 className="w-5 h-5 text-neon" /> Live status updates</li>
                <li className="flex items-center gap-3 text-muted"><CheckCircle2 className="w-5 h-5 text-neon" /> 24/7 support access</li>
              </ul>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:w-[450px] shrink-0"
        >
          <div className="bg-cardbg border border-white/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-neon/20 to-transparent blur-xl pointer-events-none"></div>
            
            <div className="w-20 h-20 bg-cyan-950/50 rounded-full flex items-center justify-center mx-auto mb-6 border border-cyan-800">
              <CheckCircle2 className="w-10 h-10 text-neon" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-3 font-display">Your Safety is Our Priority</h3>
            <p className="text-muted leading-relaxed">
              Every service provider on Pioneera has undergone thorough background checks, ID verification, and certification validation.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
