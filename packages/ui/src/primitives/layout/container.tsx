import {cn} from '../../lib/utils';
import styles from './layout.module.scss';
import {
    type LayoutSpace,
    type PolymorphicProps,
    containerWidths,
    createVarStyle,
    resolveElement,
    spacingValues,
} from './shared';

export function Container<T extends React.ElementType = 'div'>({
    as,
    size = '7xl',
    padding = 'md',
    className,
    style,
    ...props
}: PolymorphicProps<T, {
    size?: keyof typeof containerWidths;
    padding?: LayoutSpace;
    className?: string;
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

