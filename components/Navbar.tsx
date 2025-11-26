import React from 'react';
import ShieldIcon from './icons/ShieldIcon';

interface NavbarProps {
  onLogoClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogoClick }) => {
  return (
    <header className="sticky top-0 bg-white/10 backdrop-blur-md z-50 shadow-sm border-b border-white/20 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <button onClick={onLogoClick} className="flex items-center space-x-3 group">
               <div className="w-12 h-12 flex items-center justify-center drop-shadow-lg">
                  <ShieldIcon className="w-full h-full" />
               </div>
               <span className="text-2xl font-extrabold text-white drop-shadow-md tracking-tight">NICO-SHIELD</span>
            </button>
          </div>
          <div className="hidden md:block text-sm font-bold text-brand-text bg-white/80 px-4 py-2 rounded-full shadow-sm">
            Journey to a Healthier Life
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;