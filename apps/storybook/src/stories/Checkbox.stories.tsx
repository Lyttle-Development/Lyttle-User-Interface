import type {Meta, StoryObj} from '@storybook/react-vite';
import {Checkbox, Label} from '@lyttle-development/ui';

const meta: Meta<typeof Checkbox> = {
    title: 'Components/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'A control that allows the user to toggle between checked and not checked.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
    render: () => (
        <div className="flex items-center gap-2">
            <Checkbox id="terms"/>
            <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
    ),
};

export const Checked: Story = {
    render: () => (
        <div className="flex items-center gap-2">
            <Checkbox id="checked" defaultChecked/>
            <Label htmlFor="checked">Already checked</Label>
        </div>
    ),
};

export const Disabled: Story = {
    render: () => (
        <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <Checkbox id="disabled-unchecked" disabled/>
                <Label htmlFor="disabled-unchecked" className="opacity-50">Disabled
                    unchecked</Label>
            </div>
            <div className="flex items-center gap-2">
                <Checkbox id="disabled-checked" disabled defaultChecked/>
                <Label htmlFor="disabled-checked" className="opacity-50">Disabled
                    checked</Label>
            </div>
        </div>
    ),
};

export const WithDescription: Story = {
    render: () => (
        <div className="flex gap-2">
            <Checkbox id="newsletter"/>
            <div className="grid gap-1.5 leading-none">
                <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                <p className="text-sm text-muted-foreground">
                    You can unsubscribe at any time.
                </p>
            </div>
        </div>
    ),
};