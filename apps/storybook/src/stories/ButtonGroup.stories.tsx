import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonGroup, Button } from "@lyttle/ui";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A group of related buttons joined together visually.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Left</Button>
      <Button variant="outline">Middle</Button>
      <Button variant="outline">Right</Button>
    </ButtonGroup>
  ),
};

export const TextFormatting: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon" aria-label="Bold">
        <Bold className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" aria-label="Italic">
        <Italic className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" aria-label="Underline">
        <Underline className="h-4 w-4" />
      </Button>
    </ButtonGroup>
  ),
};

export const Alignment: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline" size="icon" aria-label="Align left">
        <AlignLeft className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" aria-label="Align center">
        <AlignCenter className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="icon" aria-label="Align right">
        <AlignRight className="h-4 w-4" />
      </Button>
    </ButtonGroup>
  ),
};