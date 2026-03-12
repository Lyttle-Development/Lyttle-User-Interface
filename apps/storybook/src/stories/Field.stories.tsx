import type { Meta, StoryObj } from "@storybook/react-vite";
import { Field, Input } from "@lyttle/ui";

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
    <Field label="Email" htmlFor="email" className="w-full max-w-sm">
      <Input id="email" type="email" placeholder="Enter your email" />
    </Field>
  ),
};

export const WithHelperText: Story = {
  render: () => (
    <Field
      label="Username"
      htmlFor="username"
      description="This is your public display name."
      className="w-full max-w-sm"
    >
      <Input id="username" placeholder="johndoe" />
    </Field>
  ),
};

export const WithError: Story = {
  render: () => (
    <Field
      label="Password"
      htmlFor="password"
      error="Password must be at least 8 characters."
      className="w-full max-w-sm"
    >
      <Input id="password" type="password" />
    </Field>
  ),
};