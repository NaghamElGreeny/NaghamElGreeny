'use client';

import React from 'react';
import { GlassCard } from './GlassCard';
import { ExternalLink, Github, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Project } from '@/constants/projects';

interface ProjectCardProps {
  project: Project;
}

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

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const allTechStack = [
    ...(project.techStack.frontend || []),
    ...(project.techStack.backend || []),
    ...(project.techStack.styling || []),
    ...(project.techStack.tools || []),
    ...(project.techStack.other || []),
  ].slice(0, 4);

  return (
    <GlassCard className="overflow-hidden group hover:scale-[1.02] transition-all duration-300 flex flex-col h-full">
      <Link href={`/projects/${project.id}`} className="flex flex-col h-full">
        <div className="relative h-48 bg-gradient-to-br from-[var(--color-primary)]/20 to-green-600/20">
          {project.imageUrl ? (
            <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-6xl opacity-20">{getCategoryEmoji(project.category)}</div>
            </div>
          )}
          <div className="absolute top-3 right-3 flex gap-2">
            <span className="px-2 py-1 text-xs rounded-full bg-black/50 backdrop-blur-sm text-white font-semibold uppercase">
              {project.category}
            </span>
            {project.featured && (
              <span className="flex items-center gap-1 px-2 py-1 text-xs rounded-full bg-yellow-500/90 backdrop-blur-sm text-white font-semibold">
                <Sparkles size={10} />
                Featured
              </span>
            )}
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 flex-1">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {allTechStack.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] font-medium"
              >
                {tech}
              </span>
            ))}
            {allTechStack.length < 4 && (
              <span className="px-3 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 font-medium">
                +{project.features.length} features
              </span>
            )}
          </div>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10 dark:border-white/5">
            <div className="flex gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:underline"
                >
                  <ExternalLink size={16} />
                  Live
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="flex items-center gap-2 text-sm font-medium text-[var(--color-text)] hover:underline"
                >
                  <Github size={16} />
                  Code
                </a>
              )}
            </div>
            <span className="flex items-center gap-1 text-sm font-medium text-[var(--color-primary)] group-hover:gap-2 transition-all">
              View Details
              <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </Link>
    </GlassCard>
  );
};
