import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base background to give depth without blocking orbs */}
      <div className="absolute inset-0 bg-background z-[-1]"></div>
      
      {/* Orb 1 - Top Left Teal */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-neon/20 blur-[120px] mix-blend-screen"
      ></motion.div>

      {/* Orb 2 - Center Right Dark Cyan */}
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute top-[30%] right-[10%] w-[60vw] h-[60vw] rounded-full bg-cyan-600/20 blur-[150px] mix-blend-screen"
      ></motion.div>

      {/* Orb 3 - Bottom Center Deep Blue/Purple for depth */}
      <motion.div
        animate={{
          x: [-50, 50, -50],
          y: [0, -50, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute bottom-[0%] left-[20%] w-[70vw] h-[40vw] rounded-full bg-indigo-900/40 blur-[130px] mix-blend-screen"
      ></motion.div>
      
      {/* subtle glowing dust particles (simple CSS/motion dots) */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-20, -100, -20],
            x: Math.random() * 50 - 25,
            opacity: [0, Math.random() * 0.5 + 0.2, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 4 + 1 + 'px',
            height: Math.random() * 4 + 1 + 'px',
          }}
          className="absolute rounded-full bg-white blur-[1px] z-0"
        ></motion.div>
      ))}
    </div>
  );
};

export default AnimatedBackground;
