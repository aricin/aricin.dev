import React from 'react';
import { Code2, Rocket, Terminal } from 'lucide-react';

import Section from '@/components/design/Section';
import Container from '@/components/design/Container';

interface SectionHiProps {
  imgSrc?: string;
}

const SectionHi = ({ imgSrc }: SectionHiProps) => {
  return (
    <Section className="py-16">
      <Container>
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Text Content */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6 text-accent flex items-center gap-3">
              Hi, I'm Aricin
              <span className="animate-wave inline-block origin-bottom-right">👋</span>
            </h2>
            
            <div className="max-w-3xl space-y-6">
              <p className="text-lg text-foreground">
                I'm a web developer with a background in professional software engineering. 
                For the past 3+ years, I've worked with startups and small businesses, 
                while also pursuing my own web ventures. I help businesses build their online 
                presence, and transform their technical challenges into working solutions.
              </p>

              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-accent" />
                  <span className="text-foreground font-medium">Full-Stack Software Developer</span>
                </div>
                <div className="flex items-center gap-3">
                  <Rocket className="w-5 h-5 text-accent" />
                  <span className="text-foreground font-medium">Tech Entrepreneur</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code2 className="w-5 h-5 text-accent" />
                  <span className="text-foreground font-medium">Solutions Architect</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-72 lg:w-80">
            <div className="aspect-square rounded-2xl overflow-hidden backdrop-blur-sm shadow-sm">
              <img 
                src={imgSrc ?? '/images/aricin.jpg'} 
                alt="Aricin" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default SectionHi;