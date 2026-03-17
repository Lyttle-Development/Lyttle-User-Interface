import {
    Bell,
    Blocks,
    FolderKanban,
    LayoutDashboard,
    type LucideIcon,
} from 'lucide-react';

export type SidebarItem = {
    label: string;
    icon: LucideIcon;
    isActive?: boolean;
    badge?: string;
};

export const primarySidebarItems: SidebarItem[] = [
    {label: 'Overview', icon: LayoutDashboard, isActive: true},
    {label: 'Projects', icon: FolderKanban, badge: '12'},
    {label: 'Components', icon: Blocks, badge: '56'},
    {label: 'Updates', icon: Bell, badge: '3'},
];

export const sidebarHighlights = [
    {
        title: 'Recommended shell',
        description: 'Use `SidebarProvider`, `Sidebar`, and `SidebarInset` together so layout, state, and content all stay in sync.',
    },
    {
        title: 'Keyboard friendly',
        description: '`SidebarTrigger` and the built-in Ctrl/Cmd + B shortcut make collapse and expand feel native in admin-style apps.',
    },
    {
        title: 'Collapsed clarity',
        description: 'Tooltips, badges, and nested menus let icon mode stay useful instead of becoming purely decorative.',
    },
];

export const sidebarMetrics = [
    {
        label: 'Sidebar states',
        value: '3',
        description: 'Expanded, icon, mobile sheet',
    },
    {
        label: 'Navigation depth',
        value: '2 levels',
        description: 'Menu items plus nested sub-links',
    },
    {
        label: 'Discoverability',
        value: 'Built in',
        description: 'Tooltips, badges, rail, shortcut',
    },
];

export const sidebarPatternBadges = [
    'SidebarProvider',
    'SidebarInset',
    'SidebarTrigger',
    'SidebarRail',
    'SidebarInput',
    'SidebarMenuSub',
];

export const radiusScale = [
    {label: 'sm', value: 'var(--radius-sm)'},
    {label: 'md', value: 'var(--radius-md)'},
    {label: 'lg', value: 'var(--radius-lg)'},
    {label: 'xl', value: 'var(--radius-xl)'},
    {label: '2xl', value: 'var(--radius-2xl)'},
    {label: 'full', value: '9999px'},
];

export const shadowScale = [
    {label: 'none', shadow: 'none'},
    {label: 'sm', shadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)'},
    {label: 'md', shadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'},
    {label: 'lg', shadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'},
    {label: 'xl', shadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'},
];

