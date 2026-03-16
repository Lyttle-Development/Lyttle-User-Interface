// This file has been automatically migrated to valid ESM format by Storybook.
import { fileURLToPath } from "node:url";
import type { StorybookConfig } from "@storybook/react-vite";
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
      ],
      resolve: {
        alias: [
          // Keep the same workaround for direct alias lookups.
          { find: mdxShimId, replacement: mdxShimPath },
          {
            find: "@lyttle/ui/styles",
            replacement: path.resolve(__dirname, "../../../packages/ui/src/styles/globals.css"),
          },
          {
            find: /^@lyttle\/ui$/,
            replacement: path.resolve(__dirname, "../../../packages/ui/src/index.ts"),
          },
          {
            find: /^@lyttle\/ui\/(.*)$/,
            replacement: path.resolve(__dirname, "../../../packages/ui/src/$1"),
          },
        ],
      },
    });
  },
};

export default config;

function getAbsolutePath(value: string): string {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}

