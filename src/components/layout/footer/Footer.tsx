'use client';
import React from 'react';
import FooterBottom from './FooterBottom';

const Footer = () => {
  return (
    <footer className="w-full z-30 bottom-0 bg-white/70 dark:bg-black/20 backdrop-blur-xl border-t border-white/20 dark:border-white/10 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FooterBottom />
      </div>
    </footer>
  );
};

export default Footer;
