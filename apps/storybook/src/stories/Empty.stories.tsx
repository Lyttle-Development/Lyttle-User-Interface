import type { Meta, StoryObj } from "@storybook/react-vite";
import { Empty, Button } from "@lyttle/ui";
import { Inbox, Search, FolderOpen } from "lucide-react";

const meta: Meta<typeof Empty> = {
  title: "Components/Empty",
  component: Empty,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "An empty state placeholder component with icon, title, and description.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Empty>;

export const Default: Story = {
  render: () => (
    <Empty
      icon={<Inbox className="h-10 w-10" />}
      title="No messages"
      description="You have no messages at the moment. Come back later."
    />
  ),
};

export const WithAction: Story = {
  render: () => (
    <Empty
      icon={<FolderOpen className="h-10 w-10" />}
      title="No projects"
      description="Get started by creating a new project."
    >
      <Button>Create project</Button>
    </Empty>
  ),
};

export const SearchEmpty: Story = {
  render: () => (
    <Empty
      icon={<Search className="h-10 w-10" />}
      title="No results found"
      description="Try adjusting your search or filter to find what you're looking for."
    />
  ),
};