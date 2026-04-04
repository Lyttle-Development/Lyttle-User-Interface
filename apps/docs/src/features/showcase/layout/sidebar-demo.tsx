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
import styles from './sidebar-demo.module.scss';
import {
    primarySidebarItems,
    sidebarHighlights,
    sidebarImplementationNotes,
    sidebarMetrics,
    sidebarPatternBadges,
} from './layout-data';

type PreviewMode = {
    id: string;
    eyebrow: string;
    title: string;
    description: string;
    badge: string;
    contained: boolean;
    variant: 'floating' | 'inset';
    shellTitle: string;
    shellDescription: string;
    shellBadge: string;
    heroTitle: string;
    heroDescription: string;
    searchPlaceholder: string;
    cards: Array<{
        label: string;
        value: string;
        description: string;
    }>;
};

const previewModes: PreviewMode[] = [
    {
        id: 'contained',
        eyebrow: 'Contained shell',
        title: 'Fits inside docs panels, settings views, and bounded containers.',
        description: 'Use a contained provider with a floating sidebar surface when the navigation lives inside another layout or card.',
        badge: 'embedded',
        contained: true,
        variant: 'floating',
        shellTitle: 'Embedded navigation canvas',
        shellDescription: 'A bounded shell that inherits the parent card height and clipping.',
        shellBadge: 'contained + floating',
        heroTitle: 'Ideal for dashboards, editors, and docs previews',
        heroDescription: 'The sidebar keeps its own polished surface while the content area remains readable and compact inside a constrained panel.',
        searchPlaceholder: 'Search this panel…',
        cards: [
            {
                label: 'Height model',
                value: 'inherits',
                description: 'The provider fills the surrounding frame instead of assuming a full viewport shell.',
            },
            {
                label: 'Surface treatment',
                value: 'floating',
                description: 'Rounded borders and shadow make the nav feel intentional inside cards and split panes.',
            },
        ],
    },
    {
        id: 'application',
        eyebrow: 'Main side nav',
        title: 'Scales cleanly into a primary application navigation shell.',
        description: 'Keep the provider as the page shell, pair the sidebar with SidebarInset, and let the trigger and keyboard shortcut drive collapse states.',
        badge: 'app shell',
        contained: false,
        variant: 'inset',
        shellTitle: 'Primary workspace navigation',
        shellDescription: 'Designed for full page shells with inset content, toolbars, and responsive mobile behaviour.',
        shellBadge: 'inset + icon collapse',
        heroTitle: 'Recommended for products where navigation owns the page chrome',
        heroDescription: 'This keeps header actions, content surfaces, and responsive side navigation aligned while still supporting icon collapse and mobile sheets.',
        searchPlaceholder: 'Search docs, patterns, components…',
        cards: [
            {
                label: 'Collapsed state',
                value: 'icon mode',
                description: 'Tooltips, badges, and hover actions preserve clarity after the sidebar narrows.',
            },
            {
                label: 'Responsive fallback',
                value: 'sheet',
                description: 'Below the 768px breakpoint the same navigation becomes an accessible mobile sheet.',
            },
        ],
    },
];

export function SidebarDemo() {
    return (
        <Stack gap="md" className={styles.root}>
            <Inline gap="sm" className={styles.heroBadges}>
                {sidebarPatternBadges.map((item) => (
                    <Badge key={item} variant="secondary">{item}</Badge>
                ))}
            </Inline>

            <Stack gap="md">
                {previewModes.map((mode) => (
                    <SidebarShellPreview key={mode.id} mode={mode}/>
                ))}
            </Stack>

            <Grid columns={1} mdColumns={3} gap="sm">
                {sidebarMetrics.map((metric) => (
                    <SidebarMetricCard
                        key={metric.label}
                        label={metric.label}
                        value={metric.value}
                        description={metric.description}
                    />
                ))}
            </Grid>

            <Grid columns={1} lgColumns={2} gap="md">
                <Card>
                    <CardHeader>
                        <Text as="div" size="sm" weight="semibold">
                            Why this composition works
                        </Text>
                    </CardHeader>
                    <CardContent>
                        <Stack gap="sm" align="start">
                            {sidebarHighlights.map((item) => (
                                <Surface
                                    key={item.title}
                                    tone="muted"
                                    padding="sm"
                                    radius="lg"
                                    shadow="none"
                                    className={styles.noteSurface}
                                >
                                    <Text as="p" size="sm"
                                          weight="medium">{item.title}</Text>
                                    <Text as="p" size="sm"
                                          tone="muted">{item.description}</Text>
                                </Surface>
                            ))}
                        </Stack>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <Text as="div" size="sm" weight="semibold">
                            Implementation notes
                        </Text>
                    </CardHeader>
                    <CardContent>
                        <Stack gap="md" align="start">
                            <Surface tone="muted" padding="sm" radius="lg"
                                     shadow="none">
                                <Text as="p" size="sm" tone="muted">
                                    Keep the shared sidebar generic and move
                                    product-specific content into the header,
                                    grouped navigation, secondary actions, and
                                    footer identity block. That gives you the
                                    same composition model for internal tools,
                                    docs experiences, and product shells.
                                </Text>
                            </Surface>

                            <Stack as="ul" gap="sm" className={styles.list}>
                                {sidebarImplementationNotes.map((item) => (
                                    <Text key={item} as="li" size="sm"
                                          className={styles.listItem}>
                                        {item}
                                    </Text>
                                ))}
                            </Stack>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
        </Stack>
    );
}

function SidebarShellPreview({mode}: { mode: PreviewMode }) {
    return (
        <Card className={styles.previewCard}>
            <CardHeader>
                <Inline gap="sm" justify="between" align="start">
                    <Stack gap="xs" className={styles.previewHeading}>
                        <Text as="p" size="xs" weight="medium" tone="muted"
                              transform="uppercase" tracking="tight">
                            {mode.eyebrow}
                        </Text>
                        <Text as="div" size="sm"
                              weight="semibold">{mode.title}</Text>
                        <Text as="p" size="sm"
                              tone="muted">{mode.description}</Text>
                    </Stack>
                    <Badge variant="secondary">{mode.badge}</Badge>
                </Inline>
            </CardHeader>

            <CardContent className={styles.previewCardContent}>
                <div className={styles.previewFrame}>
                    <SidebarProvider
                        defaultOpen
                        contained={mode.contained}
                        className={styles.previewProvider}
                    >
                        <Sidebar variant={mode.variant} collapsible="icon">
                            <PreviewSidebarNavigation mode={mode}/>
                            <SidebarRail/>
                        </Sidebar>

                        <SidebarInset className={styles.insetSurface}>
                            <header className={styles.toolbar}>
                                <SidebarTrigger/>
                                <Stack gap="xs" align="start"
                                       className={styles.metaBlock}>
                                    <Text as="p" size="sm" weight="semibold"
                                          truncate>{mode.shellTitle}</Text>
                                    <Text as="p" size="xs" tone="muted"
                                          truncate>{mode.shellDescription}</Text>
                                </Stack>
                                <Badge
                                    variant="secondary">{mode.shellBadge}</Badge>
                            </header>

                            <div className={styles.canvas}>
                                <Stack gap="md" align="start"
                                       className={styles.canvasStack}>
                                    <Surface
                                        tone={mode.contained ? 'secondary' : 'card'}
                                        padding="lg"
                                        radius="xl"
                                        shadow="none"
                                        className={styles.heroSurface}
                                    >
                                        <Stack gap="sm" align="start">
                                            <Inline gap="xs"
                                                    className={styles.heroBadges}>
                                                <Badge variant="secondary">Ctrl/Cmd
                                                    + B</Badge>
                                                <Badge variant="secondary">tooltips
                                                    on collapse</Badge>
                                            </Inline>
                                            <Text as="div" size="sm"
                                                  weight="semibold">{mode.heroTitle}</Text>
                                            <Text as="p" size="sm"
                                                  tone="muted">{mode.heroDescription}</Text>
                                        </Stack>
                                    </Surface>

                                    <Grid columns={1} smColumns={2} gap="sm"
                                          className={styles.cardGrid}>
                                        {mode.cards.map((card) => (
                                            <Surface
                                                key={card.label}
                                                tone="card"
                                                padding="sm"
                                                radius="lg"
                                                shadow="none"
                                                className={styles.metricCard}
                                            >
                                                <Text as="p" size="xs"
                                                      weight="medium"
                                                      tone="muted">{card.label}</Text>
                                                <Text as="p" size="lg"
                                                      weight="semibold">{card.value}</Text>
                                                <Text as="p" size="sm"
                                                      tone="muted">{card.description}</Text>
                                            </Surface>
                                        ))}
                                    </Grid>
                                </Stack>
                            </div>
                        </SidebarInset>
                    </SidebarProvider>
                </div>
            </CardContent>
        </Card>
    );
}

function PreviewSidebarNavigation({mode}: { mode: PreviewMode }) {
    return (
        <>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg"
                                           tooltip="Lyttle User Interface workspace">
                            <BrandMark/>
                            <Stack gap="xs" align="start"
                                   className={styles.metaBlock}>
                                <Text as="span" size="sm" weight="semibold"
                                      truncate>
                                    Lyttle User Interface
                                </Text>
                                <Text as="span" size="xs" tone="muted" truncate>
                                    {mode.contained ? 'Embedded navigation' : 'Docs workspace'}
                                </Text>
                            </Stack>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>

                <SidebarInput placeholder={mode.searchPlaceholder}/>
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
                                    <SidebarMenuButton isActive={item.isActive}
                                                       tooltip={item.label}>
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
                    <SidebarGroupLabel>Patterns</SidebarGroupLabel>
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
                                        <SidebarMenuSubButton href="#layout"
                                                              isActive>
                                            <span>{mode.contained ? 'Embedded shells' : 'Application shells'}</span>
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
                                   className={styles.metaBlock}>
                                <Text as="span" size="sm" weight="semibold"
                                      truncate>Sarah Chen</Text>
                                <Text as="span" size="xs" tone="muted" truncate>
                                    {mode.contained ? 'Product designer' : 'Design engineer'}
                                </Text>
                            </Stack>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </>
    );
}

function BrandMark() {
    return (
        <div className={styles.brandMark}>
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
                <Text as="div" size="xs" weight="medium"
                      tone="muted">{label}</Text>
            </CardHeader>
            <CardContent>
                <Text as="p" size="2xl" weight="semibold">{value}</Text>
                <Text as="p" size="xs" tone="muted">{description}</Text>
            </CardContent>
        </Card>
    );
}

