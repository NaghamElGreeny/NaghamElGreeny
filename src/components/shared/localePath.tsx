'use client';
import React, { PropsWithChildren } from 'react';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type props = {
  href: string;
  className?: string;
};

export default function LocalePath({ href, className = '', children }: PropsWithChildren<props>) {
  const locale = useLocale();
  const pathname = usePathname();
  const localizedHref = locale === 'ar' ? `/${locale}${href}` : href;
  const isActive = pathname === localizedHref;
  return (
    <Link
      href={localizedHref}
      className={clsx(className, {
        'active-link': isActive,
      })}
    >
      {children}
    </Link>
  );
}
