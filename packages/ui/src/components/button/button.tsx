'use client';

import * as React from 'react';
import {Slot} from '@radix-ui/react-slot';
import {cva, type VariantProps} from 'class-variance-authority';

import {composeRefs, useInteractiveMotion} from '../../lib/motion';
import {cn} from '../../lib/utils';
import styles from './button.module.scss';

const buttonVariants = cva(
    styles.button,
    {
        variants: {
            variant: {
                default: styles.variantDefault,
                outline: styles.variantOutline,
                secondary: styles.variantSecondary,
                ghost: styles.variantGhost,
                destructive: styles.variantDestructive,
                danger: styles.variantDanger,
                brand: styles.variantBrand,
                accent: styles.variantAccent,
                link: styles.variantLink,
            },
            size: {
                default: styles.sizeDefault,
                xs: styles.sizeXs,
                sm: styles.sizeSm,
                lg: styles.sizeLg,
                icon: styles.sizeIcon,
                'icon-xs': styles.sizeIconXs,
                'icon-sm': styles.sizeIconSm,
                'icon-lg': styles.sizeIconLg,
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

type ButtonProps = React.ComponentPropsWithoutRef<'button'> &
    VariantProps<typeof buttonVariants> & {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
    {
        className,
        variant = 'default',
        size = 'default',
        asChild = false,
        ...props
    },
    ref
) {
    const Comp = asChild ? Slot : 'button';
    const motion = useInteractiveMotion<HTMLButtonElement>({
        hoverScale: variant === 'link' ? 1 : 1.015,
        hoverY: 0,
    });
    const {
        onBlur,
        onFocus,
        onPointerCancel,
        onPointerDown,
        onPointerEnter,
        onPointerLeave,
        onPointerUp,
        ...buttonProps
    } = props;

    return (
        <Comp
            ref={asChild ? ref : composeRefs(ref, motion.ref)}
            type={!asChild ? 'button' : undefined}
            data-slot="button"
            data-motion-trigger={!asChild ? true : undefined}
            data-motion-managed={!asChild ? 'gsap' : undefined}
            className={cn(buttonVariants({variant, size, className}))}
            onBlur={(event) => {
                onBlur?.(event);
                if (!asChild) {
                    motion.handlers.onBlur?.(event);
                }
            }}
            onFocus={(event) => {
                onFocus?.(event);
                if (!asChild) {
                    motion.handlers.onFocus?.(event);
                }
            }}
            onPointerCancel={(event) => {
                onPointerCancel?.(event);
                if (!asChild) {
                    motion.handlers.onPointerCancel?.(event);
                }
            }}
            onPointerDown={(event) => {
                onPointerDown?.(event);
                if (!asChild) {
                    motion.handlers.onPointerDown?.(event);
                }
            }}
            onPointerEnter={(event) => {
                onPointerEnter?.(event);
                if (!asChild) {
                    motion.handlers.onPointerEnter?.(event);
                }
            }}
            onPointerLeave={(event) => {
                onPointerLeave?.(event);
                if (!asChild) {
                    motion.handlers.onPointerLeave?.(event);
                }
            }}
            onPointerUp={(event) => {
                onPointerUp?.(event);
                if (!asChild) {
                    motion.handlers.onPointerUp?.(event);
                }
            }}
            {...buttonProps}
        />
    );
});

Button.displayName = 'Button';

export {Button, buttonVariants};

