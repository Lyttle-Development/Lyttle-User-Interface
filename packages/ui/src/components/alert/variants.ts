import {cva} from 'class-variance-authority';

import styles from './alert.module.scss';

const alertVariants = cva(styles.alert, {
    variants: {
        variant: {
            default: styles.variantDefault,
            destructive: styles.variantDestructive,
            info: styles.variantInfo,
            success: styles.variantSuccess,
            warning: styles.variantWarning,
            error: styles.variantError,
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});

export {alertVariants};

