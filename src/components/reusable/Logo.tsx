'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export const Logo = () => {
  const t = useTranslations('Navbar');
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/assets/images/myMemoji.webp"
        alt="Logo"
        width={48}
        height={48}
        className="rounded-full border-2 border-green-500"
      />
      <h1 className="font-semibold text-sm lg:text-lg text-gray-800 dark:text-gray-200 tracking-tight">
        {t('name')}
      </h1>
    </Link>
  );
};
