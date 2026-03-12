import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuCheckboxItem,
  ContextMenuLabel,
} from "@lyttle/ui";

const meta: Meta<typeof ContextMenu> = {
  title: "Components/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Displays a menu to the user — such as a set of actions — triggered by right-clicking.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  render: () => (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-32 w-64 items-center justify-center rounded-md border border-dashed text-sm">
        Right-click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-48">
        <ContextMenuItem>Back</ContextMenuItem>
        <ContextMenuItem>Forward</ContextMenuItem>
        <ContextMenuItem>Reload</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuSub>
          <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent>
            <ContextMenuItem>Save Page As…</ContextMenuItem>
            <ContextMenuItem>Create Shortcut…</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuLabel>Developer</ContextMenuLabel>
        <ContextMenuCheckboxItem checked>Show Bookmarks Bar</ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  ),
};