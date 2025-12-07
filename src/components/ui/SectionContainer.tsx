import React, { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const SectionContainer = ({ children, className, id }: SectionContainerProps) => {
  return (
    <section id={id} className={clsx('section-container', className)}>
      {children}
    </section>
  );
};
