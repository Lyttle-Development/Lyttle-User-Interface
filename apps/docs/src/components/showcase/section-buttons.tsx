"use client";

import { ShowcaseSection, ShowcaseBlock } from "./showcase-section";
import { Button } from "@lyttle/ui";
import { ButtonGroup } from "@lyttle/ui";
import { Toggle } from "@lyttle/ui";
import { ToggleGroup, ToggleGroupItem } from "@lyttle/ui";
import { Spinner } from "@lyttle/ui";
import * as React from "react";

function BoldIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" /><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
    </svg>
  );
}
function ItalicIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="19" y1="4" x2="10" y2="4" /><line x1="14" y1="20" x2="5" y2="20" /><line x1="15" y1="4" x2="9" y2="20" />
    </svg>
  );
}
function UnderlineIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" /><line x1="4" y1="21" x2="20" y2="21" />
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}
function TrashIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="3 6 5 6 21 6" /><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" /><path d="M10 11v6M14 11v6" /><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    </svg>
  );
}

export function SectionButtons() {
  const [loading, setLoading] = React.useState(false);
  const [singleSelection, setSingleSelection] = React.useState<string[]>(["italic"]);
  const [multiSelection, setMultiSelection] = React.useState<string[]>(["bold", "italic"]);

  const gradientButtonClassName = "border-transparent text-white shadow-md transition-opacity hover:opacity-95";
  const primaryGradientStyle = {
    backgroundImage: "var(--brand-gradient-primary)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  } as const;
  const accentGradientStyle = {
    backgroundImage: "var(--brand-gradient-accent)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  } as const;

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
      <ShowcaseBlock title="Variants" description="Primary, secondary, outline, ghost, link, destructive">
        <div className="flex flex-wrap gap-3 items-center">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Sizes">
        <div className="flex flex-wrap gap-3 items-center">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" aria-label="Add item"><PlusIcon /></Button>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="States">
        <div className="flex flex-wrap gap-3 items-center">
          <Button>Active</Button>
          <Button disabled>Disabled</Button>
          <Button disabled aria-busy="true" className="gap-2">
            <Spinner size="sm" />
            Loading…
          </Button>
          <Button
            className="gap-2"
            onClick={handleLoad}
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? <><Spinner size="sm" />Processing…</> : "Click to load"}
          </Button>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="With Icons">
        <div className="flex flex-wrap gap-3 items-center">
          <Button className="gap-2"><PlusIcon />Create New</Button>
          <Button variant="outline" className="gap-2"><PlusIcon />Add Item</Button>
          <Button variant="destructive" className="gap-2"><TrashIcon />Delete</Button>
          <Button variant="ghost" className="gap-2"><TrashIcon />Remove</Button>
          <Button size="icon" variant="outline" aria-label="Delete item"><TrashIcon /></Button>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Brand Gradient Buttons" description="Custom brand-styled CTAs">
        <div className="flex flex-wrap gap-3 items-center">
          <Button
            className={gradientButtonClassName}
            style={primaryGradientStyle}
          >
            Primary CTA
          </Button>
          <Button
            className={gradientButtonClassName}
            style={accentGradientStyle}
          >
            Accent CTA
          </Button>
          <Button
            size="lg"
            className={`${gradientButtonClassName} px-8 shadow-lg`}
            style={primaryGradientStyle}
          >
            Get Started →
          </Button>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Button Group" description="Composite button groups for related actions">
        <div className="flex flex-col gap-4">
          <ButtonGroup>
            <Button variant="outline">Left</Button>
            <Button variant="outline">Middle</Button>
            <Button variant="outline">Right</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>Save</Button>
            <Button variant="outline" size="icon" aria-label="More options">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </Button>
          </ButtonGroup>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Toggle">
        <div className="flex flex-wrap gap-4 items-center">
          <Toggle aria-label="Toggle bold"><BoldIcon /></Toggle>
          <Toggle aria-label="Toggle italic" defaultPressed><ItalicIcon /></Toggle>
          <Toggle variant="outline" aria-label="Toggle underline"><UnderlineIcon /></Toggle>
          <Toggle disabled aria-label="Disabled toggle"><BoldIcon /></Toggle>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Toggle Group" description="Single and multiple selection">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-2">Single select</p>
            <ToggleGroup value={singleSelection} onValueChange={setSingleSelection}>
              <ToggleGroupItem value="bold" aria-label="Bold"><BoldIcon /></ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Italic"><ItalicIcon /></ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Underline"><UnderlineIcon /></ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Multiple select</p>
            <ToggleGroup multiple value={multiSelection} onValueChange={setMultiSelection}>
              <ToggleGroupItem value="bold" aria-label="Bold"><BoldIcon /></ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Italic"><ItalicIcon /></ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Underline"><UnderlineIcon /></ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </ShowcaseBlock>
    </ShowcaseSection>
  );
}