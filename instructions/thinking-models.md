# Thinking / Reasoning Model Instructions

Use this file for reasoning-first models, research agents, or assistants that do best with explicit planning and verification.

## Best fit

This guide is useful for models that can reason deeply but need strong guardrails to stay aligned with the actual repository setup.

## Suggested prompt

```md
You are working in the `Lyttle-User-Interface` monorepo.
Treat this as a configuration-driven repository: verify claims from files before relying on memory.

Start by reading:
- `instructions/shared-repository-guide.md`
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

Reasoning rules:
- Separate verified facts from assumptions.
- Trace imports and exports before changing public APIs.
- When changing `packages/ui`, think about both consumer apps because they import source directly.
- Prefer minimal changes over architectural rewrites.
- If documentation and config disagree, trust the config and update the docs.

Repository rules:
- Prefer `@lyttle-development/ui` in consumer apps.
- In `apps/docs`, `@/*` is only for docs-local source.
- Do not introduce `@lyttle/ui` in new code.
- Shared styles currently come from `packages/ui/src/styles/globals.scss` and are pulled into app-level stylesheets.
- Use `'use client';` for interactive client components.
- Use `class-variance-authority` where the component already follows that pattern.
- Use `cn()` from `packages/ui/src/lib/utils.ts`.
- Prefer `@base-ui/react` primitives for accessible interactions.
- Keep Sass modules colocated with components.
- Route exports through component-level `index.ts` files and then `packages/ui/src/index.ts`.

Validation rules:
- Docs app changes: `npm run lint` and optionally `npm run build:docs`
- Shared UI changes: `npm run build` and optionally `npm run build:storybook`
- Storybook changes: `npm run build:storybook`
- Docs-only changes: validate by comparing the edited text with the repository files above

Known constraints:
- `packages/ui` is source-only and has a stub build script.
- The root lint command currently targets `apps/docs` only.
- No dedicated Jest or Vitest test suite is configured.
- There is no `engines` field in the root manifest, so do not invent pinned Node/npm versions.
```

