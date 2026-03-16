# Copilot Instructions for Lyttle Framework

## Repository Summary

**Lyttle Framework** is a comprehensive React/TypeScript UI component library styled with the LyttleDevelopment brand palette. The repository follows a monorepo structure using npm workspaces and includes 50+ accessible, production-ready UI components, a Storybook documentation site, and a Next.js documentation application.

## High-Level Repository Information

- **Project Type**: TypeScript/React Monorepo
- **Build System**: npm workspaces with Next.js and Storybook
- **Languages**: TypeScript, TypeScriptReact (TSX), JavaScript (ESM modules)
- **Framework/Runtime**: Node.js (v24.13.0+), npm (11.6.2+), React 19.2.3
- **Repository Size**: ~850 total packages after dependencies
- **Key Frameworks**: Next.js 16.1.6, Storybook 8, Base UI React 1.3.0, Sass modules

## Project Structure

```
LyttleFramework/ (monorepo root)
├── packages/ui/                  # Shared UI component library (source-only, no build)
│   ├── src/
│   │   ├── components/           # 50+ UI components (accordion, button, dialog, table, etc.)
│   │   ├── hooks/                # Reusable hooks (e.g., use-mobile)
│   │   ├── lib/                  # Utilities (e.g., cn for class merging)
│   │   ├── styles/               # Global CSS variables and shared Sass layers
│   │   └── index.ts              # Main export file
│   ├── package.json              # Exports: ".", "./styles", "./*"
│   └── tsconfig.json             # Path aliases: @/*, @lyttle-development/ui
│
├── apps/docs/                    # Next.js documentation site (port 3000)
│   ├── src/app/                  # Next.js 16 app directory
│   ├── next.config.ts            # Turbopack config with monorepo root
│   └── eslint.config.mjs         # ESLint 9 with Next.js core-web-vitals
│
├── apps/storybook/               # Storybook 8 component showcase (port 6006)
│   ├── .storybook/
│   │   ├── main.ts               # Storybook config and monorepo aliases
│   │   └── preview.tsx           # Theme switcher (light/dark)
│   ├── src/stories/              # 57 story files (one per component + Introduction.mdx)
│   └── storybook-static/         # Build output (generated)
│
├── package.json                  # Root workspace configuration
├── tsconfig.base.json            # Base TypeScript config (extends to all apps/packages)
└── tsconfig.json                 # Additional Next.js-specific config
```

## Essential Commands and Build Steps

### Prerequisites

Always run **once** before building:

```bash
npm install  # Install all dependencies for the monorepo (16 seconds typical)
```

### Build Commands

**Full build** (packages/ui + apps/docs):

```bash
npm run build
# Output: apps/docs/.next/
# Time: ~10 seconds
# Status: TypeScript compilation, next build
```

**Build docs only**:

```bash
npm run build:docs
```

**Build Storybook static site**:

```bash
npm run build:storybook
# Output: apps/storybook/storybook-static/
# Time: ~12-13 seconds
# Note: Produces bundle size warnings (chunks >500kB) but builds successfully
```

### Development Servers

**Start docs dev server** (port 3000):

```bash
npm run dev:docs
# Ready in ~550ms via Turbopack (fast refresh enabled)
# Access: http://localhost:3000
```

**Start Storybook dev server** (port 6006):

```bash
npm run dev:storybook
# Time: ~1-2 seconds
# Access: http://localhost:6006
```

### Linting

**Lint the docs app**:

```bash
npm run lint
# Currently requires eslint.config.mjs at monorepo root
# If missing: Create `.eslintrc.config.mjs` in root with ESLint 9 config
# Status: ESLint 9.39.4 (Next.js core-web-vitals)
```

Note: No tests are configured in this repository (no Jest/Vitest config found).

## TypeScript and Path Aliases

All TypeScript files use path aliases configured in `tsconfig.base.json` and extended by each workspace:
| Alias | Resolves To |
|-------|------------|
| `@/*` | `./src/*` (within each app/package context) |
| `@lyttle-development/ui` | `../../packages/ui/src/index.ts` |
| `@lyttle-development/ui/*` | `../../packages/ui/src/*` |
| `@/components/ui` | `../../packages/ui/src/components` (in Storybook) |
| `@/lib` | `../../packages/ui/src/lib` |
| `@/hooks` | `../../packages/ui/src/hooks` |
**Always use path aliases when importing from `@lyttle-development/ui`** — avoid relative paths.

## Key Dependencies and Component Architecture

### UI Package (`packages/ui`)

- **@base-ui/react**: Unstyled accessible components (Button, Dialog, etc.)
- **lucide-react**: Icon library (~577 icons)
- **class-variance-authority**: Component variant management
- **clsx**: Class name composition
- **Specialized**: date-fns, embla-carousel-react, input-otp, recharts, sonner, vaul, react-resizable-panels

### All Components

- Use `"use client"` directive (React 19 Client Components)
- Use **class-variance-authority (CVA)** for variant-based styling
- Built on Base UI's unstyled primitives for accessibility
- Use `cn()` utility from `./lib/utils` to compose class names

### Configuration Files

- **tsconfig*.json**: Strict mode, JSX: react-jsx, incremental compilation
- **next.config.ts**: Turbopack with `root: path.resolve(__dirname, "../..")` for monorepo resolution and TLS cert workaround
- **eslint.config.mjs**: ESLint 9 flat config with Next.js presets

## No CI/CD or Tests

- **No GitHub Actions workflows** found
- **No test framework** configured (Jest, Vitest, etc.)
- **No pre-commit hooks** configured
- **Linting is available** but not enforced in CI

## Important Notes for Agents

1. **Always run `npm install` first** if dependencies may have changed
2. **Use path aliases** (@lyttle-development/ui, @/, etc.) instead of relative imports — they're configured in tsconfig
3. **Monorepo context**: When modifying `packages/ui`, changes are automatically available to all apps via workspace linking
4. **Build order matters**: `packages/ui` is source-only; only `apps/docs` and `apps/storybook` have real builds
5. **Component naming**: Components are file-named in kebab-case (e.g., `button.tsx`) but exported as PascalCase
6. **Shared styling**: Global tokens live in `packages/ui/src/styles/` and components use Sass modules plus CSS variables
7. **No type generation**: All files are hand-written TypeScript; no code generation pipeline
8. **Storybook stories**: One `.stories.tsx` file per component in `apps/storybook/src/stories/`; uses Storybook 8 format
9. **ESLint configuration**: Only configured in `apps/docs/` currently; root-level linting requires a root `eslint.config.mjs`
10. **Trust these instructions**: If encountering issues not covered here, refer to package.json scripts and tsconfig paths before running exploratory searches

## Summary Table

| Task            | Command                   | Output                | Time   |
|-----------------|---------------------------|-----------------------|--------|
| Install         | `npm install`             | node_modules/         | 16s    |
| Build all       | `npm run build`           | .next/                | 10s    |
| Build docs      | `npm run build:docs`      | .next/                | ~8s    |
| Build Storybook | `npm run build:storybook` | storybook-static/     | 12-13s |
| Dev docs        | `npm run dev:docs`        | http://localhost:3000 | <1s    |
| Dev Storybook   | `npm run dev:storybook`   | http://localhost:6006 | 1-2s   |
| Lint            | `npm run lint`            | ESLint report         | <5s    |

## Version Control (.gitignore)

The repository is configured with comprehensive .gitignore files at multiple levels:

**Root .gitignore** (66 lines):

- Handles monorepo-wide patterns
- Covers: node_modules, .next, storybook-static, build/, dist/
- Ignores: IDE files (.idea, .vscode), OS files (.DS_Store, Thumbs.db)
- Protects: .env files, logs (npm-debug.log*, yarn-debug.log*, etc.)
- Includes: TypeScript artifacts (*.tsbuildinfo, next-env.d.ts)

**Workspace-specific .gitignore files** (in each app/package):

- **packages/ui/.gitignore**: Source-only package, minimal artifacts
- **apps/docs/.gitignore**: Next.js-specific outputs (.next, .vercel, next-env.d.ts)
- **apps/storybook/.gitignore**: Storybook-specific outputs (storybook-static/, .vite)

**What's ignored**:

- All build outputs and artifacts
- node_modules and package manager caches
- IDE configuration and temp files
- Environment variables and secrets (.env*)
- Logs and debug files
- OS-specific files (.DS_Store, Thumbs.db)

**When committing**: Changes to .gitignore files themselves should be committed to maintain team consistency.


