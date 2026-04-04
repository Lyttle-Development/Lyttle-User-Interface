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
        title: 'Two clean layout modes',
        description: 'Use a contained provider when the sidebar lives inside an existing card or panel, and use the default app shell pattern when it drives the whole page.',
    },
    {
        title: 'One navigation API',
        description: 'Header branding, grouped menus, nested links, badges, and footer actions stay identical across contained and full-page shells.',
    },
    {
        title: 'Collapsed clarity',
        description: 'Tooltips, badges, hover actions, and the rail keep icon mode useful instead of turning it into decorative chrome.',
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
    'contained shells',
    'main side nav',
    'SidebarProvider',
    'SidebarInset',
    'SidebarTrigger',
    'SidebarRail',
    'SidebarInput',
    'SidebarMenuSub',
];

export const sidebarImplementationNotes = [
    'Set `contained` on `SidebarProvider` when the shell needs to inherit an existing container height, radius, and clipping.',
    'Use `variant="floating"` or `variant="inset"` for embedded shells, and keep `SidebarInset` as the main content surface for application layouts.',
    'Pass `tooltip` to menu buttons whenever `collapsible="icon"` is enabled so navigation labels remain discoverable in collapsed mode.',
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

