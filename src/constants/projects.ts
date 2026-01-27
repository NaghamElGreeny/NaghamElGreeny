export type ProjectCategory = 'web' | 'dashboard' | 'saas' | 'pos';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: ProjectCategory;
  techStack: {
    frontend?: string[];
    backend?: string[];
    styling?: string[];
    tools?: string[];
    other?: string[];
  };
  features: string[];
  highlights: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  folderStructure?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'shebl-legal',
    title: 'Shebl Legal Website',
    description:
      'A modern legal consultancy website with bilingual support, built using the latest web technologies.',
    longDescription:
      'A comprehensive legal consultancy website featuring bilingual support (Arabic/English), modern design, and seamless user experience. Built with Next.js 15 and TypeScript, this project showcases advanced internationalization, responsive design, and clean architecture principles.',
    category: 'web',
    techStack: {
      frontend: ['Next.js 15', 'React 19', 'TypeScript'],
      styling: ['Tailwind CSS', 'SCSS'],
      tools: ['next-intl', 'Zustand', 'AOS', 'Axios', 'js-cookie', 'clsx'],
    },
    features: [
      'Bilingual support (Arabic/English) using next-intl',
      'Responsive design with modern UI/UX',
      'Dynamic translations and locale switching',
      'Clean component architecture',
      'State management with Zustand',
      'Smooth animations with AOS',
      'SEO optimized',
    ],
    highlights: [
      'Full internationalization support',
      'Modern glassmorphism design',
      'Optimized performance',
      'Accessible and user-friendly',
    ],
    liveUrl: 'https://shebl-legal.vercel.app/en',
    featured: true,
  },
  {
    id: 'shebl-dashboard',
    title: 'Shebl Dashboard',
    description:
      'First version of a comprehensive dashboard application with modern UI and efficient data management.',
    longDescription:
      'An initial dashboard application designed to provide efficient data visualization and management capabilities. This project demonstrates foundational dashboard design patterns, data handling, and user interface best practices.',
    category: 'dashboard',
    techStack: {
      frontend: ['React', 'TypeScript'],
      styling: ['Tailwind CSS'],
      tools: ['Zustand'],
    },
    features: [
      'Data visualization',
      'User-friendly interface',
      'Responsive layout',
      'State management',
    ],
    highlights: ['Clean dashboard design', 'Efficient data handling'],
    liveUrl: 'https://shebl-dashboard.vercel.app',
    featured: false,
  },
  {
    id: 'multi-restaurant-saas',
    title: 'Multi-Restaurant SaaS Platform',
    description:
      'A modern SaaS web platform that allows users to explore and interact with multiple restaurants or stores.',
    longDescription:
      'A comprehensive SaaS platform enabling users to browse multiple restaurants, place orders, make reservations, and manage their dining experience. Features include user authentication, Stripe payment integration, multi-language support, and dynamic CMS pages. Built with Next.js 15 and React 19 for optimal performance.',
    category: 'saas',
    techStack: {
      frontend: ['Next.js 15', 'React 19', 'TypeScript'],
      styling: ['Tailwind CSS'],
      tools: [
        'Zustand',
        'Formik',
        'Yup',
        'Stripe',
        'next-intl',
        'i18next',
        'Leaflet',
        'Google Maps',
      ],
    },
    features: [
      'Multi-store support – View and browse different restaurants',
      'Order management – Users can place and manage their orders',
      'Reservation system – Book tables with available time slots',
      'Authentication – Login, register, and secure access for users',
      'Internationalization – Supports multiple languages',
      'Stripe payment integration – Pay securely online',
      'Location features – Leaflet and Google Maps integration',
      'Dynamic CMS Pages – Easily extend static content',
    ],
    highlights: [
      'Full e-commerce functionality',
      'Secure payment processing',
      'Multi-tenant architecture',
      'Real-time order tracking',
    ],
    liveUrl: 'https://saas-ecommerce-mea-telecome.vercel.app',
    featured: true,
  },
  {
    id: 'enhanced-dashboard',
    title: 'Enhanced Dashboard',
    description:
      'An improved and enhanced version of the dashboard with advanced features and better user experience.',
    longDescription:
      'An enhanced dashboard application with improved functionality, better data visualization, and advanced features. This version includes enhanced UI components, better state management, and optimized performance.',
    category: 'dashboard',
    techStack: {
      frontend: ['React', 'TypeScript'],
      styling: ['Tailwind CSS'],
      tools: ['Zustand'],
    },
    features: [
      'Enhanced data visualization',
      'Improved user interface',
      'Advanced filtering and search',
      'Better performance optimization',
    ],
    highlights: ['Enhanced user experience', 'Improved performance'],
    liveUrl: 'https://enhanced-dashboard.vercel.app',
    featured: false,
  },
  {
    id: 'pos-system',
    title: 'Advanced POS System',
    description:
      'A comprehensive Point of Sale (POS) system frontend built with React and TypeScript, featuring multi-tenant architecture and inventory management.',
    longDescription:
      'The frontend part of a comprehensive Point of Sale (POS) system featuring multi-tenant architecture, inventory management, sales processing, and restaurant table management. Built with React 18, TypeScript, and Vite, this project demonstrates advanced state management, form handling, and complex UI interactions. The system supports role-based access control, real-time notifications, and multi-language support.',
    category: 'pos',
    techStack: {
      frontend: ['React 18', 'TypeScript', 'Vite'],
      styling: ['Tailwind CSS'],
      tools: [
        'Zustand',
        'React Router v6',
        'Axios',
        'React Hook Form',
        'Formik',
        'Yup',
        'i18next',
        'Radix UI',
        'Ant Design',
        'jsPDF',
        'XLSX',
        'date-fns',
        'Lucide React',
      ],
    },
    features: [
      'Multi-Tenant Architecture – Company and branch isolation',
      'Product & Inventory Management – Complete product catalog with stock tracking',
      'Sales & Invoicing – Invoice creation, payment processing, and receipt generation',
      'Customer Management – Customer profiles with loyalty programs',
      'Supplier Management – Supplier relationships and purchase order management',
      'Restaurant Table Management – Table reservations, orders, and table-based sales',
      'Reports & Exports – Comprehensive reporting with PDF and Excel export',
      'Multi-Language Support – Internationalization support',
      'Role-Based Access Control – Granular permissions and user role management',
      'Real-Time Notifications – Email notifications for low stock alerts',
    ],
    highlights: [
      'Complex state management',
      'Advanced form handling',
      'Comprehensive reporting system',
      'Production-ready architecture',
    ],
    folderStructure: `pos01sc2025.shiftcodes.net/
├── frontend/                # React frontend
    ├── src/
    │   ├── components/      # Reusable UI components
    │   ├── features/        # Feature-based modules
    │   ├── services/        # API service layer
    │   ├── store/           # State management (Zustand)
    │   ├── routes/          # Application routes
    │   └── utils/           # Utility functions
    └── dist/                # Production build output`,
    liveUrl: 'https://pos.shiftcodes.net/',
    featured: true,
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return PROJECTS.find(project => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return PROJECTS.filter(project => project.featured);
};

export const getProjectsByCategory = (category: ProjectCategory): Project[] => {
  return PROJECTS.filter(project => project.category === category);
};
