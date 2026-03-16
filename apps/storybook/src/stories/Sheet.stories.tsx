import type {Meta, StoryObj} from '@storybook/react-vite';
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetFooter,
    SheetClose,
    Button,
} from '@lyttle-development/ui';

const meta: Meta<typeof Sheet> = {
    title: 'Components/Sheet',
    component: Sheet,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Extends the Dialog component to display content that complements the main content of the screen.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
    render: () => (
        <Sheet>
            <SheetTrigger render={<Button variant="outline"/>}>Open
                Sheet</SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when
                        you're done.
                    </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                    <p className="text-sm text-muted-foreground">
                        Profile settings and options would go here.
                    </p>
                </div>
                <SheetFooter>
                    <SheetClose render={<Button type="submit"/>}>Save
                        changes</SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    ),
};

export const FromLeft: Story = {
    render: () => (
        <Sheet>
            <SheetTrigger render={<Button variant="outline"/>}>Open Left
                Sheet</SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                    <SheetDescription>Browse through
                        sections.</SheetDescription>
                </SheetHeader>
                <nav className="mt-4 flex flex-col gap-2">
                    <Button variant="ghost"
                            className="justify-start">Home</Button>
                    <Button variant="ghost"
                            className="justify-start">About</Button>
                    <Button variant="ghost"
                            className="justify-start">Contact</Button>
                </nav>
            </SheetContent>
        </Sheet>
    ),
};

export const FromTop: Story = {
    render: () => (
        <Sheet>
            <SheetTrigger render={<Button variant="outline"/>}>Open Top
                Sheet</SheetTrigger>
            <SheetContent side="top">
                <SheetHeader>
                    <SheetTitle>Announcement</SheetTitle>
                    <SheetDescription>Important information for all
                        users.</SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    ),
};

export const FromBottom: Story = {
    render: () => (
        <Sheet>
            <SheetTrigger render={<Button variant="outline"/>}>Open Bottom
                Sheet</SheetTrigger>
            <SheetContent side="bottom">
                <SheetHeader>
                    <SheetTitle>Confirm Action</SheetTitle>
                    <SheetDescription>Are you sure you want to
                        proceed?</SheetDescription>
                </SheetHeader>
                <SheetFooter className="mt-4">
                    <SheetClose
                        render={<Button variant="outline"/>}>Cancel</SheetClose>
                    <Button>Confirm</Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    ),
};