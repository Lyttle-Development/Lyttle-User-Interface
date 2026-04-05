# AI Instructions for Lyttle User Interface

This folder is the central AI documentation hub for the `Lyttle-User-Interface` monorepo.

## Start here

1. Read `instructions/shared-repository-guide.md`.
2. Open the tool-specific file that matches the model or coding agent you are using.
3. Cross-check any command, alias, or architecture claim against the repository files listed below.

## File guide

| File | Use it for |
| --- | --- |
| `instructions/shared-repository-guide.md` | Common repository facts, setup, architecture, import rules, and validation guidance |
| `instructions/github-copilot.md` | GitHub Copilot Chat, Copilot coding agents, and repository custom instructions |
| `instructions/claude.md` | Claude-based coding assistants and project memory/reference docs |
| `instructions/cline.md` | Cline and other autonomous editor agents that plan and edit files directly |
| `instructions/thinking-models.md` | Reasoning-first or research-heavy models that need a strong planning and verification loop |

## Source-of-truth files

When an AI assistant is unsure, these files should win over assumptions:

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
- `README.md`
- `.github/copilot-instructions.md`

## Quick setup

```bash
npm install
npm run dev:docs
npm run dev:storybook
```

## Validation quick reference

```bash
npm run lint
npm run build
npm run build:storybook
```

## Notes

- `packages/ui` is source-only and is consumed directly by the apps through workspace aliases.
- The repo currently has no dedicated Jest or Vitest test suite.
- The root ESLint config currently lints `apps/docs` and ignores `apps/storybook` and `packages/ui`.
- Current shared styles are sourced from `packages/ui/src/styles/globals.scss` and imported into each app’s own global stylesheet.

