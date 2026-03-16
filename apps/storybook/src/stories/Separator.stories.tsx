import type {Meta, StoryObj} from '@storybook/react-vite';
import {Separator} from '@lyttle-development/ui';

const meta: Meta<typeof Separator> = {
    title: 'Components/Separator',
    component: Separator,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Visually or semantically separates content.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Horizontal: Story = {
    render: () => (
        <div className="w-64">
            <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">Radix
                    Primitives</h4>
                <p className="text-sm text-muted-foreground">An open-source UI
                    component library.</p>
            </div>
            <Separator className="my-4"/>
            <div className="flex h-5 items-center space-x-4 text-sm">
                <div>Blog</div>
                <Separator orientation="vertical"/>
                <div>Docs</div>
                <Separator orientation="vertical"/>
                <div>Source</div>
            </div>
        </div>
    ),
};

export const Vertical: Story = {
    render: () => (
        <div className="flex h-10 items-center space-x-4 text-sm">
            <span>Home</span>
            <Separator orientation="vertical"/>
            <span>About</span>
            <Separator orientation="vertical"/>
            <span>Contact</span>
        </div>
    ),
};