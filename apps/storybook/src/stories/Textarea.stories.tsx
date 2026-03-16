import type {Meta, StoryObj} from '@storybook/react-vite';
import {Textarea, Label} from '@lyttle-development/ui';

const meta: Meta<typeof Textarea> = {
    title: 'Components/Textarea',
    component: Textarea,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Displays a form textarea or a component that looks like a textarea.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
    render: () => <Textarea placeholder="Type your message here."
                            className="w-72"/>,
};

export const Disabled: Story = {
    render: () => (
        <Textarea placeholder="Disabled textarea" className="w-72" disabled/>
    ),
};

export const WithLabel: Story = {
    render: () => (
        <div className="flex flex-col gap-1.5 w-72">
            <Label htmlFor="message">Your message</Label>
            <Textarea id="message" placeholder="Type your message here."/>
        </div>
    ),
};

export const WithText: Story = {
    render: () => (
        <div className="flex flex-col gap-1.5 w-72">
            <Label htmlFor="message-2">Your message</Label>
            <Textarea id="message-2" placeholder="Type your message here."/>
            <p className="text-sm text-muted-foreground">
                Your message will be copied to the support team.
            </p>
        </div>
    ),
};