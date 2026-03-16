import type {Meta, StoryObj} from '@storybook/react-vite';
import {AspectRatio} from '@lyttle-development/ui';

const meta: Meta<typeof AspectRatio> = {
    title: 'Components/AspectRatio',
    component: AspectRatio,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'Displays content within a desired ratio. Useful for images, videos, and embeds.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const SixteenByNine: Story = {
    render: () => (
        <div className="w-full max-w-sm">
            <AspectRatio ratio={16 / 9}
                         className="overflow-hidden rounded-md bg-muted">
                <img
                    src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
                    alt="Photo by Drew Beamer"
                    className="h-full w-full object-cover"
                />
            </AspectRatio>
        </div>
    ),
};

export const Square: Story = {
    render: () => (
        <div className="w-48">
            <AspectRatio ratio={1}
                         className="overflow-hidden rounded-md bg-muted">
                <img
                    src="https://images.unsplash.com/photo-1535025183041-0991a977e25b?w=300&dpr=2&q=80"
                    alt="Landscape"
                    className="h-full w-full object-cover"
                />
            </AspectRatio>
        </div>
    ),
};

export const FourByThree: Story = {
    render: () => (
        <div className="w-full max-w-sm">
            <AspectRatio ratio={4 / 3}
                         className="overflow-hidden rounded-md bg-muted">
                <img
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&dpr=2&q=80"
                    alt="Mountains"
                    className="h-full w-full object-cover"
                />
            </AspectRatio>
        </div>
    ),
};