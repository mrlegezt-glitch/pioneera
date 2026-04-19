import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e?: any) => void;
  className?: string;
  variant?: 'primary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', variant = 'primary' }) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center justify-center relative shadow-lg";
  
  const variants = {
    primary: "bg-gradient-to-r from-neonDark to-neon text-background shadow-[0_0_20px_rgba(77,248,205,0.4)] hover:shadow-[0_0_30px_rgba(77,248,205,0.6)]",
    outline: "border border-neon text-neon bg-transparent hover:bg-neon/10",
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
