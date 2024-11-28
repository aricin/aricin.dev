import React, { useState } from 'react';
import { ChevronRight, Code2, Settings, Briefcase, Search, Zap } from 'lucide-react';

import Section from '@/components/design/Section';
import Container from '@/components/design/Container';

type ServiceKey = 
  | 'web-design'
  | 'nextjs'
  | 'full-stack'
  | 'ai-llm'
  | 'api'
  | 'web-vitals'
  | 'analytics'
  | 'headless-cms'
  | 'technical-seo';

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
    description: 'Custom website development that balances beautiful design with powerful functionality. I create responsive, user-friendly websites that serve your business needs.'
  },
  'nextjs': {
    title: 'Next.js Development',
    description: `Specialized in building fast, SEO-friendly applications with Next.js. From static sites to full-scale applications, I leverage Next.js's features for optimal performance.`
  },
  'full-stack': {
    title: 'Full-Stack Development',
    description: 'End-to-end application development covering both frontend and backend. I handle everything from user interfaces to databases and APIs, ensuring all parts work together seamlessly.'
  },
  'ai-llm': {
    title: 'AI & LLM Integrations',
    description: 'Integrate modern AI capabilities into your applications. I help businesses leverage Language Models and AI tools to automate processes and enhance user experiences.'
  },
  'api': {
    title: 'API Development',
    description: 'Design and build robust APIs that power your applications. Whether you need REST or GraphQL, I create scalable, well-documented APIs that meet your needs.'
  },
  'web-vitals': {
    title: 'Web Vitals Optimization',
    description: `Optimize your site's performance metrics and Core Web Vitals. I ensure fast loading times, smooth interactions, and excellent user experience across all devices.`
  },
  'analytics': {
    title: 'Analytics & Tracking',
    description: 'Implement comprehensive analytics solutions to track user behavior and business metrics. Make data-driven decisions with proper tracking and reporting.'
  },
  'headless-cms': {
    title: 'Headless CMS Development',
    description: 'Build flexible content management systems that separate content from presentation. I integrate headless CMS solutions for better content management and delivery.'
  },
  'technical-seo': {
    title: 'Technical SEO',
    description: 'Implement advanced SEO strategies focusing on technical optimization. From schema markup to site architecture, I ensure your site is optimized for search engine crawlers and indexing.'
  }
};

const SectionServices = () => {
  const [activeService, setActiveService] = useState<ServiceKey>('web-design');

  return (
    <Section className="py-16">
      <Container>
        <section className="">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-accent">Services I Offer</h2>
            
            <div className="flex flex-col md:flex-row gap-8">
              {/* Service Navigation */}
              <div className="md:w-1/3">
                <nav className="space-y-2">
                  {Object.entries(services).map(([key, service]) => (
                    <button
                      key={key}
                      onClick={() => setActiveService(key as ServiceKey)}
                      className={`w-full text-left px-4 py-2 rounded-lg flex items-center justify-between border ${
                        activeService === key 
                          ? 'bg-accent/10 text-accent border-accent/50' 
                          : 'border-border hover:border-accent/30 hover:bg-card'
                      }`}
                    >
                      {service.title}
                      <ChevronRight className={`w-4 h-4 ${
                        activeService === key ? 'text-accent' : 'text-muted-foreground'
                      }`} />
                    </button>
                  ))}
                </nav>
              </div>

              {/* Service Description */}
              <div className="md:w-2/3">
                <div className="p-6 bg-card rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-4 text-accent">
                    {services[activeService].title}
                  </h3>
                  <p className="text-card-foreground">
                    {services[activeService].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </Section>
  );
};

export default SectionServices;