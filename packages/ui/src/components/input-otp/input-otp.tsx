'use client';

import * as React from 'react';
import {OTPInput, OTPInputContext} from 'input-otp';

import {cn} from '../../lib/utils';
import {MinusIcon} from 'lucide-react';
import styles from './input-otp.module.scss';

function InputOTP({
                      className,
                      containerClassName,
                      ...props
                  }: React.ComponentProps<typeof OTPInput> & {
    containerClassName?: string
}) {
    return (
        <OTPInput
            data-slot="input-otp"
            containerClassName={cn(styles.container, containerClassName)}
            spellCheck={false}
            data-motion-surface
            className={cn(styles.input, className)}
            {...props}
        />
    );
}

function InputOTPGroup({className, ...props}: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="input-otp-group"
            data-motion-surface
            className={cn(styles.group, className)}
            {...props}
        />
    );
}

function InputOTPSlot({
                          index,
                          className,
                          ...props
                      }: React.ComponentProps<'div'> & {
    index: number
}) {
    const inputOTPContext = React.useContext(OTPInputContext);
    const {char, hasFakeCaret, isActive} = inputOTPContext?.slots[index] ?? {};

    return (
        <div
            data-slot="input-otp-slot"
            data-active={isActive}
            data-motion-trigger
            className={cn(styles.slot, className)}
            {...props}
        >
            {char}
            {hasFakeCaret && (
                <div className={styles.fakeCaret}>
                    <div className={styles.caret}/>
                </div>
            )}
        </div>
    );
}

function InputOTPSeparator({...props}: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="input-otp-separator"
            className={styles.separator}
            role="separator"
            {...props}
        >
            <MinusIcon className={styles.separatorIcon}/>
        </div>
    );
}

export {InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator};

