'use client';

import React, { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { ExternalLink, Maximize2, Minimize2, RefreshCw } from 'lucide-react';
import { GlassCard } from '@/components/ui/GlassCard';

interface ProjectIframeProps {
  liveUrl: string;
  title: string;
  className?: string;
}

export const ProjectIframe = ({ liveUrl, title, className = '' }: ProjectIframeProps) => {
  const t = useTranslations('Projects');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      setIsFullscreen(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsFullscreen(false);
      document.body.style.overflow = '';
    }
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const refreshIframe = () => {
    setIsLoading(true);
    setHasError(false);
    const iframe = document.getElementById(`project-iframe-${title}`) as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  return (
    <>
      {isFullscreen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggleFullscreen}
          aria-label={t('iframe.exitFullscreen')}
        />
      )}
      <div
        className={`${className} ${isFullscreen ? 'fixed inset-0 z-50 p-4 flex items-center justify-center' : ''}`}
      >
        <GlassCard
          className={`overflow-hidden ${isFullscreen ? 'h-full w-full flex flex-col max-w-7xl' : ''}`}
        >
          <div className="p-4 border-b border-white/10 dark:border-white/5 flex items-center justify-between bg-black/5 dark:bg-white/5">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold text-[var(--color-text)]">{title}</h3>
              {isLoading && (
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>{t('iframe.loading')}</span>
                </div>
              )}
              {hasError && <span className="text-sm text-red-500">{t('iframe.error')}</span>}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={refreshIframe}
                className="p-2 rounded-lg hover:bg-white/10 dark:hover:bg-black/20 transition-colors"
                title={t('iframe.refresh')}
                aria-label={t('iframe.refresh')}
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={toggleFullscreen}
                className="p-2 rounded-lg hover:bg-white/10 dark:hover:bg-black/20 transition-colors"
                title={isFullscreen ? t('iframe.exitFullscreen') : t('iframe.fullscreen')}
                aria-label={isFullscreen ? t('iframe.exitFullscreen') : t('iframe.fullscreen')}
              >
                {isFullscreen ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </button>
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-white/10 dark:hover:bg-black/20 transition-colors"
                title={t('iframe.openInNewTab')}
                aria-label={t('iframe.openInNewTab')}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div
            className={`relative bg-gray-100 dark:bg-gray-900 ${
              isFullscreen ? 'flex-1 min-h-0' : ''
            }`}
            style={isFullscreen ? {} : { paddingBottom: '75%' }}
          >
            <div className={isFullscreen ? 'absolute inset-0' : 'absolute inset-0'}>
              {hasError ? (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                  <p className="text-red-500 mb-4">{t('iframe.errorMessage')}</p>
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)] hover:underline"
                  >
                    {t('iframe.openInNewTab')}
                  </a>
                </div>
              ) : (
                <>
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900 z-10">
                      <div className="text-center">
                        <RefreshCw className="w-8 h-8 animate-spin text-[var(--color-primary)] mx-auto mb-2" />
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {t('iframe.loading')}
                        </p>
                      </div>
                    </div>
                  )}
                  <iframe
                    id={`project-iframe-${title}`}
                    src={liveUrl}
                    className="w-full h-full border-0"
                    title={title}
                    onLoad={handleLoad}
                    onError={handleError}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
                  />
                </>
              )}
            </div>
          </div>
        </GlassCard>
      </div>
    </>
  );
};
