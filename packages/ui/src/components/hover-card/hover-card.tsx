'use client';

import {PreviewCard as PreviewCardPrimitive} from '@base-ui/react/preview-card';

import {floatingMotionRender} from '../../lib/motion';
import {cn} from '../../lib/utils';
import styles from './hover-card.module.scss';

export function HoverCard({...props}: PreviewCardPrimitive.Root.Props) {
    return <PreviewCardPrimitive.Root data-slot="hover-card" {...props} />;
}

export function HoverCardTrigger({...props}: PreviewCardPrimitive.Trigger.Props) {
    return (
        <PreviewCardPrimitive.Trigger
            data-slot="hover-card-trigger" {...props} />
    );
}

export function HoverCardContent({
                                     className,
                                     side = 'bottom',
                                     sideOffset = 4,
                                     align = 'center',
                                     alignOffset = 4,
                                     ...props
                                 }: PreviewCardPrimitive.Popup.Props &
    Pick<
        PreviewCardPrimitive.Positioner.Props,
        'align' | 'alignOffset' | 'side' | 'sideOffset'
    >) {
    return (
        <PreviewCardPrimitive.Portal data-slot="hover-card-portal">
            <PreviewCardPrimitive.Positioner
                align={align}
                alignOffset={alignOffset}
                side={side}
                sideOffset={sideOffset}
                className={styles.positioner}
            >
                <PreviewCardPrimitive.Popup
                    data-slot="hover-card-content"
                    data-motion-floating
                    className={cn(styles.content, className)}
                    render={floatingMotionRender}
                    {...props}
                />
            </PreviewCardPrimitive.Positioner>
        </PreviewCardPrimitive.Portal>
    );
}


