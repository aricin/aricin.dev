import React from 'react';
import Link from 'next/link';

import Section from '@/components/design/Section';
import Container from '@/components/design/Container';

type SectionHeroProps = {
  title: string;
}

const HeroSection = ({ title }: SectionHeroProps) => {
  // const [displayText, setDisplayText] = useState('W');
  // const [isTypingComplete, setIsTypingComplete] = useState(false);
  // const fullText = 'Full-Stack Development';
  // const typingSpeed = 100;

  // useEffect(() => {
  //   let currentIndex = 0;
  //   const typingInterval = setInterval(() => {
  //     if (currentIndex <= fullText.length) {
  //       setDisplayText(fullText.slice(1, currentIndex));
  //       currentIndex++;
  //     } else {
  //       clearInterval(typingInterval);
  //       setIsTypingComplete(true);
  //     }
  //   }, typingSpeed);

  //   return () => clearInterval(typingInterval);
  // }, []);

  return (
    <Section className="py-40 bg-gradient-pattern border-b">
      <Container className="flex flex-col md:flex-row items-center">
        <div className="max-w-3xl">
          <div className="inline-block mb-3 px-4 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold">
            Custom Solutions
          </div>
          <h1 className="text-5xl font-bold text-accent mb-6">
            {title}
            {/* <span className="inline-flex">
              {displayText}
              <span className="w-1 h-12 bg-foreground ml-1 animate-blink"/>
            </span> */}
            {/* <span className="block text-accent bg-clip-text">
              Solutions
            </span> */}
          </h1>
          <p className="text-xl text-foreground mb-8">
            Transforming your technical challenges into working solutions.
          </p>
          <div className="flex sm:flex-row flex-col gap-4 items-left">
            <Link href="/contact">
              <button className="w-full md:w-auto bg-accent hover:bg-transparent hover:text-accent border border-accent text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg shadow-accent/20">
                Schedule a free consultation
              </button>
            </Link>
            <Link href="#services">
              <button className="w-full md:w-auto bg-transparent border border-accent text-accent font-semibold px-8 py-4 rounded-lg transition-colors duration-200 hover:bg-accent hover:text-white shadow-lg shadow-accent/20">
                  Learn More
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HeroSection;