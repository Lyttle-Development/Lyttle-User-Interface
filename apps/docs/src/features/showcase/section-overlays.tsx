'use client';

import * as React from 'react';
import {ShowcaseBlock, ShowcaseSection} from './showcase-section';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    Avatar,
    AvatarFallback,
    AvatarImage,
    Badge,
    Button,
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuTrigger,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
    Input,
    Label,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from '@lyttle-development/ui';
import {
    Grid,
    Heading,
    Inline,
    Stack,
    Text
} from '@lyttle-development/ui';

export function SectionOverlays() {
    const [commandOpen, setCommandOpen] = React.useState(false);

    React.useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key.toLowerCase() !== 'k' || (!event.metaKey && !event.ctrlKey)) {
                return;
            }

            event.preventDefault();
            setCommandOpen(true);
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <ShowcaseSection
            id="overlays"
            title="Overlays & Floating UI"
            description="Dialogs, sheets, drawers, popovers, hover cards, context menus, and command palette."
        >
            <ShowcaseBlock title="Dialog"
                           description="Accessible modal dialogs with focus trap">
                <Inline gap="sm">
                    <Dialog>
                        <DialogTrigger render={<Button variant="outline"/>}>Open
                            dialog</DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Edit profile</DialogTitle>
                                <DialogDescription>
                                    Make changes to your profile here. Click
                                    save when you&apos;re done.
                                </DialogDescription>
                            </DialogHeader>
                            <Stack gap="md" style={{paddingBlock: '1rem'}}>
                                <Stack gap="xs" align="start">
                                    <Label htmlFor="dlg-name">Name</Label>
                                    <Input id="dlg-name"
                                           defaultValue="Jane Doe"/>
                                </Stack>
                                <Stack gap="xs" align="start">
                                    <Label
                                        htmlFor="dlg-username">Username</Label>
                                    <Input id="dlg-username"
                                           defaultValue="@janedoe"/>
                                </Stack>
                            </Stack>
                            <DialogFooter>
                                <Button type="submit" variant="brand">
                                    Save changes
                                </Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </Inline>
            </ShowcaseBlock>

            <ShowcaseBlock title="Alert Dialog"
                           description="Destructive action confirmation">
                <AlertDialog>
                    <AlertDialogTrigger render={<Button variant="danger"/>}>
                        Delete account
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely
                                sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. Your account and
                                all associated data
                                will be permanently deleted from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction variant="danger">
                                Yes, delete account
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </ShowcaseBlock>

            <ShowcaseBlock title="Sheet"
                           description="Side-anchored sliding panel — all four sides">
                <Inline gap="sm">
                    {(['left', 'right', 'top', 'bottom'] as const).map((side) => (
                        <Sheet key={side}>
                            <SheetTrigger render={<Button
                                variant="outline"/>}>{side}</SheetTrigger>
                            <SheetContent side={side}>
                                <SheetHeader>
                                    <SheetTitle>Sheet — {side}</SheetTitle>
                                    <SheetDescription>
                                        A sliding panel that emerges from
                                        the {side}. Use for navigation,
                                        filters, detail views, or any contextual
                                        content.
                                    </SheetDescription>
                                </SheetHeader>
                                <Stack gap="xs" align="start"
                                       style={{paddingBlock: '1.5rem'}}>
                                    <Label
                                        htmlFor={`sheet-${side}-name`}>Name</Label>
                                    <Input id={`sheet-${side}-name`}
                                           placeholder="Enter name…"/>
                                </Stack>
                                <SheetFooter>
                                    <Button variant="brand">
                                        Save
                                    </Button>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                    ))}
                </Inline>
            </ShowcaseBlock>

            <ShowcaseBlock title="Drawer"
                           description="Bottom drawer for mobile-friendly interactions">
                <Drawer>
                    <DrawerTrigger asChild>
                        <Button variant="outline">Open drawer</Button>
                    </DrawerTrigger>
                    <DrawerContent>
                        <Stack align="center" style={{
                            width: '100%',
                            maxWidth: '24rem',
                            marginInline: 'auto'
                        }}>
                            <DrawerHeader>
                                <DrawerTitle>Move Goal</DrawerTitle>
                                <DrawerDescription>Set your daily activity
                                    goal.</DrawerDescription>
                            </DrawerHeader>
                            <Stack gap="xs" align="center"
                                   style={{padding: '1rem 1rem 0'}}>
                                <Heading as="p" size="5xl"
                                         align="center">2,500</Heading>
                                <Text as="p" size="sm" tone="muted"
                                      align="center">steps / day</Text>
                            </Stack>
                            <DrawerFooter>
                                <Button variant="brand">
                                    Submit
                                </Button>
                                <DrawerClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DrawerClose>
                            </DrawerFooter>
                        </Stack>
                    </DrawerContent>
                </Drawer>
            </ShowcaseBlock>

            <ShowcaseBlock title="Popover"
                           description="Floating anchored panel">
                <Inline gap="md">
                    <Popover>
                        <PopoverTrigger render={<Button variant="outline"/>}>Open
                            popover</PopoverTrigger>
                        <PopoverContent style={{width: '20rem'}}>
                            <Stack gap="sm" align="start">
                                <Text as="h4" size="sm"
                                      weight="semibold">Dimensions</Text>
                                <Text as="p" size="xs" tone="muted">Set the
                                    element dimensions.</Text>
                                <Grid gap="sm" columns={1}>
                                    {['Width', 'Max width', 'Height'].map((label) => (
                                        <Grid key={label} columns={3} gap="md"
                                              style={{alignItems: 'center'}}>
                                            <Text as="span" size="xs"
                                                  align="right">{label}</Text>
                                            <Input defaultValue="100%" style={{
                                                gridColumn: 'span 2 / span 2',
                                                minHeight: '2rem'
                                            }}/>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Stack>
                        </PopoverContent>
                    </Popover>
                </Inline>
            </ShowcaseBlock>

            <ShowcaseBlock title="Hover Card"
                           description="Rich preview card on hover">
                <Inline gap="md">
                    <HoverCard>
                        <HoverCardTrigger render={<Button variant="link"/>}>
                            @lyttledevelopment
                        </HoverCardTrigger>
                        <HoverCardContent style={{width: '20rem'}}>
                            <Inline gap="md" wrap={false} align="start">
                                <Avatar>
                                    <AvatarImage
                                        src="https://github.com/vercel.png"
                                        alt="Lyttle Development"/>
                                    <AvatarFallback style={{
                                        background: 'var(--brand-gradient-primary)',
                                        color: 'white',
                                        fontWeight: 700
                                    }}>LD</AvatarFallback>
                                </Avatar>
                                <Stack gap="xs" align="start">
                                    <Text as="h4" size="sm" weight="semibold">Lyttle
                                        Development</Text>
                                    <Text as="p" size="xs" tone="muted">
                                        Building accessible design systems and
                                        web products.
                                    </Text>
                                    <Inline gap="sm">
                                        <Badge
                                            variant="secondary">Design</Badge>
                                        <Badge variant="secondary">Dev</Badge>
                                    </Inline>
                                </Stack>
                            </Inline>
                        </HoverCardContent>
                    </HoverCard>
                </Inline>
            </ShowcaseBlock>

            <ShowcaseBlock title="Context Menu"
                           description="Right-click contextual actions">
                <ContextMenu>
                    <ContextMenuTrigger
                        render={<Text as="div" size="sm" tone="muted"
                                      align="center" style={{
                            display: 'flex',
                            minHeight: '8rem',
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px dashed var(--border)',
                            borderRadius: 'var(--radius-lg)',
                            background: 'color-mix(in oklab, var(--muted) 30%, transparent)'
                        }}/>}
                        aria-label="Right-click area"
                    >
                        Right-click here to open context menu
                    </ContextMenuTrigger>
                    <ContextMenuContent style={{width: '12rem'}}>
                        <ContextMenuLabel>Actions</ContextMenuLabel>
                        <ContextMenuItem>View<ContextMenuShortcut>⌘V</ContextMenuShortcut></ContextMenuItem>
                        <ContextMenuItem>Edit<ContextMenuShortcut>⌘E</ContextMenuShortcut></ContextMenuItem>
                        <ContextMenuItem>Duplicate</ContextMenuItem>
                        <ContextMenuSeparator/>
                        <ContextMenuItem>Share</ContextMenuItem>
                        <ContextMenuItem>Export</ContextMenuItem>
                        <ContextMenuSeparator/>
                        <ContextMenuItem>
                            Delete<ContextMenuShortcut>⌫</ContextMenuShortcut>
                        </ContextMenuItem>
                    </ContextMenuContent>
                </ContextMenu>
            </ShowcaseBlock>

            <ShowcaseBlock title="Command Palette"
                           description="⌘K-style searchable command menu">
                <Stack style={{
                    maxWidth: '28rem',
                    overflow: 'hidden',
                    borderRadius: 'var(--radius-xl)',
                    border: '1px solid color-mix(in oklab, var(--border) 70%, transparent)',
                    background: 'var(--card)',
                    boxShadow: 'var(--shadow-sm)'
                }}>
                    <Stack gap="xs" style={{
                        padding: '0.75rem 1rem',
                        borderBottom: '1px solid color-mix(in oklab, var(--border) 60%, transparent)',
                        background: 'color-mix(in oklab, var(--muted) 25%, transparent)'
                    }}>
                        <Text as="p" size="sm" weight="semibold">Quick
                            actions</Text>
                        <Text as="p" size="xs" tone="muted">Open the command
                            palette on demand without shifting the page on
                            load.</Text>
                    </Stack>
                    <Stack gap="sm" align="start" style={{padding: '1rem'}}>
                        <Button variant="outline" onClick={() => setCommandOpen(true)}>
                            Open command palette
                        </Button>
                        <Text as="p" size="xs" tone="muted">
                            Keyboard shortcut: <kbd>Ctrl</kbd> + <kbd>K</kbd> or <kbd>⌘</kbd> + <kbd>K</kbd>
                        </Text>
                    </Stack>
                    <CommandDialog
                        open={commandOpen}
                        onOpenChange={setCommandOpen}
                        title="Quick actions"
                        description="Search commands, files, and preferences."
                    >
                        <Command>
                            <CommandInput placeholder="Type a command or search…"/>
                            <CommandList>
                                <CommandEmpty>No results found.</CommandEmpty>
                                <CommandGroup heading="Suggestions">
                                    <CommandItem>
                                        <svg style={{marginRight: '0.5rem'}}
                                             width="14" height="14"
                                             viewBox="0 0 24 24" fill="none"
                                             stroke="currentColor" strokeWidth="2"
                                             aria-hidden="true">
                                            <rect x="3" y="3" width="18" height="18"
                                                  rx="2"/>
                                            <path d="M9 9h6M9 12h6M9 15h4"/>
                                        </svg>
                                        New Document
                                        <CommandShortcut>⌘N</CommandShortcut>
                                    </CommandItem>
                                    <CommandItem>
                                        <svg style={{marginRight: '0.5rem'}}
                                             width="14" height="14"
                                             viewBox="0 0 24 24" fill="none"
                                             stroke="currentColor" strokeWidth="2"
                                             aria-hidden="true">
                                            <circle cx="11" cy="11" r="8"/>
                                            <line x1="21" y1="21" x2="16.65"
                                                  y2="16.65"/>
                                        </svg>
                                        Search Files
                                        <CommandShortcut>⌘F</CommandShortcut>
                                    </CommandItem>
                                    <CommandItem>
                                        <svg style={{marginRight: '0.5rem'}}
                                             width="14" height="14"
                                             viewBox="0 0 24 24" fill="none"
                                             stroke="currentColor" strokeWidth="2"
                                             aria-hidden="true">
                                            <path d="M12 20h9"/>
                                            <path
                                                d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/>
                                        </svg>
                                        Edit Profile
                                    </CommandItem>
                                </CommandGroup>
                                <CommandSeparator/>
                                <CommandGroup heading="Settings">
                                    <CommandItem>
                                        <svg style={{marginRight: '0.5rem'}}
                                             width="14" height="14"
                                             viewBox="0 0 24 24" fill="none"
                                             stroke="currentColor" strokeWidth="2"
                                             aria-hidden="true">
                                            <circle cx="12" cy="12" r="3"/>
                                            <path
                                                d="M19.07 4.93l-1.41 1.41M5.34 5.34L3.93 3.93M19.07 19.07l-1.41-1.41M5.34 18.66l-1.41 1.41M22 12h-2M4 12H2M12 22v-2M12 4V2"/>
                                        </svg>
                                        Preferences
                                        <CommandShortcut>⌘,</CommandShortcut>
                                    </CommandItem>
                                    <CommandItem>Theme</CommandItem>
                                    <CommandItem>Keyboard Shortcuts</CommandItem>
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </CommandDialog>
                </Stack>
            </ShowcaseBlock>
        </ShowcaseSection>
    );
}