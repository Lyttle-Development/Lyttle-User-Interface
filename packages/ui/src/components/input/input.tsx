'use client';

import * as React from 'react';

import {composeRefs, useInteractiveMotion} from '../../lib/motion';
import {cn} from '../../lib/utils';
import styles from './input.module.scss';

const Input = React.forwardRef<HTMLInputElement, React.ComponentPropsWithoutRef<'input'> & {
    validation?: 'default' | 'success' | 'error'
}>(
    function Input({className, type, validation = 'default', ...props}, ref) {
        const motion = useInteractiveMotion<HTMLInputElement>({disabled: true});
        const {
            onBlur,
            onFocus,
            onPointerCancel,
            onPointerDown,
            onPointerEnter,
            onPointerLeave,
            onPointerUp,
            ...inputProps
        } = props;

        return (
            <input
                ref={composeRefs(ref, motion.ref)}
                type={type}
                data-slot="input"
                data-validation={validation === 'default' ? undefined : validation}
                data-motion-trigger
                data-motion-managed="gsap"
                className={cn(styles.input, className)}
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
                {...inputProps}
            />
        );
    }
);

Input.displayName = 'Input';

export {Input};

