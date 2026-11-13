## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Git commits

When creating a commit (only when the user asks), always use `/git-commit` and follow the Conventional Commits workflow in that skill: inspect the diff, stage intentionally, and write a `type[(scope)]: description` message (no hook bypass, no config changes).

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Learned User Preferences

- When implementing an attached plan, do not edit the plan file itself.
- Maintain link pills by editing `src/data/links.json` rather than Astro components.
- When creating commits, use `/git-commit` to enforce Conventional Commits.

## Learned Workspace Facts

- Astro 7 + Tailwind 4 static site: a Linktree-style profile card for Sebastian Herrera (no Linktree marketing footer).
- Profile copy and assets: `src/data/profile.ts` (name, bio lines, hero, Instagram); bio lines render lightweight markdown via `src/utils/markdown.ts`.
- Link pills: JSON array in `src/data/links.json`, loaded through `src/data/links.ts`; file order is display order (`title`, `href`, `thumbnail`).
- Visual regression uses Playwright (`npm run test:visual`, `npm run test:visual:update`) against mobile and desktop viewports.
