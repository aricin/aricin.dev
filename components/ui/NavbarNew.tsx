'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Code, X, Menu } from 'lucide-react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import ThemeToggle from '@/components/ui/ThemeToggle';

const webDevServices = [
  {
    title: 'Web Design',
    href: '/services/web-design',
    description: 'Creative and responsive web design solutions tailored to your brand.',
  },
  {
    title: 'Next.js Development',
    href: '/services/nextjs-development',
    description: 'Modern web applications built with Next.js for optimal performance.',
  },
  {
    title: 'Full-Stack Development',
    href: '/services/full-stack',
    description: 'End-to-end web development solutions for complex applications.',
  },
  {
    title: 'API Development',
    href: '/services/api-development',
    description: 'Custom API design and development for seamless integration.',
  },
  {
    title: 'Web Vitals Optimization',
    href: '/services/web-vitals',
    description: 'Performance optimization focusing on Core Web Vitals metrics.',
  },
  {
    title: 'Analytics & Tracking',
    href: '/services/analytics',
    description: 'Implementation of analytics solutions for data-driven insights.',
  },
];

const seoServices = [
  {
    title: 'Technical SEO',
    href: '/seo/technical',
    description: 'Technical optimization for search engine visibility and performance.',
  },
  {
    title: 'Programmatic SEO',
    href: '/seo/programmatic',
    description: 'Automated SEO solutions for large-scale content optimization.',
  },
  {
    title: 'On-Page SEO',
    href: '/seo/on-page',
    description: 'Content and metadata optimization for better search rankings.',
  },
];

interface ListItemProps extends React.ComponentPropsWithoutRef<'a'> {
  title: string;
  children: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, ...props }, ref) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);
ListItem.displayName = 'ListItem';

export function CustomNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div
        className={`w-full bg-transparent md:bg-navbar/95 md:backdrop-blur-lg px-4 py-4 border-b transition-colors sticky top-0 z-40 ${
          menuOpen ? 'shadow-none' : 'shadow-none'
        }`}
      >
        <div className="relative flex items-center justify-between w-full">
          {/* Left side: Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Code className="w-6 h-6 text-accent" />
              <span className="text-xl font-bold">aricin.dev</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="absolute right-0 md:hidden flex items-center z-50">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="text-foreground hover:text-foreground/70"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Navigation Menu */}
          <NavigationMenu.Root className="hidden md:flex relative z-10 w-screen justify-center">
            <NavigationMenu.List className="center m-0 flex list-none rounded-md bg-white/80 p-1 shadow-[0_2px_10px] shadow-blackA4">
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7">
                  Learn{" "}
                  <CaretDownIcon
                    className="relative top-px text-violet10 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                    aria-hidden
                  />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
                  <ul className="one m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                    <li className="row-span-3 grid">
                      <NavigationMenu.Link asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-purple9 to-indigo9 p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet7"
                          href="/"
                        >
                          <svg
                            aria-hidden
                            width="38"
                            height="38"
                            viewBox="0 0 25 25"
                            fill="white"
                          >
                            <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                            <path d="M12 0H4V8H12V0Z"></path>
                            <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                          </svg>
                          <div className="mb-[7px] mt-4 text-[18px] font-medium leading-[1.2] text-white">
                            Radix Primitives
                          </div>
                          <p className="text-[14px] leading-[1.3] text-mauve4">
                            Unstyled, accessible components for React.
                          </p>
                        </a>
                      </NavigationMenu.Link>
                    </li>

                    <ListItem href="https://stitches.dev/" title="Stitches">
                      CSS-in-JS with best-in-class developer experience.
                    </ListItem>
                    <ListItem href="/colors" title="Colors">
                      Beautiful, thought-out palettes with auto dark mode.
                    </ListItem>
                    <ListItem href="https://icons.radix-ui.com/" title="Icons">
                      A crisp set of 15x15 icons, balanced and consistent.
                    </ListItem>
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7">
                  Overview{" "}
                  <CaretDownIcon
                    className="relative top-px text-violet10 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                    aria-hidden
                  />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="absolute left-0 top-0 w-full sm:w-auto">
                  <ul className="m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
                    <ListItem
                      title="Introduction"
                      href="/primitives/docs/overview/introduction"
                    >
                      Build high-quality, accessible design systems and web apps.
                    </ListItem>
                    <ListItem
                      title="Getting started"
                      href="/primitives/docs/overview/getting-started"
                    >
                      A quick tutorial to get you up and running with Radix
                      Primitives.
                    </ListItem>
                    <ListItem title="Styling" href="/primitives/docs/guides/styling">
                      Unstyled and compatible with any styling solution.
                    </ListItem>
                    <ListItem
                      title="Animation"
                      href="/primitives/docs/guides/animation"
                    >
                      Use CSS keyframes or any animation library of your choice.
                    </ListItem>
                    <ListItem
                      title="Accessibility"
                      href="/primitives/docs/overview/accessibility"
                    >
                      Tested in a range of browsers and assistive technologies.
                    </ListItem>
                    <ListItem
                      title="Releases"
                      href="/primitives/docs/overview/releases"
                    >
                      Radix Primitives releases and their changelogs.
                    </ListItem>
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Link
                  className="block select-none rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
                  href="https://github.com/radix-ui"
                >
                  Github
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              <NavigationMenu.Indicator className="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
                <div className="relative top-[70%] size-2.5 rotate-45 rounded-tl-sm" />
              </NavigationMenu.Indicator>
            </NavigationMenu.List>

            <div className="absolute left-0 top-full flex w-full justify-center z-50">
              <NavigationMenu.Viewport className="relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] border overflow-hidden rounded-md bg-white/10 backdrop-blur- transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
            </div>
          </NavigationMenu.Root>

          {/* Right side: ThemeToggle (hidden on mobile) */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-x-0 top-0 z-40 h-screen transform bg-navbar/95 pt-32 backdrop-blur-lg transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link
                href="/services/web-design"
                className="text-lg text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                Web Development
              </Link>
            </li>
            <li>
              <Link
                href="/seo/technical"
                className="text-lg text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                SEO
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-lg text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/client-portal"
                className="text-lg text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                Client Portal
              </Link>
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CustomNav;
