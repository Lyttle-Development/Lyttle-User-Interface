import {cn} from '../../lib/utils';
import styles from './aspect-ratio.module.scss';

function AspectRatio({
                         ratio,
                         className,
                         style,
                         ...props
                     }: React.ComponentProps<'div'> & { ratio: number }) {
    return (
        <div
            data-slot="aspect-ratio"
            style={
                {
                    '--ratio': ratio,
                    ...style,
                } as React.CSSProperties
            }
            className={cn(styles.aspectRatio, className)}
            {...props}
        />
    );
}

export {AspectRatio};

