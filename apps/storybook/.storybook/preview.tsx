import type { Preview } from "@storybook/react-vite";
import React from "react";
import "../src/styles/globals.css";

const withTheme = (Story: React.ComponentType, context: { globals: { theme: string } }) => {
  const theme = context.globals?.theme ?? "light";
  return (
    <div className={theme === "dark" ? "dark" : ""} style={{ minHeight: "100vh", background: "var(--background)", color: "var(--foreground)", padding: "1.5rem" }}>
      <Story />
    </div>
  );
};

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", icon: "sun", title: "Light" },
          { value: "dark", icon: "moon", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withTheme],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disabled: true },
    layout: "padded",
  },
};

export default preview;