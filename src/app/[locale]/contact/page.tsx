'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import ContactForm from '@/components/ContactForm';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { GlassCard } from '@/components/ui/GlassCard';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Mail, Linkedin, Github, Clock } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('Contact');

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
              <h2 className="text-2xl font-bold mb-4 text-[var(--color-text)]">
                {t('description')}
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {t('description')}
              </p>

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-[var(--color-primary)]" size={24} />
                  <h3 className="text-lg font-semibold text-[var(--color-text)]">
                    {t('responseTime')}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{t('responseTimeDesc')}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4 text-[var(--color-text)]">
                  {t('directLinks')}
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:naghamelgreeny@gmail.com"
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white/50 dark:bg-black/20 hover:bg-white/70 dark:hover:bg-black/30 transition-colors"
                  >
                    <Mail className="text-[var(--color-primary)]" size={20} />
                    <span className="text-[var(--color-text)]">{t('email')}</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/naghamelgreeny"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white/50 dark:bg-black/20 hover:bg-white/70 dark:hover:bg-black/30 transition-colors"
                  >
                    <Linkedin className="text-[var(--color-primary)]" size={20} />
                    <span className="text-[var(--color-text)]">{t('linkedin')}</span>
                  </a>
                  <a
                    href="https://github.com/NaghamElGreeny"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white/50 dark:bg-black/20 hover:bg-white/70 dark:hover:bg-black/30 transition-colors"
                  >
                    <Github className="text-[var(--color-primary)]" size={20} />
                    <span className="text-[var(--color-text)]">{t('github')}</span>
                  </a>
                </div>
              </div>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <ContactForm />
          </AnimatedSection>
        </div>
      </SectionContainer>
    </main>
  );
}
