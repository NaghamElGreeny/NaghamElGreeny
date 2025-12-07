'use client';

import React, { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from './ui/Button';
import { GlassCard } from './ui/GlassCard';
import { Send, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const t = useTranslations('Contact.form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <GlassCard className="p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-[var(--color-text)]">
            {t('name')}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-2xl bg-white/50 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-[var(--color-text)] transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2 text-[var(--color-text)]"
          >
            {t('email')}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-2xl bg-white/50 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-[var(--color-text)] transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium mb-2 text-[var(--color-text)]"
          >
            {t('subject')}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-2xl bg-white/50 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-[var(--color-text)] transition-all"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-2 text-[var(--color-text)]"
          >
            {t('message')}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 rounded-2xl bg-white/50 dark:bg-black/20 backdrop-blur-md border border-white/30 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] text-[var(--color-text)] transition-all resize-none"
          />
        </div>

        {submitStatus === 'success' && (
          <div className="p-4 rounded-2xl bg-green-500/20 border border-green-500/30 text-green-700 dark:text-green-400">
            {t('success')}
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 rounded-2xl bg-red-500/20 border border-red-500/30 text-red-700 dark:text-red-400">
            {t('error')}
          </div>
        )}

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin mr-2" size={20} />
              {t('sending')}
            </>
          ) : (
            <>
              <Send size={20} className="mr-2" />
              {t('send')}
            </>
          )}
        </Button>
      </form>
    </GlassCard>
  );
}
