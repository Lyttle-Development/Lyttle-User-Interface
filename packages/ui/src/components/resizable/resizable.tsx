'use client';

import * as ResizablePrimitive from 'react-resizable-panels';

import {cn} from '../../lib/utils';
import styles from './resizable.module.scss';

function ResizablePanelGroup({
                                 className,
                                 ...props
                             }: ResizablePrimitive.GroupProps) {
    return (
        <ResizablePrimitive.Group
            data-slot="resizable-panel-group"
            className={cn(styles.group, className)}
            {...props}
        />
    );
}

function ResizablePanel({...props}: ResizablePrimitive.PanelProps) {
    return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />;
}

function ResizableHandle({
                             withHandle,
                             className,
                             ...props
                         }: ResizablePrimitive.SeparatorProps & {
    withHandle?: boolean
}) {
    return (
        <ResizablePrimitive.Separator
            data-slot="resizable-handle"
            className={cn(styles.handle, className)}
            {...props}
        >
            {withHandle && (
                <div className={styles.handleGrip}/>
            )}
        </ResizablePrimitive.Separator>
    );
}

export {ResizableHandle, ResizablePanel, ResizablePanelGroup};

