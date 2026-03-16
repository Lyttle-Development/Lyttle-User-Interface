import type {Meta, StoryObj} from '@storybook/react-vite';
import {
    HoverCard,
    HoverCardTrigger,
    HoverCardContent,
    Avatar,
    AvatarImage,
    AvatarFallback,
    Button,
} from '@lyttle-development/ui';
import {CalendarDays} from 'lucide-react';

const meta: Meta<typeof HoverCard> = {
    title: 'Components/HoverCard',
    component: HoverCard,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'For sighted users to preview content available behind a link.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
    render: () => (
        <HoverCard>
            <HoverCardTrigger
                render={<Button variant="link"/>}>@lyttle</HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                    <Avatar>
                        <AvatarImage src="https://github.com/vercel.png"/>
                        <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@lyttle</h4>
                        <p className="text-sm">
                            Building a UI framework with accessible, reusable
                            components.
                        </p>
                        <div className="flex items-center pt-2">
                            <CalendarDays className="mr-2 h-4 w-4 opacity-70"/>
                            <span className="text-xs text-muted-foreground">Joined December 2024</span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    ),
};