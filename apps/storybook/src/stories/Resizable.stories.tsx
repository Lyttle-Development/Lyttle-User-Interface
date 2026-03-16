import type {Meta, StoryObj} from '@storybook/react-vite';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@lyttle-development/ui';

const meta: Meta<typeof ResizablePanelGroup> = {
    title: 'Components/Resizable',
    component: ResizablePanelGroup,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Accessible resizable panel groups and layouts with keyboard support.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof ResizablePanelGroup>;

export const Horizontal: Story = {
    render: () => (
        <ResizablePanelGroup orientation="horizontal"
                             className="min-h-[200px] max-w-md rounded-lg border">
            <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">One</span>
                </div>
            </ResizablePanel>
            <ResizableHandle/>
            <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Two</span>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    ),
};

export const Vertical: Story = {
    render: () => (
        <ResizablePanelGroup orientation="vertical"
                             className="min-h-[300px] max-w-md rounded-lg border">
            <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Header</span>
                </div>
            </ResizablePanel>
            <ResizableHandle/>
            <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Content</span>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    ),
};

export const ThreePanels: Story = {
    render: () => (
        <ResizablePanelGroup orientation="horizontal"
                             className="min-h-[200px] max-w-lg rounded-lg border">
            <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Sidebar</span>
                </div>
            </ResizablePanel>
            <ResizableHandle withHandle/>
            <ResizablePanel defaultSize={50}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Main</span>
                </div>
            </ResizablePanel>
            <ResizableHandle withHandle/>
            <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                    <span className="font-semibold">Details</span>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    ),
};