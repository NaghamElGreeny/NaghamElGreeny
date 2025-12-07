import Image from 'next/image';
import React from 'react';

const FooterHero = () => {
  return (
    <div className="absolute -top-24 left-1/2 -translate-x-1/2">
      <Image
        src="/images/girl-upside-down.png" // <-- add your own illustration here
        alt="Hanging girl illustration"
        width={150}
        height={150}
        className="drop-shadow-lg"
      />
    </div>
  );
};

export default FooterHero;
