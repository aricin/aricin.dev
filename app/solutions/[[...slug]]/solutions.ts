import { ServiceKey } from '@/components/ui/SectionServices';

interface solution {
  slug: string;
  title: string;
  category: 'web-dev' | 'seo';
  serviceKey: ServiceKey;
}

export const solutions: solution[] = [
  {
    slug: 'web-development',
    title: 'Web Development Solutions',
    category: 'web-dev',
    serviceKey: 'web-design',
  },
  {
    slug: 'web-design',
    title: 'Web Design Solutions',
    category: 'web-dev',
    serviceKey: 'web-design',
  },
  {
    slug: 'nextjs-development',
    title: 'Next.js Development',
    category: 'web-dev',
    serviceKey: 'nextjs',
  },
  {
    slug: 'full-stack',
    title: 'Full-Stack Development',
    category: 'web-dev',
    serviceKey: 'full-stack',
  },
  {
    slug: 'ai-llm',
    title: 'AI & LLM Integrations',
    category: 'web-dev',
    serviceKey: 'ai-llm',
  },
  {
    slug: 'api-development',
    title: 'API Development',
    category: 'web-dev',
    serviceKey: 'api',
  },
  {
    slug: 'web-vitals',
    title: 'Web Vital Optimizations',
    category: 'web-dev',
    serviceKey: 'web-vitals',
  },
  {
    slug: 'analytics-tracking',
    title: 'Analytics & Tracking Solutions',
    category: 'web-dev',
    serviceKey: 'analytics',
  },
  {
    slug: 'headless-cms',
    title: 'Headless CMS Development',
    category: 'web-dev',
    serviceKey: 'headless-cms',
  },
  {
    slug: 'seo',
    title: 'SEO Solutions',
    category: 'seo',
    serviceKey: 'seo',
  },
  {
    slug: 'programmatic-seo',
    title: 'Programmatic SEO',
    category: 'seo',
    serviceKey: 'pseo',
  },
  {
    slug: 'technical-seo',
    title: 'Technical SEO',
    category: 'seo',
    serviceKey: 'technical-seo',
  },
  {
    slug: 'on-page-seo',
    title: 'On Page SEO',
    category: 'seo',
    serviceKey: 'on-page-seo',
  },
  {
    slug: 'keyword-analysis',
    title: 'Keyword & Competitor Research',
    category: 'seo',
    serviceKey: 'keywords',
  },
];
