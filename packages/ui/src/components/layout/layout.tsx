import * as React from 'react';

import {cn} from '../../lib/utils';
import styles from './layout.module.scss';

type LayoutSpace = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
type TextTone =
    | 'default'
    | 'muted'
    | 'primary'
    | 'secondary'
    | 'destructive'
    | 'inverse'
    | 'brand-base'
    | 'brand-accent'
    | 'brand-strong'
type TextSize =
    'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold'

type CSSVars = React.CSSProperties & Record<string, string | number | undefined>

const spacingValues: Record<LayoutSpace, string> = {
    none: '0',
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '2.5rem',
};

const containerWidths = {
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '48rem',
    '2xl': '64rem',
    '3xl': '72rem',
    '7xl': '80rem',
    full: '100%',
} as const;

type AsProp<T extends React.ElementType> = {
    as?: T
}

type PolymorphicProps<T extends React.ElementType, P> = P &
    AsProp<T> &
    Omit<React.ComponentPropsWithoutRef<T>, keyof P | 'as'>

function resolveElement<T extends React.ElementType>(as?: T) {
    return (as ?? 'div') as React.ElementType;
}

function createVarStyle(style: React.CSSProperties | undefined, vars: CSSVars): CSSVars {
    return {
        ...(style ?? {}),
        ...vars,
    };
}

function Container<T extends React.ElementType = 'div'>({
                                                            as,
                                                            size = '7xl',
                                                            padding = 'md',
                                                            className,
                                                            style,
                                                            ...props
                                                        }: PolymorphicProps<T, {
    size?: keyof typeof containerWidths
    padding?: LayoutSpace
    className?: string
}>) {
    const Comp = resolveElement(as);

    return (
        <Comp
            className={cn(styles.container, className)}
            style={createVarStyle(style, {
                '--layout-max-width': containerWidths[size],
                '--layout-inline-padding': padding === 'none' ? '0' : spacingValues[padding],
            })}
            {...props}
        />
    );
}

function Stack<T extends React.ElementType = 'div'>({
                                                        as,
                                                        gap = 'md',
                                                        align = 'stretch',
                                                        className,
                                                        style,
                                                        ...props
                                                    }: PolymorphicProps<T, {
    gap?: LayoutSpace
    align?: 'start' | 'center' | 'end' | 'stretch'
    className?: string
}>) {
    const Comp = resolveElement(as);

    return (
        <Comp
            className={cn(styles.stack, className)}
            data-align={align}
            style={createVarStyle(style, {'--layout-gap': spacingValues[gap]})}
            {...props}
        />
    );
}

function Inline<T extends React.ElementType = 'div'>({
                                                         as,
                                                         gap = 'md',
                                                         align = 'center',
                                                         justify = 'start',
                                                         wrap = true,
                                                         className,
                                                         style,
                                                         ...props
                                                     }: PolymorphicProps<T, {
    gap?: LayoutSpace
    align?: 'start' | 'center' | 'end' | 'stretch'
    justify?: 'start' | 'center' | 'end' | 'between'
    wrap?: boolean
    className?: string
}>) {
    const Comp = resolveElement(as);
    const alignValue = align === 'start' ? 'flex-start' : align === 'end' ? 'flex-end' : align;
    const justifyValue = justify === 'start' ? 'flex-start' : justify === 'end' ? 'flex-end' : justify === 'between' ? 'space-between' : justify;

    return (
        <Comp
            className={cn(styles.inline, className)}
            data-wrap={wrap}
            style={createVarStyle(style, {
                '--layout-gap': spacingValues[gap],
                '--layout-align': alignValue,
                '--layout-justify': justifyValue,
            })}
            {...props}
        />
    );
}

function Grid<T extends React.ElementType = 'div'>({
                                                       as,
                                                       gap = 'md',
                                                       columns = 1,
                                                       smColumns,
                                                       mdColumns,
                                                       lgColumns,
                                                       layout = 'auto',
                                                       className,
                                                       style,
                                                       ...props
                                                   }: PolymorphicProps<T, {
    gap?: LayoutSpace
    columns?: 1 | 2 | 3 | 4
    smColumns?: 1 | 2 | 3 | 4
    mdColumns?: 1 | 2 | 3 | 4
    lgColumns?: 1 | 2 | 3 | 4
    layout?: 'auto' | 'content-sidebar'
    className?: string
}>) {
    const Comp = resolveElement(as);

    return (
        <Comp
            className={cn(styles.grid, className)}
            data-layout={layout}
            style={createVarStyle(style, {
                '--layout-gap': spacingValues[gap],
                '--layout-cols': columns,
                '--layout-cols-sm': smColumns,
                '--layout-cols-md': mdColumns,
                '--layout-cols-lg': lgColumns,
            })}
            {...props}
        />
    );
}

function Surface<T extends React.ElementType = 'div'>({
                                                          as,
                                                          tone = 'card',
                                                          padding = 'md',
                                                          radius = 'xl',
                                                          shadow = 'sm',
                                                          gap = 'md',
                                                          className,
                                                          style,
                                                          ...props
                                                      }: PolymorphicProps<T, {
    tone?: 'card' | 'muted' | 'secondary' | 'accent' | 'brand'
    padding?: 'none' | 'sm' | 'md' | 'lg'
    radius?: 'md' | 'lg' | 'xl'
    shadow?: 'none' | 'sm' | 'md' | 'lg'
    gap?: LayoutSpace
    className?: string
}>) {
    const Comp = resolveElement(as);

    return (
        <Comp
            className={cn(styles.surface, className)}
            data-tone={tone}
            data-padding={padding}
            data-radius={radius}
            data-shadow={shadow}
            style={createVarStyle(style, {'--surface-gap': spacingValues[gap]})}
            {...props}
        />
    );
}

function Text<T extends React.ElementType = 'p'>({
                                                     as,
                                                     tone = 'default',
                                                     size = 'md',
                                                     weight = 'regular',
                                                     align,
                                                     mono = false,
                                                     truncate = false,
                                                     transform,
                                                     tracking,
                                                     className,
                                                     ...props
                                                 }: PolymorphicProps<T, {
    tone?: TextTone
    size?: TextSize
    weight?: TextWeight
    align?: 'left' | 'center' | 'right'
    mono?: boolean
    truncate?: boolean
    transform?: 'uppercase'
    tracking?: 'tight'
    className?: string
}>) {
    const Comp = resolveElement(as);

    return (
        <Comp
            className={cn(styles.text, className)}
            data-tone={tone}
            data-size={size}
            data-weight={weight}
            data-align={align}
            data-mono={mono}
            data-truncate={truncate}
            data-case={transform}
            data-tracking={tracking}
            {...props}
        />
    );
}

function Heading<T extends React.ElementType = 'h2'>({
                                                         as,
                                                         tone = 'default',
                                                         size = '3xl',
                                                         weight = 'bold',
                                                         align,
                                                         mono = false,
                                                         truncate = false,
                                                         transform,
                                                         tracking = 'tight',
                                                         className,
                                                         ...props
                                                     }: PolymorphicProps<T, {
    tone?: TextTone
    size?: TextSize
    weight?: TextWeight
    align?: 'left' | 'center' | 'right'
    mono?: boolean
    truncate?: boolean
    transform?: 'uppercase'
    tracking?: 'tight'
    className?: string
}>) {
    const Comp = resolveElement(as ?? 'h2');

    return (
        <Comp
            className={cn(styles.text, styles.heading, className)}
            data-tone={tone}
            data-size={size}
            data-weight={weight}
            data-align={align}
            data-mono={mono}
            data-truncate={truncate}
            data-case={transform}
            data-tracking={tracking}
            {...props}
        />
    );
}

export {Container, Stack, Inline, Grid, Surface, Text, Heading};

