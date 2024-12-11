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
import SectionCTA from '@/components/ui/SectionCTA';
import SectionInternalLinks from '@/components/ui/SectionInternalLinks';

import { solutions } from '../solutions';
import { industries } from '../industries';
import { locations } from '../locations';

type SolutionPageProps = {
  params: {
    slug?: string[];
  };
}

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

  // Level 3: /solutions/{solution}/{state}
  for (const solution of solutions) {
    for (const state of locations) {
      params.push({ slug: [solution.slug, state.slug] });
    }
  }

  // Level 4: /solutions/{solution}/{state}/{city}
  for (const solution of solutions) {
    for (const state of locations) {
      for (const city of state.cities) {
        params.push({
          slug: [solution.slug, state.slug, city.slug],
        });
      }
    }
  }

  return params;
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug = [] } = params;

  const [solutionSlug, param2, param3, param4] = slug;

  const solution = solutions.find((s) => s.slug === solutionSlug);
  if (!solution) {
    return {};
  }

  let industryTitle = '';
  let stateTitle = '';
  let cityTitle = '';

  let industrySlug: string | undefined;
  let stateSlug: string | undefined;
  let citySlug: string | undefined;

  if (param2) {
    const industry = industries.find((i) => i.slug === param2);
    const state = locations.find((s) => s.slug === param2);

    if (industry) {
      industrySlug = param2;
      if (param3) {
        stateSlug = param3;
        if (param4) {
          citySlug = param4;
        }
      }
    } else if (state) {
      stateSlug = param2;
      if (param3) {
        citySlug = param3;
      }
    } else {
      return {};
    }
  }

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



export default function SolutionPage({ params }: SolutionPageProps) {
  const { slug = [] } = params;

  const [solutionSlug, param2, param3, param4] = slug;

  const solution = solutions.find((s) => s.slug === solutionSlug);
  if (!solution) {
    notFound();
  }

  let industryTitle = '';
  let stateTitle = '';
  let cityTitle = '';

  let industrySlug: string | undefined;
  let stateSlug: string | undefined;
  let citySlug: string | undefined;

  if (param2) {
    // Check if param2 is an industry or state
    const industry = industries.find((i) => i.slug === param2);
    const state = locations.find((s) => s.slug === param2);

    if (industry) {
      industrySlug = param2;
      if (param3) {
        stateSlug = param3;
        if (param4) {
          citySlug = param4;
        }
      }
    } else if (state) {
      stateSlug = param2;
      if (param3) {
        citySlug = param3;
      }
    } else {
      notFound();
    }
  }

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

      <SectionWhatIDo />
      <SectionInfiniteCarousel />
      <SectionFeatures />
      <SectionFAQ />
      <SectionCTA />

      <SectionInternalLinks
        currentSolutionSlug={solutionSlug}
        currentIndustrySlug={industrySlug}
        currentStateSlug={stateSlug}
        currentCitySlug={citySlug}
      />

    </div>
  );
}


