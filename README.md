# Lyttle User Interface

## Design system source of truth

- Shared components live in `packages/ui/src/components`.
- Consumer apps (`apps/docs`, `apps/storybook`) should import from `@lyttle-development/ui`.
- Shared styles come from `@lyttle-development/ui/styles`.

## Import conventions

- Preferred: `import { Button } from "@lyttle-development/ui"`
- Allowed when needed: deep imports like `@lyttle-development/ui/components/button`
- Avoid app-local UI wrapper imports like `@/components/ui/*` in consumers.

## Shared package alignment

- Aliases are mapped to `@lyttle-development/ui/*` so consumer imports target the shared package.
- Storybook Vite aliases support both:
    - `@lyttle-development/ui`
    - `@lyttle-development/ui/*`
