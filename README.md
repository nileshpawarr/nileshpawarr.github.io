# nileshpawarr.github.io

Personal portfolio site. Astro 5 static output deployed to GitHub Pages.

**Live:** https://nileshpawarr.github.io

## Local development

```bash
pnpm install
pnpm run dev      # http://localhost:4321
```

## Scripts

| Command              | What it does                             |
| -------------------- | ---------------------------------------- |
| `pnpm run dev`       | Astro dev server with HMR                |
| `pnpm run build`     | Production build to `dist/`              |
| `pnpm run preview`   | Serve the production build locally       |
| `pnpm run typecheck` | Astro check + `tsc --noEmit`             |
| `pnpm run lint`      | ESLint, zero warnings                    |
| `pnpm run format`    | Prettier write                           |
| `pnpm run test`      | Vitest unit tests                        |
| `pnpm run test:e2e`  | Playwright smoke + a11y + keyboard tests |
| `pnpm run lhci`      | Lighthouse CI against `dist/`            |

## Updating content

All content lives in typed TS data files under `src/data/`:

- `profile.ts` — name, headline, status, links
- `experience.ts` — work history, education, awards
- `skills.ts` — grouped skill lists
- `projects.ts` — featured open-source projects
- `seo.ts` — meta defaults

Edit, commit, push. CI rebuilds and deploys in ~2–3 minutes.

## Resume

Drop the latest PDF at `public/Nilesh-Pawar-Resume.pdf`. The Contact section's Download CV button links here.

## Deploy

Every push to `main` triggers `.github/workflows/deploy.yml`:

1. typecheck → lint → unit tests
2. install Playwright + build → e2e tests against the built `dist/`
3. Lighthouse CI gates: Performance ≥ 95, Accessibility = 100, SEO = 100
4. upload artifact → deploy to Pages

## Repo setup notes

GitHub Pages is configured to use the workflow as its source:

1. Settings → Pages → "Build and deployment" → Source → **GitHub Actions**
2. Settings → Actions → General → Workflow permissions → "Read and write"
