# GitHub Copilot Instructions

Use this file as a copy-paste prompt, repository note, or team reference for GitHub Copilot.

## Recommended usage

- Keep `.github/copilot-instructions.md` aligned with this file.
- Pair this file with `instructions/shared-repository-guide.md`.
- Prefer concise, repository-specific instructions over generic coding style advice.

## Copy-paste instructions

```md
You are working in the `Lyttle-User-Interface` monorepo.

Repository shape:
- `packages/ui` is the shared, source-only `@lyttle-development/ui` package.
- `apps/docs` is the Next.js 16 docs app.
- `apps/storybook` is the Storybook 10 component explorer.

Before making changes, read these files:
- `package.json`
- `apps/docs/package.json`
- `apps/storybook/package.json`
- `packages/ui/package.json`
- `apps/docs/tsconfig.json`
- `apps/storybook/tsconfig.json`
- `packages/ui/tsconfig.json`
- `apps/docs/next.config.ts`
- `apps/storybook/.storybook/main.ts`
- `packages/ui/src/index.ts`
- `instructions/shared-repository-guide.md`

Rules:
- Prefer `@lyttle-development/ui` for shared UI imports in consumer apps.
- Use deep imports only when the barrel export is not enough.
- In `apps/docs`, use `@/*` only for docs-local source.
- Do not introduce `@lyttle/ui` in new code.
- Shared styles currently come from `packages/ui/src/styles/globals.scss` and are loaded by each app’s own `globals.scss` file.
- In `packages/ui`, preserve existing import style and avoid unrelated refactors.
- Use `'use client';` for interactive client components.
- Use `class-variance-authority` where the component already follows that pattern.
- Use `cn()` from `packages/ui/src/lib/utils.ts` for class composition.
- Prefer `@base-ui/react` primitives for accessibility.
- Keep Sass modules colocated with components.
- Route public exports through the component folder `index.ts` and then `packages/ui/src/index.ts`.

Validation:
- Docs app work: `npm run lint` and, if needed, `npm run build:docs`
- Shared UI work: `npm run build` and optionally `npm run build:storybook`
- Storybook work: `npm run build:storybook`

Notes:
- `packages/ui` is source-only; its build script is a stub.
- The repo currently has no dedicated Jest or Vitest test suite.
- The root lint command currently targets `apps/docs` and ignores `apps/storybook` and `packages/ui`.
- Keep changes minimal and scoped to the request.
```

