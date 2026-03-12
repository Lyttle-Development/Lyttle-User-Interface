import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toggle } from "@lyttle/ui";
import { Bold, Italic, Underline } from "lucide-react";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A two-state button that can be either on or off.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: () => (
    <Toggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  ),
};

export const WithText: Story = {
  render: () => <Toggle>Bold</Toggle>,
};

export const Outline: Story = {
  render: () => (
    <Toggle variant="outline" aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Toggle disabled aria-label="Toggle underline">
      <Underline className="h-4 w-4" />
    </Toggle>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Toggle size="sm" aria-label="Small">
        <Bold className="h-3 w-3" />
      </Toggle>
      <Toggle size="default" aria-label="Default">
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle size="lg" aria-label="Large">
        <Bold className="h-5 w-5" />
      </Toggle>
    </div>
  ),
};