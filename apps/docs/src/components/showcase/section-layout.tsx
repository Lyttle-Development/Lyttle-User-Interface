import {ShowcaseBlock, ShowcaseSection} from './showcase-section';
import {
    Badge,
    Card,
    CardContent,
    CardHeader,
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
    Separator,
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
} from '@lyttle-development/ui';
import {
    Bell,
    Blocks,
    ChevronRight,
    Command,
    FolderKanban,
    HelpCircle,
    LayoutDashboard,
    Palette,
    Plus,
    Search,
    Sparkles,
    UserCircle2,
} from 'lucide-react';
import {
    Grid,
    Inline,
    Stack,
    Surface,
    Text
} from '@lyttle-development/ui/components/layout/layout';

function LayoutBox({
                       label,
                       height = '3rem',
                       tone = 'muted',
                       span,
                   }: {
    label: string;
    height?: string;
    tone?: 'muted' | 'secondary' | 'accent';
    span?: 1 | 2 | 3;
}) {
    return (
        <Surface
            tone={tone}
            padding="sm"
            radius="md"
            shadow="none"
            style={{
                minHeight: height,
                alignItems: 'center',
                justifyContent: 'center',
                gridColumn: span ? `span ${span} / span ${span}` : undefined
            }}
        >
            <Text as="span" size="xs" tone="muted" mono>{label}</Text>
        </Surface>
    );
}

const primarySidebarItems = [
    {label: 'Overview', icon: LayoutDashboard, isActive: true},
    {label: 'Projects', icon: FolderKanban, badge: '12'},
    {label: 'Components', icon: Blocks, badge: '56'},
    {label: 'Updates', icon: Bell, badge: '3'},
];

const sidebarHighlights = [
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

export function SectionLayout() {
    return (
        <ShowcaseSection
            id="layout"
            title="Layout"
            description="Grid systems, resizable panels, separators, sidebar, and structural patterns."
        >
            <ShowcaseBlock title="Separator"
                           description="Horizontal and vertical dividers">
                <Stack gap="md" align="start">
                    <Stack gap="xs" align="start" style={{width: '100%'}}>
                        <Text as="p" size="xs" tone="muted">Horizontal</Text>
                        <Separator/>
                    </Stack>
                    <Stack gap="xs" align="start">
                        <Text as="p" size="xs" tone="muted">Vertical</Text>
                        <Inline gap="md" style={{minHeight: '2rem'}}>
                            <Text as="span" size="sm">Blog</Text>
                            <Separator orientation="vertical"/>
                            <Text as="span" size="sm">Docs</Text>
                            <Separator orientation="vertical"/>
                            <Text as="span" size="sm">Source</Text>
                        </Inline>
                    </Stack>
                    <Stack gap="xs" align="start" style={{width: '100%'}}>
                        <Text as="p" size="xs" tone="muted">With label</Text>
                        <Inline gap="sm" style={{width: '100%'}}>
                            <Separator style={{flex: 1}}/>
                            <Text as="span" size="xs" tone="muted">OR</Text>
                            <Separator style={{flex: 1}}/>
                        </Inline>
                    </Stack>
                </Stack>
            </ShowcaseBlock>

            <ShowcaseBlock title="Grid Layouts"
                           description="Common responsive grid patterns">
                <Stack gap="md" align="start">
                    <Stack gap="xs" align="start" style={{width: '100%'}}>
                        <Text as="p" size="xs" tone="muted">2-column</Text>
                        <Grid columns={2} gap="xs" style={{width: '100%'}}>
                            <LayoutBox label="col 1" height="3rem"/>
                            <LayoutBox label="col 2" height="3rem"/>
                        </Grid>
                    </Stack>
                    <Stack gap="xs" align="start" style={{width: '100%'}}>
                        <Text as="p" size="xs" tone="muted">3-column</Text>
                        <Grid columns={3} gap="xs" style={{width: '100%'}}>
                            <LayoutBox label="col 1" height="3rem"/>
                            <LayoutBox label="col 2" height="3rem"/>
                            <LayoutBox label="col 3" height="3rem"/>
                        </Grid>
                    </Stack>
                    <Stack gap="xs" align="start" style={{width: '100%'}}>
                        <Text as="p" size="xs" tone="muted">Sidebar + main
                            layout</Text>
                        <Grid columns={4} gap="xs" style={{width: '100%'}}>
                            <LayoutBox label="sidebar" height="6rem"
                                       tone="secondary"/>
                            <LayoutBox label="main content" height="6rem"
                                       span={3}/>
                        </Grid>
                    </Stack>
                    <Stack gap="xs" align="start" style={{width: '100%'}}>
                        <Text as="p" size="xs" tone="muted">Holy grail
                            layout</Text>
                        <Stack gap="xs" align="start" style={{width: '100%'}}>
                            <LayoutBox label="header" height="2.5rem"
                                       tone="accent"/>
                            <Grid columns={4} gap="xs" style={{width: '100%'}}>
                                <LayoutBox label="nav" height="5rem"
                                           tone="secondary"/>
                                <LayoutBox label="main" height="5rem" span={2}/>
                                <LayoutBox label="aside" height="5rem"
                                           tone="secondary"/>
                            </Grid>
                            <LayoutBox label="footer" height="2.5rem"
                                       tone="accent"/>
                        </Stack>
                    </Stack>
                </Stack>
            </ShowcaseBlock>

            <ShowcaseBlock title="Resizable Panels"
                           description="Drag to resize split-pane layouts">
                <Stack gap="md" align="start">
                    <Stack gap="xs" align="start" style={{width: '100%'}}>
                        <Text as="p" size="xs" tone="muted">Horizontal
                            split</Text>
                        <ResizablePanelGroup
                            orientation="horizontal"
                            style={{
                                height: '10rem',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid var(--border)',
                                overflow: 'hidden'
                            }}
                        >
                            <ResizablePanel defaultSize={30}>
                                <Surface tone="muted" padding="md" radius="lg"
                                         shadow="none" style={{
                                    height: '100%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: 0
                                }}>
                                    <Text as="span" size="xs" tone="muted" mono>Panel
                                        1</Text>
                                </Surface>
                            </ResizablePanel>
                            <ResizableHandle withHandle/>
                            <ResizablePanel defaultSize={70}>
                                <Surface tone="secondary" padding="md"
                                         radius="lg" shadow="none" style={{
                                    height: '100%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: 0
                                }}>
                                    <Text as="span" size="xs" tone="muted" mono>Panel
                                        2</Text>
                                </Surface>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </Stack>
                    <Stack gap="xs" align="start" style={{width: '100%'}}>
                        <Text as="p" size="xs" tone="muted">Three-pane
                            vertical</Text>
                        <ResizablePanelGroup
                            orientation="vertical"
                            style={{
                                height: '12rem',
                                borderRadius: 'var(--radius-lg)',
                                border: '1px solid var(--border)',
                                overflow: 'hidden'
                            }}
                        >
                            <ResizablePanel defaultSize={40}>
                                <Surface tone="muted" padding="md" radius="lg"
                                         shadow="none" style={{
                                    height: '100%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: 0
                                }}>
                                    <Text as="span" size="xs" tone="muted"
                                          mono>Top</Text>
                                </Surface>
                            </ResizablePanel>
                            <ResizableHandle withHandle/>
                            <ResizablePanel defaultSize={60}>
                                <ResizablePanelGroup orientation="horizontal">
                                    <ResizablePanel defaultSize={50}>
                                        <Surface tone="secondary" padding="md"
                                                 radius="lg" shadow="none"
                                                 style={{
                                                     height: '100%',
                                                     alignItems: 'center',
                                                     justifyContent: 'center',
                                                     border: 0
                                                 }}>
                                            <Text as="span" size="xs"
                                                  tone="muted" mono>Bottom
                                                L</Text>
                                        </Surface>
                                    </ResizablePanel>
                                    <ResizableHandle withHandle/>
                                    <ResizablePanel defaultSize={50}>
                                        <Surface tone="accent" padding="md"
                                                 radius="lg" shadow="none"
                                                 style={{
                                                     height: '100%',
                                                     alignItems: 'center',
                                                     justifyContent: 'center',
                                                     border: 0
                                                 }}>
                                            <Text as="span" size="xs"
                                                  tone="muted" mono>Bottom
                                                R</Text>
                                        </Surface>
                                    </ResizablePanel>
                                </ResizablePanelGroup>
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </Stack>
                </Stack>
            </ShowcaseBlock>

            <ShowcaseBlock
                title="Sidebar"
                description="A production-style app shell showing the sidebar's best composition patterns: provider state, inset content, trigger, icon collapse, nested menus, and footer actions."
            >
                <div style={{
                    overflow: 'hidden',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border)',
                    height: 420
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
                                            <div
                                                style={{
                                                    display: 'flex',
                                                    width: '2rem',
                                                    height: '2rem',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius: 'var(--radius-lg)',
                                                    background: 'var(--brand-gradient-primary)',
                                                    color: 'white'
                                                }}
                                            >
                                                <Sparkles size={16}/>
                                            </div>
                                            <Stack gap="xs" align="start"
                                                   style={{
                                                       flex: 1,
                                                       minWidth: 0
                                                   }}>
                                                <Text as="span" size="sm"
                                                      weight="semibold"
                                                      truncate>Lyttle User
                                                    Interface</Text>
                                                <Text as="span" size="xs"
                                                      tone="muted" truncate>Docs
                                                    workspace</Text>
                                            </Stack>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                                <SidebarInput
                                    placeholder="Search docs, patterns, components…"/>
                            </SidebarHeader>

                            <SidebarContent>
                                <SidebarGroup>
                                    <SidebarGroupLabel>Workspace</SidebarGroupLabel>
                                    <SidebarGroupAction
                                        aria-label="Create a new view">
                                        <Plus size={16}/>
                                    </SidebarGroupAction>
                                    <SidebarGroupContent>
                                        <SidebarMenu>
                                            {primarySidebarItems.map((item) => (
                                                <SidebarMenuItem
                                                    key={item.label}>
                                                    <SidebarMenuButton
                                                        isActive={item.isActive}
                                                        tooltip={item.label}
                                                    >
                                                        <item.icon size={16}/>
                                                        <span>{item.label}</span>
                                                    </SidebarMenuButton>
                                                    {item.badge ?
                                                        <SidebarMenuBadge>{item.badge}</SidebarMenuBadge> : null}
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
                                                <SidebarMenuButton
                                                    tooltip="Design system">
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
                                                        <SidebarMenuSubButton
                                                            href="#colors">
                                                            <span>Color roles</span>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                    <SidebarMenuSubItem>
                                                        <SidebarMenuSubButton
                                                            href="#layout"
                                                            isActive>
                                                            <span>App shell patterns</span>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                </SidebarMenuSub>
                                            </SidebarMenuItem>

                                            <SidebarMenuItem>
                                                <SidebarMenuButton size="sm"
                                                                   tooltip="Quick search">
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
                                                   style={{
                                                       flex: 1,
                                                       minWidth: 0
                                                   }}>
                                                <Text as="span" size="sm"
                                                      weight="semibold"
                                                      truncate>Sarah Chen</Text>
                                                <Text as="span" size="xs"
                                                      tone="muted" truncate>
                                                    Design engineer
                                                </Text>
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
                                paddingInline: '1rem'
                            }}>
                                <SidebarTrigger/>
                                <Stack gap="xs" align="start"
                                       style={{flex: 1, minWidth: 0}}>
                                    <Text as="p" size="sm" weight="semibold"
                                          truncate>Sidebar app shell</Text>
                                    <Text as="p" size="xs" tone="muted"
                                          truncate>
                                        Collapse to icon mode, hover for
                                        tooltips, or press Ctrl/Cmd + B.
                                    </Text>
                                </Stack>
                                <Badge variant="secondary">
                                    inset + icon collapse
                                </Badge>
                            </header>

                            <Grid layout="content-sidebar" gap="md" style={{
                                height: 'calc(100% - 3.5rem)',
                                overflow: 'auto',
                                padding: '1rem'
                            }}>
                                <Stack gap="md" align="start">
                                    <Grid columns={1} smColumns={3} gap="sm"
                                          style={{width: '100%'}}>
                                        <Card>
                                            <CardHeader>
                                                <Text as="div" size="xs"
                                                      weight="medium"
                                                      tone="muted">Sidebar
                                                    states</Text>
                                            </CardHeader>
                                            <CardContent>
                                                <Text as="p" size="2xl"
                                                      weight="semibold">3</Text>
                                                <Text as="p" size="xs"
                                                      tone="muted">Expanded,
                                                    icon, mobile sheet</Text>
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader>
                                                <Text as="div" size="xs"
                                                      weight="medium"
                                                      tone="muted">Navigation
                                                    depth</Text>
                                            </CardHeader>
                                            <CardContent>
                                                <Text as="p" size="2xl"
                                                      weight="semibold">2
                                                    levels</Text>
                                                <Text as="p" size="xs"
                                                      tone="muted">Menu items
                                                    plus nested sub-links</Text>
                                            </CardContent>
                                        </Card>
                                        <Card>
                                            <CardHeader>
                                                <Text as="div" size="xs"
                                                      weight="medium"
                                                      tone="muted">Discoverability</Text>
                                            </CardHeader>
                                            <CardContent>
                                                <Text as="p" size="2xl"
                                                      weight="semibold">Built
                                                    in</Text>
                                                <Text as="p" size="xs"
                                                      tone="muted">Tooltips,
                                                    badges, rail,
                                                    shortcut</Text>
                                            </CardContent>
                                        </Card>
                                    </Grid>

                                    <Card>
                                        <CardHeader>
                                            <Text as="div" size="sm"
                                                  weight="semibold">Why this is
                                                the recommended setup</Text>
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
                                        <Text as="div" size="sm"
                                              weight="semibold">Patterns
                                            demonstrated</Text>
                                    </CardHeader>
                                    <CardContent>
                                        <Stack gap="md" align="start">
                                            <Inline gap="sm">
                                                {[
                                                    'SidebarProvider',
                                                    'SidebarInset',
                                                    'SidebarTrigger',
                                                    'SidebarRail',
                                                    'SidebarInput',
                                                    'SidebarMenuSub',
                                                ].map((item) => (
                                                    <Badge key={item}
                                                           variant="secondary">
                                                        {item}
                                                    </Badge>
                                                ))}
                                            </Inline>

                                            <Surface tone="muted" padding="sm"
                                                     radius="lg" shadow="none">
                                                <Text as="p" size="sm"
                                                      tone="muted">
                                                    Keep the source component
                                                    generic and put
                                                    product-specific content in
                                                    the
                                                    header, grouped menu
                                                    sections, and footer. That
                                                    way the shared sidebar stays
                                                    reusable across admin apps,
                                                    docs, dashboards, and
                                                    internal tools.
                                                </Text>
                                            </Surface>

                                            <Stack gap="xs" align="start">
                                                <Text as="p" size="sm"
                                                      weight="medium">Implementation
                                                    notes</Text>
                                                <Stack as="ul" gap="xs" style={{
                                                    margin: 0,
                                                    paddingLeft: '1.25rem'
                                                }}>
                                                    <li>Use `tooltip` on menu
                                                        buttons when
                                                        `collapsible=&quot;icon&quot;`
                                                        is enabled.
                                                    </li>
                                                    <li>Pair badges and hover
                                                        actions with the shared
                                                        sidebar slots instead of
                                                        ad-hoc absolute
                                                        positioning.
                                                    </li>
                                                    <li>Constrain the provider
                                                        with
                                                        `className=&quot;h-full
                                                        min-h-0&quot;` when
                                                        embedding demos inside
                                                        docs pages.
                                                    </li>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </SidebarInset>
                    </SidebarProvider>
                </div>
            </ShowcaseBlock>

            <ShowcaseBlock title="Spacing & Radius Scale"
                           description="Design token reference for spacing and border radius">
                <Stack gap="xl" align="start">
                    <Stack gap="sm" align="start">
                        <Text as="p" size="xs" weight="semibold" tone="muted"
                              transform="uppercase">
                            Border Radius
                        </Text>
                        <Inline gap="md" align="end">
                            {[
                                {label: 'sm', value: 'var(--radius-sm)'},
                                {label: 'md', value: 'var(--radius-md)'},
                                {label: 'lg', value: 'var(--radius-lg)'},
                                {label: 'xl', value: 'var(--radius-xl)'},
                                {label: '2xl', value: 'var(--radius-2xl)'},
                                {label: 'full', value: '9999px'},
                            ].map((r) => (
                                <Stack key={r.label} gap="xs" align="center">
                                    <div
                                        style={{
                                            width: '2.5rem',
                                            height: '2.5rem',
                                            background: 'color-mix(in oklab, var(--primary) 20%, transparent)',
                                            border: '1px solid color-mix(in oklab, var(--primary) 40%, transparent)',
                                            borderRadius: r.value
                                        }}
                                    />
                                    <Text as="span" size="xs"
                                          tone="muted">{r.label}</Text>
                                </Stack>
                            ))}
                        </Inline>
                    </Stack>
                    <Stack gap="sm" align="start">
                        <Text as="p" size="xs" weight="semibold" tone="muted"
                              transform="uppercase">
                            Shadow Scale
                        </Text>
                        <Inline gap="md">
                            {[
                                {label: 'none', shadow: 'none'},
                                {
                                    label: 'sm',
                                    shadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)'
                                },
                                {
                                    label: 'md',
                                    shadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                },
                                {
                                    label: 'lg',
                                    shadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                                },
                                {
                                    label: 'xl',
                                    shadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
                                },
                            ].map((s) => (
                                <Stack key={s.label} gap="xs" align="center">
                                    <div
                                        style={{
                                            width: '4rem',
                                            height: '3rem',
                                            borderRadius: 'var(--radius-lg)',
                                            background: 'var(--card)',
                                            border: '1px solid var(--border)',
                                            boxShadow: s.shadow
                                        }}
                                    />
                                    <Text as="span" size="xs"
                                          tone="muted">{s.label}</Text>
                                </Stack>
                            ))}
                        </Inline>
                    </Stack>
                </Stack>
            </ShowcaseBlock>
        </ShowcaseSection>
    );
}