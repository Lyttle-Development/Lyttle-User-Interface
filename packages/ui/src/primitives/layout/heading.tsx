import {cn} from '../../lib/utils';
import styles from './layout.module.scss';
import {
    type PolymorphicProps,
    type TextSize,
    type TextTone,
    type TextWeight,
    resolveElement,
} from './shared';

export function Heading<T extends React.ElementType = 'h2'>({
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
    tone?: TextTone;
    size?: TextSize;
    weight?: TextWeight;
    align?: 'left' | 'center' | 'right';
    mono?: boolean;
    truncate?: boolean;
    transform?: 'uppercase';
    tracking?: 'tight';
    className?: string;
}>) {
    const Comp = resolveElement(as, 'h2');

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

