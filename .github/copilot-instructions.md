# Copilot Instructions for Lyttle User Interface

Use these instructions when generating or editing code in this repository. The detailed AI docs live in `instructions/`, especially `instructions/shared-repository-guide.md` and `instructions/github-copilot.md`.

## Repository summary

This repository is a TypeScript/React monorepo with npm workspaces:

- `packages/ui` — the shared, source-only `@lyttle-development/ui` component library
- `apps/docs` — the Next.js 16 showcase/docs app
- `apps/storybook` — the Storybook 10 component explorer

The shared UI package is the design-system source of truth.

## Source-of-truth files

Before making changes, rely on these files instead of assumptions:

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

## Setup and commands

Install dependencies first when needed:

```bash
npm install
```

Useful workspace commands:

```bash
npm run dev:docs
npm run dev:storybook
npm run build
npm run build:docs
npm run build:storybook
npm run lint
```

Notes:

- `packages/ui` is source-only and its `build` script is a stub message.
- `npm run build` builds the docs app after running the UI package stub.
- `npm run lint` uses the root flat config and currently targets `apps/docs`; `apps/storybook` and `packages/ui` are globally ignored there.
- No dedicated Jest/Vitest test suite is configured in the repo.

## Import and alias rules

- Always prefer `@lyttle-development/ui` for shared UI imports in consumer apps.
- Use deep imports only when the barrel export is not enough.
- In `apps/docs`, use `@/*` only for docs-local source.
- In `packages/ui`, use local package paths consistently with existing code; avoid large import-style churn.
- Do not introduce `@lyttle/ui` in new code. It appears only as a Storybook compatibility alias.

## Styling rules

- Shared style tokens and Sass layers live in `packages/ui/src/styles/`.
- The active shared style entry used by the apps is `packages/ui/src/styles/globals.scss`.
- `apps/docs/src/app/globals.scss` and `apps/storybook/src/styles/globals.scss` both `@use` that shared file.
- If you change shared style entrypoints, update package exports and both consumer apps together.

## Component authoring rules

Follow the existing patterns in `packages/ui`:

- Use `'use client';` for interactive client components.
- Use `class-variance-authority` for variants when the component already follows that pattern.
- Use `cn()` from `packages/ui/src/lib/utils.ts` for class composition.
- Prefer `@base-ui/react` primitives for accessible interactions.
- Keep Sass modules colocated with each component.
- Keep file names kebab-case and exported symbols PascalCase.
- Route public exports through the component folder `index.ts` and then `packages/ui/src/index.ts`.
- Preserve existing formatting and avoid unrelated refactors.

## Working rules for Copilot

- Read the relevant files before editing.
- Keep changes minimal and scoped to the request.
- Do not invent setup details that are not present in the workspace.
- When documenting commands, prefer root workspace commands unless a workspace-specific command is necessary.
- When changing `packages/ui`, think about both consumer apps because they import the source directly through workspace aliases.

## Validation expectations

Choose validation based on the files you changed:

- Docs app work: `npm run lint` and, if needed, `npm run build:docs`
- Shared UI work: `npm run build` and optionally `npm run build:storybook`
- Storybook work: `npm run build:storybook`

If a change affects docs or instructions only, verify the file contents against the source-of-truth config and keep the guidance consistent with the current workspace.


