# Lyttle User Interface

## Design system source of truth

- Shared components live in `packages/ui/src/components`.
- Consumer apps (`apps/docs`, `apps/storybook`) should import from `@lyttle/ui`.
- Shared styles come from `@lyttle/ui/styles`.

## Import conventions

- Preferred: `import { Button } from "@lyttle/ui"`
- Allowed when needed: deep imports like `@lyttle/ui/components/button`
- Avoid app-local UI wrapper imports like `@/components/ui/*` in consumers.

## Shared package alignment

- Aliases are mapped to `@lyttle/ui/*` so consumer imports target the shared package.
- Storybook Vite aliases support both:
  - `@lyttle/ui`
  - `@lyttle/ui/*`
