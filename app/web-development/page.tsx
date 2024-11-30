'use client';

import React, { useState } from 'react';
import { Code2, Settings, Briefcase, Search, Zap, ChevronRight, Gauge, Terminal, Rocket, Shield, Minus, Plus } from 'lucide-react';

import Navbar from '@/components/ui/Navbar';
import SectionHero from '@/components/ui/SectionHero';
import SectionHi from '@/components/ui/SectionHi';
import SectionFAQ from '@/components/ui/SectionFAQ';
import SectionWhatIDo from '@/components/ui/SectionWhatIDo';
import SectionServices from '@/components/ui/SectionServices'
import SectionFeatures from '@/components/ui/SectionFeatures';
import SectionInfiniteCarousel from '@/components/ui/SectionInfiniteCarousel';


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

const LandingPage = () => {
  const [activeService, setActiveService] = useState<ServiceKey>('web-design');

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

//   return (
//     <div className="min-h-screen text-gray-100">
//       {/* Hero Section */}
//       <section className="relative py-20 border-b">
//         <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,0.2)_50%,transparent_75%)] opacity-20"></div>
//         <div className="max-w-6xl mx-auto px-4 relative">
//           <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
//             Web Development Solutions
//           </h1>
//           <p className="text-xl text-gray-400">Custom solutions for modern businesses</p>
//         </div>
//       </section>

//       {/* Hi Section */}
//       <SectionHi />
//       {/* <section className="py-16 border-b border-gray-800">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-6 text-blue-400">Hi, I'm Aricin</h2>
//           <div className="max-w-3xl">
//             <p className="text-lg text-gray-300 mb-6">
//               I'm a web developer with a background in professional software engineering. 
//               For the past 3+ years, I've worked with startups and small businesses, 
//               while also pursuing my own web ventures. I help businesses build their online 
//               presence, and transform their technical challenges into working solutions.
//             </p>
//           </div>
//         </div>
//       </section> */}

//       {/* What I Do Section */}
//       <section className="py-16 bg-gray-800/50 border-b border-gray-800">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-2xl font-bold mb-8 text-blue-400">What I Do</h2>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             <div className="flex flex-col gap-3 p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors">
//               <div className="flex items-center gap-3">
//                 <Code2 className="w-6 h-6 flex-shrink-0 text-blue-400" />
//                 <h3 className="text-lg font-semibold">Full-Stack Development</h3>
//               </div>
//               <p className="text-gray-400">
//                 While I have some preferred tools, I always choose the best one for the job, 
//                 even if it's not on my usual list. My goal is to find the right solution 
//                 for each project.
//               </p>
//             </div>

//             <div className="flex flex-col gap-3 p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors">
//               <div className="flex items-center gap-3">
//                 <Settings className="w-6 h-6 flex-shrink-0 text-blue-400" />
//                 <h3 className="text-lg font-semibold">Custom Solutions</h3>
//               </div>
//               <p className="text-gray-400">
//                 Every business problem is unique. I design and build custom solutions 
//                 that fit your specific needs, rather than implementing generic templates 
//                 or one-size-fits-all approaches.
//               </p>
//             </div>

//             <div className="flex flex-col gap-3 p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors">
//               <div className="flex items-center gap-3">
//                 <Briefcase className="w-6 h-6 flex-shrink-0 text-blue-400" />
//                 <h3 className="text-lg font-semibold">Consulting</h3>
//               </div>
//               <p className="text-gray-400">
                // I help businesses boost their online presence and reach more customers. 
                // By understanding your business goals, I can recommend and implement the 
                // right digital strategies to help you grow.
//               </p>
//             </div>

//             <div className="flex flex-col gap-3 p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors">
//               <div className="flex items-center gap-3">
//                 <Search className="w-6 h-6 flex-shrink-0 text-blue-400" />
//                 <h3 className="text-lg font-semibold">SEO</h3>
//               </div>
//               <p className="text-gray-400">
                // I implement technical SEO best practices and structure your site to 
                // maximize visibility in search results. This includes everything from 
                // proper tagging to site architecture and content strategy.
//               </p>
//             </div>

//             <div className="flex flex-col gap-3 p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors">
//               <div className="flex items-center gap-3">
//                 <Zap className="w-6 h-6 flex-shrink-0 text-blue-400" />
//                 <h3 className="text-lg font-semibold">Web Vitals & Site Performance</h3>
//               </div>
//               <p className="text-gray-400">
                // I optimize your site's speed and performance metrics, focusing on Core Web 
                // Vitals and user experience. Fast loading times, smooth interactions, and 
                // efficient code are my priorities.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-16">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-2xl font-bold mb-8 text-blue-400">Services I Offer</h2>
          
//           <div className="flex flex-col md:flex-row gap-8">
//             {/* Service Navigation */}
//             <div className="md:w-1/3">
//               <nav className="space-y-2">
//                 {Object.entries(services).map(([key, service]) => (
//                   <button
//                     key={key}
//                     onClick={() => setActiveService(key as ServiceKey)}
//                     className={`w-full text-left px-4 py-2 rounded-lg flex items-center justify-between border ${
//                       activeService === key 
//                         ? 'bg-blue-500/10 text-blue-400 border-blue-500/50' 
//                         : 'border-gray-800 hover:border-blue-500/30 hover:bg-gray-800/50'
//                     }`}
//                   >
//                     {service.title}
//                     <ChevronRight className={`w-4 h-4 ${
//                       activeService === key ? 'text-blue-400' : 'text-gray-600'
//                     }`} />
//                   </button>
//                 ))}
//               </nav>
//             </div>

//             {/* Service Description */}
//             <div className="md:w-2/3">
//               <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700">
//                 <h3 className="text-xl font-semibold mb-4 text-blue-400">
//                   {services[activeService].title}
//                 </h3>
//                 <p className="text-gray-300">
//                   {services[activeService].description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-16 bg-gray-800/50 border-y border-gray-800">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
//             Performant, Secure, Scalable
//           </h2>
          
//           <div className="grid md:grid-cols-2 gap-8 mt-12">
//             <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors">
//               <div className="flex items-center gap-3 mb-4">
//                 <Shield className="w-6 h-6 text-blue-400" />
//                 <h3 className="text-xl font-bold">No WordPress Hassles</h3>
//               </div>
//               <p className="text-gray-300">
//                 I build your website from scratch, avoiding the limitations and security issues that 
//                 come with WordPress. This means a unique site that's secure and exactly how you want it.
//               </p>
//             </div>

//             <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors">
//               <div className="flex items-center gap-3 mb-4">
//                 <Gauge className="w-6 h-6 text-blue-400" />
//                 <h3 className="text-xl font-bold">Lightning-Fast Performance</h3>
//               </div>
//               <p className="text-gray-300">
                // Your visitors deserve a smooth experience. I optimize every aspect of your site to 
                // load quickly, keeping users engaged and reducing bounce rates.
//               </p>
//             </div>

//             <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors">
//               <div className="flex items-center gap-3 mb-4">
//                 <Terminal className="w-6 h-6 text-blue-400" />
//                 <h3 className="text-xl font-bold">Built with Modern Technologies</h3>
//               </div>
//               <p className="text-gray-300">
                // I use the latest tools and frameworks to create your website, ensuring it's up-to-date, 
                // efficient, and ready to handle future advancements.
//               </p>
//             </div>

//             <div className="p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors">
//               <div className="flex items-center gap-3 mb-4">
//                 <Rocket className="w-6 h-6 text-blue-400" />
//                 <h3 className="text-xl font-bold">Scalable Solutions</h3>
//               </div>
//               <p className="text-gray-300">
                // Whether you're just starting out or growing rapidly, your website will grow with you. 
                // I design sites that can handle increased traffic and new features without a hitch.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <SectionFAQ />

//       {/* Call to Action */}
//       <section className="py-16 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-t border-gray-800">
//         <div className="max-w-6xl mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold mb-4 text-blue-400">Ready to Start Your Project?</h2>
//           <p className="text-lg text-gray-300 mb-8">
//             Let's discuss how I can help bring your ideas to life.
//           </p>
//           <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors border border-blue-400/50">
//             Get in Touch
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

  return (
    <div className="min-h-screen text-foreground">
      {/* <div className="gradient-pattern">
        <Navbar />
        <SectionHero />
      </div> */}
      <SectionHero />

      <SectionHi />

      <SectionServices initialService={'full-stack'}/>

      {/* 
        Remove this entirely or at least transfer some of the content over to SectionServices.
        Might be better off just going on the homepage.
        Maybe I can emphasize a few things in another section below the SectionServices.
      */}
      <SectionWhatIDo /> 

      <SectionInfiniteCarousel />

      <SectionFeatures />

      <SectionFAQ />



      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-accent/20 to-accent/20 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-accent">Ready to Start Your Project?</h2>
          <p className="text-lg text-card-foreground mb-8">
            Let's discuss how I can help bring your ideas to life.
          </p>
          <button className="bg-accent text-accent-foreground px-8 py-3 rounded-lg hover:bg-accent/90 transition-colors border border-accent/50">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;