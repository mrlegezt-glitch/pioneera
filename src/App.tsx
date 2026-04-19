import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import AboutSection from './components/home/AboutSection';
import ServicesSection from './components/home/ServicesSection';
import TeamSection from './components/team/TeamSection';
import WaitlistBanner from './components/home/WaitlistBanner';
import SponsorsSection from './components/home/SponsorsSection';
import HowItWorksSection from './components/home/HowItWorksSection';
import AnimatedBackground from './components/layout/AnimatedBackground';
import SplashScreen from './components/layout/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="relative min-h-screen bg-background w-full overflow-x-hidden selection:bg-neon/30 selection:text-white">
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
      <AnimatedBackground />
      
      {/* 
        We use motion.div here so that once the splash screen finishes (showSplash false),
        the rest of the website smoothly fades in.
      */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showSplash ? 0 : 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full"
      >
        <Navbar />
        
        <main className="relative z-10 w-full">
          <HeroSection />
          <WaitlistBanner />
          <HowItWorksSection />
          <AboutSection />
          <ServicesSection />
          <TeamSection />
          <SponsorsSection />
        </main>

        <Footer />
      </motion.div>
    </div>
  );
}

export default App;
