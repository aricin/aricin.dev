import React from 'react';
import Image from 'next/image';

import Section from '@/components/design/Section';
import Container from '@/components/design/Container';

const HeroSection = () => {
  return (
    <Section className="py-40 bg-gradient-pattern">
      <Container className="flex flex-col md:flex-row items-center">
        <div className="max-w-3xl">
          <div className="inline-block mb-2 px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold">
            Custom Solutions
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Web Development
            <span className="block text-accent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Solutions
            </span>
          </h1>
          <p className="text-xl text-foreground mb-8">
            {/* Transform your digital presence with cutting-edge websites and applications 
            built using modern tech stacks and scalable architecture. */}
            {/* {/* Turning your technical challenges into custom web solutions that elevate your business.  */}
            Transforming your technical challenges into working solutions.
          </p>
          <div className="flex gap-4 items-center">
            <button className="bg-accent hover:bg-accent/80 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg">
              Schedule a free consultation
            </button>
          </div>
        </div>
        {/* <div className="w-full md:w-1/2 md:pl-8">
          <Image
            src="/images/computer.png"
            alt="Web Development"
            width={500}
            height={500}
            className="rounded-lg w-full h-auto"
          />
        </div> */}
      </Container>
    </Section>
  );
};

export default HeroSection;