import React from 'react';
import { motion } from 'framer-motion';

interface TeamCardProps {
  member: {
    name: string;
    role: string;
    image: string;
    description: string;
  };
  index: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-cardbg border border-white/5 rounded-2xl p-6 flex flex-col items-center text-center transition-all hover:bg-white/5 hover:border-cyan-500/30 group"
    >
      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-transparent group-hover:border-neon transition-all duration-300 relative">
        {member.image ? (
          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
            <span className="text-3xl text-gray-600 font-bold">{member.name.charAt(0)}</span>
          </div>
        )}
      </div>
      
      <h3 className="text-xl font-bold text-white mb-1 font-display">{member.name}</h3>
      <p className="text-neon text-sm font-medium mb-3">{member.role}</p>
      <p className="text-muted text-sm leading-relaxed">{member.description}</p>
    </motion.div>
  );
};

export default TeamCard;
