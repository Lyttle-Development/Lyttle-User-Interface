import * as React from 'react';

export type LayoutSpace = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type TextTone =
    | 'default'
    | 'muted'
    | 'primary'
    | 'secondary'
    | 'destructive'
    | 'inverse'
    | 'brand-base'
    | 'brand-accent'
    | 'brand-strong';
export type TextSize =
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl';
export type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold';

type CSSVars = React.CSSProperties & Record<string, string | number | undefined>;

export const spacingValues: Record<LayoutSpace, string> = {
    none: '0',
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '2.5rem',
};

export const containerWidths = {
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
    as?: T;
};

export type PolymorphicProps<T extends React.ElementType, P> = P &
    AsProp<T> &
    Omit<React.ComponentPropsWithoutRef<T>, keyof P | 'as'>;

export function resolveElement<T extends React.ElementType>(
    as?: T,
    fallback: React.ElementType = 'div'
) {
    return (as ?? fallback) as React.ElementType;
}

export function createVarStyle(
    style: React.CSSProperties | undefined,
    vars: CSSVars
): CSSVars {
    return {
        ...(style ?? {}),
        ...vars,
    };
}

