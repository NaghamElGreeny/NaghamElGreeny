'use client';

import React, { useCallback, useState } from 'react';
import { Menu, X } from 'lucide-react';
import ToggleLang from '../../ui/ToggleLang';
import ThemeToggle from '../../ui/ThemeToggle';
import { NAV_LINKS } from '@/constants/navLinks';
import { NavLinks } from './NavLinks';
import { MobileMenu } from './MobileMenu';
import { Logo } from '../../reusable/Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex w-[93%] max-w-6xl items-center justify-between rounded-full glass-card px-6 py-3 transition-all duration-300">
      {/* Logo */}
      <Logo />
      {/* Desktop Links */}
      <div className="hidden md:flex">
        <NavLinks links={NAV_LINKS} />
      </div>
      {/* Right Section (Theme + Lang + Menu Icon) */}
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <ToggleLang />
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-full border border-green-500/20 hover:bg-green-500/10 dark:hover:bg-green-500/20 transition-colors cursor-pointer"
        >
          {isMenuOpen ? (
            <X size={22} className="size-4 md:size-6" />
          ) : (
            <Menu size={22} className="size-4 md:size-6" />
          )}
        </button>
      </div>
      {/* Mobile Menu with animation */}
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </nav>
  );
};

export default Navbar;
