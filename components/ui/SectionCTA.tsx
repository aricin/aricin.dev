import React from 'react';
import Link from 'next/link';

import Section from '@/components/design/Section';
import Container from '@/components/design/Container';

interface SectionHiProps {
  imgSrc?: string;
}

const SectionHi = ({ imgSrc }: SectionHiProps) => {
  return (
    <Section className="py-16 mt-24 border-y">
      <Container className="text-center mx-auto">
      {/* <section className="mt-24 py-16 bg-gradient-to-r from-accent/20 to-accent/20 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 text-center"> */}
          <h2 className="text-3xl font-bold mb-4 text-accent">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-card-foreground mb-8">
            Let's discuss how I can help bring your ideas to life.
          </p>
          <Link href="/contact">
            <button className="w-full md:w-auto bg-accent hover:bg-transparent hover:text-accent border border-accent text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg shadow-accent/20">
              Schedule a free consultation
            </button>
          </Link>
        {/* </div>
      </section> */}
      </Container>
    </Section>
  );
};

export default SectionHi;