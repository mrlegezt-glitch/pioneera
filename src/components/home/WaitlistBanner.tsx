import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import Button from '../ui/Button';
import { db } from '../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const WaitlistBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Target date: January 1, 2027
    const targetDate = new Date('2027-01-01T00:00:00');

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone || phone.length < 10) {
      setErrorMessage("Please enter a valid phone number.");
      setStatus('error');
      return;
    }

    try {
      setStatus('loading');
      setErrorMessage('');
      
      // Save to Firebase Firestore
      await addDoc(collection(db, "waitlist_leads"), {
        phoneNumber: phone,
        signupDate: serverTimestamp(),
        source: "Homepage Banner"
      });

      setStatus('success');
      setPhone('');
    } catch (error: any) {
      console.error("Error adding to waitlist:", error);
      setStatus('error');
      setErrorMessage("Could not connect to database. Please try again.");
    }
  };

  return (
    <section id="waitlist" className="py-24 relative bg-transparent z-10 -mt-10">
      <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
        {/* Main Waitlist Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#0a121e] to-[#060a10] border border-cyan-900/40 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 shadow-[0_0_80px_rgba(77,248,205,0.03)]"
        >
          {/* subtle glow inside card */}
          <div className="absolute top-0 right-0 w-96 h-full bg-gradient-to-l from-neon/5 to-transparent pointer-events-none"></div>

          <div className="flex-1 space-y-6 relative z-10 w-full lg:w-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/40 border border-cyan-800/30 text-neon text-xs md:text-sm font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-neon animate-pulse"></span>
              Launching Jan 1, 2027 · Hyderabad
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1]">
              Be among the first 100 <br className="hidden xl:block" /> families in Hyderabad.
            </h2>
            <p className="text-muted flex flex-wrap gap-3 text-sm md:text-base font-medium">
              <span className="bg-white/5 px-3 py-1 rounded-md">Exclusive launch offer</span>
              <span className="bg-white/5 px-3 py-1 rounded-md">Priority booking</span>
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-2 pt-4 w-full max-w-xl">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if(status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your phone number" 
                  disabled={status === 'loading' || status === 'success'}
                  className="bg-[#030508] border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-neon transition-colors w-full flex-1 disabled:opacity-50"
                  required
                />
                <Button 
                  key={status} // force re-render for status changes
                  variant="primary" 
                  onClick={(e) => handleSubmit(e as any)}
                  className={`py-4 px-8 shrink-0 flex gap-2 ${status === 'success' ? 'bg-green-500 from-green-500 to-green-400' : ''}`}
                >
                  {status === 'loading' && <span className="animate-pulse">Saving...</span>}
                  {status === 'success' && <span>Added Successfully!</span>}
                  {status === 'idle' && <><span>Join Waitlist</span> <ArrowRight className="w-5 h-5" /></>}
                  {status === 'error' && <span>Try Again</span>}
                </Button>
              </div>
              
              {status === 'error' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm ml-2 mt-1">
                  {errorMessage}
                </motion.p>
              )}
              {status === 'success' && (
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-neon text-sm ml-2 mt-1 font-medium">
                  Welcome to the Pioneera family! We will notify you at launch.
                </motion.p>
              )}
            </form>

          </div>

          {/* New Live Countdown Timer UI */}
          <div className="w-full lg:w-auto shrink-0 relative z-10">
            <div className="bg-[#04070a] border border-white/10 rounded-3xl p-8 relative shadow-2xl">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-neon/10 rounded-full blur-xl"></div>
              
              <div className="flex items-center gap-2 mb-6">
                <Clock className="w-5 h-5 text-neon" />
                <span className="text-white font-medium uppercase tracking-widest text-sm">Countdown to Launch</span>
              </div>

              <div className="flex items-center justify-between gap-1 sm:gap-6 w-full">
                <div className="flex flex-col items-center min-w-[50px]">
                  <span className="text-3xl sm:text-5xl font-display font-bold text-neon mb-1">{String(timeLeft.days).padStart(2, '0')}</span>
                  <span className="text-[10px] sm:text-xs text-muted uppercase tracking-wider">Days</span>
                </div>
                <span className="text-2xl sm:text-5xl text-white/20 font-light -translate-y-2">:</span>
                <div className="flex flex-col items-center min-w-[50px]">
                  <span className="text-3xl sm:text-5xl font-display font-bold text-white mb-1">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="text-[10px] sm:text-xs text-muted uppercase tracking-wider">Hours</span>
                </div>
                <span className="text-2xl sm:text-5xl text-white/20 font-light -translate-y-2">:</span>
                <div className="flex flex-col items-center min-w-[50px]">
                  <span className="text-3xl sm:text-5xl font-display font-bold text-white mb-1">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="text-[10px] sm:text-xs text-muted uppercase tracking-wider">Mins</span>
                </div>
                <span className="text-2xl sm:text-5xl text-neon/20 font-light -translate-y-2">:</span>
                <div className="flex flex-col items-center min-w-[50px]">
                   <motion.span 
                    key={timeLeft.seconds} 
                    initial={{ opacity: 0, y: -10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="text-3xl sm:text-5xl font-display font-bold text-neon mb-1 inline-block"
                  >
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </motion.span>
                  <span className="text-[10px] sm:text-xs text-muted uppercase tracking-wider">Secs</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted uppercase mb-1">Location</p>
                  <p className="text-sm font-medium text-white flex items-center gap-1"><MapPin className="w-4 h-4 text-red-500" /> Hyderabad, IN</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted uppercase mb-1">Target Date</p>
                  <p className="text-sm font-medium text-white">Jan 1st, 2027</p>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistBanner;
