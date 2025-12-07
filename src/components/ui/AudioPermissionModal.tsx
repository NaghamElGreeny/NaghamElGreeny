'use client';

import React, { useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioPermissionModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export const AudioPermissionModal: React.FC<AudioPermissionModalProps> = ({
  onConfirm,
  onCancel,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation immediately after mount
    // Use requestAnimationFrame for smoother animation
    requestAnimationFrame(() => {
      setIsVisible(true);
    });
  }, []);

  const handleConfirm = () => {
    setIsVisible(false);
    setTimeout(() => onConfirm(), 300); // Wait for animation to complete
  };

  const handleCancel = () => {
    setIsVisible(false);
    setTimeout(() => onCancel(), 300); // Wait for animation to complete
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center pointer-events-none">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 pointer-events-auto ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleCancel}
      />

      {/* Modal */}
      <div
        className={`relative w-full max-w-md mx-4 mb-8 bg-white dark:bg-gray-900 rounded-t-3xl rounded-b-3xl shadow-2xl transform transition-all duration-300 pointer-events-auto ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        {/* Handle bar (iOS style) */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full" />
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          <div className="text-center mb-6 pt-2">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">
              Background Music
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              This website has background music. Would you like to turn it on?
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleCancel}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 active:scale-95 transition-all font-medium text-[var(--color-text)]"
            >
              <VolumeX className="w-5 h-5" />
              <span>No Thanks</span>
            </button>
            <button
              onClick={handleConfirm}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-[var(--color-primary)] hover:opacity-90 active:scale-95 transition-all font-medium text-white shadow-lg"
            >
              <Volume2 className="w-5 h-5" />
              <span>Enable</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
