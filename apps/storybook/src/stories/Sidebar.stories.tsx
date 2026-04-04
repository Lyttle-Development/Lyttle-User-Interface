import * as React from 'react';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {
    Badge,
    Card,
    CardContent,
    CardHeader,
    Grid,
    Inline,
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInput,
    SidebarInset,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarProvider,
    SidebarRail,
    SidebarSeparator,
    SidebarTrigger,
    Stack,
    Surface,
    Text,
    TooltipProvider,
} from '@lyttle-development/ui';
import {
    Calendar,
    ChevronRight,
    Command,
    Home,
    Inbox,
    Plus,
    Search,
    Settings,
    Sparkles,
    User2,
} from 'lucide-react';

const meta: Meta<typeof SidebarProvider> = {
    title: 'Components/Sidebar',
    component: SidebarProvider,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'A composable, collapsible sidebar component for application navigation.',
            },
        },
    },
    decorators: [
        (Story) => (
            <TooltipProvider>
                <Story/>
            </TooltipProvider>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof SidebarProvider>;

const navItems = [
    {title: 'Home', icon: Home, url: '#', badge: '4'},
    {title: 'Inbox', icon: Inbox, url: '#', badge: '12'},
    {title: 'Calendar', icon: Calendar, url: '#'},
    {title: 'Search', icon: Search, url: '#'},
    {title: 'Settings', icon: Settings, url: '#'},
];

const fullscreenShellStyle: React.CSSProperties = {
    minHeight: '100svh',
};

const containedFrameStyle: React.CSSProperties = {
    padding: '1.5rem',
    background: 'color-mix(in oklab, var(--muted) 40%, var(--background))',
};

const containedShellStyle: React.CSSProperties = {
    height: '42rem',
    overflow: 'hidden',
    borderRadius: 'var(--radius-xl)',
    border: '1px solid var(--border)',
    boxShadow: 'var(--shadow-sm)',
};

const containedProviderStyle: React.CSSProperties = {
    height: '100%',
    minHeight: '100%',
    '--sidebar-wrapper-height': '100%',
    '--sidebar-wrapper-min-height': '100%',
} as React.CSSProperties;

const toolbarStyle: React.CSSProperties = {
    display: 'flex',
    minHeight: '3.75rem',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.875rem 1rem',
    borderBottom: '1px solid var(--border)',
    background: 'color-mix(in oklab, var(--background) 96%, transparent)',
};

const insetBodyStyle: React.CSSProperties = {
    flex: '1 1 auto',
    minHeight: 0,
    overflowX: 'hidden',
    overflowY: 'auto',
    padding: '1rem',
    background: 'linear-gradient(180deg, color-mix(in oklab, var(--background) 100%, transparent), color-mix(in oklab, var(--muted) 45%, var(--background)))',
};

const contentMetaStyle: React.CSSProperties = {
    flex: '1 1 auto',
    minWidth: 0,
};

const brandMarkStyle: React.CSSProperties = {
    display: 'flex',
    width: '2rem',
    height: '2rem',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'var(--radius-lg)',
    background: 'var(--brand-gradient-primary)',
    color: 'white',
    boxShadow: 'var(--shadow-sm)',
};

function AppSidebar({
    variant = 'inset',
    searchPlaceholder = 'Search navigation…',
}: {
    variant?: 'sidebar' | 'floating' | 'inset';
    searchPlaceholder?: string;
}) {
    return (
        <Sidebar variant={variant} collapsible="icon">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" tooltip="My App workspace">
                            <div style={brandMarkStyle}>
                                <Sparkles size={16}/>
                            </div>
                            <Stack gap="xs" align="start" style={contentMetaStyle}>
                                <Text as="span" size="sm" weight="semibold" truncate>My App</Text>
                                <Text as="span" size="xs" tone="muted" truncate>Production shell</Text>
                            </Stack>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
                <SidebarInput placeholder={searchPlaceholder}/>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupAction aria-label="Create new workspace view">
                        <Plus size={16}/>
                    </SidebarGroupAction>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        render={<a href={item.url}/>}
                                        isActive={item.title === 'Home'}
                                        tooltip={item.title}
                                    >
                                        <item.icon/>
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                    {item.badge ? <SidebarMenuBadge>{item.badge}</SidebarMenuBadge> : null}
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarSeparator/>

                <SidebarGroup>
                    <SidebarGroupLabel>Patterns</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton tooltip="Quick search" isActive>
                                    <Search/>
                                    <span>Quick search</span>
                                </SidebarMenuButton>
                                <SidebarMenuAction
                                    size="default"
                                    showOnHover
                                    aria-label="Open command palette"
                                >
                                    <Command size={14}/>
                                </SidebarMenuAction>
                            </SidebarMenuItem>

                            <SidebarMenuItem>
                                <SidebarMenuButton tooltip="Release calendar">
                                    <Calendar/>
                                    <span>Release calendar</span>
                                </SidebarMenuButton>
                                <SidebarMenuAction
                                    size="default"
                                    showOnHover
                                    aria-label="Open release calendar links"
                                >
                                    <ChevronRight size={16}/>
                                </SidebarMenuAction>
                                <SidebarMenuSub>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton href="#upcoming" isActive>
                                            <span>Upcoming launches</span>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                    <SidebarMenuSubItem>
                                        <SidebarMenuSubButton href="#retros">
                                            <span>Retrospectives</span>
                                        </SidebarMenuSubButton>
                                    </SidebarMenuSubItem>
                                </SidebarMenuSub>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" tooltip="Signed in as John Doe">
                            <User2 size={16}/>
                            <Stack gap="xs" align="start" style={contentMetaStyle}>
                                <Text as="span" size="sm" weight="semibold" truncate>John Doe</Text>
                                <Text as="span" size="xs" tone="muted" truncate>john@example.com</Text>
                            </Stack>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>

            <SidebarRail/>
        </Sidebar>
    );
}

function ShellInset({
    title,
    description,
    badge,
}: {
    title: string;
    description: string;
    badge: string;
}) {
    return (
        <SidebarInset>
            <header style={toolbarStyle}>
                <SidebarTrigger/>
                <Stack gap="xs" align="start" style={contentMetaStyle}>
                    <Text as="p" size="sm" weight="semibold" truncate>{title}</Text>
                    <Text as="p" size="xs" tone="muted" truncate>{description}</Text>
                </Stack>
                <Badge variant="secondary">{badge}</Badge>
            </header>

            <div style={insetBodyStyle}>
                <Stack gap="md" align="start">
                    <Surface tone="secondary" padding="lg" radius="xl" shadow="none" style={{width: '100%'}}>
                        <Stack gap="sm" align="start">
                            <Inline gap="xs">
                                <Badge variant="secondary">Ctrl/Cmd + B</Badge>
                                <Badge variant="secondary">tooltips on collapse</Badge>
                            </Inline>
                            <Text as="div" size="sm" weight="semibold">Use the same sidebar composition across docs, tools, and product shells.</Text>
                            <Text as="p" size="sm" tone="muted">
                                The shared component stays generic while the surrounding content, metrics, and toolbar actions remain product-specific.
                            </Text>
                        </Stack>
                    </Surface>

                    <Grid columns={1} smColumns={2} gap="sm" style={{width: '100%'}}>
                        <Card>
                            <CardHeader>
                                <Text as="div" size="xs" weight="medium" tone="muted">Navigation model</Text>
                            </CardHeader>
                            <CardContent>
                                <Text as="p" size="lg" weight="semibold">Header, groups, footer</Text>
                                <Text as="p" size="sm" tone="muted">Each slot stays reusable whether the shell is full-page or embedded.</Text>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <Text as="div" size="xs" weight="medium" tone="muted">Responsive behaviour</Text>
                            </CardHeader>
                            <CardContent>
                                <Text as="p" size="lg" weight="semibold">Desktop + mobile</Text>
                                <Text as="p" size="sm" tone="muted">The same navigation collapses to icons on desktop and becomes a sheet on mobile.</Text>
                            </CardContent>
                        </Card>
                    </Grid>
                </Stack>
            </div>
        </SidebarInset>
    );
}

export const Default: Story = {
    render: () => (
        <div style={fullscreenShellStyle}>
            <SidebarProvider>
                <AppSidebar variant="inset" searchPlaceholder="Search docs, patterns, and releases…"/>
                <ShellInset
                    title="Primary application shell"
                    description="Recommended for products where navigation owns the page chrome."
                    badge="inset + icon collapse"
                />
            </SidebarProvider>
        </div>
    ),
};

export const DefaultClosed: Story = {
    render: () => (
        <div style={fullscreenShellStyle}>
            <SidebarProvider defaultOpen={false}>
                <AppSidebar variant="inset" searchPlaceholder="Search docs, patterns, and releases…"/>
                <ShellInset
                    title="Collapsed by default"
                    description="Start in icon mode and expand with the trigger, rail, or Ctrl/Cmd + B."
                    badge="default closed"
                />
            </SidebarProvider>
        </div>
    ),
};

export const Collapsible: Story = {
    render: () => (
        <div style={containedFrameStyle}>
            <div style={containedShellStyle}>
                <SidebarProvider contained style={containedProviderStyle}>
                    <AppSidebar variant="floating" searchPlaceholder="Search this panel…"/>
                    <ShellInset
                        title="Contained navigation shell"
                        description="Best for bounded editors, dashboard widgets, and documentation panels."
                        badge="contained + floating"
                    />
                </SidebarProvider>
            </div>
        </div>
    ),
};