'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import Cookies from 'js-cookie';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check both class and cookie for initial state
    const htmlHasDark = document.documentElement.classList.contains('dark');
    const cookieTheme = Cookies.get('modeLayout');
    const isDarkMode = htmlHasDark || cookieTheme === 'dark';
    setIsDark(isDarkMode);

    // Sync HTML class with cookie if needed
    if (cookieTheme === 'dark' && !htmlHasDark) {
      document.documentElement.classList.add('dark');
    } else if (!cookieTheme && htmlHasDark) {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);

    if (newTheme) {
      document.documentElement.classList.add('dark');
      Cookies.set('modeLayout', 'dark', { expires: 365 });
    } else {
      document.documentElement.classList.remove('dark');
      Cookies.set('modeLayout', '', { expires: 365 });
    }
  };

  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="p-2 rounded-full border border-green-500/20 hover:bg-green-500/10 transition-colors cursor-pointer"
      >
        <Sun size={20} className="size-5 md:size-6 text-gray-600 dark:text-gray-300" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative p-2 rounded-full border border-green-500/20 hover:bg-green-500/10 dark:hover:bg-green-500/20 transition-all duration-300 cursor-pointer group"
    >
      <div className="relative size-5 md:size-6">
        <Sun
          size={20}
          className={`absolute inset-0 size-5 md:size-6 text-amber-500 transition-all duration-500 ${
            isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
          }`}
        />
        <Moon
          size={20}
          className={`absolute inset-0 size-5 md:size-6 text-blue-400 transition-all duration-500 ${
            isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
          }`}
        />
      </div>
    </button>
  );
}

export default ThemeToggle;
