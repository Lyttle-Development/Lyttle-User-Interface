import {Inline, Stack, Text} from '@lyttle-development/ui';
import {radiusScale, shadowScale} from './layout-data';

export function SpacingScaleDemo() {
    return (
        <Stack gap="xl" align="start">
            <Stack gap="sm" align="start">
                <Text as="p" size="xs" weight="semibold" tone="muted"
                      transform="uppercase">
                    Border Radius
                </Text>
                <Inline gap="md" align="end">
                    {radiusScale.map((radius) => (
                        <TokenPreview key={radius.label} label={radius.label}>
                            <div
                                style={{
                                    width: '2.5rem',
                                    height: '2.5rem',
                                    background: 'color-mix(in oklab, var(--primary) 20%, transparent)',
                                    border: '1px solid color-mix(in oklab, var(--primary) 40%, transparent)',
                                    borderRadius: radius.value,
                                }}
                            />
                        </TokenPreview>
                    ))}
                </Inline>
            </Stack>
            <Stack gap="sm" align="start">
                <Text as="p" size="xs" weight="semibold" tone="muted"
                      transform="uppercase">
                    Shadow Scale
                </Text>
                <Inline gap="md">
                    {shadowScale.map((shadow) => (
                        <TokenPreview key={shadow.label} label={shadow.label}>
                            <div
                                style={{
                                    width: '4rem',
                                    height: '3rem',
                                    borderRadius: 'var(--radius-lg)',
                                    background: 'var(--card)',
                                    border: '1px solid var(--border)',
                                    boxShadow: shadow.shadow,
                                }}
                            />
                        </TokenPreview>
                    ))}
                </Inline>
            </Stack>
        </Stack>
    );
}

function TokenPreview({
    label,
    children,
}: {
    label: string;
    children: React.ReactNode;
}) {
    return (
        <Stack gap="xs" align="center">
            {children}
            <Text as="span" size="xs" tone="muted">{label}</Text>
        </Stack>
    );
}

