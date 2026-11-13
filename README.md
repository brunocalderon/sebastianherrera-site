# Phil Mataj profile (Linktree clone)

Static Astro + Tailwind rebuild of the [coachphilmataj](https://linktr.ee/coachphilmataj) **profile card** (no Linktree marketing footer).

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server at `http://localhost:4321` |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve `dist/` |
| `npm run test:visual` | Playwright screenshot regression (mobile 390px + desktop 1065px) |
| `npm run test:visual:update` | Refresh baselines after intentional UI changes |
| `npm run capture:linktree` | Save Linktree reference crops to `tests/visual/reference/linktree/` |

## Project layout

- `src/data/links.json` — **edit this** to add, remove, or reorder link pills (`title`, `href`, `thumbnail`)
- `src/data/profile.ts` — name, bio, hero, socials (imports links from `links.json`)
- `src/components/ProfileCard.astro` — hero, header chrome, link stack
- `src/components/LinkPill.astro` — 64px white link rows
- `src/styles/profile.css` — hero fade, card and pill shadows
- `public/images/` — hero and link thumbnails (mirrored from Linktree CDN)

## Visual comparison

1. Run `npm run capture:linktree` to refresh upstream reference PNGs.
2. Run `npm run dev` and open `http://localhost:4321`.
3. Compare with [the live profile](https://linktr.ee/coachphilmataj) in the browser at the same viewport widths (390 and 1065).
4. `npm run test:visual` guards regressions against committed snapshots in `tests/visual/reference/profile.spec.ts/`.

Design tokens match Linktree theme data: page `#89959f`, text `#0e0d0b`, IBM Plex Sans heading, Inter body, 580px card / 524px links.
