import {cn} from '../../lib/utils';
import styles from './layout.module.scss';
import {
    type LayoutSpace,
    type PolymorphicProps,
    createVarStyle,
    resolveElement,
    spacingValues,
} from './shared';

export function Grid<T extends React.ElementType = 'div'>({
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
    gap?: LayoutSpace;
    columns?: 1 | 2 | 3 | 4;
    smColumns?: 1 | 2 | 3 | 4;
    mdColumns?: 1 | 2 | 3 | 4;
    lgColumns?: 1 | 2 | 3 | 4;
    layout?: 'auto' | 'content-sidebar';
    className?: string;
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

