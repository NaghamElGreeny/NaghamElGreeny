'use client';

import React from 'react';
import Image from 'next/image';
export const Logo = () => (
  <div className="flex items-center gap-3">
    <Image
      src="/assets/images/myMemoji.webp"
      alt="Logo"
      width={48}
      height={48}
      className="rounded-full border-2 border-green-500"
    />
    <h1 className="font-semibold text-lg text-gray-800 tracking-tight">Nagham ElGreeny</h1>
  </div>
);
