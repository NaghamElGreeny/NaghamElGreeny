'use client';
import { useTranslations } from 'next-intl';
import React from 'react';

function Test() {
  const t = useTranslations('Navbar');
  return (
    <div className="text-red-300 bg-black p-3 text-center">
      Test localization in componnent
      <br />
      {t('home')}
      <br />
      {t('about')}
      <br />
      {t('skills')}
    </div>
  );
}

export default Test;
