'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from '../ui/Button';
import { GlassCard } from '../ui/GlassCard';
import { AnimatedSection } from '../ui/AnimatedSection';
import { AudioPermissionModal } from '../ui/AudioPermissionModal';
import { ArrowDown, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const AUDIO_PREFERENCE_KEY = 'audio-preference';

export const Hero = () => {
  const t = useTranslations('Hero');
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);

  useEffect(() => {
    // Check if user has already set a preference
    if (typeof window !== 'undefined') {
      const savedPreference = localStorage.getItem(AUDIO_PREFERENCE_KEY);

      // Show modal if no preference exists (first visit)
      if (!savedPreference || savedPreference === '') {
        // Show modal immediately on first visit
        setShowModal(true);
      } else {
        // User has a saved preference
        const enabled = savedPreference === 'enabled';
        setAudioEnabled(enabled);
        setIsMuted(false);
      }
    }

    // Auto-play video (video is always muted, so it can autoplay)
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          await videoRef.current.play();
        }
      } catch (error) {
        console.error('Video play error:', error);
      }
    };
    playVideo();
  }, []);

  // Auto-play audio when enabled and playing
  useEffect(() => {
    if (audioEnabled && isPlaying && audioRef.current && !isMuted) {
      const playAudio = async () => {
        try {
          if (audioRef.current && audioRef.current.paused) {
            audioRef.current.muted = false;
            await audioRef.current.play();
          }
        } catch (error) {
          // Silently handle autoplay restrictions
          // Audio will play on next user interaction
        }
      };
      playAudio();
    }
  }, [audioEnabled, isPlaying, isMuted]);

  // Sync audio muted state with audio element
  useEffect(() => {
    if (audioRef.current && audioEnabled) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted, audioEnabled]);

  const togglePlayPause = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        try {
          await videoRef.current.play();
          if (audioEnabled && audioRef.current && !isMuted) {
            await audioRef.current.play();
          }
          setIsPlaying(true);
        } catch (error) {
          console.error('Play error:', error);
        }
      }
    }
  };

  const toggleMute = async () => {
    if (!audioEnabled) {
      // If audio is not enabled, show modal or enable it
      setShowModal(true);
      return;
    }

    if (audioRef.current) {
      const newMutedState = !isMuted;
      setIsMuted(newMutedState);
      audioRef.current.muted = newMutedState;

      // If unmuting and audio is not playing, start playing it
      if (!newMutedState && isPlaying) {
        try {
          if (audioRef.current.paused) {
            await audioRef.current.play();
          }
        } catch (error) {
          console.error('Audio play error:', error);
        }
      }
    }
  };

  const handleAudioConfirm = async () => {
    setShowModal(false);
    setAudioEnabled(true);
    setIsMuted(false); // Ensure audio starts unmuted
    if (typeof window !== 'undefined') {
      localStorage.setItem(AUDIO_PREFERENCE_KEY, 'enabled');
    }
    // Play audio after user interaction
    if (audioRef.current && isPlaying) {
      try {
        audioRef.current.muted = false;
        await audioRef.current.play();
      } catch (error) {
        console.error('Audio play error:', error);
      }
    }
  };

  const handleAudioCancel = () => {
    setShowModal(false);
    setAudioEnabled(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem(AUDIO_PREFERENCE_KEY, 'disabled');
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-24 pb-12 overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        loop
        autoPlay
        muted
        playsInline
      >
        <source src="/assets/videos/aurora.mp4" type="video/mp4" />
      </video>

      {/* Background Audio */}
      <audio ref={audioRef} loop>
        <source src="/assets/audios/Space.m4a" type="audio/mp4" />
      </audio>

      {/* Audio Permission Modal */}
      {showModal && (
        <AudioPermissionModal onConfirm={handleAudioConfirm} onCancel={handleAudioCancel} />
      )}

      {/* Control Buttons - Bottom Left */}
      <div className="absolute bottom-6 left-6 z-50 flex gap-3">
        <button
          onClick={togglePlayPause}
          className="glass-card p-3 rounded-full hover:opacity-80 transition-opacity"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-[var(--color-text)]" />
          ) : (
            <Play className="w-5 h-5 text-[var(--color-text)]" />
          )}
        </button>
        <button
          onClick={toggleMute}
          className="glass-card p-3 rounded-full hover:opacity-80 transition-opacity"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted || !audioEnabled ? (
            <VolumeX className="w-5 h-5 text-[var(--color-text)]" />
          ) : (
            <Volume2 className="w-5 h-5 text-[var(--color-text)]" />
          )}
        </button>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <AnimatedSection direction="right" className="flex-1 text-center lg:text-left">
            <GlassCard className="p-8 md:p-12">
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[var(--color-text)]">
                  Nagham ElGreeny
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-gradient">
                  {t('title')}
                </h2>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
                  {t('subtitle')}
                </p>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8">
                  {t('tagline')}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button href="/projects" variant="primary">
                  {t('ctaProjects')}
                </Button>
                <Button href="/contact" variant="secondary">
                  {t('ctaContact')}
                </Button>
              </div>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection direction="left" delay={0.2} className="flex-1 flex justify-center">
            <div className="relative">
              <GlassCard className="p-4">
                <Image
                  src="/assets/images/myMemoji.webp"
                  alt="Nagham ElGreeny"
                  width={400}
                  height={400}
                  className="rounded-3xl w-full max-w-md"
                  priority
                />
              </GlassCard>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.4} className="flex justify-center mt-12">
          <div className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400">
            <p className="text-sm">{t('scrollDown')}</p>
            <ArrowDown className="animate-bounce" size={24} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
