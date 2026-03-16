'use client';

import type {CSSProperties} from 'react';
import {useTheme} from 'next-themes';
import {Toaster as Sonner, type ToasterProps} from 'sonner';
import {
    CircleCheckIcon,
    InfoIcon,
    Loader2Icon,
    OctagonXIcon,
    TriangleAlertIcon
} from 'lucide-react';
import styles from './sonner.module.scss';

const Toaster = ({...props}: ToasterProps) => {
    const {theme = 'system'} = useTheme();

    return (
        <Sonner
            theme={theme as ToasterProps['theme']}
            className={styles.toaster}
            icons={{
                success: (
                    <CircleCheckIcon className={styles.icon}/>
                ),
                info: (
                    <InfoIcon className={styles.icon}/>
                ),
                warning: (
                    <TriangleAlertIcon className={styles.icon}/>
                ),
                error: (
                    <OctagonXIcon className={styles.icon}/>
                ),
                loading: (
                    <Loader2Icon className={styles.loadingIcon}/>
                ),
            }}
            style={
                {
                    '--normal-bg': 'var(--popover)',
                    '--normal-text': 'var(--popover-foreground)',
                    '--normal-border': 'var(--border)',
                    '--border-radius': 'var(--radius)',
                } as CSSProperties
            }
            toastOptions={{
                classNames: {
                    toast: styles.toast,
                    title: styles.title,
                    description: styles.description,
                    actionButton: styles.actionButton,
                    cancelButton: styles.cancelButton,
                    closeButton: styles.closeButton,
                },
            }}
            {...props}
        />
    );
};

export {Toaster};

