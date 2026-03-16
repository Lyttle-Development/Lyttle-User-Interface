'use client';

import * as React from 'react';
import {gsap} from 'gsap';
import {
    motion,
    type MotionProps,
    type Transition,
    useReducedMotion
} from 'framer-motion';

import {cn} from './utils';

export type MotionSide =
    | 'none'
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'inline-start'
    | 'inline-end'

export type MotionPreset =
    'overlay'
    | 'modal'
    | 'sheet'
    | 'floating'
    | 'tooltip'

type MotionTarget = {
    initial: NonNullable<MotionProps['initial']>
    animate: NonNullable<MotionProps['animate']>
    exit: NonNullable<MotionProps['animate']>
    transition: Transition
}

type BaseUiRenderProps = Omit<
    React.HTMLAttributes<HTMLDivElement>,
    | 'onAnimationEnd'
    | 'onAnimationIteration'
    | 'onAnimationStart'
    | 'onDrag'
    | 'onDragEnd'
    | 'onDragStart'
> & {
    ref?: React.Ref<HTMLDivElement>
}

type BaseUiMotionState = {
    open?: boolean
    side?: MotionSide
    instant?: string | undefined
    transitionStatus?: string | undefined
}

type AnimatedRenderOptions<TState extends BaseUiMotionState> = {
    preset: MotionPreset | ((state: TState) => MotionPreset)
    getSide?: (state: TState) => MotionSide | undefined
    className?: string
}

type UseInteractiveMotionOptions = {
    disabled?: boolean
    hoverScale?: number
    hoverY?: number
    pressScale?: number
    duration?: number
    ease?: string
}

type InteractiveMotionHandlers<T extends HTMLElement> = Pick<
    React.HTMLAttributes<T>,
    | 'onBlur'
    | 'onFocus'
    | 'onPointerCancel'
    | 'onPointerDown'
    | 'onPointerEnter'
    | 'onPointerLeave'
    | 'onPointerUp'
>

const floatingSpring: Transition = {
    type: 'spring',
    stiffness: 380,
    damping: 30,
    mass: 0.9,
};

const overlayTransition: Transition = {
    duration: 0.18,
    ease: [0.2, 0, 0, 1],
};

function getDirectionalOffset(side: MotionSide | undefined, distance: number) {
    switch (side) {
        case 'none':
            return {x: 0, y: 0};
        case 'top':
            return {x: 0, y: distance};
        case 'left':
        case 'inline-start':
            return {x: distance, y: 0};
        case 'right':
        case 'inline-end':
            return {x: -distance, y: 0};
        case 'bottom':
        default:
            return {x: 0, y: -distance};
    }
}

function getMotionTarget(
    preset: MotionPreset,
    side: MotionSide | undefined,
    reducedMotion: boolean,
    instant: boolean
): MotionTarget {
    if (reducedMotion || instant) {
        return {
            initial: {opacity: 0},
            animate: {opacity: 1},
            exit: {opacity: 0},
            transition: {duration: instant ? 0.01 : 0.12, ease: 'linear'},
        };
    }

    if (preset === 'overlay') {
        return {
            initial: {opacity: 0},
            animate: {opacity: 1},
            exit: {opacity: 0},
            transition: overlayTransition,
        };
    }

    if (preset === 'modal') {
        return {
            initial: {opacity: 0, scale: 0.96, y: 16, filter: 'blur(10px)'},
            animate: {opacity: 1, scale: 1, y: 0, filter: 'blur(0px)'},
            exit: {opacity: 0, scale: 0.98, y: 10, filter: 'blur(6px)'},
            transition: floatingSpring,
        };
    }

    if (preset === 'sheet') {
        const {x, y} = getDirectionalOffset(side, 32);

        return {
            initial: {opacity: 0, x, y},
            animate: {opacity: 1, x: 0, y: 0},
            exit: {opacity: 0, x: x * 0.6, y: y * 0.6},
            transition: floatingSpring,
        };
    }

    const distance = preset === 'tooltip' ? 8 : 12;
    const scale = preset === 'tooltip' ? 0.98 : 0.96;
    const {x, y} = getDirectionalOffset(side, distance);

    return {
        initial: {opacity: 0, scale, x, y},
        animate: {opacity: 1, scale: 1, x: 0, y: 0},
        exit: {opacity: 0, scale, x: x * 0.5, y: y * 0.5},
        transition: floatingSpring,
    };
}

export function useMotionPreset({
                                    preset,
                                    side,
                                    instant = false,
                                }: {
    preset: MotionPreset
    side?: MotionSide
    instant?: boolean
}) {
    const reducedMotion = useReducedMotion();

    return React.useMemo(
        () => getMotionTarget(preset, side, Boolean(reducedMotion), instant),
        [instant, preset, reducedMotion, side]
    );
}

function AnimatedRender<TState extends BaseUiMotionState>({
                                                              renderProps,
                                                              state,
                                                              options,
                                                          }: {
    renderProps: BaseUiRenderProps
    state: TState
    options: AnimatedRenderOptions<TState>
}) {
    const resolvedPreset =
        typeof options.preset === 'function' ? options.preset(state) : options.preset;
    const motionState = useMotionPreset({
        preset: resolvedPreset,
        side: options.getSide?.(state) ?? state.side,
        instant: Boolean(state.instant),
    });
    const isOpen = state.open ?? state.transitionStatus !== 'ending';
    const {className, style, ...restRenderProps} = renderProps;

    return (
        <motion.div
            {...restRenderProps}
            initial={motionState.initial}
            animate={isOpen ? motionState.animate : motionState.exit}
            transition={motionState.transition}
            className={cn(className, options.className)}
            style={style}
            data-motion-preset={resolvedPreset}
        />
    );
}

export function createAnimatedRender<TState extends BaseUiMotionState = BaseUiMotionState>(
    options: AnimatedRenderOptions<TState>
) {
    return (renderProps: BaseUiRenderProps, state: TState) => (
        <AnimatedRender renderProps={renderProps} state={state}
                        options={options}/>
    );
}

export const overlayMotionRender = createAnimatedRender({
    preset: 'overlay',
});

export const modalMotionRender = createAnimatedRender({
    preset: 'modal',
});

export const floatingMotionRender = createAnimatedRender({
    preset: 'floating',
});

export const tooltipMotionRender = createAnimatedRender({
    preset: 'tooltip',
});

export function createSheetMotionRender(side: MotionSide | undefined) {
    return createAnimatedRender({
        preset: 'sheet',
        getSide: () => side,
    });
}

export function composeRefs<T>(...refs: Array<React.Ref<T> | undefined>) {
    return (node: T | null) => {
        for (const ref of refs) {
            if (!ref) {
                continue;
            }

            if (typeof ref === 'function') {
                ref(node);
                continue;
            }

            ;(ref as React.MutableRefObject<T | null>).current = node;
        }
    };
}

export function useInteractiveMotion<T extends HTMLElement>({
                                                                disabled = false,
                                                                hoverScale = 1.015,
                                                                hoverY = -2,
                                                                pressScale = 0.985,
                                                                duration = 0.18,
                                                                ease = 'power2.out',
                                                            }: UseInteractiveMotionOptions = {}) {
    const ref = React.useRef<T | null>(null);
    const reducedMotion = useReducedMotion();

    const animateTo = React.useCallback(
        (vars: gsap.TweenVars) => {
            if (!ref.current || disabled || reducedMotion) {
                return;
            }

            gsap.to(ref.current, {
                duration,
                ease,
                overwrite: 'auto',
                ...vars,
            });
        },
        [disabled, duration, ease, reducedMotion]
    );

    React.useEffect(() => {
        if (!ref.current || disabled) {
            return;
        }

        if (reducedMotion) {
            gsap.set(ref.current, {clearProps: 'transform,willChange'});
            return;
        }

        gsap.set(ref.current, {
            transformOrigin: 'center center',
            willChange: 'transform',
            force3D: true,
        });

        return () => {
            if (ref.current) {
                gsap.killTweensOf(ref.current);
                gsap.set(ref.current, {clearProps: 'transform,willChange'});
            }
        };
    }, [disabled, reducedMotion]);

    const handlers = React.useMemo<InteractiveMotionHandlers<T>>(
        () => ({
            onPointerEnter: () => animateTo({y: hoverY, scale: hoverScale}),
            onPointerLeave: () => animateTo({y: 0, scale: 1}),
            onPointerDown: () => animateTo({y: 0, scale: pressScale}),
            onPointerUp: () => animateTo({y: hoverY, scale: hoverScale}),
            onPointerCancel: () => animateTo({y: 0, scale: 1}),
            onFocus: () => animateTo({y: hoverY, scale: hoverScale}),
            onBlur: () => animateTo({y: 0, scale: 1}),
        }),
        [animateTo, hoverScale, hoverY, pressScale]
    );

    return {
        ref,
        handlers,
        reducedMotion,
    };
}

