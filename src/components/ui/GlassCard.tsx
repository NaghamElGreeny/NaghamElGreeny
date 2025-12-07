import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'light';
  onClick?: () => void;
}

export const GlassCard = ({
  children,
  className,
  variant = 'default',
  onClick,
}: GlassCardProps) => {
  const baseClasses = variant === 'light' ? 'glass-card-light' : 'glass-card';

  return (
    <div className={clsx(baseClasses, className, onClick && 'cursor-pointer')} onClick={onClick}>
      {children}
    </div>
  );
};
