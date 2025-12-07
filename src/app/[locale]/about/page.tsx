'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import Image from 'next/image';
import { CheckCircle2, GraduationCap, Briefcase, Heart, Target } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('About');

  return (
    <main className="flex flex-col relative w-full min-h-screen pt-24">
      <SectionContainer>
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-text)]">
              {t('title')}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">{t('subtitle')}</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <AnimatedSection>
            <GlassCard className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-[var(--color-text)]">{t('subtitle')}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{t('intro')}</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{t('passion')}</p>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <GlassCard className="p-8 flex items-center justify-center">
              <Image
                src="/assets/images/myMemoji.webp"
                alt="Nagham ElGreeny"
                width={300}
                height={300}
                className="rounded-3xl"
              />
            </GlassCard>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.2}>
          <GlassCard className="p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="text-[var(--color-primary)]" size={28} />
              <h2 className="text-2xl font-bold text-[var(--color-text)]">{t('whatIDo')}</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {t('whatIDoDesc')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[var(--color-primary)] mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700 dark:text-gray-300">React.js / Next.js</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[var(--color-primary)] mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700 dark:text-gray-300">TypeScript</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[var(--color-primary)] mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700 dark:text-gray-300">Tailwind CSS / Sass</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[var(--color-primary)] mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700 dark:text-gray-300">Zustand / Redux</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[var(--color-primary)] mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700 dark:text-gray-300">Formik / Yup</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[var(--color-primary)] mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700 dark:text-gray-300">i18next (Localization)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[var(--color-primary)] mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700 dark:text-gray-300">API Integration</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[var(--color-primary)] mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700 dark:text-gray-300">Theme Management</span>
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <GlassCard className="p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="text-[var(--color-primary)]" size={28} />
              <h2 className="text-2xl font-bold text-[var(--color-text)]">{t('strengths')}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[var(--color-primary)] mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700 dark:text-gray-300">
                  {t('strengthsList.logical')}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[var(--color-primary)] mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700 dark:text-gray-300">
                  {t('strengthsList.learner')}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[var(--color-primary)] mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700 dark:text-gray-300">
                  {t('strengthsList.organized')}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[var(--color-primary)] mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700 dark:text-gray-300">
                  {t('strengthsList.communicator')}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[var(--color-primary)] mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700 dark:text-gray-300">
                  {t('strengthsList.independent')}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[var(--color-primary)] mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700 dark:text-gray-300">
                  {t('strengthsList.hungry')}
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[var(--color-primary)] mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700 dark:text-gray-300">
                  {t('strengthsList.explainer')}
                </span>
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <GlassCard className="p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-[var(--color-primary)]" size={28} />
              <h2 className="text-2xl font-bold text-[var(--color-text)]">{t('background')}</h2>
            </div>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[var(--color-primary)] mt-1 flex-shrink-0"
                  size={20}
                />
                <span>{t('education')}</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[var(--color-primary)] mt-1 flex-shrink-0"
                  size={20}
                />
                <span>{t('acm')}</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[var(--color-primary)] mt-1 flex-shrink-0"
                  size={20}
                />
                <span>{t('experience')}</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[var(--color-primary)] mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="font-semibold">{t('current')}</span>
              </p>
            </div>
          </GlassCard>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <GlassCard className="p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="text-[var(--color-primary)]" size={28} />
              <h2 className="text-2xl font-bold text-[var(--color-text)]">{t('personality')}</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('personalityDesc')}
            </p>
          </GlassCard>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <GlassCard className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-[var(--color-primary)]" size={28} />
              <h2 className="text-2xl font-bold text-[var(--color-text)]">{t('goals')}</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[var(--color-primary)] mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700 dark:text-gray-300">{t('goalsList.portfolio')}</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[var(--color-primary)] mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700 dark:text-gray-300">{t('goalsList.position')}</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[var(--color-primary)] mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700 dark:text-gray-300">{t('goalsList.skills')}</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[var(--color-primary)] mt-1 flex-shrink-0"
                  size={20}
                />
                <span className="text-gray-700 dark:text-gray-300">{t('goalsList.work')}</span>
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>
      </SectionContainer>
    </main>
  );
}
