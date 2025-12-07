export interface Skill {
  name: string;
  icon?: string;
  category: 'frontend' | 'state' | 'styling' | 'tools' | 'other';
}

export const SKILLS: Skill[] = [
  { name: 'React.js', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'styling' },
  { name: 'Sass', category: 'styling' },
  { name: 'Zustand', category: 'state' },
  { name: 'Redux', category: 'state' },
  { name: 'Formik', category: 'tools' },
  { name: 'Yup', category: 'tools' },
  { name: 'i18next', category: 'tools' },
  { name: 'API Integration', category: 'tools' },
  { name: 'Authentication', category: 'tools' },
  { name: 'Theme Management', category: 'tools' },
];
