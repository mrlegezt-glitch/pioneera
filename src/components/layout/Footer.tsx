import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-transparent backdrop-blur-sm pt-20 pb-10 border-t border-white/5 relative overflow-hidden z-10">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-neon/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo_neon.png" alt="Pioneera Logo" className="h-10 w-10 object-contain" />
              <span className="text-xl font-bold tracking-wide text-white font-display">Pioneera</span>
            </div>
            <p className="text-muted max-w-md leading-relaxed">
              India's first verified home healthcare marketplace. Nurses, physiotherapists, drivers, elder care — one app. 100% verified.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li><a href="#about" className="hover:text-neon transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-neon transition-colors">Our Services</a></li>
              <li><a href="#team" className="hover:text-neon transition-colors">Team</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-muted">
              <li className="flex flex-col">
                <span className="text-white mb-1">Working Hours:</span>
                <span className="text-neon font-medium">06:30 AM - 09:00 PM</span>
              </li>
              <li className="flex flex-col pt-1">
                <span className="text-white mb-1">Email Support:</span>
                <a href="mailto:elder-care@pioneera.info" className="text-neon font-medium hover:text-white transition-colors">
                  elder-care@pioneera.info
                </a>
              </li>
              <li className="pt-2">
                <a href="#waitlist" className="text-white hover:text-neon transition-colors underline underline-offset-4 decoration-neon/50">
                  Join Waitlist
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted text-sm mb-4 md:mb-0">
            © 2027 Pioneera. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-muted hover:text-neon transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-muted hover:text-neon transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
