import type { Meta, StoryObj } from "@storybook/react-vite";
import { Combobox } from "@lyttle/ui";

const meta: Meta<typeof Combobox> = {
  title: "Components/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "An autocomplete input with a dropdown list. Combines a text input with a command palette.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

export const Default: Story = {
  render: () => (
    <Combobox
      options={frameworks}
      placeholder="Select framework..."
      searchPlaceholder="Search framework..."
      emptyText="No framework found."
    />
  ),
};

export const WithPreselected: Story = {
  render: () => (
    <Combobox
      options={frameworks}
      value="next.js"
      placeholder="Select framework..."
      searchPlaceholder="Search framework..."
      emptyText="No framework found."
    />
  ),
};

const countries = [
  { value: "us", label: "United States" },
  { value: "gb", label: "United Kingdom" },
  { value: "de", label: "Germany" },
  { value: "fr", label: "France" },
  { value: "jp", label: "Japan" },
  { value: "au", label: "Australia" },
  { value: "ca", label: "Canada" },
];

export const LongList: Story = {
  render: () => (
    <Combobox
      options={countries}
      placeholder="Select country..."
      searchPlaceholder="Search country..."
      emptyText="No country found."
    />
  ),
};