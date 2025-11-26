import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent mt-16 border-t border-brand-sand/30">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-brand-coffee font-medium">&copy; {new Date().getFullYear()} NICO-SHIELD. All rights reserved.</p>
        <p className="text-sm mt-2 text-brand-coffee/70">Empowering you to make the right choice.</p>
      </div>
    </footer>
  );
};

export default Footer;