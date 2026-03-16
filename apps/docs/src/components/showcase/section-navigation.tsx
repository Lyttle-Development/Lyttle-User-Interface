"use client";

import * as React from "react";
import { ShowcaseSection, ShowcaseBlock } from "./showcase-section";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@lyttle/ui";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@lyttle/ui";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@lyttle/ui";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger } from "@lyttle/ui";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@lyttle/ui";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@lyttle/ui";
import { Button } from "@lyttle/ui";

export function SectionNavigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showNotifications, setShowNotifications] = React.useState(true);
  const [showActivity, setShowActivity] = React.useState(false);
  const [menuRole, setMenuRole] = React.useState("editor");

  return (
    <ShowcaseSection
      id="navigation"
      title="Navigation"
      description="Breadcrumbs, menus, navigation bars, dropdowns, and pagination."
    >
      <ShowcaseBlock title="Breadcrumb">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Navigation</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </ShowcaseBlock>

      <ShowcaseBlock title="Navigation Menu" description="Full-featured site navigation with dropdowns">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[400px] md:grid-cols-2">
                  {[
                    { title: "Design System", desc: "Reusable component framework" },
                    { title: "Component Library", desc: "56 accessible UI primitives" },
                    { title: "Theme Engine", desc: "CSS variable–based theming" },
                    { title: "Accessibility Kit", desc: "WCAG AA ready from day one" },
                  ].map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink
                        href="#navigation"
                        className="block rounded-md p-3 hover:bg-accent no-underline transition-colors"
                      >
                        <div className="text-sm font-semibold text-foreground mb-1">{item.title}</div>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 p-4 w-[200px]">
                  <li><NavigationMenuLink href="#navigation" className="block p-2 rounded hover:bg-accent text-sm no-underline transition-colors">Documentation</NavigationMenuLink></li>
                  <li><NavigationMenuLink href="#navigation" className="block p-2 rounded hover:bg-accent text-sm no-underline transition-colors">GitHub</NavigationMenuLink></li>
                  <li><NavigationMenuLink href="#navigation" className="block p-2 rounded hover:bg-accent text-sm no-underline transition-colors">Changelog</NavigationMenuLink></li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#navigation" className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground no-underline transition-colors inline-block">
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </ShowcaseBlock>

      <ShowcaseBlock title="Dropdown Menu" description="Context-triggered dropdown with rich content">
        <div className="flex flex-wrap gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" className="gap-2" />}>
              Open menu
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Profile
                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                Billing
                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>More options</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Team</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked={showNotifications} onCheckedChange={setShowNotifications}>Show notifications</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem checked={showActivity} onCheckedChange={setShowActivity}>Show activity</DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={menuRole} onValueChange={setMenuRole}>
                <DropdownMenuLabel>Role</DropdownMenuLabel>
                <DropdownMenuRadioItem value="admin">Admin</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="editor">Editor</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="viewer">Viewer</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive focus:text-destructive">
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Menubar" description="Application-style menu bar">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
              <MenubarItem>Open <MenubarShortcut>⌘O</MenubarShortcut></MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Save <MenubarShortcut>⌘S</MenubarShortcut></MenubarItem>
              <MenubarItem>Save As… <MenubarShortcut>⇧⌘S</MenubarShortcut></MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Exit</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Undo <MenubarShortcut>⌘Z</MenubarShortcut></MenubarItem>
              <MenubarItem>Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut></MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Zoom In</MenubarItem>
              <MenubarItem>Zoom Out</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Full Screen</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </ShowcaseBlock>

      <ShowcaseBlock title="Collapsible" description="Expandable content section">
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="max-w-sm space-y-2">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-foreground">
              Starred repositories (3)
            </h4>
            <CollapsibleTrigger aria-label={isOpen ? "Collapse" : "Expand"} className="rounded-md p-1 hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
                className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </CollapsibleTrigger>
          </div>
          <div className="rounded-md border border-border px-4 py-2 text-sm font-mono text-foreground">
            lyttle-framework
          </div>
          <CollapsibleContent className="space-y-2">
            <div className="rounded-md border border-border px-4 py-2 text-sm font-mono text-foreground">
              lyttle-website
            </div>
            <div className="rounded-md border border-border px-4 py-2 text-sm font-mono text-foreground">
              lyttle-components
            </div>
          </CollapsibleContent>
        </Collapsible>
      </ShowcaseBlock>

      <ShowcaseBlock title="Pagination" description="Navigate through paginated content">
        <Pagination aria-label="Invoice pages">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#navigation" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#navigation">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#navigation" isActive aria-current="page">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#navigation">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#navigation">10</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#navigation" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </ShowcaseBlock>
    </ShowcaseSection>
  );
}