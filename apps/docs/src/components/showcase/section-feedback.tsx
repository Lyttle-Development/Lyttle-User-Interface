'use client';

import * as React from 'react';
import {ShowcaseSection, ShowcaseBlock} from './showcase-section';
import {Alert, AlertDescription, AlertTitle} from '@lyttle-development/ui';
import {Badge} from '@lyttle-development/ui';
import {Progress} from '@lyttle-development/ui';
import {Skeleton} from '@lyttle-development/ui';
import {Spinner} from '@lyttle-development/ui';
import {Avatar, AvatarFallback, AvatarImage} from '@lyttle-development/ui';
import {Tooltip, TooltipContent, TooltipTrigger} from '@lyttle-development/ui';
import {Button} from '@lyttle-development/ui';
import {Toaster} from '@lyttle-development/ui';
import {
    Inline,
    Stack,
    Text
} from '@lyttle-development/ui/components/layout/layout';
import {toast} from 'sonner';

function InfoIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round"
             strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
    );
}

function CheckIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round"
             strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"/>
        </svg>
    );
}

function AlertTriangleIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round"
             strokeLinejoin="round" aria-hidden="true">
            <path
                d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
    );
}

function XCircleIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round"
             strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/>
            <line x1="15" y1="9" x2="9" y2="15"/>
            <line x1="9" y1="9" x2="15" y2="15"/>
        </svg>
    );
}

export function SectionFeedback() {
    const [progress, setProgress] = React.useState(18);

    React.useEffect(() => {
        let direction = 1;

        const timer = window.setInterval(() => {
            setProgress((current) => {
                if (current >= 82) {
                    direction = -1;
                } else if (current <= 18) {
                    direction = 1;
                }

                return current + direction * 2;
            });
        }, 120);

        return () => window.clearInterval(timer);
    }, []);

    return (
        <ShowcaseSection
            id="feedback"
            title="Feedback & Status"
            description="Alerts, toasts, progress, loading states, avatars, badges, and tooltips."
        >
            <ShowcaseBlock title="Alerts"
                           description="Informational, success, warning, and error variants">
                <Stack gap="sm" align="start">
                    <Alert variant="info">
                        <InfoIcon/>
                        <AlertTitle>Information</AlertTitle>
                        <AlertDescription>
                            Your account settings have been saved. Changes may
                            take a few moments
                            to propagate across the system.
                        </AlertDescription>
                    </Alert>

                    <Alert variant="success">
                        <CheckIcon/>
                        <AlertTitle>Success</AlertTitle>
                        <AlertDescription>
                            Your order has been placed successfully. You will
                            receive a
                            confirmation email within 5 minutes.
                        </AlertDescription>
                    </Alert>

                    <Alert variant="warning">
                        <AlertTriangleIcon/>
                        <AlertTitle>Warning</AlertTitle>
                        <AlertDescription>
                            Your subscription expires in 3 days. Please update
                            your payment
                            method to avoid interruption.
                        </AlertDescription>
                    </Alert>

                    <Alert variant="error">
                        <XCircleIcon/>
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>
                            We could not process your request. Please check your
                            input and try
                            again, or contact support if the issue persists.
                        </AlertDescription>
                    </Alert>
                </Stack>
            </ShowcaseBlock>

            <ShowcaseBlock title="Badges"
                           description="Status and label badges in all variants">
                <Inline gap="sm">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>

                    <Badge variant="success">Active</Badge>
                    <Badge variant="warning">Pending</Badge>
                    <Badge variant="info">In Review</Badge>
                    <Badge variant="muted">Archived</Badge>
                    <Badge variant="brand">Brand</Badge>
                    <Badge variant="accent">Accent</Badge>
                </Inline>
            </ShowcaseBlock>

            <ShowcaseBlock title="Progress"
                           description="Determinate progress bars">
                <Stack gap="md" align="start" style={{maxWidth: '28rem'}}>
                    <Stack gap="xs" align="start" style={{width: '100%'}}>
                        <Inline justify="between" style={{width: '100%'}}>
                            <Text as="span" size="sm">Upload progress</Text>
                            <Text as="span" size="sm"
                                  tone="muted">{progress}%</Text>
                        </Inline>
                        <Progress value={progress}
                                  aria-label={`Upload: ${progress}%`}/>
                    </Stack>
                    <Stack gap="xs" align="start" style={{width: '100%'}}>
                        <Inline justify="between" style={{width: '100%'}}>
                            <Text as="span" size="sm">Profile complete</Text>
                            <Text as="span" size="sm" tone="muted">75%</Text>
                        </Inline>
                        <Progress value={75}
                                  aria-label="Profile: 75% complete"/>
                    </Stack>
                    <Stack gap="xs" align="start" style={{width: '100%'}}>
                        <Text as="span" size="sm">Step 2 of 5</Text>
                        <Progress value={40} aria-label="Step 2 of 5"/>
                    </Stack>
                </Stack>
            </ShowcaseBlock>

            <ShowcaseBlock title="Spinners & Loading"
                           description="Loading indicators in all sizes">
                <Inline gap="lg">
                    <Stack gap="xs" align="center">
                        <Spinner size="sm"/>
                        <Text as="span" size="xs" tone="muted">sm</Text>
                    </Stack>
                    <Stack gap="xs" align="center">
                        <Spinner/>
                        <Text as="span" size="xs" tone="muted">default</Text>
                    </Stack>
                    <Stack gap="xs" align="center">
                        <Spinner size="lg"/>
                        <Text as="span" size="xs" tone="muted">lg</Text>
                    </Stack>
                    <Stack gap="xs" align="center">
                        <Spinner size="xl"/>
                        <Text as="span" size="xs" tone="muted">xl</Text>
                    </Stack>
                </Inline>
            </ShowcaseBlock>

            <ShowcaseBlock title="Skeleton"
                           description="Content placeholder during loading">
                <Stack gap="md" align="start" style={{maxWidth: '24rem'}}>
                    {/* Card skeleton */}
                    <Stack gap="sm" align="start" style={{width: '100%'}}>
                        <Inline gap="sm" style={{width: '100%'}}>
                            <Skeleton style={{
                                width: '2.5rem',
                                height: '2.5rem',
                                borderRadius: '999px'
                            }}/>
                            <Stack gap="xs" style={{width: '100%'}}>
                                <Skeleton
                                    style={{width: '75%', height: '0.75rem'}}/>
                                <Skeleton
                                    style={{width: '50%', height: '0.75rem'}}/>
                            </Stack>
                        </Inline>
                        <Skeleton style={{
                            width: '100%',
                            height: '8rem',
                            borderRadius: 'var(--radius-lg)'
                        }}/>
                        <Skeleton style={{width: '100%', height: '0.75rem'}}/>
                        <Skeleton
                            style={{width: '83.333333%', height: '0.75rem'}}/>
                        <Skeleton
                            style={{width: '66.666667%', height: '0.75rem'}}/>
                    </Stack>
                </Stack>
            </ShowcaseBlock>

            <ShowcaseBlock title="Avatar"
                           description="User avatars with image, fallback, and size variants">
                <Inline gap="md" align="end">
                    {/* With image */}
                    <Stack gap="xs" align="center">
                        <Avatar size="lg">
                            <AvatarImage src="https://github.com/vercel.png"
                                         alt="Profile"/>
                            <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                        <Text as="span" size="xs" tone="muted">With image</Text>
                    </Stack>

                    {/* Fallback only */}
                    <Stack gap="xs" align="center">
                        <Avatar size="lg">
                            <AvatarFallback
                                style={{
                                    background: 'var(--brand-gradient-primary)',
                                    color: 'white',
                                    fontWeight: 600
                                }}
                            >
                                <span>LD</span>
                            </AvatarFallback>
                        </Avatar>
                        <Text as="span" size="xs" tone="muted">Brand
                            fallback</Text>
                    </Stack>

                    {/* Size variants */}
                    {(['sm', 'default', 'default', 'lg'] as const).map((size, index) => (
                        <Avatar key={`${size}-${index}`} size={size}>
                            <AvatarFallback>
                                JD
                            </AvatarFallback>
                        </Avatar>
                    ))}
                </Inline>
            </ShowcaseBlock>

            <ShowcaseBlock title="Tooltip"
                           description="Accessible tooltips on hover and focus">
                <Inline gap="md">
                    <Tooltip>
                        <TooltipTrigger render={<Button variant="outline"/>}>
                            Hover me
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>This is a helpful tooltip</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger
                            render={<Button variant="ghost" size="icon"
                                            aria-label="Information"/>}>
                            <InfoIcon/>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            <p>Additional context for this action</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger render={<Button variant="link"/>}>
                            What is WCAG?
                        </TooltipTrigger>
                        <TooltipContent style={{maxWidth: '20rem'}}>
                            <p>
                                Web Content Accessibility Guidelines —
                                international standards for
                                making web content more accessible.
                            </p>
                        </TooltipContent>
                    </Tooltip>
                </Inline>
            </ShowcaseBlock>

            <ShowcaseBlock title="Toast / Sonner"
                           description="Non-blocking notification toasts">
                <Inline gap="sm">
                    <Button variant="outline"
                            onClick={() => toast('Component saved successfully.')}>
                        Default toast
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => toast.success('Changes saved!', {description: 'Your profile has been updated.'})}
                    >
                        Success toast
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => toast.error('Something went wrong', {description: 'Please try again or contact support.'})}
                    >
                        Error toast
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() =>
                            toast.warning('Subscription expiring', {
                                description: 'Your plan expires in 3 days.',
                                action: {
                                    label: 'Renew', onClick: () => {
                                    }
                                },
                            })
                        }
                    >
                        Warning with action
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() =>
                            toast.promise(new Promise((res) => setTimeout(res, 2000)), {
                                loading: 'Saving…',
                                success: 'Saved!',
                                error: 'Failed to save.',
                            })
                        }
                    >
                        Promise toast
                    </Button>
                </Inline>
                <Toaster/>
            </ShowcaseBlock>
        </ShowcaseSection>
    );
}