import React from 'react';

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSass,
  SiCss3,
  SiBootstrap,
} from 'react-icons/si';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
function Marquee() {
  //   const t = useTranslations('Hero');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const getIconPosition = (index: number, total: number, radius: number = 35) => {
    // Create an arc at the bottom (from 180 to 0 degrees, which is bottom-left to bottom-right)
    // Adjust to create a nice curved bottom arrangement
    const startAngle = 150; // Start from bottom-left area
    const endAngle = 30; // End at bottom-right area
    const angleRange = endAngle - startAngle;
    const angle = startAngle + (angleRange / (total - 1)) * index;
    const radian = (angle * Math.PI) / 180;
    const x = 50 + radius * Math.cos(radian); // Percentage from center
    const y = 50 + radius * Math.sin(radian); // Percentage from center

    const position: Record<string, string> = {};
    // Use logical properties for RTL support
    if (x >= 50) {
      position[isRTL ? 'right' : 'left'] = `${x}%`;
    } else {
      position[isRTL ? 'left' : 'right'] = `${100 - x}%`;
    }
    // Position at bottom - ensure all icons are at the bottom
    // Calculate bottom position from the y coordinate
    const bottomPosition = 100 - y;
    position.bottom = `${Math.max(0, bottomPosition)}%`;

    return position;
  };
  const techIconsBase = [
    { icon: SiReact, color: '#61DAFB', delay: 0 },
    { icon: SiNextdotjs, color: '#ffffff', delay: 0.1 },
    { icon: SiTypescript, color: '#3178C6', delay: 0.2 },
    { icon: SiJavascript, color: '#F7DF1E', delay: 0.3 },
    { icon: SiTailwindcss, color: '#06B6D4', delay: 0.4 },
    { icon: SiSass, color: '#CC6699', delay: 0.5 },
    { icon: SiCss3, color: '#1572B6', delay: 0.6 },
    { icon: SiBootstrap, color: '#7952B3', delay: 0.7 },
  ];

  const techIcons = techIconsBase.map((tech, index) => ({
    ...tech,
    position: getIconPosition(index, techIconsBase.length),
  }));
  return (
    <div className="w-full border-6 border-green-400/30 dark:border-white/10 overflow-hidden">
      <div className="marquee-container">
        <div className={isRTL ? 'marquee-content-rtl' : 'marquee-content'}>
          {/* First set of skills */}
          {techIconsBase.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`skill-${index}`}
                className="flex items-center justify-center mx-4 md:mx-6 lg:mx-8 flex-shrink-0 hover:scale-110 transition-transform duration-300"
              >
                <Icon
                  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                  style={{ color: tech.color }}
                />
              </div>
            );
          })}
          {/* Duplicated set for seamless loop */}
          {techIconsBase.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`skill-duplicate-${index}`}
                className="flex items-center justify-center mx-4 md:mx-6 lg:mx-8 flex-shrink-0 hover:scale-110 transition-transform duration-300"
              >
                <Icon
                  className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                  style={{ color: tech.color }}
                />
                {/* skill name */}
                <span className="text-xs" style={{ color: tech.color }}>
                  {tech.icon.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Marquee;
