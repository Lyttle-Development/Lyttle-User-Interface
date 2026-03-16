'use client';

import * as React from 'react';
import {AlertDialog as AlertDialogPrimitive} from '@base-ui/react/alert-dialog';

import {modalMotionRender, overlayMotionRender} from '../../lib/motion';
import {cn} from '../../lib/utils';
import {Button} from '../button';
import styles from './alert-dialog.module.scss';

export function AlertDialog({...props}: AlertDialogPrimitive.Root.Props) {
    return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

export function AlertDialogTrigger({...props}: AlertDialogPrimitive.Trigger.Props) {
    return (
        <AlertDialogPrimitive.Trigger
            data-slot="alert-dialog-trigger" {...props} />
    );
}

export function AlertDialogPortal({...props}: AlertDialogPrimitive.Portal.Props) {
    return (
        <AlertDialogPrimitive.Portal
            data-slot="alert-dialog-portal" {...props} />
    );
}

export function AlertDialogOverlay({
                                       className,
                                       ...props
                                   }: AlertDialogPrimitive.Backdrop.Props) {
    return (
        <AlertDialogPrimitive.Backdrop
            data-slot="alert-dialog-overlay"
            data-motion-overlay
            className={cn(styles.overlay, className)}
            render={overlayMotionRender}
            {...props}
        />
    );
}

export function AlertDialogContent({
                                       className,
                                       size = 'default',
                                       ...props
                                   }: AlertDialogPrimitive.Popup.Props & {
    size?: 'default' | 'sm'
}) {
    return (
        <AlertDialogPortal>
            <AlertDialogOverlay/>
            <AlertDialogPrimitive.Popup
                data-slot="alert-dialog-content"
                data-size={size}
                data-motion-floating
                className={cn(styles.content, className)}
                render={modalMotionRender}
                {...props}
            />
        </AlertDialogPortal>
    );
}

export function AlertDialogHeader({
                                      className,
                                      ...props
                                  }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="alert-dialog-header"
            className={cn(styles.header, className)}
            {...props}
        />
    );
}

export function AlertDialogFooter({
                                      className,
                                      ...props
                                  }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="alert-dialog-footer"
            className={cn(styles.footer, className)}
            {...props}
        />
    );
}

export function AlertDialogMedia({
                                     className,
                                     ...props
                                 }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="alert-dialog-media"
            className={cn(styles.media, className)}
            {...props}
        />
    );
}

export function AlertDialogTitle({
                                     className,
                                     ...props
                                 }: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
    return (
        <AlertDialogPrimitive.Title
            data-slot="alert-dialog-title"
            className={cn(styles.title, className)}
            {...props}
        />
    );
}

export function AlertDialogDescription({
                                           className,
                                           ...props
                                       }: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
    return (
        <AlertDialogPrimitive.Description
            data-slot="alert-dialog-description"
            className={cn(styles.description, className)}
            {...props}
        />
    );
}

export function AlertDialogAction({
                                      className,
                                      ...props
                                  }: React.ComponentProps<typeof Button>) {
    return (
        <Button
            data-slot="alert-dialog-action"
            className={cn(className)}
            {...props}
        />
    );
}

export function AlertDialogCancel({
                                      className,
                                      variant = 'outline',
                                      size = 'default',
                                      ...props
                                  }: AlertDialogPrimitive.Close.Props &
    Pick<React.ComponentProps<typeof Button>, 'variant' | 'size'>) {
    return (
        <AlertDialogPrimitive.Close
            data-slot="alert-dialog-cancel"
            className={cn(className)}
            render={<Button variant={variant} size={size}/>}
            {...props}
        />
    );
}


