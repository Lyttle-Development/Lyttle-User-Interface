'use client';

import * as React from 'react';
import {mergeProps} from '@base-ui/react/merge-props';
import {useRender} from '@base-ui/react/use-render';
import {cva, type VariantProps} from 'class-variance-authority';

import {useIsMobile} from '../../hooks/use-mobile';
import {cn} from '../../lib/utils';
import {Button} from '../button';
import {Input} from '../input';
import {Separator} from '../separator';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from '../sheet';
import {Skeleton} from '../skeleton';
import {Tooltip, TooltipContent, TooltipTrigger,} from '../tooltip';
import {PanelLeftIcon} from 'lucide-react';
import styles from './sidebar.module.scss';

const SIDEBAR_COOKIE_NAME = 'sidebar_state';
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = '16rem';
const SIDEBAR_WIDTH_MOBILE = '18rem';
const SIDEBAR_WIDTH_ICON = '3rem';
const SIDEBAR_KEYBOARD_SHORTCUT = 'b';

type SidebarContextProps = {
    state: 'expanded' | 'collapsed'
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    openMobile: boolean
    setOpenMobile: React.Dispatch<React.SetStateAction<boolean>>
    isMobile: boolean
    toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null);

function useSidebar() {
    const context = React.useContext(SidebarContext);
    if (!context) {
        throw new Error('useSidebar must be used within a SidebarProvider.');
    }

    return context;
}

function SidebarProvider({
                             defaultOpen = true,
                             open: openProp,
                             onOpenChange: setOpenProp,
                             className,
                             style,
                             children,
                             ...props
                         }: React.ComponentProps<'div'> & {
    defaultOpen?: boolean
    open?: boolean
    onOpenChange?: (open: boolean) => void
}) {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React.useState(false);

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = React.useCallback(
        (value: boolean | ((value: boolean) => boolean)) => {
            const openState = typeof value === 'function' ? value(open) : value;
            if (setOpenProp) {
                setOpenProp(openState);
            } else {
                _setOpen(openState);
            }

            // This sets the cookie to keep the sidebar state.
            document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
        },
        [setOpenProp, open]
    );

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
        return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
    }, [isMobile, setOpen, setOpenMobile]);

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (
                event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
                (event.metaKey || event.ctrlKey)
            ) {
                event.preventDefault();
                toggleSidebar();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [toggleSidebar]);

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? 'expanded' : 'collapsed';

    const contextValue = React.useMemo<SidebarContextProps>(
        () => ({
            state,
            open,
            setOpen,
            isMobile,
            openMobile,
            setOpenMobile,
            toggleSidebar,
        }),
        [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    );

    return (
        <SidebarContext.Provider value={contextValue}>
            <div
                data-slot="sidebar-wrapper"
                style={
                    {
                        '--sidebar-width': SIDEBAR_WIDTH,
                        '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
                        ...style,
                    } as React.CSSProperties
                }
                className={cn(
                    styles.wrapper,
                    className
                )}
                {...props}
            >
                {children}
            </div>
        </SidebarContext.Provider>
    );
}

function Sidebar({
                     side = 'left',
                     variant = 'sidebar',
                     collapsible = 'offcanvas',
                     className,
                     children,
                     dir,
                     ...props
                 }: React.ComponentProps<'div'> & {
    side?: 'left' | 'right'
    variant?: 'sidebar' | 'floating' | 'inset'
    collapsible?: 'offcanvas' | 'icon' | 'none'
}) {
    const {isMobile, state, openMobile, setOpenMobile} = useSidebar();

    if (collapsible === 'none') {
        return (
            <div
                data-slot="sidebar"
                data-motion-surface
                className={cn(
                    styles.sidebarStatic,
                    className
                )}
                {...props}
            >
                {children}
            </div>
        );
    }

    if (isMobile) {
        return (
            <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
                <SheetContent
                    dir={dir}
                    data-sidebar="sidebar"
                    data-slot="sidebar"
                    data-mobile="true"
                    data-motion-surface
                    className={styles.mobileSheetContent}
                    style={
                        {
                            '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
                        } as React.CSSProperties
                    }
                    side={side}
                >
                    <SheetHeader className="sr-only">
                        <SheetTitle>Sidebar</SheetTitle>
                        <SheetDescription>Displays the mobile
                            sidebar.</SheetDescription>
                    </SheetHeader>
                    <div
                        className={styles.mobileSidebarContent}>{children}</div>
                </SheetContent>
            </Sheet>
        );
    }

    return (
        <div
            className={styles.desktopRoot}
            data-state={state}
            data-collapsible={state === 'collapsed' ? collapsible : ''}
            data-variant={variant}
            data-side={side}
            data-slot="sidebar"
            data-motion-surface
        >
            {/* This is what handles the sidebar gap on desktop */}
            <div
                data-slot="sidebar-gap"
                className={styles.sidebarGap}
            />
            <div
                data-slot="sidebar-container"
                data-side={side}
                className={cn(
                    styles.sidebarContainer,
                    className
                )}
                {...props}
            >
                <div
                    data-sidebar="sidebar"
                    data-slot="sidebar-inner"
                    data-motion-surface
                    className={styles.sidebarInner}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}

function SidebarTrigger({
                            className,
                            onClick,
                            ...props
                        }: React.ComponentProps<typeof Button>) {
    const {toggleSidebar} = useSidebar();

    return (
        <Button
            data-sidebar="trigger"
            data-slot="sidebar-trigger"
            variant="ghost"
            size="icon-sm"
            className={cn(styles.trigger, className)}
            onClick={(event) => {
                onClick?.(event);
                toggleSidebar();
            }}
            {...props}
        >
            <PanelLeftIcon/>
            <span className="sr-only">Toggle Sidebar</span>
        </Button>
    );
}

function SidebarRail({className, ...props}: React.ComponentProps<'button'>) {
    const {toggleSidebar} = useSidebar();

    return (
        <button
            data-sidebar="rail"
            data-slot="sidebar-rail"
            data-motion-trigger
            aria-label="Toggle Sidebar"
            tabIndex={-1}
            onClick={toggleSidebar}
            title="Toggle Sidebar"
            className={cn(
                styles.rail,
                className
            )}
            {...props}
        />
    );
}

function SidebarInset({className, ...props}: React.ComponentProps<'main'>) {
    return (
        <main
            data-slot="sidebar-inset"
            className={cn(
                styles.inset,
                className
            )}
            {...props}
        />
    );
}

function SidebarInput({
                          className,
                          ...props
                      }: React.ComponentProps<typeof Input>) {
    return (
        <Input
            data-slot="sidebar-input"
            data-sidebar="input"
            className={cn(styles.input, className)}
            {...props}
        />
    );
}

function SidebarHeader({className, ...props}: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="sidebar-header"
            data-sidebar="header"
            className={cn(styles.header, className)}
            {...props}
        />
    );
}

function SidebarFooter({className, ...props}: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="sidebar-footer"
            data-sidebar="footer"
            className={cn(styles.footer, className)}
            {...props}
        />
    );
}

function SidebarSeparator({
                              className,
                              ...props
                          }: React.ComponentProps<typeof Separator>) {
    return (
        <Separator
            data-slot="sidebar-separator"
            data-sidebar="separator"
            className={cn(styles.separator, className)}
            {...props}
        />
    );
}

function SidebarContent({className, ...props}: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="sidebar-content"
            data-sidebar="content"
            className={cn(
                styles.content,
                className
            )}
            {...props}
        />
    );
}

function SidebarGroup({className, ...props}: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="sidebar-group"
            data-sidebar="group"
            className={cn(styles.group, className)}
            {...props}
        />
    );
}

function SidebarGroupLabel({
                               className,
                               render,
                               ...props
                           }: useRender.ComponentProps<'div'> & React.ComponentProps<'div'>) {
    return useRender({
        defaultTagName: 'div',
        props: mergeProps<'div'>(
            {
                className: cn(
                    styles.groupLabel,
                    className
                ),
            },
            props
        ),
        render,
        state: {
            slot: 'sidebar-group-label',
            sidebar: 'group-label',
        },
    });
}

function SidebarGroupAction({
                                className,
                                render,
                                ...props
                            }: useRender.ComponentProps<'button'> & React.ComponentProps<'button'>) {
    return useRender({
        defaultTagName: 'button',
        props: mergeProps<'button'>(
            {
                className: cn(
                    styles.groupAction,
                    className
                ),
            },
            props
        ),
        render,
        state: {
            slot: 'sidebar-group-action',
            sidebar: 'group-action',
        },
    });
}

function SidebarGroupContent({
                                 className,
                                 ...props
                             }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="sidebar-group-content"
            data-sidebar="group-content"
            className={cn(styles.groupContent, className)}
            {...props}
        />
    );
}

function SidebarMenu({className, ...props}: React.ComponentProps<'ul'>) {
    return (
        <ul
            data-slot="sidebar-menu"
            data-sidebar="menu"
            className={cn(styles.menu, className)}
            {...props}
        />
    );
}

function SidebarMenuItem({className, ...props}: React.ComponentProps<'li'>) {
    return (
        <li
            data-slot="sidebar-menu-item"
            data-sidebar="menu-item"
            className={cn(styles.menuItem, className)}
            {...props}
        />
    );
}

const sidebarMenuButtonVariants = cva(
    styles.menuButton,
    {
        variants: {
            variant: {
                default: styles.menuButtonDefault,
                outline: styles.menuButtonOutline,
            },
            size: {
                default: styles.menuButtonSizeDefault,
                sm: styles.menuButtonSizeSm,
                lg: styles.menuButtonSizeLg,
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

function SidebarMenuButton({
                               render,
                               isActive = false,
                               variant = 'default',
                               size = 'default',
                               tooltip,
                               className,
                               ...props
                           }: useRender.ComponentProps<'button'> &
    React.ComponentProps<'button'> & {
    isActive?: boolean
    tooltip?: string | React.ComponentProps<typeof TooltipContent>
} & VariantProps<typeof sidebarMenuButtonVariants>) {
    const {isMobile, state} = useSidebar();
    const comp = useRender({
        defaultTagName: 'button',
        props: mergeProps<'button'>(
            {
                className: cn(sidebarMenuButtonVariants({
                    variant,
                    size
                }), className),
            },
            props
        ),
        render: !tooltip ? render : <TooltipTrigger render={render}/>,
        state: {
            slot: 'sidebar-menu-button',
            sidebar: 'menu-button',
            size,
            active: isActive,
        },
    });

    if (!tooltip) {
        return comp;
    }

    if (typeof tooltip === 'string') {
        tooltip = {
            children: tooltip,
        };
    }

    return (
        <Tooltip>
            {comp}
            <TooltipContent
                side="right"
                align="center"
                hidden={state !== 'collapsed' || isMobile}
                {...tooltip}
            />
        </Tooltip>
    );
}

function SidebarMenuAction({
                               className,
                               render,
                               size = 'default',
                               showOnHover = false,
                               ...props
                           }: useRender.ComponentProps<'button'> &
    React.ComponentProps<'button'> & {
    size?: 'default' | 'sm' | 'lg'
    showOnHover?: boolean
}) {
    return useRender({
        defaultTagName: 'button',
        props: mergeProps<'button'>(
            {
                className: cn(
                    styles.menuAction,
                    showOnHover && styles.menuActionShowOnHover,
                    className
                ),
            },
            props
        ),
        render,
        state: {
            slot: 'sidebar-menu-action',
            sidebar: 'menu-action',
            size,
        },
    });
}

function SidebarMenuBadge({
                              className,
                              ...props
                          }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="sidebar-menu-badge"
            data-sidebar="menu-badge"
            className={cn(
                styles.menuBadge,
                className
            )}
            {...props}
        />
    );
}

function SidebarMenuSkeleton({
                                 className,
                                 showIcon = false,
                                 ...props
                             }: React.ComponentProps<'div'> & {
    showIcon?: boolean
}) {
    // Random width between 50 to 90%.
    const [width] = React.useState(() => {
        return `${Math.floor(Math.random() * 40) + 50}%`;
    });

    return (
        <div
            data-slot="sidebar-menu-skeleton"
            data-sidebar="menu-skeleton"
            className={cn(styles.menuSkeleton, className)}
            {...props}
        >
            {showIcon && (
                <Skeleton
                    className={styles.menuSkeletonIcon}
                    data-sidebar="menu-skeleton-icon"
                />
            )}
            <Skeleton
                className={styles.menuSkeletonText}
                data-sidebar="menu-skeleton-text"
                style={
                    {
                        '--skeleton-width': width,
                    } as React.CSSProperties
                }
            />
        </div>
    );
}

function SidebarMenuSub({className, ...props}: React.ComponentProps<'ul'>) {
    return (
        <ul
            data-slot="sidebar-menu-sub"
            data-sidebar="menu-sub"
            className={cn(
                styles.menuSub,
                className
            )}
            {...props}
        />
    );
}

function SidebarMenuSubItem({
                                className,
                                ...props
                            }: React.ComponentProps<'li'>) {
    return (
        <li
            data-slot="sidebar-menu-sub-item"
            data-sidebar="menu-sub-item"
            className={cn(styles.menuSubItem, className)}
            {...props}
        />
    );
}

function SidebarMenuSubButton({
                                  render,
                                  size = 'md',
                                  isActive = false,
                                  className,
                                  ...props
                              }: useRender.ComponentProps<'a'> &
    React.ComponentProps<'a'> & {
    size?: 'sm' | 'md'
    isActive?: boolean
}) {
    return useRender({
        defaultTagName: 'a',
        props: mergeProps<'a'>(
            {
                className: cn(
                    styles.menuSubButton,
                    className
                ),
            },
            props
        ),
        render,
        state: {
            slot: 'sidebar-menu-sub-button',
            sidebar: 'menu-sub-button',
            size,
            active: isActive,
        },
    });
}

export {
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
    SidebarMenuSkeleton,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarProvider,
    SidebarRail,
    SidebarSeparator,
    SidebarTrigger,
    useSidebar,
};

