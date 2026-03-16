'use client';

import * as React from 'react';
import type {VariantProps} from 'class-variance-authority';

import {composeRefs, useInteractiveMotion} from '../../lib/motion';
import {cn} from '../../lib/utils';
import styles from './alert.module.scss';
import {alertVariants} from './variants';

const Alert = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<'div'> & VariantProps<typeof alertVariants>
>(function Alert({className, variant, ...props}, ref) {
    const motion = useInteractiveMotion<HTMLDivElement>({
        hoverScale: 1.006,
        hoverY: -2,
        pressScale: 0.995,
    });
    const {
        onBlur,
        onFocus,
        onPointerCancel,
        onPointerDown,
        onPointerEnter,
        onPointerLeave,
        onPointerUp,
        ...alertProps
    } = props;

    return (
        <div
            ref={composeRefs(ref, motion.ref)}
            data-slot="alert"
            data-motion-surface
            data-motion-managed="gsap"
            role="alert"
            className={cn(alertVariants({variant}), className)}
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
            {...alertProps}
        />
    );
});

Alert.displayName = 'Alert';

function AlertTitle({className, ...props}: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="alert-title"
            className={cn(styles.title, className)}
            {...props}
        />
    );
}

function AlertDescription({
                              className,
                              ...props
                          }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="alert-description"
            className={cn(styles.description, className)}
            {...props}
        />
    );
}

function AlertAction({className, ...props}: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="alert-action"
            className={cn(styles.action, className)}
            {...props}
        />
    );
}

export {Alert, AlertTitle, AlertDescription, AlertAction};

