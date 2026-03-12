import type { Meta, StoryObj } from "@storybook/react-vite";
import { DirectionProvider } from "@lyttle/ui";
import { Button, Input, Label } from "@lyttle/ui";

const meta: Meta<typeof DirectionProvider> = {
  title: "Components/Direction",
  component: DirectionProvider,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Provides a direction context (LTR or RTL) for all child components.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DirectionProvider>;

export const LeftToRight: Story = {
  render: () => (
    <DirectionProvider direction="ltr">
      <div className="flex flex-col gap-3 p-4 border rounded-lg w-72">
        <p className="text-sm font-medium">Left to Right (LTR)</p>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="ltr-input">Name</Label>
          <Input id="ltr-input" placeholder="Enter your name" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Cancel</Button>
          <Button>Submit</Button>
        </div>
      </div>
    </DirectionProvider>
  ),
};

export const RightToLeft: Story = {
  render: () => (
    <DirectionProvider direction="rtl">
      <div dir="rtl" className="flex flex-col gap-3 p-4 border rounded-lg w-72">
        <p className="text-sm font-medium">Right to Left (RTL)</p>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="rtl-input">الاسم</Label>
          <Input id="rtl-input" placeholder="أدخل اسمك" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline">إلغاء</Button>
          <Button>إرسال</Button>
        </div>
      </div>
    </DirectionProvider>
  ),
};