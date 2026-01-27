'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { CheckCircle2 } from 'lucide-react';

interface ProjectFeaturesProps {
  features: string[];
  className?: string;
}

export const ProjectFeatures = ({ features, className = '' }: ProjectFeaturesProps) => {
  const t = useTranslations('Projects');

  return (
    <div className={className}>
      <h3 className="text-xl font-bold mb-4 text-[var(--color-text)]">{t('keyFeatures')}</h3>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2
              className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
