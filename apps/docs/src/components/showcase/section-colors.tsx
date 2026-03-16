import {ShowcaseSection, ShowcaseBlock} from './showcase-section';
import {
    Grid,
    Inline,
    Stack,
    Surface,
    Text
} from '@lyttle-development/ui/components/layout/layout';

const swatches = [
    {
        label: 'Background',
        var: '--background',
        desc: 'Page background',
    },
    {
        label: 'Foreground',
        var: '--foreground',
        desc: 'Primary text',
    },
    {
        label: 'Primary',
        var: '--primary',
        desc: 'Primary interactive brand token',
    },
    {
        label: 'Primary Foreground',
        var: '--primary-foreground',
        desc: 'Text on primary',
    },
    {
        label: 'Secondary',
        var: '--secondary',
        desc: 'Subtle surface',
    },
    {
        label: 'Muted',
        var: '--muted',
        desc: 'Disabled / placeholder surface',
    },
    {
        label: 'Muted Foreground',
        var: '--muted-foreground',
        desc: 'De-emphasised text',
    },
    {
        label: 'Accent',
        var: '--accent',
        desc: 'Hover states',
    },
    {
        label: 'Destructive',
        var: '--destructive',
        desc: 'Error / danger',
    },
    {
        label: 'Border',
        var: '--border',
        desc: 'Dividers & outlines',
    },
    {
        label: 'Card',
        var: '--card',
        desc: 'Card surface',
    },
    {
        label: 'Popover',
        var: '--popover',
        desc: 'Floating surface',
    },
];

const brandSwatches = [
    {
        label: 'Brand Base',
        var: '--brand-base',
        desc: 'Primary brand driver for key emphasis and actions'
    },
    {
        label: 'Brand Accent',
        var: '--brand-accent',
        desc: 'Secondary highlight token for expressive emphasis'
    },
    {
        label: 'Brand Strong',
        var: '--brand-strong',
        desc: 'Deep anchor tone for gradients and contrast'
    },
];

const chartSwatches = [
    {label: 'Chart 1', var: '--chart-1'},
    {label: 'Chart 2', var: '--chart-2'},
    {label: 'Chart 3', var: '--chart-3'},
    {label: 'Chart 4', var: '--chart-4'},
    {label: 'Chart 5', var: '--chart-5'},
];

export function SectionColors() {
    return (
        <ShowcaseSection
            id="colors"
            title="Color System"
            description="Design tokens derived from the Lyttle Development brand palette, adjusted for WCAG AA contrast in both light and dark modes."
        >
            <ShowcaseBlock
                title="Semantic Tokens"
                description="Core palette — these drive every component in the system."
            >
                <Grid columns={2} smColumns={3} mdColumns={4} gap="sm">
                    {swatches.map((s) => (
                        <Stack key={s.var} gap="xs" align="start">
                            <Surface
                                padding="none"
                                radius="lg"
                                style={{
                                    background: `var(${s.var})`,
                                    minHeight: '4rem',
                                    width: '100%'
                                }}
                                aria-label={s.var}
                                title={s.var}
                            />
                            <Stack gap="xs" align="start">
                                <Text as="p" size="xs"
                                      weight="semibold">{s.label}</Text>
                                <Text as="p" size="xs" tone="muted"
                                      mono>{s.var}</Text>
                                {s.desc ? <Text as="p" size="xs"
                                                tone="muted">{s.desc}</Text> : null}
                            </Stack>
                        </Stack>
                    ))}
                </Grid>
            </ShowcaseBlock>

            <ShowcaseBlock
                title="Brand Foundation Tokens"
                description="Role-based brand tokens that can stay stable even if the underlying hue shifts in future themes."
            >
                <Grid columns={1} smColumns={3} gap="sm">
                    {brandSwatches.map((s) => (
                        <Stack key={s.var} gap="xs" align="start">
                            <Surface padding="none" radius="lg" style={{
                                background: `var(${s.var})`,
                                minHeight: '5rem',
                                width: '100%'
                            }}/>
                            <Stack gap="xs" align="start">
                                <Text as="p" size="xs"
                                      weight="semibold">{s.label}</Text>
                                <Text as="p" size="xs" tone="muted"
                                      mono>{s.var}</Text>
                                <Text as="p" size="xs"
                                      tone="muted">{s.desc}</Text>
                            </Stack>
                        </Stack>
                    ))}
                </Grid>
            </ShowcaseBlock>

            <ShowcaseBlock
                title="Gradients"
                description="Brand-defined gradient utilities: .bg-brand-gradient and .bg-brand-gradient-accent"
            >
                <Grid columns={1} smColumns={2} gap="md">
                    <Surface tone="brand" radius="lg" shadow="sm" style={{
                        minHeight: '6rem',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text as="span" size="sm" weight="semibold"
                              tone="inverse">Primary brand gradient</Text>
                    </Surface>
                    <Surface radius="lg" shadow="sm" style={{
                        minHeight: '6rem',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'var(--brand-gradient-accent)',
                        color: 'white',
                        borderColor: 'transparent'
                    }}>
                        <Text as="span" size="sm" weight="semibold"
                              tone="inverse">Accent brand gradient</Text>
                    </Surface>
                </Grid>
            </ShowcaseBlock>

            <ShowcaseBlock
                title="Chart Palette"
                description="Five harmonious chart colours derived from the brand system."
            >
                <Inline gap="sm">
                    {chartSwatches.map((s) => (
                        <Stack key={s.var} gap="xs" align="center">
                            <div
                                style={{
                                    width: '3rem',
                                    height: '3rem',
                                    borderRadius: '999px',
                                    background: `var(${s.var})`,
                                    border: `1px solid color-mix(in oklab, var(${s.var}) 48%, var(--background))`,
                                    boxShadow: `inset 0 0 0 3px color-mix(in oklab, var(${s.var}) 14%, white), 0 8px 18px rgb(15 23 42 / 0.08)`,
                                }}
                            />
                            <Text as="span" size="xs" tone="muted"
                                  mono>{s.label}</Text>
                        </Stack>
                    ))}
                </Inline>
            </ShowcaseBlock>
        </ShowcaseSection>
    );
}