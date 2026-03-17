import {cn} from '../../lib/utils';
import styles from './layout.module.scss';
import {
    type LayoutSpace,
    type PolymorphicProps,
    createVarStyle,
    resolveElement,
    spacingValues,
} from './shared';

export function Stack<T extends React.ElementType = 'div'>({
    as,
    gap = 'md',
    align = 'stretch',
    className,
    style,
    ...props
}: PolymorphicProps<T, {
    gap?: LayoutSpace;
    align?: 'start' | 'center' | 'end' | 'stretch';
    className?: string;
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

