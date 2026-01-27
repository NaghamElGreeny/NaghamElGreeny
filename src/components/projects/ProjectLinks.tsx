'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/Button';

interface ProjectLinksProps {
  liveUrl?: string;
  githubUrl?: string;
  showBackButton?: boolean;
  backUrl?: string;
  className?: string;
}

export const ProjectLinks = ({
  liveUrl,
  githubUrl,
  showBackButton = false,
  backUrl = '/projects',
  className = '',
}: ProjectLinksProps) => {
  const t = useTranslations('Projects');

  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      {showBackButton && (
        <Link href={backUrl}>
          <Button variant="secondary" className="flex items-center gap-2">
            <ArrowLeft size={18} />
            {t('backToProjects')}
          </Button>
        </Link>
      )}
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold bg-[var(--color-primary)] text-white hover:opacity-90 active:scale-95 shadow-lg transition-all duration-300"
        >
          <ExternalLink size={18} />
          {t('liveDemo')}
        </a>
      )}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold bg-white/80 dark:bg-black/20 backdrop-blur-md border border-white/20 dark:border-white/10 text-[var(--color-text)] hover:bg-white/90 dark:hover:bg-black/30 transition-all duration-300"
        >
          <Github size={18} />
          {t('viewCode')}
        </a>
      )}
    </div>
  );
};
