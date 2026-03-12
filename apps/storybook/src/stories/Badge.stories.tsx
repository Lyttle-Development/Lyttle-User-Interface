import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@lyttle/ui";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "outline", "destructive"],
      description: "Visual style variant",
    },
    children: {
      control: "text",
      description: "Badge label",
    },
  },
  args: {
    children: "Badge",
    variant: "default",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Playground: Story = {
  args: { children: "New" },
};

export const Default: Story = { args: { variant: "default", children: "Default" } };
export const Secondary: Story = { args: { variant: "secondary", children: "Secondary" } };
export const Outline: Story = { args: { variant: "outline", children: "Outline" } };
export const Destructive: Story = { args: { variant: "destructive", children: "Error" } };

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2 items-center">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  ),
};

export const StatusBadges: Story = {
  name: "Real World: Status badges",
  render: () => (
    <div className="flex flex-wrap gap-2 items-center">
      <Badge variant="default">Active</Badge>
      <Badge variant="secondary">Pending</Badge>
      <Badge variant="outline">Draft</Badge>
      <Badge variant="destructive">Failed</Badge>
    </div>
  ),
};

export const InlineWithText: Story = {
  name: "Real World: Inline with text",
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Plan</span>
        <Badge variant="default">Pro</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Status</span>
        <Badge variant="secondary">In review</Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Billing</span>
        <Badge variant="destructive">Overdue</Badge>
      </div>
    </div>
  ),
};