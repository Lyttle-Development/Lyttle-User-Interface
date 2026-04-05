# Shared Repository Guide

Use this guide as the baseline context for any AI model working in this repository.

## Repository shape

This workspace is an npm workspaces monorepo:

- `packages/ui` — shared `@lyttle-development/ui` component library
- `apps/docs` — Next.js 16 docs/showcase app
- `apps/storybook` — Storybook 10 component explorer

The UI package is source-only. It does not build to `dist/`; the apps consume its source directly through workspace aliases.

## Setup

Install dependencies from the repository root:

```bash
npm install
```

Useful root commands:

```bash
npm run dev:docs
npm run dev:storybook
npm run build
npm run build:docs
npm run build:storybook
npm run lint
```

### Important command behavior

- `npm run build` runs the `packages/ui` build stub and then builds `apps/docs`.
- `npm run build:storybook` builds the Storybook static site.
- `npm run lint` uses the root flat ESLint config and currently only targets `apps/docs` files.
- No dedicated Jest/Vitest test suite is configured.

## Canonical configuration files

Always verify behavior against these files before making or documenting changes:

- `package.json`
- `apps/docs/package.json`
- `apps/storybook/package.json`
- `packages/ui/package.json`
- `tsconfig.base.json`
- `apps/docs/tsconfig.json`
- `apps/storybook/tsconfig.json`
- `packages/ui/tsconfig.json`
- `apps/docs/next.config.ts`
- `apps/storybook/.storybook/main.ts`
- `packages/ui/src/index.ts`

## Import and alias rules

### Consumer apps

- Prefer `@lyttle-development/ui` for shared UI imports.
- Use deep imports only when the barrel export is not enough.
- In `apps/docs`, use `@/*` only for docs-local source.
- Do not introduce `@lyttle/ui` in new code. It exists only as a Storybook compatibility alias.

### Shared package

- In `packages/ui`, follow the existing local import style and avoid unrelated import rewrites.
- Public exports should go through the component folder `index.ts` and then `packages/ui/src/index.ts`.

## Styling rules

- Shared Sass tokens and layers live in `packages/ui/src/styles/`.
- The shared style source currently used by the apps is `packages/ui/src/styles/globals.scss`.
- `apps/docs/src/app/globals.scss` and `apps/storybook/src/styles/globals.scss` both `@use` that file.
- If you change shared style entrypoints, update package exports and both consumer apps together.

## Component authoring conventions

Follow the patterns already present in `packages/ui`:

- Use `'use client';` for interactive client components.
- Use `class-variance-authority` when a component already uses variants.
- Use `cn()` from `packages/ui/src/lib/utils.ts` for class composition.
- Prefer `@base-ui/react` primitives for accessible interactions.
- Use colocated Sass modules for styling.
- Keep component folder names kebab-case and exported symbols PascalCase.
- Preserve the current formatting style and avoid broad refactors.

## Framework usage patterns

### Docs app (`apps/docs`)

- This is the public showcase app and uses Next.js app-router files under `src/app/`.
- Docs-local imports should use `@/*`.
- Shared UI imports should come from `@lyttle-development/ui`.

### Storybook app (`apps/storybook`)

- Stories live under `src/stories/`.
- Storybook config is in `.storybook/main.ts`.
- Storybook contains a legacy alias workaround for `@lyttle/ui`; that alias should not be used in new source files.

### Shared UI package (`packages/ui`)

- The package exports from `src/index.ts`.
- Components typically live in `src/components/<component-name>/`.
- Shared layout primitives live in `src/primitives/layout/`.
- Shared compositions live in `src/compositions/`.

## Validation rules

Use the smallest validation step that matches the scope of the change:

- Docs app changes: `npm run lint` and optionally `npm run build:docs`
- Shared UI changes: `npm run build` and optionally `npm run build:storybook`
- Storybook changes: `npm run build:storybook`
- Docs-only or instruction-only changes: verify the edited docs against the source-of-truth files above

## What not to assume

- Do not assume a `dist/` build exists for `packages/ui`.
- Do not assume a test runner exists.
- Do not assume Node or npm versions from memory; there is no `engines` field in the root package manifest.
- Do not assume style entrypoints from package exports alone without checking the consuming apps.
- Do not assume Storybook alias hacks are the preferred public import style.

