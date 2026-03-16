'use client';

import * as React from 'react';
import {Tabs as TabsPrimitive} from '@base-ui/react/tabs';
import {cva, type VariantProps} from 'class-variance-authority';

import {composeRefs, useInteractiveMotion} from '../../lib/motion';
import {cn} from '../../lib/utils';
import styles from './tabs.module.scss';

function Tabs({
                  className,
                  orientation = 'horizontal',
                  ...props
              }: TabsPrimitive.Root.Props) {
    return (
        <TabsPrimitive.Root
            data-slot="tabs"
            data-orientation={orientation}
            className={cn(styles.tabs, className)}
            {...props}
        />
    );
}

const tabsListVariants = cva(
    styles.list,
    {
        variants: {
            variant: {
                default: styles.listDefault,
                line: styles.listLine,
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

function TabsList({
                      className,
                      variant = 'default',
                      ...props
                  }: TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>) {
    return (
        <TabsPrimitive.List
            data-slot="tabs-list"
            data-variant={variant}
            className={cn(tabsListVariants({variant}), className)}
            {...props}
        />
    );
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsPrimitive.Tab.Props>(
    function TabsTrigger({className, ...props}, ref) {
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
            <TabsPrimitive.Tab
                ref={composeRefs(ref, motion.ref)}
                data-slot="tabs-trigger"
                data-motion-trigger
                data-motion-managed="gsap"
                className={cn(styles.trigger, className)}
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
            />
        );
    }
);

TabsTrigger.displayName = 'TabsTrigger';

function TabsContent({className, ...props}: TabsPrimitive.Panel.Props) {
    return (
        <TabsPrimitive.Panel
            data-slot="tabs-content"
            className={cn(styles.content, className)}
            {...props}
        />
    );
}

export {Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants};

