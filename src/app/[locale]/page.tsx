import { Hero } from '@/components/sections/Hero';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';

export default function HomePage() {
  return (
    <main className="flex flex-col relative w-full min-h-screen">
      <Hero />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}
