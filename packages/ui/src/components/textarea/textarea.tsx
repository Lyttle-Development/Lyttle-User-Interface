'use client';

import * as React from 'react';

import {composeRefs, useInteractiveMotion} from '../../lib/motion';
import {cn} from '../../lib/utils';
import styles from './textarea.module.scss';

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentPropsWithoutRef<'textarea'>>(
    function Textarea({className, ...props}, ref) {
        const motion = useInteractiveMotion<HTMLTextAreaElement>({disabled: true});
        const {
            onBlur,
            onFocus,
            onPointerCancel,
            onPointerDown,
            onPointerEnter,
            onPointerLeave,
            onPointerUp,
            ...textareaProps
        } = props;

        return (
            <textarea
                ref={composeRefs(ref, motion.ref)}
                data-slot="textarea"
                data-motion-trigger
                data-motion-managed="gsap"
                className={cn(styles.textarea, className)}
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
                {...textareaProps}
            />
        );
    }
);

Textarea.displayName = 'Textarea';

export {Textarea};

