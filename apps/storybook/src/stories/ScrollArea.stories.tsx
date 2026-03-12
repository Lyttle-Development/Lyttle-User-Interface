import type { Meta, StoryObj } from "@storybook/react-vite";
import { ScrollArea, Separator } from "@lyttle/ui";

const meta: Meta<typeof ScrollArea> = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Augments native scroll functionality for custom, cross-browser styling.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

const tags = Array.from({ length: 50 }, (_, i) => `Tag ${i + 1}`);

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <div key={tag}>
            <div className="text-sm">{tag}</div>
            <Separator className="my-2" />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-md bg-muted text-sm font-medium"
          >
            Item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};