import { profile } from '~/data/profile';
import { seo } from '~/data/seo';

export function buildPersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: 'Senior Frontend-focused Full Stack Engineer',
    url: seo.siteUrl,
    image: `${seo.siteUrl}${seo.ogImage}`,
    email: `mailto:${profile.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Berlin',
      addressCountry: 'DE',
    },
    sameAs: [profile.links.github, profile.links.linkedin, profile.links.medium],
    worksFor: { '@type': 'Organization', name: 'Voyfai GmbH' },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'University of Mumbai' },
      { '@type': 'CollegeOrUniversity', name: 'University of Pune' },
    ],
  } as const;
}

export function buildWebsiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: profile.name,
    url: seo.siteUrl,
    description: seo.defaultDescription,
  } as const;
}
