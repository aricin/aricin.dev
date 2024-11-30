import React from 'react';
import { Shield, Gauge, Rocket, Terminal } from 'lucide-react';


import Section from '@/components/design/Section';
import Container from '@/components/design/Container';

const SectionFeatures = () => {
  return (
    <Section className="py-40">
      <Container>
        <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-accent">
          Performant, Secure, Scalable
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="p-6 bg-card rounded-lg border border-border transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold">No WordPress Hassles</h3>
            </div>
            <p className="text-card-foreground">
              I build your website from scratch, avoiding the limitations and security issues that 
              come with WordPress. This means a unique site that's secure and exactly how you want it.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-border transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Gauge className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold">Lightning-Fast Performance</h3>
            </div>
            <p className="text-card-foreground">
              Your visitors deserve a smooth experience. I optimize every aspect of your site to 
              load quickly, keeping users engaged and reducing bounce rates.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-border transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold">Build With Modern Technologies</h3>
            </div>
            <p className="text-card-foreground">
              I use the latest tools and frameworks to create your website, ensuring it's up-to-date, 
              efficient, and ready to handle future advancements.
            </p>
          </div>
          <div className="p-6 bg-card rounded-lg border border-border transition-colors">
            <div className="flex items-center gap-3 mb-4">
              <Rocket className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold">Scalable Solutions</h3>
            </div>
            <p className="text-card-foreground">
              Whether you're just starting out or growing rapidly, your website will grow with you. 
              I design sites that can handle increased traffic and new features without a hitch.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default SectionFeatures;