import React from 'react';

const ShieldIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 100" 
    {...props}
  >
    <defs>
      {/* Green Gradient for Body */}
      <linearGradient id="greenShield" x1="50%" y1="0%" x2="50%" y2="100%">
        <stop offset="0%" stopColor="#2E8B57" /> {/* SeaGreen */}
        <stop offset="100%" stopColor="#006400" /> {/* DarkGreen */}
      </linearGradient>

      {/* Silver Gradient for Border */}
      <linearGradient id="silverBorder" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E0E0E0" />
        <stop offset="50%" stopColor="#BDBDBD" />
        <stop offset="100%" stopColor="#757575" />
      </linearGradient>
      
      {/* Glossy Reflection */}
      <linearGradient id="gloss" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="white" stopOpacity="0.4"/>
        <stop offset="100%" stopColor="white" stopOpacity="0"/>
      </linearGradient>

      <filter id="dropShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
        <feOffset dx="0" dy="2" result="offsetblur"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.3"/>
        </feComponentTransfer>
        <feMerge> 
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/> 
        </feMerge>
      </filter>
    </defs>

    {/* Shield Border */}
    <path 
      d="M50 5 L10 20 V45 C10 69.5 27 92.5 50 98 C73 92.5 90 69.5 90 45 V20 L50 5 Z" 
      fill="url(#silverBorder)" 
      stroke="#555" 
      strokeWidth="1"
      filter="url(#dropShadow)"
    />

    {/* Shield Body (Inset) */}
    <path 
      d="M50 10 L15 23 V45 C15 66.5 30 87 50 92 C70 87 85 66.5 85 45 V23 L50 10 Z" 
      fill="url(#greenShield)"
    />
    
    {/* Gloss Reflection */}
    <path 
      d="M50 10 L15 23 V45 C15 55 20 65 30 75 C 20 60 18 30 50 20 C 82 30 80 60 70 75 C 80 65 85 55 85 45 V23 L50 10 Z" 
      fill="url(#gloss)"
    />

    {/* Medical Cross */}
    <path 
      d="M50 30 V70 M30 50 H70" 
      stroke="white" 
      strokeWidth="12" 
      strokeLinecap="square"
    />
  </svg>
);

export default ShieldIcon;