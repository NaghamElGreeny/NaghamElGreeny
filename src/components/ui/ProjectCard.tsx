'use client';

import React from 'react';
import { GlassCard } from './GlassCard';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { Project } from '@/constants/projects';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <GlassCard className="overflow-hidden group hover:scale-[1.02] transition-all duration-300">
      <div className="relative h-48 bg-gradient-to-br from-[var(--color-primary)]/20 to-green-600/20">
        {project.imageUrl ? (
          <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl opacity-20">🚀</div>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-[var(--color-text)]">{project.title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map(tech => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:underline"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-[var(--color-text)] hover:underline"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </GlassCard>
  );
};
