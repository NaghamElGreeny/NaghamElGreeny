'use client';

import { useTranslation } from 'react-i18next';
import '@/lib/i18n/config';

export default function HomePage() {
  const { t } = useTranslation();
  // عايز يديديكت اللغه من الهيدر
  return (
    <main>
      <h1>{t('welcome')}</h1>
      <p>{t('language')}</p>
    </main>
  );
}
