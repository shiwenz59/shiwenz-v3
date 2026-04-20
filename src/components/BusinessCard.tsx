'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const IconThree = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

export default function BusinessCard() {
  const roleRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const email = ['shiwenz59', 'icloud.com'].join('@');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const icons: GlassIconsItem[] = [
    {
      icon: <IconTwo />,
      color: 'purple',
      label: 'Instagram',
      href: 'https://www.instagram.com/zhushiwen0703/',
    },
    {
      icon: <IconThree />,
      color: 'indigo',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/shiwen-zhu-b38095268',
    },
    {
      icon: <IconOne />,
      color: 'blue',
      label: 'Email',
      onClick: handleCopyEmail,
    },
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
                fromFontVariationSettings="'wght' 300"
                toFontVariationSettings="'wght' 700"
                containerRef={roleRef}
                radius={30}
                falloff="gaussian"
              />
            </div>
            <div className="card-actions">
              <GlassIcons items={icons} />
              <AnimatePresence>
                {copied && (
                  <motion.span
                    className="email-toast"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.2 }}
                  >
                    Copied!
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      }
    />
  );
}
