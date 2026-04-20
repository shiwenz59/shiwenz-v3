'use client';

import { useRef } from 'react';
import TiltedCard from './TiltedCard';
import VariableProximity from './VariableProximity';
import GlassIcons, { type GlassIconsItem } from './GlassIcons';
import './BusinessCard.css';

const IconOne = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const IconTwo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.94 3.2 9.13 7.63 10.6.56.1.77-.24.77-.54v-2.1c-3.1.67-3.75-1.3-3.75-1.3-.5-1.28-1.23-1.63-1.23-1.63-1-.69.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.99 1.7 2.6 1.2 3.24.92.1-.72.39-1.2.7-1.48-2.48-.28-5.08-1.24-5.08-5.52 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.07 1.15a10.6 10.6 0 0 1 5.58 0c2.13-1.45 3.07-1.15 3.07-1.15.61 1.54.23 2.68.11 2.96.72.78 1.15 1.78 1.15 3 0 4.29-2.6 5.23-5.1 5.5.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.78.54a11.27 11.27 0 0 0 7.62-10.6C23.25 5.48 18.27.5 12 .5Z" />
  </svg>
);

const IconThree = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

export default function BusinessCard() {
  const roleRef = useRef<HTMLDivElement>(null);

  const icons: GlassIconsItem[] = [
    { icon: <IconOne />, color: 'blue', label: 'Link 1' },
    { icon: <IconTwo />, color: 'purple', label: 'Link 2' },
    { icon: <IconThree />, color: 'indigo', label: 'Link 3' },
  ];

  return (
    <TiltedCard
      containerWidth="100%"
      containerHeight="100%"
      imageWidth="100%"
      imageHeight="100%"
      rotateAmplitude={3}
      scaleOnHover={1.03}
      showMobileWarning={false}
      showTooltip={false}
      displayOverlayContent
      overlayContent={
        <div className="card-content">
          <img                          
            src="/profile.jpg"                                                     
            alt="Shiwen Zhu"                      
            className="card-logo"                                                  
          /> 
          <div className="card-right">
            <h1 className="card-name">
              <span>Shiwen</span>
              <span>Zhu</span>
            </h1>
            <div className="card-role" ref={roleRef}>
              <VariableProximity
                label="product manager | art historian | builder | singer-songwriter | tech reviewer | photographer"
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={roleRef}
                radius={30}
                falloff="gaussian"
              />
            </div>
            <div className="card-actions">
              <GlassIcons items={icons} />
            </div>
          </div>
        </div>
      }
    />
  );
}
