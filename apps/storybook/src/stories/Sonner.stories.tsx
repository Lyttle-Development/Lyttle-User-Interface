import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toaster, Button } from "@lyttle/ui";
import { toast } from "sonner";

const meta: Meta = {
  title: "Components/Sonner",
  component: Toaster,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "An opinionated toast component for React using the Sonner library.",
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <Story />
        <Toaster />
      </>
    ),
  ],
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Button variant="outline" onClick={() => toast("Event has been created")}>
      Show Toast
    </Button>
  ),
};

export const Success: Story = {
  render: () => (
    <Button variant="outline" onClick={() => toast.success("Profile updated successfully")}>
      Success Toast
    </Button>
  ),
};

export const Error: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() => toast.error("Something went wrong. Please try again.")}
    >
      Error Toast
    </Button>
  ),
};

export const WithDescription: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast("Event created", {
          description: "Monday, January 3rd at 6:00pm",
        })
      }
    >
      Toast with Description
    </Button>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Button
      variant="outline"
      onClick={() =>
        toast("File deleted", {
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        })
      }
    >
      Toast with Action
    </Button>
  ),
};