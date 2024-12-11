'use client';

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

import Section from '@/components/design/Section';
import Container from '@/components/design/Container';

export type ServiceKey =
  | 'web-design'
  | 'nextjs'
  | 'full-stack'
  | 'ai-llm'
  | 'api'
  | 'web-vitals'
  | 'analytics'
  | 'headless-cms'
  | 'technical-seo'
  | 'seo'
  | 'pseo'
  | 'on-page-seo'
  | 'keywords';

interface Service {
  title: string;
  description: string;
}

type Services = {
  [K in ServiceKey]: Service;
};

const services: Services = {
  'web-design': {
    title: 'Web Design & Development',
    description:
      'Custom website development that balances beautiful design with powerful functionality. I create responsive, user-friendly websites that serve your business needs.',
  },
  nextjs: {
    title: 'Next.js Development',
    description:
      "Specialized in building fast, SEO-friendly applications with Next.js. From static sites to full-scale applications, I leverage Next.js's features for optimal performance.",
  },
  'full-stack': {
    title: 'Full-Stack Development',
    description:
      'End-to-end application development covering both frontend and backend. I handle everything from user interfaces to databases and APIs, ensuring all parts work together seamlessly.',
  },
  'ai-llm': {
    title: 'AI & LLM Integrations',
    description:
      'Integrate modern AI capabilities into your applications. I help businesses leverage Language Models and AI tools to automate processes and enhance user experiences.',
  },
  api: {
    title: 'API Development',
    description:
      'Design and build robust APIs that power your applications. Whether you need REST or GraphQL, I create scalable, well-documented APIs that meet your needs.',
  },
  'web-vitals': {
    title: 'Web Vitals Optimization',
    description:
      "Optimize your site's performance metrics and Core Web Vitals. I ensure fast loading times, smooth interactions, and excellent user experience across all devices.",
  },
  analytics: {
    title: 'Analytics & Tracking',
    description:
      'Implement comprehensive analytics solutions to track user behavior and business metrics. Make data-driven decisions with proper tracking and reporting.',
  },
  'headless-cms': {
    title: 'Headless CMS Development',
    description:
      'Build flexible content management systems that separate content from presentation. I integrate headless CMS solutions for better content management and delivery.',
  },
  'technical-seo': {
    title: 'Technical SEO',
    description:
      'Implement advanced SEO strategies focusing on technical optimization. From schema markup to site architecture, I ensure your site is optimized for search engine crawlers and indexing.',
  },
  seo: {
    title: 'SEO Strategy and Implementation',
    description:
      "Comprehensive SEO services to improve your website's visibility and ranking on search engines. I develop tailored strategies to drive organic traffic.",
  },
  pseo: {
    title: 'Programmatic SEO',
    description:
      'Develop large-scale SEO systems that dynamically generate content based on a set of keywords. I create scalable programmatic solutions to enhance your SEO efforts.',
  },
  'on-page-seo': {
    title: 'On-Page SEO',
    description:
      'Optimize individual web pages to rank higher and earn more relevant traffic. I optimize content, page speeds, site architecture, linking, etc.',
  },
  keywords: {
    title: 'Keyword Research and Analysis',
    description:
      'Identify the best keywords for your business to target. I provide in-depth keyword research and analysis to enhance your SEO efforts.',
  },
};

type SectionServicesProps = {
  initialService?: ServiceKey;
  category?: 'web-dev' | 'seo';
};

const servicesByCategory: Record<'web-dev' | 'seo', ServiceKey[]> = {
  'web-dev': [
    'web-design',
    'nextjs',
    'full-stack',
    'ai-llm',
    'api',
    'web-vitals',
    'analytics',
    'headless-cms',
    'technical-seo',
  ],
  seo: [
    'seo',
    'pseo',
    'technical-seo',
    'web-vitals',
    'on-page-seo',
    'headless-cms',
    'analytics',
    'keywords',
  ],
};

const SectionServices = ({ initialService, category = 'web-dev' }: SectionServicesProps) => {
  const [activeService, setActiveService] = useState<ServiceKey>(
    initialService || servicesByCategory[category][0]
  );

  return (
    <Section className="pt-32 scroll-mt-16" id="services">
      <Container>
        <h2 className="text-2xl font-bold mb-8 text-accent">Services I Offer</h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Service Navigation */}
          <div className="md:w-1/3">
            <nav className="space-y-2">
              {servicesByCategory[category].map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveService(key)}
                  className={`w-full text-left px-4 py-2 rounded-lg flex items-center justify-between border ${
                    activeService === key
                      ? 'bg-accent/10 text-accent border-accent/50'
                      : 'border-border hover:border-accent/30 hover:bg-accent/5'
                  }`}
                >
                  {services[key].title}
                  <ChevronRight
                    className={`w-4 h-4 ${
                      activeService === key ? 'text-accent' : 'text-muted-foreground'
                    }`}
                  />
                </button>
              ))}
            </nav>
          </div>

          {/* Service Description with Animation */}
          <div className="md:w-2/3">
            <div
              key={activeService}
              className="p-6 bg-card rounded-lg border border-border h-full flex flex-col animate-pulse-once"
            >
              <div className="flex-grow">
                <h3 className="text-xl font-semibold mb-4 text-accent">
                  {services[activeService].title}
                </h3>
                <p className="text-card-foreground">
                  {services[activeService].description}
                </p>
              </div>
              <Link href="/contact">
                <button className="w-full bg-accent hover:bg-transparent hover:text-accent border border-accent text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg shadow-accent/20 mt-8">
                  Schedule a free consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default SectionServices;
