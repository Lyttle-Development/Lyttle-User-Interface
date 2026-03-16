import {cva} from 'class-variance-authority';

import styles from './toggle.module.scss';

const toggleVariants = cva(styles.toggle, {
    variants: {
        variant: {
            default: styles.variantDefault,
            outline: styles.variantOutline,
        },
        size: {
            default: styles.sizeDefault,
            sm: styles.sizeSm,
            lg: styles.sizeLg,
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});

export {toggleVariants};

