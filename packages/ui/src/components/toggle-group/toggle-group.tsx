'use client';

import * as React from 'react';
import {Toggle as TogglePrimitive} from '@base-ui/react/toggle';
import {ToggleGroup as ToggleGroupPrimitive} from '@base-ui/react/toggle-group';
import {type VariantProps} from 'class-variance-authority';

import {cn} from '../../lib/utils';
import styles from './toggle-group.module.scss';
import {toggleVariants} from '../toggle';

const ToggleGroupContext = React.createContext<
    VariantProps<typeof toggleVariants> & {
    spacing?: number
    orientation?: 'horizontal' | 'vertical'
}
>({
    size: 'default',
    variant: 'default',
    spacing: 0,
    orientation: 'horizontal',
});

function ToggleGroup({
                         className,
                         variant,
                         size,
                         spacing = 0,
                         orientation = 'horizontal',
                         children,
                         ...props
                     }: ToggleGroupPrimitive.Props &
    VariantProps<typeof toggleVariants> & {
    spacing?: number
    orientation?: 'horizontal' | 'vertical'
}) {
    return (
        <ToggleGroupPrimitive
            data-slot="toggle-group"
            data-variant={variant}
            data-size={size}
            data-orientation={orientation}
            data-collapsed={spacing === 0 ? 'true' : 'false'}
            style={{'--toggle-group-gap': `${spacing * 0.25}rem`} as React.CSSProperties}
            className={cn(styles.group, className)}
            {...props}
        >
            <ToggleGroupContext.Provider
                value={{variant, size, spacing, orientation}}
            >
                {children}
            </ToggleGroupContext.Provider>
        </ToggleGroupPrimitive>
    );
}

function ToggleGroupItem({
                             className,
                             children,
                             variant = 'default',
                             size = 'default',
                             ...props
                         }: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
    const context = React.useContext(ToggleGroupContext);

    return (
        <TogglePrimitive
            data-slot="toggle-group-item"
            data-variant={context.variant || variant}
            data-size={context.size || size}
            data-collapsed={context.spacing === 0 ? 'true' : 'false'}
            className={cn(
                styles.item,
                toggleVariants({
                    variant: context.variant || variant,
                    size: context.size || size,
                }),
                className
            )}
            {...props}
        >
            {children}
        </TogglePrimitive>
    );
}

export {ToggleGroup, ToggleGroupItem};

