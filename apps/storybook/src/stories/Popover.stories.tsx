import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Label,
  Input,
} from "@lyttle/ui";
import { Settings } from "lucide-react";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Displays rich content in a portal, triggered by a button.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input id="width" defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input id="height" defaultValue="25px" className="col-span-2 h-8" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="space-y-2">
          <h4 className="font-medium">Settings</h4>
          <p className="text-sm text-muted-foreground">
            Configure your preferences here.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  ),
};