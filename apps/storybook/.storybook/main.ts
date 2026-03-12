// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/vite";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [getAbsolutePath("@storybook/addon-a11y"), getAbsolutePath("@storybook/addon-docs")],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  async viteFinal(config) {
    const { mergeConfig } = await import("vite");
    return mergeConfig(config, {
      plugins: [tailwindcss()],
      resolve: {
        alias: {
          "@lyttle/ui/styles": path.resolve(__dirname, "../../../packages/ui/src/styles/globals.css"),
          "@lyttle/ui": path.resolve(__dirname, "../../../packages/ui/src/index.ts"),
          // @/components/ui/xxx → packages/ui/src/components/xxx (shadcn path convention)
          "@/components/ui": path.resolve(__dirname, "../../../packages/ui/src/components"),
          "@/lib": path.resolve(__dirname, "../../../packages/ui/src/lib"),
          "@/hooks": path.resolve(__dirname, "../../../packages/ui/src/hooks"),
          "@": path.resolve(__dirname, "../../../packages/ui/src"),
        },
      },
    });
  },
};

export default config;

function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}