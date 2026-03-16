import type {Meta, StoryObj} from '@storybook/react-vite';
import {Button} from '@lyttle-development/ui';
import {ArrowRight, Download, Loader2, Mail, Plus, Trash2} from 'lucide-react';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'The Button component supports multiple variants, sizes, and states. It is accessible by default with proper ARIA support.',
            },
        },
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'secondary', 'outline', 'ghost', 'link', 'destructive'],
            description: 'Visual style variant',
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg', 'icon'],
            description: 'Size of the button',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the button is disabled',
        },
        children: {
            control: 'text',
            description: 'Button label text',
        },
    },
    args: {
        children: 'Button',
        variant: 'default',
        size: 'default',
        disabled: false,
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

// ── Playground ────────────────────────────────────────────
export const Playground: Story = {
    args: {
        children: 'Click me',
    },
};

// ── Variants ──────────────────────────────────────────────
export const Default: Story = {
    args: {children: 'Default', variant: 'default'},
};

export const Secondary: Story = {
    args: {children: 'Secondary', variant: 'secondary'},
};

export const Outline: Story = {
    args: {children: 'Outline', variant: 'outline'},
};

export const Ghost: Story = {
    args: {children: 'Ghost', variant: 'ghost'},
};

export const Link: Story = {
    args: {children: 'Link', variant: 'link'},
};

export const Destructive: Story = {
    args: {children: 'Delete', variant: 'destructive'},
};

// ── Sizes ─────────────────────────────────────────────────
export const Small: Story = {
    args: {children: 'Small', size: 'sm'},
};

export const Large: Story = {
    args: {children: 'Large', size: 'lg'},
};

// ── States ────────────────────────────────────────────────
export const Disabled: Story = {
    args: {children: 'Disabled', disabled: true},
};

export const Loading: Story = {
    args: {
        disabled: true,
        'aria-busy': true,
        children: undefined,
    },
    render: () => (
        <Button disabled aria-busy="true" className="gap-2">
            <Loader2 className="h-4 w-4 animate-spin"/>
            Processing…
        </Button>
    ),
};

// ── With Icons ────────────────────────────────────────────
export const WithLeadingIcon: Story = {
    args: {children: 'Add item'},
    render: (args) => (
        <Button {...args} className="gap-2">
            <Plus className="h-4 w-4"/>
            {String(args.children)}
        </Button>
    ),
};

export const WithTrailingIcon: Story = {
    render: () => (
        <Button className="gap-2">
            Get started
            <ArrowRight className="h-4 w-4"/>
        </Button>
    ),
};

export const IconOnly: Story = {
    args: {size: 'icon', variant: 'outline'},
    render: (args) => (
        <Button {...args} aria-label="Download">
            <Download className="h-4 w-4"/>
        </Button>
    ),
};

// ── Brand Gradient ────────────────────────────────────────
export const BrandGradient: Story = {
    render: () => (
        <div className="flex flex-wrap gap-3 items-center">
            <Button
                className="text-white border-0 shadow-md hover:opacity-90 transition-opacity gap-2"
                style={{background: 'var(--brand-gradient-primary)'}}
            >
                <Mail className="h-4 w-4"/>
                Primary CTA
            </Button>
            <Button
                size="lg"
                className="text-white border-0 shadow-lg hover:opacity-90 transition-opacity px-8"
                style={{background: 'var(--brand-gradient-primary)'}}
            >
                Get Started
                <ArrowRight className="h-4 w-4 ml-1"/>
            </Button>
            <Button
                className="text-white border-0 shadow-md hover:opacity-90 transition-opacity"
                style={{background: 'var(--brand-gradient-accent)'}}
            >
                Accent CTA
            </Button>
        </div>
    ),
};

// ── All Variants at a Glance ──────────────────────────────
export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-3 items-center">
            <Button variant="default">Default</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
        </div>
    ),
};

// ── Real-world Example ────────────────────────────────────
export const ActionBar: Story = {
    name: 'Real World: Action Bar',
    render: () => (
        <div
            className="flex items-center gap-2 p-4 border border-border rounded-lg bg-card">
            <Button size="sm" className="gap-1.5">
                <Plus className="h-3.5 w-3.5"/>
                New item
            </Button>
            <Button size="sm" variant="outline" className="gap-1.5">
                <Download className="h-3.5 w-3.5"/>
                Export
            </Button>
            <div className="flex-1"/>
            <Button size="sm" variant="destructive" className="gap-1.5">
                <Trash2 className="h-3.5 w-3.5"/>
                Delete selected
            </Button>
        </div>
    ),
};