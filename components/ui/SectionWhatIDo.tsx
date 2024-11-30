import React from 'react';
import { Code2, Settings, Briefcase, Search, Zap } from 'lucide-react';

import Section from '@/components/design/Section';
import Container from '@/components/design/Container';

const SectionWhatIDo = () => {
  const services = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description:
        "While I have some preferred tools, I always choose the best one for the job, even if it's not on my usual list. My goal is to find the right solution for each project.",
    },
    {
      icon: Settings,
      title: 'Custom Solutions',
      description:
        'Every business problem is unique. I design and build custom solutions that fit your specific needs, rather than implementing generic templates or one-size-fits-all approaches.',
    },
    {
      icon: Briefcase,
      title: 'Consulting',
      description:
        'I help businesses boost their online presence and reach more customers. By understanding your business goals, I can recommend and implement the right digital strategies to help you grow.',
    },
    {
      icon: Search,
      title: 'SEO',
      description:
        'I implement technical SEO best practices and structure your site to maximize visibility in search results. This includes everything from proper tagging to site architecture and content strategy.',
    },
    {
      icon: Zap,
      title: 'Web Vitals & Site Performance',
      description:
        "I optimize your site's speed and performance metrics, focusing on Core Web Vitals and user experience. Fast loading times, smooth interactions, and efficient code are my priorities.",
    },
  ];

  return (
    <Section className="py-16">
      <Container>
        <h2 className="text-2xl font-bold mb-8 text-accent">What I can do for you...</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`flex flex-col gap-3 p-6 bg-card rounded-lg border border-border transition-colors shadow-sm`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-6 h-6 flex-shrink-0 text-accent" />
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default SectionWhatIDo;
