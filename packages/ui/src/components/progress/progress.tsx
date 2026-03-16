'use client';

import type {CSSProperties} from 'react';
import {Progress as ProgressPrimitive} from '@base-ui/react/progress';

import {cn} from '../../lib/utils';
import styles from './progress.module.scss';

function Progress({
                      className,
                      children,
                      max = 100,
                      value,
                      style,
                      ...props
                  }: ProgressPrimitive.Root.Props) {
    const resolvedValue = typeof value === 'number' ? value : 0;
    const clampedValue = Math.min(Math.max(resolvedValue, 0), max);
    const progressScale = max > 0 ? clampedValue / max : 0;
    const rootStyle = {
        ...(style ?? {}),
        '--progress-scale': progressScale,
    } as CSSProperties & { '--progress-scale': number };

    return (
        <ProgressPrimitive.Root
            max={max}
            value={value}
            data-slot="progress"
            data-motion-surface
            className={cn(styles.root, className)}
            style={rootStyle}
            {...props}
        >
            {children}
            <ProgressTrack>
                <ProgressIndicator/>
            </ProgressTrack>
        </ProgressPrimitive.Root>
    );
}

function ProgressTrack({className, ...props}: ProgressPrimitive.Track.Props) {
    return (
        <ProgressPrimitive.Track
            className={cn(styles.track, className)}
            data-slot="progress-track"
            data-motion-surface
            {...props}
        />
    );
}

function ProgressIndicator({
                               className,
                               ...props
                           }: ProgressPrimitive.Indicator.Props) {
    return (
        <ProgressPrimitive.Indicator
            data-slot="progress-indicator"
            data-motion-floating
            className={cn(styles.indicator, className)}
            {...props}
        />
    );
}

function ProgressLabel({className, ...props}: ProgressPrimitive.Label.Props) {
    return (
        <ProgressPrimitive.Label
            className={cn(styles.label, className)}
            data-slot="progress-label"
            {...props}
        />
    );
}

function ProgressValue({className, ...props}: ProgressPrimitive.Value.Props) {
    return (
        <ProgressPrimitive.Value
            className={cn(styles.value, className)}
            data-slot="progress-value"
            {...props}
        />
    );
}

export {
    Progress,
    ProgressTrack,
    ProgressIndicator,
    ProgressLabel,
    ProgressValue,
};

