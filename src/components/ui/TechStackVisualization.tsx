'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiSass,
  SiRedux,
  SiAppian,
} from 'react-icons/si';
import { Code2, Shield, Palette, Globe, Lock, Settings } from 'lucide-react';
import { SKILLS } from '@/constants/skills';

interface TechIcon {
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number | string }>;
  color: string;
}

// Map skills to icons
const getTechIcon = (skillName: string): TechIcon | null => {
  const iconMap: Record<string, TechIcon> = {
    'React.js': { name: 'React.js', icon: SiReact, color: '#61DAFB' },
    'Next.js': { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
    TypeScript: { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    JavaScript: { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    'Tailwind CSS': { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    Sass: { name: 'Sass', icon: SiSass, color: '#CC6699' },
    Redux: { name: 'Redux', icon: SiRedux, color: '#764ABC' },
    Zustand: { name: 'Zustand', icon: Code2, color: '#10b981' },
    Formik: { name: 'Formik', icon: Code2, color: '#10b981' },
    Yup: { name: 'Yup', icon: Shield, color: '#10b981' },
    i18next: { name: 'i18next', icon: Globe, color: '#10b981' },
    'API Integration': { name: 'API Integration', icon: SiAppian, color: '#10b981' },
    Authentication: { name: 'Authentication', icon: Lock, color: '#10b981' },
    'Theme Management': { name: 'Theme Management', icon: Palette, color: '#10b981' },
  };

  return iconMap[skillName] || null;
};

export const TechStackVisualization = () => {
  // Split skills into two rows for top section
  const topRowSkills = useMemo(() => {
    const icons = SKILLS.map(skill => getTechIcon(skill.name)).filter(Boolean) as TechIcon[];
    const midPoint = Math.ceil(icons.length / 2);
    return {
      top: icons.slice(0, midPoint),
      bottom: icons.slice(midPoint),
    };
  }, []);

  // Skills for orbiting - distribute across 3 rings
  const orbitingSkills = useMemo(() => {
    const icons = SKILLS.map(skill => getTechIcon(skill.name)).filter(Boolean) as TechIcon[];
    const perRing = Math.ceil(icons.length / 3);
    return {
      ring1: icons.slice(0, perRing),
      ring2: icons.slice(perRing, perRing * 2),
      ring3: icons.slice(perRing * 2),
    };
  }, []);

  // Calculate orbital positions for each ring
  const getOrbitalPosition = (index: number, total: number, radius: number) => {
    const angle = (index / total) * 2 * Math.PI;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y, angle };
  };

  // Responsive radii for orbit rings - optimized for better visual balance
  const orbitRadii = useMemo(() => {
    // Optimized sizes for better spacing and visual hierarchy
    return {
      ring1: 110, // Inner ring
      ring2: 170, // Middle ring
      ring3: 230, // Outer ring
    };
  }, []);

  // SVG viewBox center
  const svgCenter = 500;
  const topRowY = -220; // Y position for top row - better spacing
  const bottomRowY = -130; // Y position for bottom row - better spacing

  // Calculate curved path from icon to center with smoother curve
  const getCurvedPath = (startX: number, startY: number, endX: number, endY: number) => {
    const midX = (startX + endX) / 2;
    const midY = startY - 40; // Control point for smoother curve
    return `M ${startX} ${startY} Q ${midX} ${midY} ${endX} ${endY}`;
  };

  return (
    <div className="relative w-full min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden rounded-3xl">
      {/* Enhanced background with depth layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/25 via-purple-800/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-purple-900/10 to-[var(--color-primary)]/15" />
      {/* Radial gradient for depth */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(circle at center, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* SVG container for orbit rings, connecting lines */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ overflow: 'visible' }}
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Enhanced gradient for connecting lines */}
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.3" />
          </linearGradient>

          {/* Radial gradient for center circle */}
          <radialGradient id="centerGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.2" />
          </radialGradient>

          {/* Enhanced gradient for orbit rings */}
          <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.3" />
          </linearGradient>

          {/* Enhanced ring gradient for outer ring */}
          <linearGradient id="ringGradientOuter" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.2" />
          </linearGradient>

          {/* Enhanced glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Strong glow for center */}
          <filter id="strongGlow">
            <feGaussianBlur stdDeviation="10" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Ring glow filter */}
          <filter id="ringGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g transform={`translate(${svgCenter}, ${svgCenter})`}>
          {/* 3 Static Circular Orbit Rings - Enhanced with multiple layers and pulsing */}
          {/* Inner ring with enhanced visibility */}
          <circle
            cx="0"
            cy="0"
            r={orbitRadii.ring1}
            fill="none"
            stroke="url(#ringGradient)"
            strokeWidth="2"
            opacity="0.7"
            filter="url(#ringGlow)"
            className="animate-pulse"
            style={{ animationDuration: '3s' }}
          />
          {/* Middle ring */}
          <circle
            cx="0"
            cy="0"
            r={orbitRadii.ring2}
            fill="none"
            stroke="url(#ringGradient)"
            strokeWidth="2"
            opacity="0.6"
            filter="url(#ringGlow)"
            className="animate-pulse"
            style={{ animationDuration: '4s', animationDelay: '0.5s' }}
          />
          {/* Outer ring */}
          <circle
            cx="0"
            cy="0"
            r={orbitRadii.ring3}
            fill="none"
            stroke="url(#ringGradientOuter)"
            strokeWidth="2"
            opacity="0.5"
            filter="url(#ringGlow)"
            className="animate-pulse"
            style={{ animationDuration: '5s', animationDelay: '1s' }}
          />

          {/* Curved lines from top row to center */}
          {topRowSkills.top.map((skill, index) => {
            const total = topRowSkills.top.length;
            const spacing = 200; // Increased spacing for better visual balance
            const startX = (index - (total - 1) / 2) * spacing;
            const startY = topRowY;
            const path = getCurvedPath(startX, startY, 0, 0);
            return (
              <motion.path
                key={`top-line-${index}`}
                d={path}
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="2.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
                filter="url(#glow)"
              />
            );
          })}

          {/* Curved lines from bottom row to center */}
          {topRowSkills.bottom.map((skill, index) => {
            const total = topRowSkills.bottom.length;
            const spacing = 200; // Increased spacing for better visual balance
            const startX = (index - (total - 1) / 2) * spacing;
            const startY = bottomRowY;
            const path = getCurvedPath(startX, startY, 0, 0);
            return (
              <motion.path
                key={`bottom-line-${index}`}
                d={path}
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="2.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{
                  duration: 1.2,
                  delay: (topRowSkills.top.length + index) * 0.1,
                  ease: 'easeOut',
                }}
                filter="url(#glow)"
              />
            );
          })}
        </g>
      </svg>

      {/* Top row of tech logos - Enhanced circular pills */}
      <div className="absolute top-4 md:top-8 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 z-10">
        {topRowSkills.top.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={`top-${skill.name}`}
              className="relative group"
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              whileHover={{ scale: 1.2, y: -5 }}
            >
              <div
                className="relative w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-white/15 to-white/5 dark:from-black/30 dark:to-black/15 backdrop-blur-lg border-2 border-purple-500/50 flex items-center justify-center group-hover:border-purple-400/90 group-hover:shadow-2xl transition-all duration-300"
                style={{
                  boxShadow:
                    '0 8px 32px rgba(168, 85, 247, 0.4), 0 0 40px rgba(168, 85, 247, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.15), inset 0 -2px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle, ${skill.color}20 0%, transparent 70%)`,
                  }}
                />
                <div style={{ color: skill.color }} className="relative z-10">
                  <Icon className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 drop-shadow-lg" />
                </div>
              </div>
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-purple-200/90 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap drop-shadow-lg">
                {skill.name}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom row of tech logos - Enhanced circular pills */}
      <div className="absolute top-28 md:top-36 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 z-10">
        {topRowSkills.bottom.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={`bottom-${skill.name}`}
              className="relative group"
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: (topRowSkills.top.length + index) * 0.1,
                ease: 'easeOut',
              }}
              whileHover={{ scale: 1.2, y: -5 }}
            >
              <div
                className="relative w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-white/15 to-white/5 dark:from-black/30 dark:to-black/15 backdrop-blur-lg border-2 border-purple-500/50 flex items-center justify-center group-hover:border-purple-400/90 group-hover:shadow-2xl transition-all duration-300"
                style={{
                  boxShadow:
                    '0 8px 32px rgba(168, 85, 247, 0.4), 0 0 40px rgba(168, 85, 247, 0.2), inset 0 2px 4px rgba(255, 255, 255, 0.15), inset 0 -2px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle, ${skill.color}20 0%, transparent 70%)`,
                  }}
                />
                <div style={{ color: skill.color }} className="relative z-10">
                  <Icon className="w-7 h-7 md:w-9 md:h-9 lg:w-10 lg:h-10 drop-shadow-lg" />
                </div>
              </div>
              <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-purple-200/90 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap drop-shadow-lg">
                {skill.name}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Center memoji with enhanced glow and radial gradient */}
      <motion.div
        className="relative z-20"
        initial={{ scale: 0, opacity: 0, rotate: -180 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
      >
        {/* Enhanced radial gradient background with multiple layers */}
        <div
          className="absolute inset-0 -z-10 rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(168, 85, 247, 0.5) 0%, rgba(124, 58, 237, 0.3) 40%, rgba(109, 40, 217, 0.15) 70%, transparent 100%)',
            width: '160%',
            height: '160%',
            left: '-30%',
            top: '-30%',
          }}
        />

        {/* Strong multi-layer glow effect with breathing animation */}
        <div className="absolute inset-0 -z-10 animate-breathing-glow">
          <div
            className="absolute inset-0 rounded-full blur-3xl"
            style={{
              background:
                'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, rgba(124, 58, 237, 0.3) 50%, transparent 80%)',
              width: '220%',
              height: '220%',
              left: '-60%',
              top: '-60%',
            }}
          />
          <div
            className="absolute inset-0 rounded-full blur-2xl"
            style={{
              background:
                'radial-gradient(circle, rgba(124, 58, 237, 0.5) 0%, rgba(109, 40, 217, 0.2) 60%, transparent 80%)',
              width: '180%',
              height: '180%',
              left: '-40%',
              top: '-40%',
            }}
          />
          <div
            className="absolute inset-0 rounded-full blur-xl"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
              width: '140%',
              height: '140%',
              left: '-20%',
              top: '-20%',
            }}
          />
        </div>

        {/* Memoji image with enhanced border and shadow */}
        <div
          className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-purple-400/70 shadow-2xl"
          style={{
            boxShadow:
              '0 0 60px rgba(168, 85, 247, 0.8), 0 0 100px rgba(168, 85, 247, 0.5), 0 0 140px rgba(124, 58, 237, 0.3), inset 0 0 30px rgba(168, 85, 247, 0.3), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
          }}
        >
          <Image
            src="/assets/images/myMemoji.webp"
            alt="Nagham ElGreeny"
            width={176}
            height={176}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      {/* Orbiting icons container - Galaxy style with static rings and rotating icons */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        {/* Centered container for all orbits */}
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Ring 1 - Inner (fastest) */}
          {orbitingSkills.ring1.map((skill, index) => {
            const { angle } = getOrbitalPosition(
              index,
              orbitingSkills.ring1.length,
              orbitRadii.ring1
            );
            const Icon = skill.icon;
            const initialRotationDeg = angle * (180 / Math.PI);

            return (
              <motion.div
                key={`ring1-${skill.name}`}
                className="absolute will-change-transform orbit-inner"
                style={
                  {
                    '--initial-angle': `${initialRotationDeg}deg`,
                    '--radius': `${orbitRadii.ring1}px`,
                  } as React.CSSProperties
                }
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  opacity: { duration: 0.5, delay: 1.5 + index * 0.1 },
                  scale: { duration: 0.5, delay: 1.5 + index * 0.1 },
                }}
                whileHover={{ scale: 1.3, zIndex: 30 }}
              >
                {/* Counter-rotate to keep icon upright */}
                <div className="counter-rotate-inner animate-float">
                  <motion.div
                    className="relative w-11 h-11 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-white/15 to-white/5 dark:from-black/30 dark:to-black/15 backdrop-blur-lg border-2 border-purple-500/60 flex items-center justify-center shadow-xl hover:border-purple-400/90 transition-all duration-300"
                    style={{
                      boxShadow:
                        '0 4px 20px rgba(168, 85, 247, 0.3), 0 0 30px rgba(168, 85, 247, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.1)',
                    }}
                    whileHover={{
                      scale: 1.15,
                      boxShadow:
                        '0 8px 30px rgba(168, 85, 247, 0.5), 0 0 50px rgba(168, 85, 247, 0.3)',
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle, ${skill.color}25 0%, transparent 70%)`,
                      }}
                    />
                    <div style={{ color: skill.color }} className="relative z-10">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 drop-shadow-md" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}

          {/* Ring 2 - Middle */}
          {orbitingSkills.ring2.map((skill, index) => {
            const { angle } = getOrbitalPosition(
              index,
              orbitingSkills.ring2.length,
              orbitRadii.ring2
            );
            const Icon = skill.icon;
            const initialRotationDeg = angle * (180 / Math.PI);

            return (
              <motion.div
                key={`ring2-${skill.name}`}
                className="absolute will-change-transform orbit-middle"
                style={
                  {
                    '--initial-angle': `${initialRotationDeg}deg`,
                    '--radius': `${orbitRadii.ring2}px`,
                  } as React.CSSProperties
                }
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  opacity: { duration: 0.5, delay: 2 + index * 0.1 },
                  scale: { duration: 0.5, delay: 2 + index * 0.1 },
                }}
                whileHover={{ scale: 1.3, zIndex: 30 }}
              >
                {/* Counter-rotate to keep icon upright */}
                <div className="counter-rotate-middle animate-float-delayed">
                  <motion.div
                    className="relative w-11 h-11 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-white/15 to-white/5 dark:from-black/30 dark:to-black/15 backdrop-blur-lg border-2 border-purple-500/50 flex items-center justify-center shadow-xl hover:border-purple-400/90 transition-all duration-300"
                    style={{
                      boxShadow:
                        '0 4px 20px rgba(168, 85, 247, 0.25), 0 0 30px rgba(168, 85, 247, 0.12), inset 0 1px 2px rgba(255, 255, 255, 0.1)',
                    }}
                    whileHover={{
                      scale: 1.15,
                      boxShadow:
                        '0 8px 30px rgba(168, 85, 247, 0.5), 0 0 50px rgba(168, 85, 247, 0.3)',
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle, ${skill.color}25 0%, transparent 70%)`,
                      }}
                    />
                    <div style={{ color: skill.color }} className="relative z-10">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 drop-shadow-md" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}

          {/* Ring 3 - Outer (slowest) */}
          {orbitingSkills.ring3.map((skill, index) => {
            const { angle } = getOrbitalPosition(
              index,
              orbitingSkills.ring3.length,
              orbitRadii.ring3
            );
            const Icon = skill.icon;
            const initialRotationDeg = angle * (180 / Math.PI);

            return (
              <motion.div
                key={`ring3-${skill.name}`}
                className="absolute will-change-transform orbit-outer"
                style={
                  {
                    '--initial-angle': `${initialRotationDeg}deg`,
                    '--radius': `${orbitRadii.ring3}px`,
                  } as React.CSSProperties
                }
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  opacity: { duration: 0.5, delay: 2.5 + index * 0.1 },
                  scale: { duration: 0.5, delay: 2.5 + index * 0.1 },
                }}
                whileHover={{ scale: 1.3, zIndex: 30 }}
              >
                {/* Counter-rotate to keep icon upright */}
                <div className="counter-rotate-outer animate-float">
                  <motion.div
                    className="relative w-11 h-11 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-white/15 to-white/5 dark:from-black/30 dark:to-black/15 backdrop-blur-lg border-2 border-purple-500/40 flex items-center justify-center shadow-xl hover:border-purple-400/90 transition-all duration-300"
                    style={{
                      boxShadow:
                        '0 4px 20px rgba(168, 85, 247, 0.2), 0 0 30px rgba(168, 85, 247, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.1)',
                    }}
                    whileHover={{
                      scale: 1.15,
                      boxShadow:
                        '0 8px 30px rgba(168, 85, 247, 0.5), 0 0 50px rgba(168, 85, 247, 0.3)',
                    }}
                  >
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `radial-gradient(circle, ${skill.color}25 0%, transparent 70%)`,
                      }}
                    />
                    <div style={{ color: skill.color }} className="relative z-10">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 drop-shadow-md" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
