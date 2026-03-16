import type {Meta, StoryObj} from '@storybook/react-vite';
import {Skeleton} from '@lyttle-development/ui';

const meta: Meta<typeof Skeleton> = {
    title: 'Components/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Use to show a placeholder while content is loading.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
    render: () => <Skeleton className="h-4 w-64"/>,
};

export const Card: Story = {
    render: () => (
        <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl"/>
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]"/>
                <Skeleton className="h-4 w-[200px]"/>
            </div>
        </div>
    ),
};

export const Profile: Story = {
    render: () => (
        <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full"/>
            <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]"/>
                <Skeleton className="h-4 w-[150px]"/>
            </div>
        </div>
    ),
};

export const List: Story = {
    render: () => (
        <div className="space-y-3 w-64">
            {Array.from({length: 5}).map((_, i) => (
                <div key={i} className="flex items-center space-x-3">
                    <Skeleton className="h-8 w-8 rounded-full"/>
                    <div className="flex-1 space-y-1">
                        <Skeleton className="h-3 w-full"/>
                        <Skeleton className="h-3 w-4/5"/>
                    </div>
                </div>
            ))}
        </div>
    ),
};