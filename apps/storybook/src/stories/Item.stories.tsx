import type {Meta, StoryObj} from '@storybook/react-vite';
import {
    Item,
    ItemMedia,
    ItemContent,
    ItemActions,
    ItemGroup,
    ItemSeparator,
    ItemTitle,
    ItemDescription,
    ItemHeader,
    ItemFooter,
} from '@lyttle-development/ui';
import {User, Settings, Bell} from 'lucide-react';

const meta: Meta<typeof Item> = {
    title: 'Components/Item',
    component: Item,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A flexible list item component with media, content, actions, and more.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Item>;

export const Default: Story = {
    render: () => (
        <ItemGroup className="w-80">
            <Item>
                <ItemContent>
                    <ItemTitle>Item One</ItemTitle>
                </ItemContent>
            </Item>
            <Item>
                <ItemContent>
                    <ItemTitle>Item Two</ItemTitle>
                </ItemContent>
            </Item>
            <Item>
                <ItemContent>
                    <ItemTitle>Item Three</ItemTitle>
                </ItemContent>
            </Item>
        </ItemGroup>
    ),
};

export const WithMedia: Story = {
    render: () => (
        <ItemGroup className="w-80">
            <Item>
                <ItemMedia variant="icon">
                    <User/>
                </ItemMedia>
                <ItemContent>
                    <ItemTitle>Profile</ItemTitle>
                    <ItemDescription>View your profile
                        settings</ItemDescription>
                </ItemContent>
            </Item>
            <Item>
                <ItemMedia variant="icon">
                    <Settings/>
                </ItemMedia>
                <ItemContent>
                    <ItemTitle>Settings</ItemTitle>
                    <ItemDescription>Manage your preferences</ItemDescription>
                </ItemContent>
            </Item>
            <Item>
                <ItemMedia variant="icon">
                    <Bell/>
                </ItemMedia>
                <ItemContent>
                    <ItemTitle>Notifications</ItemTitle>
                    <ItemDescription>Configure notifications</ItemDescription>
                </ItemContent>
            </Item>
        </ItemGroup>
    ),
};

export const WithActions: Story = {
    render: () => (
        <ItemGroup className="w-80">
            <Item>
                <ItemContent>
                    <ItemTitle>Item with Action</ItemTitle>
                    <ItemDescription>This item has an action
                        button</ItemDescription>
                </ItemContent>
                <ItemActions>
                    <button
                        className="rounded px-2 py-1 text-xs bg-primary text-primary-foreground">
                        Action
                    </button>
                </ItemActions>
            </Item>
            <ItemSeparator/>
            <Item>
                <ItemContent>
                    <ItemTitle>Another Item</ItemTitle>
                </ItemContent>
                <ItemActions>
                    <button className="rounded px-2 py-1 text-xs border">Edit
                    </button>
                </ItemActions>
            </Item>
        </ItemGroup>
    ),
};

export const Variants: Story = {
    render: () => (
        <ItemGroup className="w-80">
            <Item variant="default">
                <ItemContent>
                    <ItemTitle>Default Variant</ItemTitle>
                </ItemContent>
            </Item>
            <Item variant="outline">
                <ItemContent>
                    <ItemTitle>Outline Variant</ItemTitle>
                </ItemContent>
            </Item>
            <Item variant="muted">
                <ItemContent>
                    <ItemTitle>Muted Variant</ItemTitle>
                </ItemContent>
            </Item>
        </ItemGroup>
    ),
};

export const Sizes: Story = {
    render: () => (
        <ItemGroup className="w-80">
            <Item size="default">
                <ItemContent>
                    <ItemTitle>Default Size</ItemTitle>
                </ItemContent>
            </Item>
            <Item size="sm">
                <ItemContent>
                    <ItemTitle>Small Size</ItemTitle>
                </ItemContent>
            </Item>
            <Item size="xs">
                <ItemContent>
                    <ItemTitle>Extra Small Size</ItemTitle>
                </ItemContent>
            </Item>
        </ItemGroup>
    ),
};

export const WithHeaderAndFooter: Story = {
    render: () => (
        <ItemGroup className="w-80">
            <Item variant="outline">
                <ItemHeader>
                    <ItemTitle>Item Header</ItemTitle>
                    <span className="text-xs text-muted-foreground">Meta</span>
                </ItemHeader>
                <ItemContent>
                    <ItemDescription>
                        This item has both a header and a footer with additional
                        content.
                    </ItemDescription>
                </ItemContent>
                <ItemFooter>
                    <span
                        className="text-xs text-muted-foreground">Footer left</span>
                    <span
                        className="text-xs text-muted-foreground">Footer right</span>
                </ItemFooter>
            </Item>
        </ItemGroup>
    ),
};