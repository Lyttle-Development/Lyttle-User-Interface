# Lyttle User Interface

Lyttle User Interface is a TypeScript/React monorepo that contains the shared `@lyttle-development/ui` component library, a Next.js docs app, and a Storybook showcase.

## Monorepo overview

```text
Lyttle-User-Interface/
├── apps/
│   ├── docs/         # Next.js 16 docs/showcase app
│   └── storybook/    # Storybook 10 component explorer
├── packages/
│   └── ui/           # Source-only shared component library
├── instructions/     # AI instructions and setup guides
└── setup/            # Git submodule helper scripts
```

## Core rules

- The shared package is `@lyttle-development/ui` and its public exports are defined in `packages/ui/src/index.ts`.
- Consumer apps should import shared UI from `@lyttle-development/ui`, not from app-local wrapper paths.
- Prefer barrel imports such as `import {Button} from '@lyttle-development/ui'`.
- Deep imports like `@lyttle-development/ui/components/button` are acceptable only when a barrel export is not enough.
- Do not introduce the legacy alias `@lyttle/ui` in new code. It only exists as a Storybook compatibility workaround.
- Shared styles currently come from `packages/ui/src/styles/globals.scss`; both apps load that file through their own app-level `globals.scss` entrypoints.

## Setup

The repo does not pin `engines` in `package.json`, so use a current Node/npm setup that supports Next.js 16 and Storybook 10.

```bash
npm install
```

## Development commands

```bash
npm run dev:docs
npm run dev:storybook
npm run build
npm run build:docs
npm run build:storybook
npm run lint
```

### What each command does

- `npm run dev:docs` starts `apps/docs` on port `3000`.
- `npm run dev:storybook` starts `apps/storybook` on port `6006`.
- `npm run build` runs the source-only `packages/ui` build stub and then builds the docs app.
- `npm run build:storybook` produces the static Storybook site.
- `npm run lint` uses the root flat ESLint config, which currently targets `apps/docs` and ignores `apps/storybook` and `packages/ui`.

## Package and import conventions

### Shared UI package

- Package: `packages/ui`
- Entry point: `packages/ui/src/index.ts`
- Style source: `packages/ui/src/styles/globals.scss`
- The package is source-only; there is no compile output folder.

### TypeScript aliases

- `apps/docs/tsconfig.json`
  - `@/*` → local docs source
  - `@lyttle-development/ui` → `../../packages/ui/src/index.ts`
  - `@lyttle-development/ui/*` → `../../packages/ui/src/*`
- `apps/storybook/tsconfig.json`
  - `@lyttle-development/ui` → `../../packages/ui/src/index.ts`
  - `@lyttle-development/ui/*` → `../../packages/ui/src/*`
- `packages/ui/tsconfig.json`
  - `@/*` → local package source

### Styling

- Shared design tokens and Sass layers live in `packages/ui/src/styles/`.
- The docs app imports `apps/docs/src/app/globals.scss`, which in turn `@use`s the shared package styles.
- Storybook imports `apps/storybook/src/styles/globals.scss`, which does the same.
- If you change style entrypoints or exports, update both consumer apps and package exports together.

## Component authoring patterns

The existing UI package follows these conventions:

- Interactive React components commonly start with `'use client';`.
- Variant-heavy components use `class-variance-authority`.
- Class composition uses `cn()` from `packages/ui/src/lib/utils.ts`.
- Accessibility primitives mainly come from `@base-ui/react`.
- Some components also use targeted helpers like `@radix-ui/react-slot`.
- Styles are colocated as Sass modules next to the component implementation.
- Component folders are kebab-case; exported symbols are PascalCase.
- Public exports should flow through the folder `index.ts` and then `packages/ui/src/index.ts`.

## Validation guidance

This repository currently has no dedicated test runner configured, so validate changes with the workspace commands that match the area you touched:

- Docs app changes: `npm run lint` and, when needed, `npm run build:docs`
- Shared UI changes: `npm run build` and optionally `npm run build:storybook`
- Storybook changes: `npm run build:storybook`

## AI instructions

If you are using an AI coding assistant, start with the docs in `instructions/`:

- `instructions/README.md` — entry point and file chooser
- `instructions/shared-repository-guide.md` — source-of-truth repo guide
- `instructions/github-copilot.md` — GitHub Copilot-specific guidance
- `instructions/claude.md` — Claude-specific guidance
- `instructions/cline.md` — Cline-specific guidance
- `instructions/thinking-models.md` — reasoning-first model guidance

The repository-level Copilot file at `.github/copilot-instructions.md` is aligned with those docs.

## Git submodule helpers

From the root of another git repository, install this project as a submodule with:

```bash
git submodule add https://github.com/Lyttle-Development/Lyttle-User-Interface.git packages/design-framework
git submodule update --init --recursive packages/design-framework
```

- Install the design-framework submodule with `./setup/git-submodule-install.sh`.
- Update the submodule with `./setup/git-submodule-update.sh`.
- Remove the submodule with `./setup/git-submodule-remove.sh`.
- Optional npm shortcuts are available via `npm run submodule:install`, `npm run submodule:update`, and `npm run submodule:remove`.
- `./setup/git-submodule-commands.sh` remains available as a small dispatcher if you prefer a single entry point.

