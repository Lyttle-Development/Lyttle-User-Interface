import {cn} from '../../lib/utils';
import styles from './layout.module.scss';
import {
    type LayoutSpace,
    type PolymorphicProps,
    createVarStyle,
    resolveElement,
    spacingValues,
} from './shared';

export function Surface<T extends React.ElementType = 'div'>({
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
    tone?: 'card' | 'muted' | 'secondary' | 'accent' | 'brand';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    radius?: 'md' | 'lg' | 'xl';
    shadow?: 'none' | 'sm' | 'md' | 'lg';
    gap?: LayoutSpace;
    className?: string;
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

