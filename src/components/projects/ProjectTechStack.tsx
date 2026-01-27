'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { Code2 } from 'lucide-react';

interface ProjectTechStackProps {
  techStack: {
    frontend?: string[];
    backend?: string[];
    styling?: string[];
    tools?: string[];
    other?: string[];
  };
  className?: string;
}

export const ProjectTechStack = ({ techStack, className = '' }: ProjectTechStackProps) => {
  const t = useTranslations('Projects');

  const categories = [
    { key: 'frontend', label: t('techStack.frontend'), items: techStack.frontend },
    { key: 'backend', label: t('techStack.backend'), items: techStack.backend },
    { key: 'styling', label: t('techStack.styling'), items: techStack.styling },
    { key: 'tools', label: t('techStack.tools'), items: techStack.tools },
    { key: 'other', label: t('techStack.other'), items: techStack.other },
  ].filter(category => category.items && category.items.length > 0);

  if (categories.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      <h3 className="text-xl font-bold mb-4 text-[var(--color-text)] flex items-center gap-2">
        <Code2 className="w-5 h-5" />
        {t('techStack.title')}
      </h3>
      <div className="space-y-4">
        {categories.map(category => (
          <div key={category.key}>
            <h4 className="text-sm font-semibold mb-2 text-gray-600 dark:text-gray-400 uppercase tracking-wide">
              {category.label}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.items?.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-sm rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium border border-[var(--color-primary)]/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
