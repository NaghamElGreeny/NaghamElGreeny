'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GlassCard } from '@/components/ui/GlassCard';
import { ProjectFeatures } from './ProjectFeatures';
import { ProjectTechStack } from './ProjectTechStack';
import { ProjectLinks } from './ProjectLinks';
import { ProjectIframe } from './ProjectIframe';
import { Project } from '@/constants/projects';
import { FolderTree, Sparkles } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  showBackButton?: boolean;
}

export const ProjectDetail = ({ project, showBackButton = true }: ProjectDetailProps) => {
  const t = useTranslations('Projects');

  const getCategoryEmoji = (category: string) => {
    switch (category) {
      case 'web':
        return '🌐';
      case 'dashboard':
        return '📊';
      case 'saas':
        return '☁️';
      case 'pos':
        return '💳';
      default:
        return '🚀';
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <AnimatedSection>
        <GlassCard className="overflow-hidden">
          <div className="relative h-64 md:h-96 bg-gradient-to-br from-[var(--color-primary)]/20 to-green-600/20">
            {project.imageUrl ? (
              <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-8xl opacity-20">{getCategoryEmoji(project.category)}</div>
              </div>
            )}
          </div>
          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 text-xs rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] font-semibold uppercase tracking-wide">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 font-semibold">
                      <Sparkles size={12} />
                      {t('featured')}
                    </span>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-text)]">
                  {project.title}
                </h1>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  {project.longDescription}
                </p>
              </div>
            </div>
            <ProjectLinks
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              showBackButton={showBackButton}
            />
          </div>
        </GlassCard>
      </AnimatedSection>

      {/* Live Project Iframe */}
      {project.liveUrl && (
        <AnimatedSection delay={0.1}>
          <ProjectIframe liveUrl={project.liveUrl} title={project.title} />
        </AnimatedSection>
      )}

      {/* Highlights */}
      {project.highlights && project.highlights.length > 0 && (
        <AnimatedSection delay={project.liveUrl ? 0.2 : 0.1}>
          <GlassCard className="p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4 text-[var(--color-text)] flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-[var(--color-primary)]" />
              {t('highlights')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10"
                >
                  <p className="text-gray-700 dark:text-gray-300">{highlight}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </AnimatedSection>
      )}

      {/* Features and Tech Stack Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <AnimatedSection delay={project.liveUrl ? 0.3 : 0.2}>
          <GlassCard className="p-6 md:p-8">
            <ProjectFeatures features={project.features} />
          </GlassCard>
        </AnimatedSection>

        <AnimatedSection delay={project.liveUrl ? 0.4 : 0.3}>
          <GlassCard className="p-6 md:p-8">
            <ProjectTechStack techStack={project.techStack} />
          </GlassCard>
        </AnimatedSection>
      </div>

      {/* Folder Structure */}
      {project.folderStructure && (
        <AnimatedSection delay={project.liveUrl ? 0.5 : 0.4}>
          <GlassCard className="p-6 md:p-8">
            <h3 className="text-xl font-bold mb-4 text-[var(--color-text)] flex items-center gap-2">
              <FolderTree className="w-5 h-5" />
              {t('projectStructure')}
            </h3>
            <pre className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-white/10 dark:border-white/5 overflow-x-auto text-sm text-gray-700 dark:text-gray-300 font-mono">
              {project.folderStructure}
            </pre>
          </GlassCard>
        </AnimatedSection>
      )}
    </div>
  );
};
