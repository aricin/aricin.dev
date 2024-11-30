'use client';

// CustomNav.jsx
import React, { useState } from "react";
import Link from "next/link";
import { Code, X, Menu } from "lucide-react";
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
    title: "Web Design",
    href: "/services/web-design",
    description: "Creative and responsive web design solutions tailored to your brand.",
  },
  {
    title: "Next.js Development",
    href: "/services/nextjs-development",
    description: "Modern web applications built with Next.js for optimal performance.",
  },
  {
    title: "Full-Stack Development",
    href: "/services/full-stack",
    description: "End-to-end web development solutions for complex applications.",
  },
  {
    title: "API Development",
    href: "/services/api-development",
    description: "Custom API design and development for seamless integration.",
  },
  {
    title: "Web Vitals Optimization",
    href: "/services/web-vitals",
    description: "Performance optimization focusing on Core Web Vitals metrics.",
  },
  {
    title: "Analytics & Tracking",
    href: "/services/analytics",
    description: "Implementation of analytics solutions for data-driven insights.",
  },
];

const seoServices = [
  {
    title: "Technical SEO",
    href: "/seo/technical",
    description: "Technical optimization for search engine visibility and performance.",
  },
  {
    title: "Programmatic SEO",
    href: "/seo/programmatic",
    description: "Automated SEO solutions for large-scale content optimization.",
  },
  {
    title: "On-Page SEO",
    href: "/seo/on-page",
    description: "Content and metadata optimization for better search rankings.",
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
        className={`w-full bg-transparent md:bg-navbar/95 md:backdrop-blur-lg px-4 py-4 border-b transition transition-colors sticky top-0 z-50 ${
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
          <NavigationMenuList className="hidden md:flex mx-auto">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Web Development</NavigationMenuTrigger>
              <NavigationMenuContent className="relative mx-auto">
                <ul className="grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {webDevServices.map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                      className="hover:bg-card-hovered"
                    >
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>SEO</NavigationMenuTrigger>
              <NavigationMenuContent className="left-1/2 -translate-x-1/2">
                <ul className="grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {seoServices.map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                      className="hover:bg-card-hovered"
                    >
                      {service.description}
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

            <NavigationMenuItem>
              <Link href="/client-portal" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Client Portal
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>

          {/* Right side: ThemeToggle (hidden on mobile) */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
        </div>
      </NavigationMenu>

      {/* Mobile Menu Test */}
      {/* <div
        className={`fixed inset-0 transform transition-transform duration-300 ease-in-out z-40 ${
          menuOpen ? 'translate-y-0 mt-16' : '-translate-y-full mt-0'
        }`}

      >
        <div className="flex-col items-center py-4 space-y-4">
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
      </div> */}

      {/* Mobile Menu Overlay */}
      {/* <div
        className={`fixed inset-0 bg-black/40 z-30 transition-opacity duration-300 ease-in-out ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      /> */}

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed h-screen inset-x-0 top-0 z-40 md:hidden border-none bg-navbar/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out pt-32 ${
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