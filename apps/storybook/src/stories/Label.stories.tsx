import type {Meta, StoryObj} from '@storybook/react-vite';
import {Checkbox, Input, Label} from '@lyttle-development/ui';

const meta: Meta<typeof Label> = {
    title: 'Components/Label',
    component: Label,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Renders an accessible label associated with controls.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
    render: () => (
        <div className="flex flex-col gap-1.5">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" placeholder="John Doe" className="w-64"/>
        </div>
    ),
};

export const WithCheckbox: Story = {
    render: () => (
        <div className="flex items-center gap-2">
            <Checkbox id="cb"/>
            <Label htmlFor="cb">Accept terms and conditions</Label>
        </div>
    ),
};

export const Required: Story = {
    render: () => (
        <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">
                Email <span className="text-destructive">*</span>
            </Label>
            <Input id="email" type="email" placeholder="you@example.com"
                   className="w-64" required/>
        </div>
    ),
};