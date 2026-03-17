import {cn} from '../../lib/utils';
import styles from './layout.module.scss';
import {
    type LayoutSpace,
    type PolymorphicProps,
    createVarStyle,
    resolveElement,
    spacingValues,
} from './shared';

export function Inline<T extends React.ElementType = 'div'>({
    as,
    gap = 'md',
    align = 'center',
    justify = 'start',
    wrap = true,
    className,
    style,
    ...props
}: PolymorphicProps<T, {
    gap?: LayoutSpace;
    align?: 'start' | 'center' | 'end' | 'stretch';
    justify?: 'start' | 'center' | 'end' | 'between';
    wrap?: boolean;
    className?: string;
}>) {
    const Comp = resolveElement(as);
    const alignValue = align === 'start' ? 'flex-start' : align === 'end' ? 'flex-end' : align;
    const justifyValue = justify === 'start'
        ? 'flex-start'
        : justify === 'end'
            ? 'flex-end'
            : justify === 'between'
                ? 'space-between'
                : justify;

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

