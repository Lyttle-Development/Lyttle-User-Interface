'use client';

import * as React from 'react';

import {composeRefs, useInteractiveMotion} from '../../lib/motion';
import {cn} from '../../lib/utils';
import styles from './card.module.scss';

const Card = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'> & {
    size?: 'default' | 'sm'
}>(
    function Card({className, size = 'default', ...props}, ref) {
        const motion = useInteractiveMotion<HTMLDivElement>({disabled: true});
        const {
            onBlur,
            onFocus,
            onPointerCancel,
            onPointerDown,
            onPointerEnter,
            onPointerLeave,
            onPointerUp,
            ...cardProps
        } = props;

        return (
            <div
                ref={composeRefs(ref, motion.ref)}
                data-slot="card"
                data-size={size}
                data-motion-surface
                data-motion-managed="gsap"
                className={cn(styles.card, className)}
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
                {...cardProps}
            />
        );
    }
);

Card.displayName = 'Card';

function CardHeader({className, ...props}: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="card-header"
            className={cn(styles.header, className)}
            {...props}
        />
    );
}

function CardTitle({className, ...props}: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="card-title"
            className={cn(styles.title, className)}
            {...props}
        />
    );
}

function CardDescription({className, ...props}: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="card-description"
            className={cn(styles.description, className)}
            {...props}
        />
    );
}

function CardAction({className, ...props}: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="card-action"
            className={cn(styles.action, className)}
            {...props}
        />
    );
}

function CardContent({className, ...props}: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="card-content"
            className={cn(styles.content, className)}
            {...props}
        />
    );
}

function CardFooter({className, ...props}: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="card-footer"
            className={cn(styles.footer, className)}
            {...props}
        />
    );
}

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
};

