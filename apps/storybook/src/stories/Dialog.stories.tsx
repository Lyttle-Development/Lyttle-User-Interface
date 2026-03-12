import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Dialog, DialogContent, DialogDescription, DialogFooter,
  DialogHeader, DialogTitle, DialogTrigger,
  Button, Input, Label,
} from "@lyttle/ui";
import { Trash2, Settings } from "lucide-react";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Modal dialog built on Base UI. Always requires a trigger and provides accessible focus management.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Simple: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger render={<Button variant="outline">Open dialog</Button>} />
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog title</DialogTitle>
          <DialogDescription>
            This is a simple dialog with a title and description.
          </DialogDescription>
        </DialogHeader>
        <p className="text-sm text-muted-foreground">
          Put any content here — forms, confirmations, media, etc.
        </p>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const ConfirmDelete: Story = {
  name: "Real World: Confirm delete",
  render: () => (
    <Dialog>
      <DialogTrigger
        render={
          <Button variant="destructive" className="gap-2">
            <Trash2 className="h-4 w-4" />
            Delete project
          </Button>
        }
      />
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Delete project?</DialogTitle>
          <DialogDescription>
            This will permanently delete <strong>My Project</strong> and all its data.
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Yes, delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};

export const EditForm: Story = {
  name: "Real World: Edit form dialog",
  render: () => (
    <Dialog>
      <DialogTrigger
        render={
          <Button variant="outline" className="gap-2">
            <Settings className="h-4 w-4" />
            Edit profile
          </Button>
        }
      />
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Update your profile details. Changes are saved immediately.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="dialog-first">First name</Label>
              <Input id="dialog-first" defaultValue="Jane" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="dialog-last">Last name</Label>
              <Input id="dialog-last" defaultValue="Doe" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="dialog-email">Email</Label>
            <Input id="dialog-email" type="email" defaultValue="jane@example.com" />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="dialog-role">Job title</Label>
            <Input id="dialog-role" defaultValue="Senior Engineer" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};