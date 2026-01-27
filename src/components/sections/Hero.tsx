'use client';
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
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
import { AnimatedSection } from '../ui/AnimatedSection';

export const Hero = () => {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/naghamelgreeny', label: 'LinkedIn' },
  ];

  // Calculate positions for 8 icons in a circular arc at the bottom
  // Uses logical properties for RTL/LTR support
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
    <section className="h-screen flex items-center justify-center relative pt-24 pb-12 overflow-hidden bg-gradient-to-b from-[var(--color-background)] to-[var(--color-primary)]">
      {/* // <section className="min-h-screen flex items-center justify-center relative pt-32 pb-12 overflow-hidden bg-gradient-to-b from-[var(--color-background)] to-[var(--color-primary)]"> */}
      <div className="flex flex-col items-center justify-center relative ">
        <div className="container mx-auto my-0 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
            {/* Content Column - First in LTR, Second in RTL */}
            <AnimatedSection
              direction={isRTL ? 'left' : 'right'}
              className="flex-1 w-full lg:w-auto text-center lg:text-start order-1 lg:order-none"
            >
              <div className="space-y-6 md:space-y-8">
                {/* Greeting */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[var(--color-text)] leading-tight">
                  {t('greeting')}
                </h1>

                {/* Role */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-gradient">
                  {t('title')}
                </h2>

                {/* Description */}
                <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0">
                  {t('description')}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button href="/contact" variant="primary">
                    {t('hireMe')}
                  </Button>
                  <a
                    href="/assets/files/NaghamMohammed-FrontendCV.pdf"
                    download
                    className="btn btn-secondary flex items-center justify-center gap-2"
                  >
                    {t('downloadCV')}
                  </a>
                </div>

                {/* Social Icons */}
                <div
                  className="flex items-center justify-center lg:justify-start gap-4 pt-4"
                  dir={isRTL ? 'rtl' : 'ltr'}
                >
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target={social.href.startsWith('http') ? '_blank' : undefined}
                        rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        aria-label={social.label}
                        className="w-12 h-12 rounded-full bg-white/50 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 flex items-center justify-center hover:bg-white/70 dark:hover:bg-black/30 hover:scale-110 transition-all duration-300 text-[var(--color-text)]"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>

            {/* Illustration Column - Second in LTR, First in RTL */}
            {/* <AnimatedSection
              direction={isRTL ? 'right' : 'left'}
              delay={0.2}
              className="flex-1 w-full lg:w-auto flex justify-center relative order-2 lg:order-none"
            > */}
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Illustration */}
              <div className="relative !w-[500px] z-10 overflow-hidden">
                <Image
                  src="/assets/images/nagham-macbook.png"
                  alt="Nagham ElGreeny - Frontend Developer"
                  width={400}
                  height={400}
                  className="hero-image h-auto !w-[500px]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        {/* Skills Marquee */}
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
      </div>
    </section>
  );
};
