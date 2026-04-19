import React from 'react';
import { motion } from 'framer-motion';
import { teamMembers } from '../../constants/teamData';
import TeamCard from './TeamCard';

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 relative overflow-hidden bg-transparent z-10 border-t border-white/5">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Our Team</h2>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Transforming human support & community growth through compassionate innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {teamMembers.map((member, idx) => (
            <TeamCard key={member.id} member={member} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
