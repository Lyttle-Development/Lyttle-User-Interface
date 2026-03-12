import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  Button,
} from "@lyttle/ui";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A drawer component that slides in from the bottom of the screen.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  render: () => (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit Profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p className="text-sm text-muted-foreground">
            Drawer content goes here.
          </p>
        </div>
        <DrawerFooter>
          <Button>Save changes</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  ),
};