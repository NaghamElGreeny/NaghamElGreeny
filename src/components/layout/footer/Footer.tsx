'use client';
import React from 'react';
import FooterBottom from './FooterBottom';
import FooterHero from './FooterHero';
import FooterNewsletter from './FooterNewsletter';

const Footer = () => {
  return (
    <footer className="w-full z-30 bottom-0 bg-white/70 dark:bg-black/20 backdrop-blur-xl border-t border-white/20 dark:border-white/10 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-2">
        <div className="w-full h-4 flex justify-center items-center text-black dark:text-white">
          &copy;Nagham ElGreeny 2026{' '}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
