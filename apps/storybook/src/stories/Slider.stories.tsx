import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slider } from "@lyttle/ui";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "An input where the user selects a value from within a given range.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => <Slider defaultValue={[50]} max={100} step={1} className="w-64" />,
};

export const Range: Story = {
  render: () => <Slider defaultValue={[25, 75]} max={100} step={1} className="w-64" />,
};

export const WithSteps: Story = {
  render: () => <Slider defaultValue={[50]} max={100} step={10} className="w-64" />,
};

export const Disabled: Story = {
  render: () => <Slider defaultValue={[40]} max={100} step={1} className="w-64" disabled />,
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-48 justify-center">
      <Slider defaultValue={[60]} max={100} step={1} orientation="vertical" />
    </div>
  ),
};