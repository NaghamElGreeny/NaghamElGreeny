import React from 'react';
import LocalePath from './localePath';

interface NavLinksProps {
  links: { href: string; label: string }[];
  onClickLink?: () => void;
}

export const NavLinks = ({ links, onClickLink }: NavLinksProps) => {
  return (
    <ul className="flex flex-col md:flex-row items-center gap-6 text-gray-700 font-medium">
      {links.map(({ href, label }) => (
        <li key={href} onClick={onClickLink}>
          <LocalePath href={href} className="hover:text-green-600 transition-colors duration-200">
            {label}
          </LocalePath>
        </li>
      ))}
    </ul>
  );
};
