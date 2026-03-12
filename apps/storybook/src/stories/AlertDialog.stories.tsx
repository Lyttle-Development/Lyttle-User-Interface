import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  Button,
} from "@lyttle/ui";

const meta: Meta<typeof AlertDialog> = {
  title: "Components/AlertDialog",
  component: AlertDialog,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A modal dialog that interrupts the user with important content and expects a response.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="outline" />}>
        Open Alert
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account and remove
            your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

export const Destructive: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger render={<Button variant="destructive" />}>
        Delete Account
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Account</AlertDialogTitle>
          <AlertDialogDescription>
            All of your data will be permanently removed. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive">Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};