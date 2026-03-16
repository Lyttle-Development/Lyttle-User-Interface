'use client';

import * as React from 'react';
import {Slider as SliderPrimitive} from '@base-ui/react/slider';

import {cn} from '../../lib/utils';
import styles from './slider.module.scss';

function Slider({
                    className,
                    defaultValue,
                    value,
                    min = 0,
                    max = 100,
                    ...props
                }: SliderPrimitive.Root.Props) {
    const _values = React.useMemo(
        () =>
            Array.isArray(value)
                ? value
                : Array.isArray(defaultValue)
                    ? defaultValue
                    : [min, max],
        [value, defaultValue, min, max]
    );

    return (
        <SliderPrimitive.Root
            className={cn(styles.slider, className)}
            data-slot="slider"
            defaultValue={defaultValue}
            value={value}
            min={min}
            max={max}
            thumbAlignment="edge"
            {...props}
        >
            <SliderPrimitive.Control className={styles.control}>
                <SliderPrimitive.Track
                    data-slot="slider-track"
                    className={styles.track}
                >
                    <SliderPrimitive.Indicator
                        data-slot="slider-range"
                        className={styles.range}
                    />
                </SliderPrimitive.Track>
                {Array.from({length: _values.length}, (_, index) => (
                    <SliderPrimitive.Thumb
                        data-slot="slider-thumb"
                        key={index}
                        className={styles.thumb}
                    />
                ))}
            </SliderPrimitive.Control>
        </SliderPrimitive.Root>
    );
}

export {Slider};

