import React from 'react';
import { GlassCard } from './GlassCard';

interface SkillCardProps {
  name: string;
  icon?: string;
}

export const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <GlassCard
      variant="light"
      className="p-4 text-center hover:scale-105 transition-transform duration-300"
    >
      {icon && <div className="text-3xl mb-2">{icon}</div>}
      <p className="font-medium text-sm md:text-base text-[var(--color-text)]">{name}</p>
    </GlassCard>
  );
};
