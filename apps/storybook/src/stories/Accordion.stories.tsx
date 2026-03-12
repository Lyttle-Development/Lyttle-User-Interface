import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@lyttle/ui";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A vertically stacked set of interactive headings that each reveal an associated section of content.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern and uses Base UI under the hood.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the design system and can be overridden
          with className.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. The content panel animates open and closed using CSS transitions.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const MultipleOpen: Story = {
  render: () => (
    <Accordion className="w-full max-w-md" openMultiple>
      <AccordionItem value="a">
        <AccordionTrigger>Section A</AccordionTrigger>
        <AccordionContent>Content for section A.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="b">
        <AccordionTrigger>Section B</AccordionTrigger>
        <AccordionContent>Content for section B.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="c">
        <AccordionTrigger>Section C</AccordionTrigger>
        <AccordionContent>Content for section C.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <Accordion className="w-full max-w-md" defaultValue={["item-1"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Open by default</AccordionTrigger>
        <AccordionContent>This panel is open on first render.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Closed by default</AccordionTrigger>
        <AccordionContent>This panel starts closed.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};