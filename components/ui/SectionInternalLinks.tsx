// components/ui/SectionInternalLinks.tsx

import Link from 'next/link';

import Section from '@/components/design/Section';
import Container from '@/components/design/Container';

import { solutions } from '@/app/solutions/solutions';
import { industries } from '@/app/solutions/industries';
import { locations } from '@/app/solutions/locations';

interface SectionInternalLinksProps {
  currentSolutionSlug: string;
  currentIndustrySlug?: string;
  currentStateSlug?: string;
  currentCitySlug?: string;
}

export default function SectionInternalLinks({
  currentSolutionSlug,
  currentIndustrySlug,
  currentStateSlug,
  currentCitySlug,
}: SectionInternalLinksProps) {
  const currentSolution = solutions.find((s) => s.slug === currentSolutionSlug);

  if (!currentSolution) {
    return null;
  }

  // Smaller component for link sections
  interface LinkItem {
    href: string;
    title: string;
  }

  interface LinkSectionProps {
    title: string;
    links: LinkItem[];
  }

  function LinkSection({ title, links }: LinkSectionProps) {
    return (
      <div className="mb-12">
        <h2 className="text-xl font-bold mb-6">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 gap-y-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm block font-normal p-2 bg-card hover:bg-card-hover rounded-md border"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <Section className="mt-24">
      <Container>
        {/* Explore All Services */}
        <LinkSection
          title="Explore All Services"
          links={solutions
            .filter((s) => s.slug !== currentSolutionSlug)
            .map((solution) => ({
              href: `/solutions/${solution.slug}`,
              title: solution.title,
            }))}
        />

        {/* Conditional Sections Based on Current Page Level */}
        {currentIndustrySlug ? (
          <>
            {/* Industries */}
            <LinkSection
              title="Industries"
              links={industries
                .filter((ind) => ind.slug !== currentIndustrySlug)
                .map((industry) => ({
                  href: `/solutions/${currentSolutionSlug}/${industry.slug}`,
                  title: industry.title,
                }))}
            />

            {/* Locations */}
            <LinkSection
              title="Locations"
              links={locations.map((state) => ({
                href: `/solutions/${currentSolutionSlug}/${currentIndustrySlug}/${state.slug}`,
                title: state.title,
              }))}
            />

            {/* Cities in {State} if currentStateSlug is present */}
            {currentStateSlug && (
              <LinkSection
                title={`Cities in ${
                  locations.find((s) => s.slug === currentStateSlug)?.title || ''
                }`}
                links={
                  locations
                    .find((s) => s.slug === currentStateSlug)
                    ?.cities.filter((city) => city.slug !== currentCitySlug)
                    .map((city) => ({
                      href: `/solutions/${currentSolutionSlug}/${currentIndustrySlug}/${currentStateSlug}/${city.slug}`,
                      title: city.title,
                    })) || []
                }
              />
            )}
          </>
        ) : currentStateSlug ? (
          <>
            {/* States */}
            <LinkSection
              title="Locations"
              links={locations
                .filter((state) => state.slug !== currentStateSlug)
                .map((state) => ({
                  href: `/solutions/${currentSolutionSlug}/${state.slug}`,
                  title: state.title,
                }))}
            />

            {/* Cities in {State} */}
            <LinkSection
              title={`Cities in ${
                locations.find((s) => s.slug === currentStateSlug)?.title || ''
              }`}
              links={
                locations
                  .find((s) => s.slug === currentStateSlug)
                  ?.cities.filter((city) => city.slug !== currentCitySlug)
                  .map((city) => ({
                    href: `/solutions/${currentSolutionSlug}/${currentStateSlug}/${city.slug}`,
                    title: city.title,
                  })) || []
              }
            />
          </>
        ) : (
          <>
            {/* {Solution} by Industry */}
            <LinkSection
              title={'Industries'}
              links={industries.map((industry) => ({
                href: `/solutions/${currentSolutionSlug}/${industry.slug}`,
                title: industry.title,
              }))}
            />

            {/* {Solution} by Location */}
            <LinkSection
              title={'Locations'}
              links={locations.map((state) => ({
                href: `/solutions/${currentSolutionSlug}/${state.slug}`,
                title: state.title,
              }))}
            />
          </>
        )}
      </Container>
    </Section>
  );
}
