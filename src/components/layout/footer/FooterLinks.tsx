import React from 'react';

const sections = {
  'BROWSE BY CATEGORY': ['CSS', 'React', 'JavaScript', 'Animation', 'Next.js'],
  'INTERACTIVE COURSES': ['CSS for JavaScript Devs', 'The Joy of React'],
  GENERAL: ['About', 'Contact'],
};

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
      {Object.entries(sections).map(([title, links]) => (
        <div key={title}>
          <h3 className="font-bold mb-3">{title}</h3>
          <ul className="space-y-2">
            {links.map(link => (
              <li key={link}>
                <a href="#" className="hover:underline hover:text-blue-700 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
