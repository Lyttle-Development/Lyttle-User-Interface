// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from "@tailwindcss/vite";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [getAbsolutePath("@storybook/addon-a11y"), getAbsolutePath("@storybook/addon-docs")],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  async viteFinal(config) {
    const { mergeConfig } = await import("vite");
    const mdxShimId = "file://./node_modules/@storybook/addon-docs/dist/mdx-react-shim.js";
    const mdxShimPath = path.resolve(
      __dirname,
      "../../../node_modules/@storybook/addon-docs/dist/mdx-react-shim.js"
    );

    return mergeConfig(config, {
      plugins: [
        {
          name: "storybook-mdx-shim-resolver",
          resolveId(id: string) {
            if (id === mdxShimId) {
              return mdxShimPath;
            }

            return null;
          },
        },
        tailwindcss(),
      ],
      resolve: {
        alias: {
          // Keep the same workaround for direct alias lookups.
          [mdxShimId]: mdxShimPath,
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

function getAbsolutePath(value: string): string {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}

