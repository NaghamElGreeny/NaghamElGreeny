'use client';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import Image from 'next/image';
import { useLocale } from 'next-intl';
function ToggleLang() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const setLanguage = () => {
    const lang = locale === 'en' ? 'ar' : 'en';

    Cookies.set('NEXT_LOCALE', lang);
    const basePath = pathname.replace(/^\/(ar|en)/, '');
    router.push(`/${lang}${basePath}`);
  };
  return (
    <button
      type="button"
      onClick={setLanguage}
      className="text-gray-600 text-md font-semibold flex cursor-pointer flex-row items-center gap-1  w-fit "
    >
      <Image
        src="/assets/globe.svg"
        alt="Language icon"
        width={24}
        height={24}
        className="size-5 md:size-6"
      />
      {locale === 'en' ? 'ع' : 'EN'}
    </button>
  );
}

export default ToggleLang;
