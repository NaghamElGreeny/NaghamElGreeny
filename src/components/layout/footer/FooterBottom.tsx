'use client';

import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { useTranslations } from 'next-intl';

const FooterBottom = () => {
  const t = useTranslations();
  const tFooter = useTranslations('Footer');

  return (
    <div className="border-t border-white/20 dark:border-white/10 py-6 text-center">
      <div className="flex justify-center items-center gap-6 mb-4">
        <a
          href="https://github.com/NaghamElGreeny"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="p-2 rounded-full bg-white/50 dark:bg-black/20 hover:bg-white/70 dark:hover:bg-black/30 transition-colors"
        >
          <Github className="w-5 h-5 text-[var(--color-text)]" />
        </a>
        <a
          href="https://linkedin.com/in/naghamelgreeny"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="p-2 rounded-full bg-white/50 dark:bg-black/20 hover:bg-white/70 dark:hover:bg-black/30 transition-colors"
        >
          <Linkedin className="w-5 h-5 text-[var(--color-text)]" />
        </a>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} {t('developer')}. {tFooter('rights')}
      </p>
      <div className="flex justify-center gap-4 mt-3">
        <a
          href="#"
          className="text-xs text-gray-500 dark:text-gray-400 hover:text-[var(--color-primary)] transition-colors"
        >
          {tFooter('terms')}
        </a>
        <a
          href="#"
          className="text-xs text-gray-500 dark:text-gray-400 hover:text-[var(--color-primary)] transition-colors"
        >
          {tFooter('privacy')}
        </a>
      </div>
    </div>
  );
};

export default FooterBottom;
