'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { SkillCard } from '../ui/SkillCard';
import { SectionContainer } from '../ui/SectionContainer';
import { AnimatedSection } from '../ui/AnimatedSection';
import { SKILLS } from '@/constants/skills';

export const SkillsSection = () => {
  const t = useTranslations('Skills');

  const skillsByCategory = {
    frontend: SKILLS.filter(s => s.category === 'frontend'),
    state: SKILLS.filter(s => s.category === 'state'),
    styling: SKILLS.filter(s => s.category === 'styling'),
    tools: SKILLS.filter(s => s.category === 'tools'),
  };

  return (
    <SectionContainer id="skills" className="bg-transparent">
      <AnimatedSection>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--color-text)]">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
        </div>
      </AnimatedSection>

      <div className="space-y-12">
        {Object.entries(skillsByCategory).map(([category, skills], categoryIndex) => {
          if (skills.length === 0) return null;
          return (
            <AnimatedSection key={category} delay={categoryIndex * 0.1}>
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-6 text-[var(--color-text)]">
                  {t(category as keyof typeof skillsByCategory)}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {skills.map((skill, index) => (
                    <AnimatedSection key={skill.name} delay={index * 0.05}>
                      <SkillCard name={skill.name} icon={skill.icon} />
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </SectionContainer>
  );
};
