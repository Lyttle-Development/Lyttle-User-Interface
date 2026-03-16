import type {Meta, StoryObj} from '@storybook/react-vite';
import {
    Card,
    CardContent,
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@lyttle-development/ui';

const meta: Meta<typeof Carousel> = {
    title: 'Components/Carousel',
    component: Carousel,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'A carousel with motion and swipe built using Embla Carousel.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Default: Story = {
    render: () => (
        <div className="w-full max-w-xs mx-auto">
            <Carousel>
                <CarouselContent>
                    {Array.from({length: 5}).map((_, i) => (
                        <CarouselItem key={i}>
                            <Card>
                                <CardContent
                                    className="flex aspect-square items-center justify-center p-6">
                                    <span
                                        className="text-4xl font-semibold">{i + 1}</span>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    ),
};

export const MultipleVisible: Story = {
    render: () => (
        <div className="w-full max-w-sm mx-auto">
            <Carousel opts={{align: 'start'}}>
                <CarouselContent className="-ml-2">
                    {Array.from({length: 8}).map((_, i) => (
                        <CarouselItem key={i} className="pl-2 basis-1/3">
                            <Card>
                                <CardContent
                                    className="flex aspect-square items-center justify-center p-4">
                                    <span
                                        className="text-xl font-semibold">{i + 1}</span>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
            </Carousel>
        </div>
    ),
};