'use client';

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { FaReact, FaAws, FaPython } from 'react-icons/fa'
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiPostgresql, 
  SiJavascript, 
  SiGraphql, 
  SiDjango, 
  SiServerless, 
  SiMongodb, 
  SiOpenai, 
  SiDocker 
} from 'react-icons/si'

import Section from '@/components/design/Section';

const icons = [
  { icon: <SiNextdotjs />, key: 'nextjs' },
  { icon: <FaReact />, key: 'react' },
  { icon: <FaAws />, key: 'aws' },
  { icon: <FaPython />, key: 'python' },
  { icon: <SiTailwindcss />, key: 'tailwindcss' },
  { icon: <SiPostgresql />, key: 'postgresql' },
  { icon: <SiJavascript />, key: 'javascript' },
  { icon: <SiGraphql />, key: 'graphql' },
  { icon: <SiDjango />, key: 'django' },
  { icon: <SiServerless />, key: 'serverless' },
  { icon: <SiMongodb />, key: 'mongodb' },
  { icon: <SiOpenai />, key: 'openai' },
  { icon: <SiDocker />, key: 'docker' }
]

const TechStackCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      containScroll: false,
      watchDrag: false,
    },
    [
      AutoScroll({ 
        playOnInit: true,
        speed: 0.5, // Adjust this value to control scroll speed (lower = slower)
        stopOnInteraction: false // Prevent stopping on user interaction
      })
    ]
  )

  // Triple the icons array to ensure smooth infinite scrolling
  const tripledIcons = [...icons, ...icons, ...icons]

  return (
    <Section isFullWidth className="pt-32">
      <div className="max-w-5xl px-4 md:px-16 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-accent">Technologies I Use</h2>
        <p className="text-lg mb-8 text-foreground ">While I have some preferred tools, I always choose what&apos;s best for the project, even if it&apos;s not on my usual list. Every problem is different and my goal is to find the optimal solution.</p>
      </div>
      <div className="w-full overflow-hidden bg-card py-8" ref={emblaRef}>
        <div className="flex">
          {tripledIcons.map((item, index) => (
            <div
              key={`${item.key}-${index}`}
              className="flex-none mx-6 md:mx-12"
            >
              <div className="text-6xl text-foreground transition-colors hover:text-accent">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default TechStackCarousel