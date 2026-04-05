# Claude Instructions

Use this file as the repository brief for Claude-based coding assistants.

## Best fit

This guide is for Claude sessions that benefit from a strong repository brief plus explicit verification rules.

## Suggested project memory / prompt

```md
You are working in the `Lyttle-User-Interface` monorepo.
Read `instructions/shared-repository-guide.md` first and treat the following files as source-of-truth before making assumptions:
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

Repository facts:
- `packages/ui` is the shared, source-only `@lyttle-development/ui` package.
- `apps/docs` is the Next.js 16 consumer app.
- `apps/storybook` is the Storybook 10 consumer app.
- Shared styles come from `packages/ui/src/styles/globals.scss` and are loaded through each app’s own global stylesheet.
- The root lint command currently targets `apps/docs` and ignores `apps/storybook` and `packages/ui`.
- No dedicated Jest or Vitest test suite is configured.

Working rules:
- Prefer `@lyttle-development/ui` for shared UI imports in consumer apps.
- Use `@/*` only for docs-local code inside `apps/docs`.
- Do not introduce `@lyttle/ui` in new code; it is only a Storybook compatibility alias.
- In `packages/ui`, preserve the existing import style and avoid broad refactors.
- Use `'use client';` for interactive client components.
- Use `class-variance-authority` when the component already uses variants.
- Use `cn()` from `packages/ui/src/lib/utils.ts` for class composition.
- Prefer `@base-ui/react` primitives for accessibility.
- Keep Sass modules colocated with components.
- Route public exports through folder `index.ts` files and then `packages/ui/src/index.ts`.

Process:
- Start with a short checklist.
- Read the relevant files before editing.
- Keep edits minimal and scoped.
- Verify docs against config files instead of guessing.
- Run the smallest validation command that matches the change.

Validation:
- Docs app: `npm run lint` and optionally `npm run build:docs`
- Shared UI: `npm run build` and optionally `npm run build:storybook`
- Storybook: `npm run build:storybook`
```

