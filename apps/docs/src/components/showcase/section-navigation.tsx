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
import { Grid, Inline, Stack, Text } from "@lyttle/ui/components/layout/layout";

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
                <Grid as="ul" columns={1} mdColumns={2} gap="sm" style={{ width: "24rem", padding: "1rem", margin: 0, listStyle: "none" }}>
                  {[
                    { title: "Design System", desc: "Reusable component framework" },
                    { title: "Component Library", desc: "56 accessible UI primitives" },
                    { title: "Theme Engine", desc: "CSS variable–based theming" },
                    { title: "Accessibility Kit", desc: "WCAG AA ready from day one" },
                  ].map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink href="#navigation" style={{ display: "block", padding: "0.75rem" }}>
                        <Stack gap="xs" align="start">
                          <Text as="div" size="sm" weight="semibold">{item.title}</Text>
                          <Text as="p" size="xs" tone="muted">{item.desc}</Text>
                        </Stack>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </Grid>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <Stack as="ul" gap="xs" style={{ width: "12rem", padding: "1rem", margin: 0, listStyle: "none" }}>
                  <li><NavigationMenuLink href="#navigation" style={{ display: "block", padding: "0.5rem" }}>Documentation</NavigationMenuLink></li>
                  <li><NavigationMenuLink href="#navigation" style={{ display: "block", padding: "0.5rem" }}>GitHub</NavigationMenuLink></li>
                  <li><NavigationMenuLink href="#navigation" style={{ display: "block", padding: "0.5rem" }}>Changelog</NavigationMenuLink></li>
                </Stack>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#navigation" style={{ padding: "0.5rem 1rem", display: "inline-block" }}>
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </ShowcaseBlock>

      <ShowcaseBlock title="Dropdown Menu" description="Context-triggered dropdown with rich content">
        <Inline gap="md">
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              Open menu
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent style={{ width: "14rem" }}>
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
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Inline>
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
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <Stack gap="xs" align="start" style={{ maxWidth: "24rem" }}>
          <Inline justify="between" style={{ width: "100%" }}>
            <Text as="h4" size="sm" weight="semibold">
              Starred repositories (3)
            </Text>
            <CollapsibleTrigger aria-label={isOpen ? "Collapse" : "Expand"}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
                style={{ transform: isOpen ? "rotate(180deg)" : undefined, transition: "transform 180ms ease" }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </CollapsibleTrigger>
          </Inline>
          <Text as="code" size="sm" mono style={{ display: "block", width: "100%", padding: "0.5rem 1rem", border: "1px solid var(--border)", borderRadius: "var(--radius-md)" }}>lyttle-user-interface</Text>
          <CollapsibleContent>
            <Stack gap="xs" align="start" style={{ width: "100%" }}>
              <Text as="code" size="sm" mono style={{ display: "block", width: "100%", padding: "0.5rem 1rem", border: "1px solid var(--border)", borderRadius: "var(--radius-md)" }}>lyttle-website</Text>
              <Text as="code" size="sm" mono style={{ display: "block", width: "100%", padding: "0.5rem 1rem", border: "1px solid var(--border)", borderRadius: "var(--radius-md)" }}>lyttle-components</Text>
            </Stack>
          </CollapsibleContent>
          </Stack>
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