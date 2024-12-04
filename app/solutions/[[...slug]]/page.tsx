import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';

import SectionHero from '@/components/ui/SectionHero';
import SectionHi from '@/components/ui/SectionHi';
import SectionFAQ from '@/components/ui/SectionFAQ';
import SectionWhatIDo from '@/components/ui/SectionWhatIDo';
import SectionServices from '@/components/ui/SectionServices';
import SectionFeatures from '@/components/ui/SectionFeatures';
import SectionInfiniteCarousel from '@/components/ui/SectionInfiniteCarousel';

import { solutions } from './solutions';
import { industries } from './industries';
import { locations } from './locations';

export async function generateStaticParams() {
  const params = [];

  // Level 1: /solutions/{solution}
  for (const solution of solutions) {
    params.push({ slug: [solution.slug] });
  }

  // Level 2: /solutions/{solution}/{industry}
  for (const solution of solutions) {
    for (const industry of industries) {
      params.push({ slug: [solution.slug, industry.slug] });
    }
  }

  // Level 3: /solutions/{solution}/{industry}/{state}
  for (const solution of solutions) {
    for (const industry of industries) {
      for (const state of locations) {
        params.push({ slug: [solution.slug, industry.slug, state.slug] });
      }
    }
  }

  // Level 4: /solutions/{solution}/{industry}/{state}/{city}
  for (const solution of solutions) {
    for (const industry of industries) {
      for (const state of locations) {
        for (const city of state.cities) {
          params.push({
            slug: [solution.slug, industry.slug, state.slug, city.slug],
          });
        }
      }
    }
  }

  return params;
}


export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug = [] } = params;

  const [solutionSlug, industrySlug, stateSlug, citySlug] = slug;

  const solution = solutions.find((s) => s.slug === solutionSlug);
  if (!solution) {
    return {};
  }

  let industryTitle = '';
  let stateTitle = '';
  let cityTitle = '';

  if (industrySlug) {
    const industry = industries.find((i) => i.slug === industrySlug);
    if (!industry) {
      return {};
    }
    industryTitle = ` for ${industry.title}`;
  }

  if (stateSlug) {
    const state = locations.find((s) => s.slug === stateSlug);
    if (!state) {
      return {};
    }
    stateTitle = ` in ${state.title}`;

    if (citySlug) {
      const city = state.cities.find((c) => c.slug === citySlug);
      if (!city) {
        return {};
      }
      cityTitle = `, ${city.title}`;
    }
  }

  const pageTitle = `${solution.title}${industryTitle}${stateTitle}${cityTitle}`;
  const pageDescription = `Discover our ${solution.title.toLowerCase()}${industryTitle}${stateTitle}${cityTitle}.`;

  return {
    title: pageTitle,
    description: pageDescription,
  };
}


interface PageProps {
  params: {
    slug?: string[];
  };
}

export default function SolutionPage({ params }: PageProps) {
  const { slug = [] } = params;

  const [solutionSlug, industrySlug, stateSlug, citySlug] = slug;

  const solution = solutions.find((s) => s.slug === solutionSlug);
  if (!solution) {
    notFound();
  }

  let industryTitle = '';
  let stateTitle = '';
  let cityTitle = '';

  if (industrySlug) {
    const industry = industries.find((i) => i.slug === industrySlug);
    if (!industry) {
      notFound();
    }
    industryTitle = ` for ${industry.title}`;
  }

  if (stateSlug) {
    const state = locations.find((s) => s.slug === stateSlug);
    if (!state) {
      notFound();
    }
    stateTitle = ` in ${state.title}`;

    if (citySlug) {
      const city = state.cities.find((c) => c.slug === citySlug);
      if (!city) {
        notFound();
      }
      cityTitle = `, ${city.title}`;
    }
  }

  const pageTitle = `${solution.title}${industryTitle}${stateTitle}${cityTitle}`;

  return (
    <div className="min-h-screen text-foreground">
      <SectionHero title={pageTitle} />

      <SectionHi />

      <SectionServices
        initialService={solution.serviceKey}
        category={solution.category}
      />

      {/* Other sections */}
      <SectionWhatIDo />
      <SectionInfiniteCarousel />
      <SectionFeatures />
      <SectionFAQ />

      {/* Call to Action */}
      <section className="mt-24 py-16 bg-gradient-to-r from-accent/20 to-accent/20 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-accent">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-card-foreground mb-8">
            Let&apos;s discuss how I can help bring your ideas to life.
          </p>
          <Link href="/contact">
            <button className="w-full md:w-auto bg-accent hover:bg-transparent hover:text-accent border border-accent text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg shadow-accent/20">
              Schedule a free consultation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

