import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input, Label, Button } from "@lyttle/ui";
import { Search, Mail, Eye, EyeOff } from "lucide-react";
import React from "react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "url", "tel"],
      description: "HTML input type",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
  },
  args: {
    type: "text",
    placeholder: "Type something…",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Playground: Story = {
  args: {
    placeholder: "Enter text here",
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5 w-72">
      <Label htmlFor="name-input">Full name</Label>
      <Input id="name-input" placeholder="Jane Doe" />
    </div>
  ),
};

export const Email: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5 w-72">
      <Label htmlFor="email-input">Email address</Label>
      <Input id="email-input" type="email" placeholder="jane@example.com" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5 w-72">
      <Label htmlFor="disabled-input">Disabled field</Label>
      <Input id="disabled-input" disabled placeholder="Not editable" value="Locked value" readOnly />
    </div>
  ),
};

export const WithSearchIcon: Story = {
  render: () => (
    <div className="relative w-72">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input className="pl-9" placeholder="Search…" type="search" />
    </div>
  ),
};

export const PasswordToggle: Story = {
  name: "Real World: Password with toggle",
  render: () => {
    const [show, setShow] = React.useState(false);
    return (
      <div className="flex flex-col gap-1.5 w-72">
        <Label htmlFor="pw-input">Password</Label>
        <div className="relative">
          <Input
            id="pw-input"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            className="pr-10"
          />
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label={show ? "Hide password" : "Show password"}
          >
            {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </div>
    );
  },
};

export const LoginForm: Story = {
  name: "Real World: Login form",
  render: () => (
    <div className="w-80 space-y-4 p-6 border border-border rounded-xl bg-card">
      <div>
        <h2 className="text-lg font-semibold">Sign in</h2>
        <p className="text-sm text-muted-foreground">Enter your credentials to continue.</p>
      </div>
      <div className="space-y-3">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="login-email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input id="login-email" type="email" placeholder="you@example.com" className="pl-9" />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="login-pw">Password</Label>
          <Input id="login-pw" type="password" placeholder="••••••••" />
        </div>
      </div>
      <Button
        className="w-full text-white border-0"
        style={{ background: "var(--brand-gradient-primary)" }}
      >
        Sign in
      </Button>
      <p className="text-xs text-center text-muted-foreground">
        <a href="#" className="text-primary">Forgot your password?</a>
      </p>
    </div>
  ),
};