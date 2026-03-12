import type { Meta, StoryObj } from "@storybook/react-vite";
import { Kbd } from "@lyttle/ui";

const meta: Meta<typeof Kbd> = {
  title: "Components/Kbd",
  component: Kbd,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Displays keyboard shortcut keys in a styled badge.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Kbd>;

export const Default: Story = {
  render: () => <Kbd>⌘K</Kbd>,
};

export const Combination: Story = {
  render: () => (
    <div className="flex items-center gap-1">
      <Kbd>Ctrl</Kbd>
      <span className="text-muted-foreground">+</span>
      <Kbd>Shift</Kbd>
      <span className="text-muted-foreground">+</span>
      <Kbd>P</Kbd>
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <p className="text-sm text-muted-foreground">
      Press <Kbd>⌘</Kbd> + <Kbd>K</Kbd> to open the command palette.
    </p>
  ),
};

export const CommonShortcuts: Story = {
  render: () => (
    <div className="flex flex-col gap-2 text-sm">
      <div className="flex items-center justify-between">
        <span>Save</span>
        <div className="flex items-center gap-1">
          <Kbd>⌘</Kbd>
          <Kbd>S</Kbd>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span>Undo</span>
        <div className="flex items-center gap-1">
          <Kbd>⌘</Kbd>
          <Kbd>Z</Kbd>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span>Copy</span>
        <div className="flex items-center gap-1">
          <Kbd>⌘</Kbd>
          <Kbd>C</Kbd>
        </div>
      </div>
    </div>
  ),
};