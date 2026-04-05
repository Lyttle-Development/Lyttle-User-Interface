# Cline Instructions

Use this file for Cline or any autonomous coding agent that can inspect, edit, and validate files directly.

## Best fit

This guide assumes the agent can plan, read files, make targeted edits, and run verification commands.

## Suggested instructions

```md
You are working in the `Lyttle-User-Interface` monorepo.
Start by reading `instructions/shared-repository-guide.md` and then inspect the exact files that control the area you are changing.

Repository shape:
- `packages/ui`: source-only shared package, published in-workspace as `@lyttle-development/ui`
- `apps/docs`: Next.js 16 docs/showcase app
- `apps/storybook`: Storybook 10 component explorer

Rules:
- Prefer `@lyttle-development/ui` for shared UI imports in consumer apps.
- In `apps/docs`, use `@/*` only for docs-local source.
- Do not introduce `@lyttle/ui` in new code.
- Shared styles currently come from `packages/ui/src/styles/globals.scss` and are loaded through each app’s own `globals.scss` file.
- In `packages/ui`, preserve existing import conventions unless a focused change requires otherwise.
- Use `'use client';` for interactive client components.
- Use `class-variance-authority` when a component already follows that pattern.
- Use `cn()` from `packages/ui/src/lib/utils.ts`.
- Prefer `@base-ui/react` primitives for accessible interactions.
- Keep Sass modules colocated with each component.
- Route public exports through the component folder `index.ts` and then `packages/ui/src/index.ts`.

Execution workflow:
1. Make a short checklist before editing.
2. Read the relevant package/config/source files first.
3. Keep changes minimal and avoid broad refactors.
4. After editing, validate with the smallest relevant workspace command.
5. If the change is docs-only, verify the text against the repository config instead of inventing details.

Validation:
- Docs app changes: `npm run lint` and optionally `npm run build:docs`
- Shared UI changes: `npm run build` and optionally `npm run build:storybook`
- Storybook changes: `npm run build:storybook`

Important facts:
- `packages/ui` has a build stub rather than a real bundle build.
- The repo currently has no dedicated Jest/Vitest suite.
- The root lint command currently ignores `apps/storybook` and `packages/ui`.
```

