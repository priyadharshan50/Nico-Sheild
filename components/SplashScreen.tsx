import React from 'react';
import ShieldIcon from './icons/ShieldIcon';

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#5D4037] via-[#4E342E] to-[#3E2723] z-50 overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white opacity-5 rounded-full blur-[120px] animate-pulse-slow"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#D7CCC8] opacity-5 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center animate-fade-up px-4">
        
        {/* Animated Logo Container */}
        <div className="relative mb-10 group animate-float">
           {/* Silver Glow Effect for the metallic shield */}
           <div className="absolute inset-0 bg-white blur-3xl opacity-30 rounded-full scale-125 animate-pulse-slow"></div>
           
           {/* The Logo */}
           <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
              {/* Shimmer Effect overlaying the logo */}
              <div className="absolute inset-0 z-20 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 translate-x-[-150%] animate-shimmer"></div>
              </div>
              
              <ShieldIcon className="w-full h-full drop-shadow-2xl z-10" />
           </div>
        </div>

        {/* Brand Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#D7CCC8] tracking-tight mb-4 drop-shadow-lg text-center font-sans">
          NICO-SHIELD
        </h1>
        
        {/* Decorative Line */}
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#D7CCC8] to-transparent rounded-full mb-6"></div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[#D7CCC8] font-light tracking-widest text-center max-w-lg mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Your Journey to a Healthier Life
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;