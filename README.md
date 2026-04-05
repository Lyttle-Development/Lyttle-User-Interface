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

## Git submodule helpers

- Install the design-framework submodule with `./setup/git-submodule-install.sh`.
- Update the submodule with `./setup/git-submodule-update.sh`.
- Remove the submodule with `./setup/git-submodule-remove.sh`.
- Optional npm shortcuts are available via `npm run submodule:install`, `npm run submodule:update`, and `npm run submodule:remove`.
- `./setup/git-submodule-commands.sh` remains available as a small dispatcher if you prefer a single entry point.

