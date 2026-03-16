import type {Meta, StoryObj} from '@storybook/react-vite';
import {Progress} from '@lyttle-development/ui';

const meta: Meta<typeof Progress> = {
    title: 'Components/Progress',
    component: Progress,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Displays an indicator showing the completion progress of a task.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
    render: () => <Progress value={60} className="w-64"/>,
};

export const Zero: Story = {
    render: () => <Progress value={0} className="w-64"/>,
};

export const Half: Story = {
    render: () => <Progress value={50} className="w-64"/>,
};

export const Complete: Story = {
    render: () => <Progress value={100} className="w-64"/>,
};

export const Indeterminate: Story = {
    render: () => <Progress value={null} className="w-64"/>,
};