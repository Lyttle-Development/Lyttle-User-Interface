import {defineConfig, globalIgnores} from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const docsFiles = ['apps/docs/**/*.{js,jsx,ts,tsx,mjs}'];

export default defineConfig([
  ...nextVitals.map((config) => ({
    ...config,
    files: docsFiles,
  })),
  ...nextTs.map((config) => ({
    ...config,
    files: docsFiles,
  })),
  {
    files: docsFiles,
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
  globalIgnores([
    '**/node_modules/**',
    '**/.next/**',
    '**/out/**',
    '**/build/**',
    '**/dist/**',
    'apps/storybook/**',
    'packages/ui/**',
    'next-env.d.ts',
    'apps/docs/next-env.d.ts',
  ]),
]);

