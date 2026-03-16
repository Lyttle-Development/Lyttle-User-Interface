import {cva} from 'class-variance-authority';

import styles from './item.module.scss';

const itemVariants = cva(styles.item, {
    variants: {
        variant: {
            default: styles.variantDefault,
            outline: styles.variantOutline,
            muted: styles.variantMuted,
        },
        size: {
            default: styles.sizeDefault,
            sm: styles.sizeSm,
            xs: styles.sizeXs,
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});

const itemMediaVariants = cva(styles.media, {
    variants: {
        variant: {
            default: styles.mediaDefault,
            icon: styles.mediaIcon,
            image: styles.mediaImage,
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});

export {itemVariants, itemMediaVariants};

