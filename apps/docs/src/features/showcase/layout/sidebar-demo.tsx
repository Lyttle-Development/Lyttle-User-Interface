import * as React from 'react';
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
} from '@lyttle-development/ui';
import {
    ChevronRight,
    Command,
    HelpCircle,
    Palette,
    Plus,
    Search,
    Sparkles,
    UserCircle2,
} from 'lucide-react';
import {
    primarySidebarItems,
    sidebarHighlights,
    sidebarMetrics,
    sidebarPatternBadges,
} from './layout-data';

export function SidebarDemo() {
    return (
        <div style={{
            overflow: 'hidden',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border)',
            height: 420,
        }}>
            <SidebarProvider
                defaultOpen
                style={{
                    height: '100%',
                    minHeight: 0,
                    background: 'var(--sidebar)',
                    '--sidebar-wrapper-height': '100%',
                    '--sidebar-wrapper-min-height': '100%',
                } as React.CSSProperties}
            >
                <Sidebar variant="inset" collapsible="icon">
                    <SidebarHeader>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton size="lg"
                                                   tooltip="Lyttle User Interface workspace">
                                    <BrandMark/>
                                    <Stack gap="xs" align="start"
                                           style={{flex: 1, minWidth: 0}}>
                                        <Text as="span" size="sm"
                                              weight="semibold"
                                              truncate>Lyttle User Interface</Text>
                                        <Text as="span" size="xs"
                                              tone="muted" truncate>Docs workspace</Text>
                                    </Stack>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                        <SidebarInput placeholder="Search docs, patterns, components…"/>
                    </SidebarHeader>

                    <SidebarContent>
                        <SidebarGroup>
                            <SidebarGroupLabel>Workspace</SidebarGroupLabel>
                            <SidebarGroupAction aria-label="Create a new view">
                                <Plus size={16}/>
                            </SidebarGroupAction>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {primarySidebarItems.map((item) => (
                                        <SidebarMenuItem key={item.label}>
                                            <SidebarMenuButton
                                                isActive={item.isActive}
                                                tooltip={item.label}
                                            >
                                                <item.icon size={16}/>
                                                <span>{item.label}</span>
                                            </SidebarMenuButton>
                                            {item.badge ? <SidebarMenuBadge>{item.badge}</SidebarMenuBadge> : null}
                                        </SidebarMenuItem>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>

                        <SidebarSeparator/>

                        <SidebarGroup>
                            <SidebarGroupLabel>Library</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <SidebarMenuButton tooltip="Design system">
                                            <Palette size={16}/>
                                            <span>Design system</span>
                                        </SidebarMenuButton>
                                        <SidebarMenuAction
                                            size="default"
                                            showOnHover
                                            aria-label="Open design system links"
                                        >
                                            <ChevronRight size={16}/>
                                        </SidebarMenuAction>
                                        <SidebarMenuSub>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton href="#colors">
                                                    <span>Color roles</span>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                            <SidebarMenuSubItem>
                                                <SidebarMenuSubButton href="#layout" isActive>
                                                    <span>App shell patterns</span>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        </SidebarMenuSub>
                                    </SidebarMenuItem>

                                    <SidebarMenuItem>
                                        <SidebarMenuButton size="sm" tooltip="Quick search">
                                            <Search size={16}/>
                                            <span>Quick search</span>
                                        </SidebarMenuButton>
                                        <SidebarMenuAction
                                            size="sm"
                                            showOnHover
                                            aria-label="Jump to quick search"
                                        >
                                            <Command size={14}/>
                                        </SidebarMenuAction>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    </SidebarContent>

                    <SidebarFooter>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton tooltip="Get help">
                                    <HelpCircle size={16}/>
                                    <span>Support & guides</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton size="lg"
                                                   tooltip="Signed in as Sarah Chen">
                                    <UserCircle2 size={16}/>
                                    <Stack gap="xs" align="start"
                                           style={{flex: 1, minWidth: 0}}>
                                        <Text as="span" size="sm"
                                              weight="semibold"
                                              truncate>Sarah Chen</Text>
                                        <Text as="span" size="xs"
                                              tone="muted" truncate>Design engineer</Text>
                                    </Stack>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarFooter>

                    <SidebarRail/>
                </Sidebar>

                <SidebarInset style={{minWidth: 0, overflow: 'hidden'}}>
                    <header style={{
                        display: 'flex',
                        minHeight: '3.5rem',
                        alignItems: 'center',
                        gap: '0.75rem',
                        borderBottom: '1px solid var(--border)',
                        background: 'color-mix(in oklab, var(--background) 95%, transparent)',
                        paddingInline: '1rem',
                    }}>
                        <SidebarTrigger/>
                        <Stack gap="xs" align="start" style={{flex: 1, minWidth: 0}}>
                            <Text as="p" size="sm" weight="semibold"
                                  truncate>Sidebar app shell</Text>
                            <Text as="p" size="xs" tone="muted" truncate>
                                Collapse to icon mode, hover for tooltips, or press Ctrl/Cmd + B.
                            </Text>
                        </Stack>
                        <Badge variant="secondary">inset + icon collapse</Badge>
                    </header>

                    <Grid layout="content-sidebar" gap="md" style={{
                        height: 'calc(100% - 3.5rem)',
                        overflow: 'auto',
                        padding: '1rem',
                    }}>
                        <Stack gap="md" align="start">
                            <Grid columns={1} smColumns={3} gap="sm" style={{width: '100%'}}>
                                {sidebarMetrics.map((metric) => (
                                    <SidebarMetricCard
                                        key={metric.label}
                                        label={metric.label}
                                        value={metric.value}
                                        description={metric.description}
                                    />
                                ))}
                            </Grid>

                            <Card>
                                <CardHeader>
                                    <Text as="div" size="sm" weight="semibold">
                                        Why this is the recommended setup
                                    </Text>
                                </CardHeader>
                                <CardContent>
                                    <Stack gap="sm" align="start">
                                        {sidebarHighlights.map((item) => (
                                            <Surface key={item.title}
                                                     tone="muted"
                                                     padding="sm"
                                                     radius="lg"
                                                     shadow="none">
                                                <Text as="p" size="sm"
                                                      weight="medium">{item.title}</Text>
                                                <Text as="p" size="sm"
                                                      tone="muted">{item.description}</Text>
                                            </Surface>
                                        ))}
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Stack>

                        <Card>
                            <CardHeader>
                                <Text as="div" size="sm" weight="semibold">
                                    Patterns demonstrated
                                </Text>
                            </CardHeader>
                            <CardContent>
                                <Stack gap="md" align="start">
                                    <Inline gap="sm">
                                        {sidebarPatternBadges.map((item) => (
                                            <Badge key={item} variant="secondary">
                                                {item}
                                            </Badge>
                                        ))}
                                    </Inline>

                                    <Surface tone="muted" padding="sm" radius="lg" shadow="none">
                                        <Text as="p" size="sm" tone="muted">
                                            Keep the source component generic and put product-specific
                                            content in the header, grouped menu sections, and footer.
                                            That way the shared sidebar stays reusable across admin apps,
                                            docs, dashboards, and internal tools.
                                        </Text>
                                    </Surface>

                                    <Stack gap="xs" align="start">
                                        <Text as="p" size="sm" weight="medium">
                                            Implementation notes
                                        </Text>
                                        <Stack as="ul" gap="xs" style={{
                                            margin: 0,
                                            paddingLeft: '1.25rem',
                                        }}>
                                            <li>Use `tooltip` on menu buttons when `collapsible="icon"` is enabled.</li>
                                            <li>Pair badges and hover actions with the shared sidebar slots instead of ad-hoc absolute positioning.</li>
                                            <li>Constrain the provider with `className="h-full min-h-0"` when embedding demos inside docs pages.</li>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    </Grid>
                </SidebarInset>
            </SidebarProvider>
        </div>
    );
}

function BrandMark() {
    return (
        <div
            style={{
                display: 'flex',
                width: '2rem',
                height: '2rem',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--brand-gradient-primary)',
                color: 'white',
            }}
        >
            <Sparkles size={16}/>
        </div>
    );
}

function SidebarMetricCard({
    label,
    value,
    description,
}: {
    label: string;
    value: string;
    description: string;
}) {
    return (
        <Card>
            <CardHeader>
                <Text as="div" size="xs" weight="medium" tone="muted">{label}</Text>
            </CardHeader>
            <CardContent>
                <Text as="p" size="2xl" weight="semibold">{value}</Text>
                <Text as="p" size="xs" tone="muted">{description}</Text>
            </CardContent>
        </Card>
    );
}

