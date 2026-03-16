import type {Meta, StoryObj} from '@storybook/react-vite';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarSeparator,
    SidebarTrigger,
    TooltipProvider,
} from '@lyttle-development/ui';
import {
    Calendar,
    ChevronUp,
    Home,
    Inbox,
    Search,
    Settings,
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
    {title: 'Home', icon: Home, url: '#'},
    {title: 'Inbox', icon: Inbox, url: '#'},
    {title: 'Calendar', icon: Calendar, url: '#'},
    {title: 'Search', icon: Search, url: '#'},
    {title: 'Settings', icon: Settings, url: '#'},
];

function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg">
                            <div
                                className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                <Home className="size-4"/>
                            </div>
                            <div className="flex flex-col gap-0.5 leading-none">
                                <span className="font-semibold">My App</span>
                                <span
                                    className="text-xs text-muted-foreground">v1.0.0</span>
                            </div>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {navItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        render={<a href={item.url}/>}>
                                        <item.icon/>
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarSeparator/>
                <SidebarGroup>
                    <SidebarGroupLabel>Quick Access</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton isActive>
                                    <Search/>
                                    <span>Search</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg">
                            <User2 className="size-4"/>
                            <div
                                className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-semibold">John Doe</span>
                                <span
                                    className="truncate text-xs text-muted-foreground">john@example.com</span>
                            </div>
                            <ChevronUp className="ml-auto"/>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}

export const Default: Story = {
    render: () => (
        <SidebarProvider>
            <AppSidebar/>
            <SidebarInset>
                <header className="flex h-16 items-center gap-2 border-b px-4">
                    <SidebarTrigger/>
                    <h1 className="text-lg font-semibold">Dashboard</h1>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4">
                    <p className="text-sm text-muted-foreground">
                        Main content area. Toggle the sidebar with the button
                        above.
                    </p>
                </main>
            </SidebarInset>
        </SidebarProvider>
    ),
};

export const DefaultClosed: Story = {
    render: () => (
        <SidebarProvider defaultOpen={false}>
            <AppSidebar/>
            <SidebarInset>
                <header className="flex h-16 items-center gap-2 border-b px-4">
                    <SidebarTrigger/>
                    <h1 className="text-lg font-semibold">Dashboard</h1>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4">
                    <p className="text-sm text-muted-foreground">
                        Sidebar starts collapsed. Click the toggle to expand it.
                    </p>
                </main>
            </SidebarInset>
        </SidebarProvider>
    ),
};

export const Collapsible: Story = {
    render: () => (
        <SidebarProvider>
            <Sidebar collapsible="icon">
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton size="lg" tooltip="My App">
                                <Home className="size-4"/>
                                <span>My App</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {navItems.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton
                                            render={<a href={item.url}/>}
                                            tooltip={item.title}>
                                            <item.icon/>
                                            <span>{item.title}</span>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
            <SidebarInset>
                <header className="flex h-16 items-center gap-2 border-b px-4">
                    <SidebarTrigger/>
                    <h1 className="text-lg font-semibold">Icon-Collapsible
                        Sidebar</h1>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4">
                    <p className="text-sm text-muted-foreground">
                        This sidebar collapses to icon-only mode.
                    </p>
                </main>
            </SidebarInset>
        </SidebarProvider>
    ),
};