import {cva} from 'class-variance-authority';

import styles from './badge.module.scss';

const badgeVariants = cva(styles.badge, {
    variants: {
        variant: {
            default: styles.variantDefault,
            secondary: styles.variantSecondary,
            destructive: styles.variantDestructive,
            outline: styles.variantOutline,
            ghost: styles.variantGhost,
            link: styles.variantLink,
            brand: styles.variantBrand,
            accent: styles.variantAccent,
            success: styles.variantSuccess,
            warning: styles.variantWarning,
            info: styles.variantInfo,
            muted: styles.variantMuted,
            inverse: styles.variantInverse,
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});

export {badgeVariants};


