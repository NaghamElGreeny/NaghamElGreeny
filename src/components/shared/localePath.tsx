'use client';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { Link, usePathname } from '@/i18n/routing';
import clsx from 'clsx';

type props = {
  href: string;
  className?: string;
};

export default function LocalePath({ href, className = '', children }: PropsWithChildren<props>) {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsActive(pathname === href);
  }, [pathname, href]);

  return (
    <Link
      href={href}
      className={clsx(className, {
        'active-link': mounted && isActive,
      })}
    >
      {children}
    </Link>
  );
}
