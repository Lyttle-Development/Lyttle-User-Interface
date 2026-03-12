import type { Meta, StoryObj } from "@storybook/react-vite";
import { Field, Label, Input } from "@lyttle/ui";

const meta: Meta<typeof Field> = {
  title: "Components/Field",
  component: Field,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A form field wrapper that pairs a label with a form control.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Field>;

export const Default: Story = {
  render: () => (
    <Field className="w-full max-w-sm">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </Field>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <Field className="w-full max-w-sm">
      <Label htmlFor="username">Username</Label>
      <Input id="username" placeholder="johndoe" />
      <p className="text-sm text-muted-foreground">
        This is your public display name.
      </p>
    </Field>
  ),
};

export const WithError: Story = {
  render: () => (
    <Field className="w-full max-w-sm">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" className="border-destructive" />
      <p className="text-sm text-destructive">Password must be at least 8 characters.</p>
    </Field>
  ),
};