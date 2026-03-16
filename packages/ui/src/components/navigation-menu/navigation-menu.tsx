'use client';

import * as React from 'react';
import {
    NavigationMenu as NavigationMenuPrimitive
} from '@base-ui/react/navigation-menu';
import {cva} from 'class-variance-authority';

import {
    composeRefs,
    floatingMotionRender,
    useInteractiveMotion
} from '../../lib/motion';
import {cn} from '../../lib/utils';
import {ChevronDownIcon} from 'lucide-react';
import styles from './navigation-menu.module.scss';

function NavigationMenu({
                            align = 'start',
                            className,
                            children,
                            ...props
                        }: NavigationMenuPrimitive.Root.Props &
    Pick<NavigationMenuPrimitive.Positioner.Props, 'align'>) {
    return (
        <NavigationMenuPrimitive.Root
            data-slot="navigation-menu"
            className={cn(styles.root, className)}
            {...props}
        >
            {children}
            <NavigationMenuPositioner align={align}/>
        </NavigationMenuPrimitive.Root>
    );
}

function NavigationMenuList({
                                className,
                                ...props
                            }: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.List>) {
    return (
        <NavigationMenuPrimitive.List
            data-slot="navigation-menu-list"
            className={cn(styles.list, className)}
            {...props}
        />
    );
}

function NavigationMenuItem({
                                className,
                                ...props
                            }: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Item>) {
    return (
        <NavigationMenuPrimitive.Item
            data-slot="navigation-menu-item"
            className={cn(styles.item, className)}
            {...props}
        />
    );
}

const navigationMenuTriggerStyle = cva(
    styles.trigger
);

const NavigationMenuTrigger = React.forwardRef<
    HTMLButtonElement,
    NavigationMenuPrimitive.Trigger.Props
>(function NavigationMenuTrigger({className, children, ...props}, ref) {
    const motion = useInteractiveMotion<HTMLButtonElement>({
        hoverY: -1,
        hoverScale: 1.01
    });
    const {
        onBlur,
        onFocus,
        onPointerCancel,
        onPointerDown,
        onPointerEnter,
        onPointerLeave,
        onPointerUp,
        ...triggerProps
    } = props;

    return (
        <NavigationMenuPrimitive.Trigger
            ref={composeRefs(ref, motion.ref)}
            data-slot="navigation-menu-trigger"
            data-motion-trigger
            data-motion-managed="gsap"
            className={cn(navigationMenuTriggerStyle(), className)}
            onBlur={(event) => {
                onBlur?.(event);
                motion.handlers.onBlur?.(event);
            }}
            onFocus={(event) => {
                onFocus?.(event);
                motion.handlers.onFocus?.(event);
            }}
            onPointerCancel={(event) => {
                onPointerCancel?.(event);
                motion.handlers.onPointerCancel?.(event);
            }}
            onPointerDown={(event) => {
                onPointerDown?.(event);
                motion.handlers.onPointerDown?.(event);
            }}
            onPointerEnter={(event) => {
                onPointerEnter?.(event);
                motion.handlers.onPointerEnter?.(event);
            }}
            onPointerLeave={(event) => {
                onPointerLeave?.(event);
                motion.handlers.onPointerLeave?.(event);
            }}
            onPointerUp={(event) => {
                onPointerUp?.(event);
                motion.handlers.onPointerUp?.(event);
            }}
            {...triggerProps}
        >
            {children}
            <ChevronDownIcon className={styles.triggerIcon} aria-hidden="true"/>
        </NavigationMenuPrimitive.Trigger>
    );
});

NavigationMenuTrigger.displayName = 'NavigationMenuTrigger';

function NavigationMenuContent({
                                   className,
                                   ...props
                               }: NavigationMenuPrimitive.Content.Props) {
    return (
        <NavigationMenuPrimitive.Content
            data-slot="navigation-menu-content"
            className={cn(styles.content, className)}
            {...props}
        />
    );
}

function NavigationMenuPositioner({
                                      className,
                                      side = 'bottom',
                                      sideOffset = 8,
                                      align = 'start',
                                      alignOffset = 0,
                                      ...props
                                  }: NavigationMenuPrimitive.Positioner.Props) {
    return (
        <NavigationMenuPrimitive.Portal>
            <NavigationMenuPrimitive.Positioner
                side={side}
                sideOffset={sideOffset}
                align={align}
                alignOffset={alignOffset}
                className={cn(styles.positioner, className)}
                {...props}
            >
                <NavigationMenuPrimitive.Popup
                    className={styles.popup}
                    data-motion-floating
                    render={floatingMotionRender}
                >
                    <NavigationMenuPrimitive.Viewport
                        className={styles.viewport}/>
                </NavigationMenuPrimitive.Popup>
            </NavigationMenuPrimitive.Positioner>
        </NavigationMenuPrimitive.Portal>
    );
}

function NavigationMenuLink({
                                className,
                                ...props
                            }: NavigationMenuPrimitive.Link.Props) {
    return (
        <NavigationMenuPrimitive.Link
            data-slot="navigation-menu-link"
            className={cn(styles.link, className)}
            {...props}
        />
    );
}

function NavigationMenuIndicator({
                                     className,
                                     ...props
                                 }: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Icon>) {
    return (
        <NavigationMenuPrimitive.Icon
            data-slot="navigation-menu-indicator"
            className={cn(styles.indicator, className)}
            {...props}
        >
            <div className={styles.indicatorArrow}/>
        </NavigationMenuPrimitive.Icon>
    );
}

export {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
    NavigationMenuPositioner,
};

