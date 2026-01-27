'use client';

import React from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { AnimatedSection } from '../ui/AnimatedSection';

export const Hero = () => {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const isRTL = locale === 'ar';

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/naghamelgreeny',
      label: 'LinkedIn',
    },
  ];

  return (
    <section className="relative h-screen flex items-center justify-center pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-pink-500">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-14 xl:gap-20">
          {/* Content */}
          <AnimatedSection
            direction={isRTL ? 'left' : 'right'}
            className="flex-1 w-full text-center lg:text-start"
          >
            <div className="space-y-6 md:space-y-8">
              {/* Greeting */}
              <h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
                             font-bold text-[var(--color-text)] leading-tight"
              >
                {t('greeting')}
              </h1>

              {/* Title */}
              <h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 
                             font-semibold text-gradient"
              >
                {t('title')}
              </h2>

              {/* Description */}
              <p
                className="text-sm sm:text-base md:text-lg lg:text-xl 
                            text-gray-600 dark:text-gray-400 
                            max-w-xl mx-auto lg:mx-0"
              >
                {t('description')}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full">
                <Button href="/contact" variant="primary" className="w-full sm:w-auto">
                  {t('hireMe')}
                </Button>

                <a
                  href="/assets/files/NaghamMohammed-FrontendCV.pdf"
                  download
                  className="btn btn-secondary w-full sm:w-auto text-center"
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
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full 
                                 bg-white/50 dark:bg-black/20 backdrop-blur-md 
                                 border border-white/20 dark:border-white/10 
                                 flex items-center justify-center 
                                 hover:bg-white/70 dark:hover:bg-black/30 
                                 hover:scale-110 transition-all duration-300 
                                 text-[var(--color-text)]"
                    >
                      <Icon className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          {/* Image */}
          {/* <div className="flex-1 flex justify-center border-2 border-amber-300">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
              <Image
                src="/assets/images/naghoma.png"
                alt="Nagham ElGreeny - Frontend Developer"
                width={500}
                height={500}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
