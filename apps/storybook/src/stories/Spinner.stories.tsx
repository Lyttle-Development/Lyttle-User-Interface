import type { Meta, StoryObj } from "@storybook/react-vite";
import { Spinner } from "@lyttle/ui";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A loading spinner indicator.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  render: () => <Spinner />,
};

export const Small: Story = {
  render: () => <Spinner size="sm" />,
};

export const Large: Story = {
  render: () => <Spinner size="lg" />,
};

export const WithText: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Spinner />
      <span className="text-sm text-muted-foreground">Loading...</span>
    </div>
  ),
};