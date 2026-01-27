'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ProjectDetail } from '@/components/projects/ProjectDetail';
import { getProjectById } from '@/constants/projects';
import { useParams } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/Button';

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = params.id as string;
  const project = getProjectById(projectId);
  const t = useTranslations('Projects');

  if (!project) {
    return (
      <main className="flex flex-col relative w-full min-h-screen pt-24">
        <SectionContainer>
          <AnimatedSection>
            <div className="text-center py-20">
              <h1 className="text-4xl font-bold mb-4 text-[var(--color-text)]">
                {t('notFound.title')}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                {t('notFound.description')}
              </p>
              <Link href="/projects">
                <Button variant="primary">{t('backToProjects')}</Button>
              </Link>
            </div>
          </AnimatedSection>
        </SectionContainer>
      </main>
    );
  }

  return (
    <main className="flex flex-col relative w-full min-h-screen pt-24">
      <SectionContainer>
        <AnimatedSection>
          <div className="mb-8">
            <nav className="text-sm text-gray-600 dark:text-gray-400 mb-4" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">
                    {t('breadcrumb.home')}
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link
                    href="/projects"
                    className="hover:text-[var(--color-primary)] transition-colors"
                  >
                    {t('title')}
                  </Link>
                </li>
                <li>/</li>
                <li className="text-[var(--color-text)] font-medium">{project.title}</li>
              </ol>
            </nav>
          </div>
        </AnimatedSection>

        <ProjectDetail project={project} showBackButton={true} />
      </SectionContainer>
    </main>
  );
}
