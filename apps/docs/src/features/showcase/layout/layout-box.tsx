import * as React from 'react';
import {Surface, Text} from '@lyttle-development/ui';

type LayoutBoxTone = 'muted' | 'secondary' | 'accent';

export function LayoutBox({
    label,
    height = '3rem',
    tone = 'muted',
    span,
}: {
    label: string;
    height?: string;
    tone?: LayoutBoxTone;
    span?: 1 | 2 | 3;
}) {
    return (
        <Surface
            tone={tone}
            padding="sm"
            radius="md"
            shadow="none"
            style={{
                minHeight: height,
                alignItems: 'center',
                justifyContent: 'center',
                gridColumn: span ? `span ${span} / span ${span}` : undefined,
            }}
        >
            <Text as="span" size="xs" tone="muted" mono>{label}</Text>
        </Surface>
    );
}

export function DemoPanel({
    label,
    tone = 'muted',
    style,
}: {
    label: string;
    tone?: LayoutBoxTone;
    style?: React.CSSProperties;
}) {
    return (
        <Surface
            tone={tone}
            padding="md"
            radius="lg"
            shadow="none"
            style={{
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                border: 0,
                ...style,
            }}
        >
            <Text as="span" size="xs" tone="muted" mono>{label}</Text>
        </Surface>
    );
}

