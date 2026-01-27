'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { PROJECTS } from '@/constants/projects';

export default function ProjectsPage() {
  const t = useTranslations('Projects');

  return (
    <main className="flex flex-col relative w-full min-h-screen pt-24">
      <SectionContainer>
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-text)]">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">{t('subtitle')}</p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              {PROJECTS.length}{' '}
              {PROJECTS.length === 1 ? t('projectCount.singular') : t('projectCount.plural')}{' '}
              {t('projectCount.total')}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </SectionContainer>
    </main>
  );
}
