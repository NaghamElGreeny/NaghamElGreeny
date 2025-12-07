'use client';

import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { Link } from '@/i18n/routing';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  const baseClasses = variant === 'primary' ? 'btn-primary' : 'btn-secondary';
  const classes = clsx(
    'btn',
    baseClasses,
    className,
    disabled && 'opacity-50 cursor-not-allowed',
    'flex items-center justify-center gap-2'
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
    </button>
  );
};
