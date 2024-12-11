'use client';

import React, { useState } from "react";
import Link from "next/link";
import { Code, X, Menu, Search, Mail, FileText } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ui/ThemeToggle";

const webDevServices = [
  {
    title: "Web Development Solutions",
    href: "/solutions/web-development",
    description: "Comprehensive web development services, from design to deployment, tailored to your business needs.",
  },
  {
    title: "Web Design",
    href: "/solutions/web-design",
    description: "Creative and responsive web design solutions tailored to your brand.",
  },
  {
    title: "Next.js Development",
    href: "/solutions/nextjs-development",
    description: "Modern web applications built with Next.js for optimal performance.",
  },
  {
    title: "Full-Stack Development",
    href: "/solutions/full-stack",
    description: "End-to-end web development solutions for complex applications.",
  },
  {
    title: "API Development",
    href: "/solutions/api-development",
    description: "Custom API design and development for seamless integration.",
  },
  {
    title: "Web Vitals Optimization",
    href: "/solutions/web-vitals",
    description: "Performance optimization focusing on Core Web Vitals metrics.",
  },
  {
    title: "Analytics & Tracking",
    href: "/solutions/analytics-tracking",
    description: "Implementation of analytics solutions for data-driven insights.",
  },
];

const seoServices = [
  {
    title: "SEO Solutions",
    href: "/solutions/seo",
    description:
      "Comprehensive SEO strategies designed to improve your website's visibility and ranking across search engines.",
  },
  {
    title: "Technical SEO",
    href: "/solutions/technical-seo",
    description:
      "Technical optimization for search engine visibility and performance, ensuring your site meets all necessary standards.",
  },
  {
    title: "Programmatic SEO",
    href: "/solutions/programmatic-seo",
    description:
      "Automated SEO solutions for large-scale content optimization, leveraging data-driven techniques to boost rankings.",
  },
  {
    title: "On-Page SEO",
    href: "/solutions/on-page-seo",
    description:
      "Content and metadata optimization for better search rankings, enhancing relevance and user engagement.",
  },
  {
    title: "Headless CMS Development",
    href: "/solutions/headless-cms",
    description:
      "Flexible and scalable headless CMS solutions that allow seamless content management across multiple platforms.",
  },
  {
    title: "Web Vitals Optimization",
    href: "/solutions/web-vitals",
    description:
      "Performance optimization focusing on Core Web Vitals metrics to enhance user experience and search rankings.",
  },
  {
    title: "Keyword Analysis",
    href: "/solutions/keyword-analysis",
    description:
      "In-depth keyword research and analysis to identify high-impact opportunities for your SEO strategy.",
  },
];

const about = [
  // {
  //   title: "Contact",
  //   href: "/contact",
  //   description: "Let's discuss how I can help bring your ideas to life.",
  // },
  {
    title: "Resume",
    href: "/resume",
    description: "",
  },
  {
    title: "Client Portal",
    href: "/",
    description: "",
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function CustomNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <NavigationMenu
        className={`min-h-[60px] w-full bg-transparent md:bg-navbar/95 md:backdrop-blur-lg px-4 py-4 border-b transition transition-colors sticky top-0 z-50 ${
          menuOpen ? 'shadow-none' : 'shadow-none'
        }`}
      >
        <div className="relative flex items-center justify-center w-full">
          {/* Left side: Logo */}
          <div className="absolute left-0 flex items-center my-4">
            <Link href="/" className="flex items-center space-x-2">
              <Code className="w-6 h-6 text-accent" />
              <span className="text-xl font-bold">aricin.dev</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="absolute right-0 lg:hidden flex items-center z-50">
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
          <NavigationMenuList className="hidden lg:flex">
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <NavigationMenuLink asChild>
                  <Link href="/solutions/web-development">
                    Web Development
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="relative mx-auto">
                <ul className="grid gap-3 p-4 lg:w-[800px] grid-cols-3 grid-rows-3">
                  <li className="row-span-3 col-span-1 grid">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/solutions/web-development"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-card p-6 no-underline outline-none transition-colors duration-200 hover:bg-card-hover"
                      >
                        <Code className="w-10 h-10 text-accent" />
                        <div className="mb-2 mt-4 text-lg font-medium leading-tight text-foreground">
                          {webDevServices[0].title}
                        </div>
                        <p className="text-sm leading-snug text-muted-foreground">
                          {webDevServices[0].description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>

                  {webDevServices.slice(1).map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                      className="hover:bg-card-hover"
                    >
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <NavigationMenuLink asChild>
                  <Link href="/solutions/seo">
                    SEO
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuTrigger>
              <NavigationMenuContent className="relative mx-auto">
                <ul className="grid gap-3 p-4 lg:w-[800px] grid-cols-3 grid-rows-3">
                  <li className="row-span-3 col-span-1 grid">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/solutions/seo"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-card p-6 no-underline outline-none transition-colors duration-200 hover:bg-card-hover"
                      >
                        <Search className="w-10 h-10 text-accent" />
                        <div className="mb-2 mt-4 text-lg font-medium leading-tight text-foreground">
                          {seoServices[0].title}
                        </div>
                        <p className="text-sm leading-snug text-muted-foreground">
                          {seoServices[0].description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>

                  {seoServices.slice(1).map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                      className="hover:bg-card-hover"
                    >
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          {/* 
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent className="left-1/2 -translate-x-1/2">
                <ul className="grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {about.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      className="hover:bg-card-hover"
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem> */}

            {/* About Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent className="relative mx-auto">
                <ul className="grid gap-3 p-4 lg:w-[260px] grid-cols-1 grid-rows-2">
                  {/* Featured "About Me" link with gradient and hover effect */}
                  {/* <li className="row-span-3 col-span-1 grid">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/about"
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-200 to-blue-400 p-6 no-underline outline-none transition-transform duration-200 focus:shadow-[0_0_0_2px] focus:shadow-violet-700 hover:scale-[1.02] hover:shadow-md"
                      >
                        <TrendingUp className="w-10 h-10 text-white" />
                        <div className="mb-2 mt-4 text-lg font-medium leading-tight text-white">
                          {about[0].title}
                        </div>
                        <p className="text-sm leading-snug text-white/90">
                          {about[0].description}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li> */}

                  {/* Other About Links in a 2x3 layout to the right */}
                  {about.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                      className="hover:bg-card-hover"
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* <NavigationMenuItem>
              <Link href="/client-portal" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Client Portal
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}
          </NavigationMenuList>

          {/* Right side: ThemeToggle (hidden on mobile) */}
          <div className="hidden lg:block absolute right-0">
            <ThemeToggle />
          </div>
        </div>
      </NavigationMenu>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed h-screen inset-x-0 top-0 z-40 lg:hidden border-none bg-navbar/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out pt-32 ${
          menuOpen ? 'translate-y-0' : '-translate-y-[calc(100%-60px)]'
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link
                href="/services/web-design"
                className="text-foreground text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Web Development
              </Link>
            </li>
            <li>
              <Link
                href="/seo/technical"
                className="text-foreground text-lg"
                onClick={() => setMenuOpen(false)}
              >
                SEO
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-foreground text-lg"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/client-portal"
                className="text-foreground text-lg"
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