import {ShowcaseBlock, ShowcaseSection} from './showcase-section';
import {Badge, Kbd, Separator} from '@lyttle-development/ui';
import {
    Grid,
    Heading,
    Inline,
    Stack,
    Surface,
    Text
} from '@lyttle-development/ui';

export function SectionTypography() {
    return (
        <ShowcaseSection
            id="typography"
            title="Typography"
            description="Type scale built on Inter — optimised for readability with brand-harmonious heading styles."
        >
            <ShowcaseBlock title="Heading Scale"
                           description="h1–h6 with brand styling">
                <Stack gap="md" align="start">
                    <Stack gap="xs" align="start"><Heading as="h1" size="5xl">Heading
                        1</Heading><Text as="code" size="xs" tone="muted" mono>text-5xl
                        font-bold</Text></Stack>
                    <Stack gap="xs" align="start"><Heading as="h2" size="4xl">Heading
                        2</Heading><Text as="code" size="xs" tone="muted" mono>text-4xl
                        font-bold</Text></Stack>
                    <Stack gap="xs" align="start"><Heading as="h3" size="3xl">Heading
                        3</Heading><Text as="code" size="xs" tone="muted" mono>text-3xl
                        font-bold</Text></Stack>
                    <Stack gap="xs" align="start"><Heading as="h4" size="2xl"
                                                           weight="semibold">Heading
                        4</Heading><Text as="code" size="xs" tone="muted" mono>text-2xl
                        font-semibold</Text></Stack>
                    <Stack gap="xs" align="start"><Heading as="h5" size="xl"
                                                           weight="semibold">Heading
                        5</Heading><Text as="code" size="xs" tone="muted" mono>text-xl
                        font-semibold</Text></Stack>
                    <Stack gap="xs" align="start"><Heading as="h6" size="lg"
                                                           weight="semibold">Heading
                        6</Heading><Text as="code" size="xs" tone="muted" mono>text-lg
                        font-semibold</Text></Stack>
                </Stack>
            </ShowcaseBlock>

            <ShowcaseBlock title="Token-colored Headings">
                <Stack gap="sm" align="start">
                    <Heading as="h2" size="3xl" tone="brand-base">
                        Base token heading — primary emphasis
                    </Heading>
                    <Heading as="h2" size="3xl" tone="brand-accent">
                        Accent token heading — expressive highlight
                    </Heading>
                    <Heading as="h2" size="3xl">
                        Mixed{' '}
                        <Text as="span" size="3xl" weight="bold"
                              tone="brand-base">base</Text>{' '}
                        and{' '}
                        <Text as="span" size="3xl" weight="bold"
                              tone="brand-accent">accent</Text>{' '}
                        inline
                    </Heading>
                </Stack>
            </ShowcaseBlock>

            <ShowcaseBlock title="Body Text Scale">
                <Stack gap="md" align="start">
                    <Text as="p" size="xl">
                        Large body — ideal for lead paragraphs and introductory
                        sections.
                    </Text>
                    <Text as="p" size="md">
                        Regular body — the standard paragraph size. Used for
                        most content
                        throughout an interface. Lyttle Development combines
                        clarity and
                        personality in every pixel.
                    </Text>
                    <Text as="p" size="sm">
                        Small body — UI labels, captions, helper text, and tight
                        layouts.
                    </Text>
                    <Text as="p" size="xs" tone="muted">
                        Extra small — metadata, timestamps, legal text.
                    </Text>
                </Stack>
            </ShowcaseBlock>

            <ShowcaseBlock title="Text Styles">
                <Stack gap="sm" align="start">
                    <Text as="p" tone="muted">
                        Muted foreground — secondary information
                    </Text>
                    <Text as="p">
                        <strong>Bold text</strong> and <em>italic
                        text</em> and{' '}
                        <u>underlined text</u>
                    </Text>
                    <Inline gap="xs" align="center">
                        <Surface as="code" tone="muted" padding="sm" radius="md"
                                 shadow="none">
                            inline code
                        </Surface>
                        <Text as="span">and regular text side by side</Text>
                    </Inline>
                    <Text as="p">
                        <a href="#typography">Hyperlink style</a> — uses brand
                        primary
                        colour with underline offset
                    </Text>
                    <Text as="p" tone="muted"><s>Strikethrough text</s></Text>
                    <Surface as="blockquote" tone="muted" padding="md"
                             radius="md" shadow="none"
                             style={{borderLeft: '4px solid var(--brand-base)'}}>
                        <Text as="p" tone="muted"><em>
                            &ldquo;Great design is about solving problems with
                            clarity, empathy,
                            and intention.&rdquo;
                        </em></Text>
                    </Surface>
                </Stack>
            </ShowcaseBlock>

            <ShowcaseBlock title="Inline Elements">
                <Inline gap="sm">
                    <Badge>Default Badge</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Separator orientation="vertical"/>
                    <Kbd>Ctrl</Kbd>
                    <Kbd>K</Kbd>
                    <Separator orientation="vertical"/>
                    <Surface as="code" tone="muted" padding="sm" radius="md"
                             shadow="none">
                        <Text as="span" size="sm" mono>code snippet</Text>
                    </Surface>
                </Inline>
            </ShowcaseBlock>

            <ShowcaseBlock title="List Styles">
                <Grid columns={1} mdColumns={2} gap="xl">
                    <Stack gap="sm" align="start">
                        <Text as="p" size="sm" weight="semibold" tone="muted"
                              transform="uppercase">
                            Unordered
                        </Text>
                        <Stack as="ul" gap="xs"
                               style={{paddingLeft: '1.25rem', margin: 0}}>
                            <li>Design tokens — semantic & composable</li>
                            <li>56 reusable UI components</li>
                            <li>WCAG AA accessible</li>
                            <li>Dark & light mode</li>
                        </Stack>
                    </Stack>
                    <Stack gap="sm" align="start">
                        <Text as="p" size="sm" weight="semibold" tone="muted"
                              transform="uppercase">
                            Ordered
                        </Text>
                        <Stack as="ol" gap="xs"
                               style={{paddingLeft: '1.25rem', margin: 0}}>
                            <li>Define brand tokens</li>
                            <li>Install component library</li>
                            <li>Apply theme</li>
                            <li>Ship to production</li>
                        </Stack>
                    </Stack>
                </Grid>
            </ShowcaseBlock>
        </ShowcaseSection>
    );
}