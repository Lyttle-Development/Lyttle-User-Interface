'use client';

import * as React from 'react';
import {Toggle as TogglePrimitive} from '@base-ui/react/toggle';
import type {VariantProps} from 'class-variance-authority';

import {composeRefs, useInteractiveMotion} from '../../lib/motion';
import {cn} from '../../lib/utils';
import {toggleVariants} from './variants';

const Toggle = React.forwardRef<
    HTMLButtonElement,
    TogglePrimitive.Props & VariantProps<typeof toggleVariants>
>(function Toggle({
                      className,
                      variant = 'default',
                      size = 'default',
                      ...props
                  }, ref) {
    const motion = useInteractiveMotion<HTMLButtonElement>({
        hoverScale: variant === 'default' ? 1.015 : 1.01,
        hoverY: -1,
    });
    const {
        onBlur,
        onFocus,
        onPointerCancel,
        onPointerDown,
        onPointerEnter,
        onPointerLeave,
        onPointerUp,
        ...toggleProps
    } = props;

    return (
        <TogglePrimitive
            ref={composeRefs(ref, motion.ref)}
            data-slot="toggle"
            data-motion-trigger
            data-motion-managed="gsap"
            className={cn(toggleVariants({variant, size, className}))}
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
            {...toggleProps}
        />
    );
});

Toggle.displayName = 'Toggle';

export {Toggle, toggleVariants};

