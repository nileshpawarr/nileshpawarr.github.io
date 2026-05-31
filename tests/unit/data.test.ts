import { describe, it, expect } from 'vitest';
import { profile } from '~/data/profile';
import { skillGroups } from '~/data/skills';
import { projects, allProjectsUrl } from '~/data/projects';
import { experience, education, awards } from '~/data/experience';
import { seo } from '~/data/seo';

const URL_RE = /^https?:\/\/[^\s]+$/;
const ISO_LIKE_DATE_RE = /^[A-Z][a-z]{2} \d{4}$/; // e.g. "Jul 2025"

describe('profile', () => {
  it('has required identity fields', () => {
    expect(profile.name).toBeTruthy();
    expect(profile.headline).toBeTruthy();
    expect(profile.summary.length).toBeGreaterThan(100);
    expect(profile.email).toMatch(/@/);
  });

  it('every external link is a valid URL', () => {
    expect(profile.links.github).toMatch(URL_RE);
    expect(profile.links.linkedin).toMatch(URL_RE);
    expect(profile.links.medium).toMatch(URL_RE);
  });

  it('resume path is absolute', () => {
    expect(profile.resumePdf.startsWith('/')).toBe(true);
  });
});

describe('skills', () => {
  it('has exactly 5 groups', () => {
    expect(skillGroups).toHaveLength(5);
  });

  it('no group is empty', () => {
    for (const g of skillGroups) {
      expect(g.title).toBeTruthy();
      expect(g.items.length).toBeGreaterThan(0);
    }
  });
});

describe('projects', () => {
  it('has at least 2 featured projects', () => {
    expect(projects.length).toBeGreaterThanOrEqual(2);
  });

  it('every project has a valid repo URL', () => {
    for (const p of projects) {
      expect(p.repoUrl).toMatch(URL_RE);
      expect(p.name).toBeTruthy();
      expect(p.description).toBeTruthy();
      expect(p.stack.length).toBeGreaterThan(0);
    }
  });

  it('all-projects link is a valid URL', () => {
    expect(allProjectsUrl).toMatch(URL_RE);
  });
});

describe('experience', () => {
  it('has 7 entries from resume', () => {
    expect(experience).toHaveLength(7);
  });

  it('all start dates match "Mon YYYY" format', () => {
    for (const e of experience) {
      expect(e.start).toMatch(ISO_LIKE_DATE_RE);
      if (e.end !== null) {
        expect(e.end).toMatch(ISO_LIKE_DATE_RE);
      }
    }
  });

  it('exactly one entry is current (end === null)', () => {
    const current = experience.filter((e) => e.end === null);
    expect(current).toHaveLength(1);
    expect(current[0]?.company).toBe('Voyfai GmbH');
  });

  it('current role has at least 1 highlight', () => {
    const current = experience.find((e) => e.end === null)!;
    expect(current.highlights.length).toBeGreaterThan(0);
  });

  it('entries are in reverse-chronological order by start date', () => {
    const years = experience.map((e) => parseInt(e.start.split(' ')[1]!, 10));
    for (let i = 1; i < years.length; i++) {
      expect(years[i - 1]!).toBeGreaterThanOrEqual(years[i]!);
    }
  });
});

describe('education + awards', () => {
  it('has at least 1 education entry', () => {
    expect(education.length).toBeGreaterThanOrEqual(1);
  });

  it('has at least 1 award', () => {
    expect(awards.length).toBeGreaterThanOrEqual(1);
  });
});

describe('seo defaults', () => {
  it('siteUrl is absolute https', () => {
    expect(seo.siteUrl).toMatch(/^https:\/\//);
  });

  it('default description length 140-200 chars (Google snippet sweet-spot)', () => {
    expect(seo.defaultDescription.length).toBeGreaterThanOrEqual(140);
    expect(seo.defaultDescription.length).toBeLessThanOrEqual(200);
  });

  it('og image path is absolute', () => {
    expect(seo.ogImage.startsWith('/')).toBe(true);
  });
});
