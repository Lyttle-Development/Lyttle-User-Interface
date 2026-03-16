import { ShowcaseSection, ShowcaseBlock } from "./showcase-section";
import {
  Badge,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
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
  SidebarInset,
  SidebarInput,
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
} from "@lyttle/ui";
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
} from "lucide-react";

function LayoutBox({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`rounded-md border border-border flex items-center justify-center text-xs text-muted-foreground font-mono p-2 ${className}`}
    >
      {label}
    </div>
  );
}

const primarySidebarItems = [
  { label: "Overview", icon: LayoutDashboard, isActive: true },
  { label: "Projects", icon: FolderKanban, badge: "12" },
  { label: "Components", icon: Blocks, badge: "56" },
  { label: "Updates", icon: Bell, badge: "3" },
];

const sidebarHighlights = [
  {
    title: "Recommended shell",
    description: "Use `SidebarProvider`, `Sidebar`, and `SidebarInset` together so layout, state, and content all stay in sync.",
  },
  {
    title: "Keyboard friendly",
    description: "`SidebarTrigger` and the built-in Ctrl/Cmd + B shortcut make collapse and expand feel native in admin-style apps.",
  },
  {
    title: "Collapsed clarity",
    description: "Tooltips, badges, and nested menus let icon mode stay useful instead of becoming purely decorative.",
  },
];

export function SectionLayout() {
  return (
    <ShowcaseSection
      id="layout"
      title="Layout"
      description="Grid systems, resizable panels, separators, sidebar, and structural patterns."
    >
      <ShowcaseBlock title="Separator" description="Horizontal and vertical dividers">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Horizontal</p>
            <Separator />
          </div>
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">Vertical</p>
            <div className="flex items-center gap-4 h-8">
              <span className="text-sm text-foreground">Blog</span>
              <Separator orientation="vertical" />
              <span className="text-sm text-foreground">Docs</span>
              <Separator orientation="vertical" />
              <span className="text-sm text-foreground">Source</span>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground">With label</p>
            <div className="flex items-center gap-3">
              <Separator className="flex-1" />
              <span className="text-xs text-muted-foreground px-2">OR</span>
              <Separator className="flex-1" />
            </div>
          </div>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Grid Layouts" description="Common responsive grid patterns">
        <div className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground mb-2">2-column</p>
            <div className="grid grid-cols-2 gap-2">
              <LayoutBox label="col 1" className="h-12 bg-muted/30" />
              <LayoutBox label="col 2" className="h-12 bg-muted/30" />
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">3-column</p>
            <div className="grid grid-cols-3 gap-2">
              <LayoutBox label="col 1" className="h-12 bg-muted/30" />
              <LayoutBox label="col 2" className="h-12 bg-muted/30" />
              <LayoutBox label="col 3" className="h-12 bg-muted/30" />
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Sidebar + main layout</p>
            <div className="grid grid-cols-4 gap-2">
              <LayoutBox label="sidebar" className="h-24 bg-secondary/50 col-span-1" />
              <LayoutBox label="main content" className="h-24 bg-muted/30 col-span-3" />
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Holy grail layout</p>
            <div className="space-y-2">
              <LayoutBox label="header" className="h-10 bg-primary/10" />
              <div className="grid grid-cols-4 gap-2">
                <LayoutBox label="nav" className="h-20 bg-secondary/50" />
                <LayoutBox label="main" className="h-20 bg-muted/30 col-span-2" />
                <LayoutBox label="aside" className="h-20 bg-secondary/50" />
              </div>
              <LayoutBox label="footer" className="h-10 bg-primary/10" />
            </div>
          </div>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Resizable Panels" description="Drag to resize split-pane layouts">
        <div className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground mb-2">Horizontal split</p>
            <ResizablePanelGroup
              orientation="horizontal"
              className="h-40 rounded-lg border border-border overflow-hidden"
            >
              <ResizablePanel defaultSize={30}>
                <div className="flex h-full items-center justify-center bg-muted/30 text-xs text-muted-foreground font-mono">
                  Panel 1
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={70}>
                <div className="flex h-full items-center justify-center bg-secondary/30 text-xs text-muted-foreground font-mono">
                  Panel 2
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Three-pane vertical</p>
            <ResizablePanelGroup
              orientation="vertical"
              className="h-48 rounded-lg border border-border overflow-hidden"
            >
              <ResizablePanel defaultSize={40}>
                <div className="flex h-full items-center justify-center bg-muted/30 text-xs text-muted-foreground font-mono">
                  Top
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={60}>
                <ResizablePanelGroup orientation="horizontal">
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-full items-center justify-center bg-secondary/30 text-xs text-muted-foreground font-mono">
                      Bottom L
                    </div>
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={50}>
                    <div className="flex h-full items-center justify-center bg-accent/50 text-xs text-muted-foreground font-mono">
                      Bottom R
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock
        title="Sidebar"
        description="A production-style app shell showing the sidebar's best composition patterns: provider state, inset content, trigger, icon collapse, nested menus, and footer actions."
      >
        <div className="overflow-hidden rounded-lg border border-border" style={{ height: 420 }}>
          <SidebarProvider defaultOpen className="h-full min-h-0 bg-sidebar" style={{ height: "100%", minHeight: 0 }}>
            <Sidebar variant="inset" collapsible="icon">
              <SidebarHeader>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton size="lg" tooltip="Lyttle Framework workspace">
                      <div
                        className="flex size-8 items-center justify-center rounded-lg text-white"
                        style={{ background: "var(--brand-gradient-primary)" }}
                      >
                        <Sparkles className="size-4" />
                      </div>
                      <div className="grid flex-1 text-left leading-tight">
                        <span className="truncate font-semibold text-sm">Lyttle Framework</span>
                        <span className="truncate text-xs text-muted-foreground">Docs workspace</span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
                <SidebarInput placeholder="Search docs, patterns, components…" />
              </SidebarHeader>

              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Workspace</SidebarGroupLabel>
                  <SidebarGroupAction aria-label="Create a new view">
                    <Plus className="size-4" />
                  </SidebarGroupAction>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {primarySidebarItems.map((item) => (
                        <SidebarMenuItem key={item.label}>
                          <SidebarMenuButton
                            isActive={item.isActive}
                            tooltip={item.label}
                          >
                            <item.icon className="size-4" />
                            <span>{item.label}</span>
                          </SidebarMenuButton>
                          {item.badge ? <SidebarMenuBadge>{item.badge}</SidebarMenuBadge> : null}
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </SidebarGroup>

                <SidebarSeparator />

                <SidebarGroup>
                  <SidebarGroupLabel>Library</SidebarGroupLabel>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton tooltip="Design system">
                          <Palette className="size-4" />
                          <span>Design system</span>
                        </SidebarMenuButton>
                        <SidebarMenuAction
                          size="default"
                          showOnHover
                          aria-label="Open design system links"
                        >
                          <ChevronRight className="size-4" />
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
                          <Search className="size-4" />
                          <span>Quick search</span>
                        </SidebarMenuButton>
                        <SidebarMenuAction
                          size="sm"
                          showOnHover
                          aria-label="Jump to quick search"
                        >
                          <Command className="size-3.5" />
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
                      <HelpCircle className="size-4" />
                      <span>Support & guides</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton size="lg" tooltip="Signed in as Sarah Chen">
                      <UserCircle2 className="size-4" />
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">Sarah Chen</span>
                        <span className="truncate text-xs text-muted-foreground">
                          Design engineer
                        </span>
                      </div>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarFooter>

              <SidebarRail />
            </Sidebar>

            <SidebarInset className="min-w-0 overflow-hidden">
              <header className="flex h-14 items-center gap-3 border-b border-border bg-background/95 px-4">
                <SidebarTrigger />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-foreground">Sidebar app shell</p>
                  <p className="truncate text-xs text-muted-foreground">
                    Collapse to icon mode, hover for tooltips, or press Ctrl/Cmd + B.
                  </p>
                </div>
                <Badge variant="secondary" className="hidden sm:inline-flex">
                  inset + icon collapse
                </Badge>
              </header>

              <div className="grid h-[calc(100%-3.5rem)] gap-4 overflow-auto p-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(240px,0.9fr)]">
                <div className="space-y-4">
                  <div className="grid gap-3 sm:grid-cols-3">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xs font-medium text-muted-foreground">
                          Sidebar states
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-semibold text-foreground">3</p>
                        <p className="text-xs text-muted-foreground">Expanded, icon, mobile sheet</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xs font-medium text-muted-foreground">
                          Navigation depth
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-semibold text-foreground">2 levels</p>
                        <p className="text-xs text-muted-foreground">Menu items plus nested sub-links</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-xs font-medium text-muted-foreground">
                          Discoverability
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-2xl font-semibold text-foreground">Built in</p>
                        <p className="text-xs text-muted-foreground">Tooltips, badges, rail, shortcut</p>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Why this is the recommended setup</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {sidebarHighlights.map((item) => (
                        <div key={item.title} className="rounded-lg border border-border bg-muted/20 p-3">
                          <p className="text-sm font-medium text-foreground">{item.title}</p>
                          <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Patterns demonstrated</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {[
                        "SidebarProvider",
                        "SidebarInset",
                        "SidebarTrigger",
                        "SidebarRail",
                        "SidebarInput",
                        "SidebarMenuSub",
                      ].map((item) => (
                        <Badge key={item} variant="secondary">
                          {item}
                        </Badge>
                      ))}
                    </div>

                    <div className="rounded-lg border border-border bg-muted/20 p-3 text-sm text-muted-foreground">
                      Keep the source component generic and put product-specific content in the
                      header, grouped menu sections, and footer. That way the shared sidebar stays
                      reusable across admin apps, docs, dashboards, and internal tools.
                    </div>

                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">Implementation notes</p>
                      <ul className="list-disc space-y-1 pl-5">
                        <li>Use `tooltip` on menu buttons when `collapsible=&quot;icon&quot;` is enabled.</li>
                        <li>Pair badges and hover actions with the shared sidebar slots instead of ad-hoc absolute positioning.</li>
                        <li>Constrain the provider with `className=&quot;h-full min-h-0&quot;` when embedding demos inside docs pages.</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </SidebarInset>
          </SidebarProvider>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Spacing & Radius Scale" description="Design token reference for spacing and border radius">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              Border Radius
            </p>
            <div className="flex flex-wrap gap-4 items-end">
              {[
                { label: "sm", value: "var(--radius-sm)" },
                { label: "md", value: "var(--radius-md)" },
                { label: "lg", value: "var(--radius-lg)" },
                { label: "xl", value: "var(--radius-xl)" },
                { label: "2xl", value: "var(--radius-2xl)" },
                { label: "full", value: "9999px" },
              ].map((r) => (
                <div key={r.label} className="flex flex-col items-center gap-2">
                  <div
                    className="h-10 w-10 bg-primary/20 border border-primary/40"
                    style={{ borderRadius: r.value }}
                  />
                  <span className="text-xs text-muted-foreground">{r.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              Shadow Scale
            </p>
            <div className="flex flex-wrap gap-4">
              {[
                { label: "none", shadow: "none" },
                { label: "sm", shadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
                { label: "md", shadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" },
                { label: "lg", shadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)" },
                { label: "xl", shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-2">
                  <div
                    className="h-12 w-16 rounded-lg bg-card border border-border"
                    style={{ boxShadow: s.shadow }}
                  />
                  <span className="text-xs text-muted-foreground">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ShowcaseBlock>
    </ShowcaseSection>
  );
}