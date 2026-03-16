'use client';

import {ShowcaseBlock, ShowcaseSection} from './showcase-section';
import {
    Button,
    ButtonGroup,
    Spinner,
    Toggle,
    ToggleGroup,
    ToggleGroupItem
} from '@lyttle-development/ui';
import {
    Inline,
    Stack,
    Text
} from '@lyttle-development/ui/components/layout/layout';
import * as React from 'react';

function BoldIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
             strokeLinejoin="round" aria-hidden="true">
            <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
            <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"/>
        </svg>
    );
}

function ItalicIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
             strokeLinejoin="round" aria-hidden="true">
            <line x1="19" y1="4" x2="10" y2="4"/>
            <line x1="14" y1="20" x2="5" y2="20"/>
            <line x1="15" y1="4" x2="9" y2="20"/>
        </svg>
    );
}

function UnderlineIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
             strokeLinejoin="round" aria-hidden="true">
            <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"/>
            <line x1="4" y1="21" x2="20" y2="21"/>
        </svg>
    );
}

function PlusIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
             strokeLinejoin="round" aria-hidden="true">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
    );
}

function TrashIcon() {
    return (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2" strokeLinecap="round"
             strokeLinejoin="round" aria-hidden="true">
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
            <path d="M10 11v6M14 11v6"/>
            <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
        </svg>
    );
}

export function SectionButtons() {
    const [loading, setLoading] = React.useState(false);
    const [singleSelection, setSingleSelection] = React.useState<string[]>(['italic']);
    const [multiSelection, setMultiSelection] = React.useState<string[]>(['bold', 'italic']);

    const handleLoad = () => {
        setLoading(true);
        setTimeout(() => setLoading(false), 2000);
    };

    return (
        <ShowcaseSection
            id="buttons"
            title="Buttons & Toggles"
            description="All button variants, sizes, states, and composite patterns."
        >
            <ShowcaseBlock title="Variants"
                           description="Primary, secondary, outline, ghost, link, destructive">
                <Inline gap="sm">
                    <Button variant="default">Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                    <Button variant="destructive">Destructive</Button>
                </Inline>
            </ShowcaseBlock>

            <ShowcaseBlock title="Sizes">
                <Inline gap="sm">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon"
                            aria-label="Add item"><PlusIcon/></Button>
                </Inline>
            </ShowcaseBlock>

            <ShowcaseBlock title="States">
                <Inline gap="sm">
                    <Button>Active</Button>
                    <Button disabled>Disabled</Button>
                    <Button disabled aria-busy="true">
                        <Spinner size="sm"/>
                        Loading…
                    </Button>
                    <Button
                        onClick={handleLoad}
                        disabled={loading}
                        aria-busy={loading}
                    >
                        {loading ? <><Spinner
                            size="sm"/>Processing…</> : 'Click to load'}
                    </Button>
                </Inline>
            </ShowcaseBlock>

            <ShowcaseBlock title="With Icons">
                <Inline gap="sm">
                    <Button><PlusIcon/>Create New</Button>
                    <Button variant="outline"><PlusIcon/>Add Item</Button>
                    <Button variant="danger"><TrashIcon/>Delete</Button>
                    <Button variant="ghost"><TrashIcon/>Remove</Button>
                    <Button size="icon" variant="outline"
                            aria-label="Delete item"><TrashIcon/></Button>
                </Inline>
            </ShowcaseBlock>

            <ShowcaseBlock title="Brand Gradient Buttons"
                           description="Custom brand-styled CTAs">
                <Inline gap="sm">
                    <Button variant="brand">Primary CTA</Button>
                    <Button variant="accent">Accent CTA</Button>
                    <Button size="lg" variant="brand">Get Started →</Button>
                </Inline>
            </ShowcaseBlock>

            <ShowcaseBlock title="Button Group"
                           description="Composite button groups for related actions">
                <Stack gap="md" align="start">
                    <ButtonGroup>
                        <Button variant="outline">Left</Button>
                        <Button variant="outline">Middle</Button>
                        <Button variant="outline">Right</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button>Save</Button>
                        <Button variant="outline" size="icon"
                                aria-label="More options">
                            <svg width="14" height="14" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor"
                                 strokeWidth="2" aria-hidden="true">
                                <polyline points="6 9 12 15 18 9"/>
                            </svg>
                        </Button>
                    </ButtonGroup>
                </Stack>
            </ShowcaseBlock>

            <ShowcaseBlock title="Toggle">
                <Inline gap="md">
                    <Toggle aria-label="Toggle bold"><BoldIcon/></Toggle>
                    <Toggle aria-label="Toggle italic"
                            defaultPressed><ItalicIcon/></Toggle>
                    <Toggle variant="outline"
                            aria-label="Toggle underline"><UnderlineIcon/></Toggle>
                    <Toggle disabled
                            aria-label="Disabled toggle"><BoldIcon/></Toggle>
                </Inline>
            </ShowcaseBlock>

            <ShowcaseBlock title="Toggle Group"
                           description="Single and multiple selection">
                <Stack gap="md" align="start">
                    <Stack gap="xs" align="start">
                        <Text as="p" size="xs" tone="muted">Single select</Text>
                        <ToggleGroup value={singleSelection}
                                     onValueChange={setSingleSelection}>
                            <ToggleGroupItem value="bold"
                                             aria-label="Bold"><BoldIcon/></ToggleGroupItem>
                            <ToggleGroupItem value="italic" aria-label="Italic"><ItalicIcon/></ToggleGroupItem>
                            <ToggleGroupItem value="underline"
                                             aria-label="Underline"><UnderlineIcon/></ToggleGroupItem>
                        </ToggleGroup>
                    </Stack>
                    <Stack gap="xs" align="start">
                        <Text as="p" size="xs" tone="muted">Multiple
                            select</Text>
                        <ToggleGroup multiple value={multiSelection}
                                     onValueChange={setMultiSelection}>
                            <ToggleGroupItem value="bold"
                                             aria-label="Bold"><BoldIcon/></ToggleGroupItem>
                            <ToggleGroupItem value="italic" aria-label="Italic"><ItalicIcon/></ToggleGroupItem>
                            <ToggleGroupItem value="underline"
                                             aria-label="Underline"><UnderlineIcon/></ToggleGroupItem>
                        </ToggleGroup>
                    </Stack>
                </Stack>
            </ShowcaseBlock>
        </ShowcaseSection>
    );
}