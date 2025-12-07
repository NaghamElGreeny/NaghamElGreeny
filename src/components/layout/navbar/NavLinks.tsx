import React from 'react';
import LocalePath from '../../shared/localePath';
import { useTranslations } from 'next-intl';

interface NavLinksProps {
  links: { href: string; label: string }[];
  onClickLink?: () => void;
}

export const NavLinks = ({ links, onClickLink }: NavLinksProps) => {
  const t = useTranslations('Navbar');
  return (
    <ul className="flex flex-col md:flex-row items-center gap-6 text-gray-700 font-medium">
      {links.map(({ href, label }) => (
        <li key={href} onClick={onClickLink}>
          <LocalePath href={href} className="hover:text-green-600 transition-colors duration-200">
            {t(label)}
          </LocalePath>
        </li>
      ))}
    </ul>
  );
};
