"use client";

import * as React from "react";
import { ShowcaseSection, ShowcaseBlock } from "./showcase-section";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@lyttle/ui";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@lyttle/ui";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@lyttle/ui";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@lyttle/ui";
import { Popover, PopoverContent, PopoverTrigger } from "@lyttle/ui";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@lyttle/ui";
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuLabel, ContextMenuSeparator, ContextMenuShortcut, ContextMenuTrigger } from "@lyttle/ui";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@lyttle/ui";
import { Button } from "@lyttle/ui";
import { Input } from "@lyttle/ui";
import { Label } from "@lyttle/ui";
import { Avatar, AvatarFallback, AvatarImage } from "@lyttle/ui";
import { Badge } from "@lyttle/ui";

const triggerClass =
  "inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-colors cursor-pointer";

export function SectionOverlays() {
  return (
    <ShowcaseSection
      id="overlays"
      title="Overlays & Floating UI"
      description="Dialogs, sheets, drawers, popovers, hover cards, context menus, and command palette."
    >
      <ShowcaseBlock title="Dialog" description="Accessible modal dialogs with focus trap">
        <div className="flex flex-wrap gap-3">
          <Dialog>
            <DialogTrigger render={<Button variant="outline" className="gap-2" />}>Open dialog</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="dlg-name">Name</Label>
                  <Input id="dlg-name" defaultValue="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dlg-username">Username</Label>
                  <Input id="dlg-username" defaultValue="@janedoe" />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  className="text-white border-0"
                  style={{ background: "var(--brand-gradient-primary)" }}
                >
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Alert Dialog" description="Destructive action confirmation">
        <AlertDialog>
          <AlertDialogTrigger render={<Button className="bg-destructive text-white hover:bg-destructive/90" />}>
            Delete account
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. Your account and all associated data
                will be permanently deleted from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction className="bg-destructive text-white hover:bg-destructive/90">
                Yes, delete account
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </ShowcaseBlock>

      <ShowcaseBlock title="Sheet" description="Side-anchored sliding panel — all four sides">
        <div className="flex flex-wrap gap-3">
          {(["left", "right", "top", "bottom"] as const).map((side) => (
            <Sheet key={side}>
              <SheetTrigger render={<Button variant="outline" className="capitalize" />}>{side}</SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>Sheet — {side}</SheetTitle>
                  <SheetDescription>
                    A sliding panel that emerges from the {side}. Use for navigation,
                    filters, detail views, or any contextual content.
                  </SheetDescription>
                </SheetHeader>
                <div className="py-6">
                  <div className="space-y-2">
                    <Label htmlFor={`sheet-${side}-name`}>Name</Label>
                    <Input id={`sheet-${side}-name`} placeholder="Enter name…" />
                  </div>
                </div>
                <SheetFooter>
                  <Button
                    className="text-white border-0"
                    style={{ background: "var(--brand-gradient-primary)" }}
                  >
                    Save
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Drawer" description="Bottom drawer for mobile-friendly interactions">
        <Drawer>
          <DrawerTrigger className={triggerClass}>Open drawer</DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Move Goal</DrawerTitle>
                <DrawerDescription>Set your daily activity goal.</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 pb-0">
                <p className="text-center text-5xl font-bold text-foreground py-6">2,500</p>
                <p className="text-center text-muted-foreground text-sm">steps / day</p>
              </div>
              <DrawerFooter>
                <Button
                  className="text-white border-0"
                  style={{ background: "var(--brand-gradient-primary)" }}
                >
                  Submit
                </Button>
                <DrawerClose className={triggerClass}>Cancel</DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </ShowcaseBlock>

      <ShowcaseBlock title="Popover" description="Floating anchored panel">
        <div className="flex flex-wrap gap-4">
          <Popover>
            <PopoverTrigger render={<Button variant="outline" />}>Open popover</PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground text-sm">Dimensions</h4>
                <p className="text-xs text-muted-foreground">Set the element dimensions.</p>
                <div className="grid gap-2">
                  {["Width", "Max width", "Height"].map((label) => (
                    <div key={label} className="grid grid-cols-3 items-center gap-4">
                      <Label className="text-right text-xs">{label}</Label>
                      <Input className="col-span-2 h-8 text-xs" defaultValue="100%" />
                    </div>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Hover Card" description="Rich preview card on hover">
        <div className="flex gap-4">
          <HoverCard>
            <HoverCardTrigger render={<span className="text-primary font-medium underline-offset-4 hover:underline cursor-pointer" />}>
              @lyttledevelopment
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="LyttleDevelopment" />
                  <AvatarFallback style={{ background: "var(--brand-gradient-primary)" }} className="text-white font-bold text-xs">LD</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-foreground">LyttleDevelopment</h4>
                  <p className="text-xs text-muted-foreground">
                    Building accessible design systems and web products.
                  </p>
                  <div className="flex items-center gap-2 pt-1">
                    <Badge variant="secondary" className="text-xs">Design</Badge>
                    <Badge variant="secondary" className="text-xs">Dev</Badge>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Context Menu" description="Right-click contextual actions">
        <ContextMenu>
          <ContextMenuTrigger
            render={<div className="flex h-32 w-full items-center justify-center rounded-lg border border-dashed border-border bg-muted/30 text-sm text-muted-foreground cursor-context-menu select-none" />}
            aria-label="Right-click area"
          >
            Right-click here to open context menu
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48">
            <ContextMenuLabel>Actions</ContextMenuLabel>
            <ContextMenuItem>View<ContextMenuShortcut>⌘V</ContextMenuShortcut></ContextMenuItem>
            <ContextMenuItem>Edit<ContextMenuShortcut>⌘E</ContextMenuShortcut></ContextMenuItem>
            <ContextMenuItem>Duplicate</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Share</ContextMenuItem>
            <ContextMenuItem>Export</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem className="text-destructive focus:text-destructive">
              Delete<ContextMenuShortcut>⌫</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </ShowcaseBlock>

      <ShowcaseBlock title="Command Palette" description="⌘K-style searchable command menu">
        <div className="max-w-md overflow-hidden rounded-xl border border-border/70 bg-card shadow-sm">
          <div className="border-b border-border/60 bg-muted/25 px-4 py-3">
            <p className="text-sm font-semibold text-foreground">Quick actions</p>
            <p className="text-xs text-muted-foreground">Search commands, files, and preferences.</p>
          </div>
          <Command>
            <CommandInput placeholder="Type a command or search…" />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <svg className="mr-2" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 9h6M9 12h6M9 15h4" /></svg>
                  New Document
                  <CommandShortcut>⌘N</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <svg className="mr-2" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                  Search Files
                  <CommandShortcut>⌘F</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <svg className="mr-2" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" /></svg>
                  Edit Profile
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <svg className="mr-2" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93l-1.41 1.41M5.34 5.34L3.93 3.93M19.07 19.07l-1.41-1.41M5.34 18.66l-1.41 1.41M22 12h-2M4 12H2M12 22v-2M12 4V2" /></svg>
                  Preferences
                  <CommandShortcut>⌘,</CommandShortcut>
                </CommandItem>
                <CommandItem>Theme</CommandItem>
                <CommandItem>Keyboard Shortcuts</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </ShowcaseBlock>
    </ShowcaseSection>
  );
}