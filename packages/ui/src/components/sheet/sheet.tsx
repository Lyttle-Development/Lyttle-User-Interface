'use client';

import * as React from 'react';
import {Dialog as SheetPrimitive} from '@base-ui/react/dialog';
import {XIcon} from 'lucide-react';

import {createSheetMotionRender, overlayMotionRender} from '../../lib/motion';
import {cn} from '../../lib/utils';
import {Button} from '../button';
import styles from './sheet.module.scss';

function Sheet({...props}: SheetPrimitive.Root.Props) {
    return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({...props}: SheetPrimitive.Trigger.Props) {
    return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({...props}: SheetPrimitive.Close.Props) {
    return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({...props}: SheetPrimitive.Portal.Props) {
    return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({className, ...props}: SheetPrimitive.Backdrop.Props) {
    return (
        <SheetPrimitive.Backdrop
            data-slot="sheet-overlay"
            data-motion-overlay
            className={cn(styles.overlay, className)}
            render={overlayMotionRender}
            {...props}
        />
    );
}

function SheetContent({
                          className,
                          children,
                          side = 'right',
                          showCloseButton = true,
                          ...props
                      }: SheetPrimitive.Popup.Props & {
    side?: 'top' | 'right' | 'bottom' | 'left'
    showCloseButton?: boolean
}) {
    const contentMotionRender = React.useMemo(() => createSheetMotionRender(side), [side]);

    return (
        <SheetPortal>
            <SheetOverlay/>
            <SheetPrimitive.Popup
                data-slot="sheet-content"
                data-side={side}
                data-motion-floating
                className={cn(styles.content, className)}
                render={contentMotionRender}
                {...props}
            >
                {children}
                {showCloseButton && (
                    <SheetPrimitive.Close
                        data-slot="sheet-close"
                        render={
                            <Button
                                variant="ghost"
                                className={styles.closeButton}
                                size="icon-sm"
                                aria-label="Close sheet"
                            />
                        }
                    >
                        <XIcon/>
                    </SheetPrimitive.Close>
                )}
            </SheetPrimitive.Popup>
        </SheetPortal>
    );
}

function SheetHeader({className, ...props}: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="sheet-header"
            className={cn(styles.header, className)}
            {...props}
        />
    );
}

function SheetFooter({className, ...props}: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="sheet-footer"
            className={cn(styles.footer, className)}
            {...props}
        />
    );
}

function SheetTitle({className, ...props}: SheetPrimitive.Title.Props) {
    return (
        <SheetPrimitive.Title
            data-slot="sheet-title"
            className={cn(styles.title, className)}
            {...props}
        />
    );
}

function SheetDescription({
                              className,
                              ...props
                          }: SheetPrimitive.Description.Props) {
    return (
        <SheetPrimitive.Description
            data-slot="sheet-description"
            className={cn(styles.description, className)}
            {...props}
        />
    );
}

export {
    Sheet,
    SheetTrigger,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetFooter,
    SheetTitle,
    SheetDescription,
};

