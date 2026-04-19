import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { 
    title: "24/7 Hospital Support", 
    desc: "Round-the-clock medical assistance and hospital coordination for emergencies and planned visits. Priority admission assistance and insurance paperwork aid.",
    image: "/service_hospital_1776603617505.png"
  },
  { 
    title: "Ambulance Service", 
    desc: "Rapid response ambulance service equipped with advanced life support systems for emergency medical transport. GPS tracking enabled with paramedics on board.",
    image: "/service_ambulance_1776603633940.png"
  },
  { 
    title: "Verified Elder Care", 
    desc: "Compassionate caregivers tailored for senior citizens. We connect you with verified nurses to experience peace of mind with professional care delivered to your doorstep.",
    image: "/service_eldercare_1776603603680.png"
  },
  { 
    title: "Hijama Therapy", 
    desc: "Professional and hygienic Hijama (cupping therapy) services performed by certified practitioners in the comfort of your home.",
    image: "/service_booking_1776603650970.png"
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-32 relative bg-transparent backdrop-blur-sm z-10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">Our Services</h2>
          <div className="w-24 h-1.5 bg-neon mx-auto rounded-full"></div>
          <p className="text-muted mt-8 max-w-2xl mx-auto text-lg">
            Comprehensive healthcare solutions directly to your doorstep. 
            All our service providers undergo strict background checks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-cardbg border border-white/5 rounded-[2rem] group hover:border-cyan-500/30 transition-all overflow-hidden flex flex-col"
            >
              <div className="h-64 lg:h-80 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a121e] to-transparent z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8 md:p-10 relative z-20 -mt-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/80 backdrop-blur-md border border-cyan-800/50 text-neon text-xs font-semibold tracking-widest uppercase mb-4 shadow-lg">
                  100% Verified
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">{service.title}</h3>
                <p className="text-muted leading-relaxed text-base md:text-lg">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
