'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { SectionContainer } from '../ui/SectionContainer';
import { AnimatedSection } from '../ui/AnimatedSection';
import { ProjectCard } from '../ui/ProjectCard';
import { PROJECTS } from '@/constants/projects';

export const ProjectsSection = () => {
  const t = useTranslations('Projects');

  return (
    <SectionContainer id="projects">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-text)]">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
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
  );
};
