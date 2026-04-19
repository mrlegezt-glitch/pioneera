import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, LogOut } from 'lucide-react';
import { auth } from '../../lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import type { User as FirebaseUser } from 'firebase/auth';
import AuthModal from '../auth/AuthModal';

const Navbar: React.FC = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState<FirebaseUser | null>(null);

  useEffect(() => {
    // Listen for Firebase Auth state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 bg-transparent border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo and Brand */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="bg-white/10 p-1.5 rounded-full backdrop-blur-md">
              <img src="/logo.png" alt="Pioneera Logo" className="h-10 object-contain drop-shadow-xl" />
            </div>
            <span className="text-xl font-bold tracking-wide text-white font-display">Pioneera</span>
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="hidden md:flex items-center gap-8 text-sm font-medium text-muted"
          >
            <a href="#home" className="hover:text-neon transition-colors">Home</a>
            <a href="#waitlist" className="hover:text-neon transition-colors">Waitlist</a>
            <a href="#about" className="hover:text-neon transition-colors">About</a>
            <a href="#services" className="hover:text-neon transition-colors">Our Services</a>
            <a href="#team" className="hover:text-neon transition-colors">Team</a>
            <a href="#contact" className="hover:text-neon transition-colors">Contact</a>
          </motion.div>

          {/* CTA / Auth */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             className="flex items-center gap-4"
          >
            {user ? (
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <User className="w-4 h-4 text-neon" />
                  <span className="text-xs text-white truncate max-w-[120px]">
                    {user.displayName || user.email?.split('@')[0]}
                  </span>
                </div>
                <button 
                  onClick={handleSignOut}
                  className="p-2 rounded-full text-muted hover:text-red-400 hover:bg-red-500/10 transition-all group"
                  title="Sign Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setIsAuthOpen(true)}
                className="px-6 py-2.5 rounded-full text-sm font-semibold bg-white/5 border border-white/10 hover:bg-neon/10 hover:border-neon/30 hover:text-neon transition-all"
              >
                Sign In
              </button>
            )}
          </motion.div>
        </div>
      </nav>

      {/* Put Modal here so it can easily overlay the whole app */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};

export default Navbar;
