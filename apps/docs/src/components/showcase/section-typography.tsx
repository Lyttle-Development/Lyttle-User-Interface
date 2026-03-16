import { ShowcaseSection, ShowcaseBlock } from "./showcase-section";
import { Badge } from "@lyttle/ui";
import { Separator } from "@lyttle/ui";
import { Kbd } from "@lyttle/ui";

export function SectionTypography() {
  return (
    <ShowcaseSection
      id="typography"
      title="Typography"
      description="Type scale built on Inter — optimised for readability with brand-harmonious heading styles."
    >
      <ShowcaseBlock title="Heading Scale" description="h1–h6 with brand styling">
        <div className="space-y-4">
          <div>
            <h1 className="text-5xl font-bold text-foreground">Heading 1</h1>
            <code className="text-xs text-muted-foreground">text-5xl font-bold</code>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-foreground">Heading 2</h2>
            <code className="text-xs text-muted-foreground">text-4xl font-bold</code>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-foreground">Heading 3</h3>
            <code className="text-xs text-muted-foreground">text-3xl font-bold</code>
          </div>
          <div>
            <h4 className="text-2xl font-semibold text-foreground">Heading 4</h4>
            <code className="text-xs text-muted-foreground">text-2xl font-semibold</code>
          </div>
          <div>
            <h5 className="text-xl font-semibold text-foreground">Heading 5</h5>
            <code className="text-xs text-muted-foreground">text-xl font-semibold</code>
          </div>
          <div>
            <h6 className="text-lg font-semibold text-foreground">Heading 6</h6>
            <code className="text-xs text-muted-foreground">text-lg font-semibold</code>
          </div>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Token-colored Headings">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-brand-base">
            Base token heading — primary emphasis
          </h2>
          <h2 className="text-3xl font-bold text-brand-accent">
            Accent token heading — expressive highlight
          </h2>
          <h2 className="text-3xl font-bold">
            Mixed{" "}
            <span className="text-brand-base">base</span>{" "}
            and{" "}
            <span className="text-brand-accent">accent</span>{" "}
            inline
          </h2>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Body Text Scale">
        <div className="space-y-4">
          <p className="text-xl text-foreground leading-relaxed">
            Large body — ideal for lead paragraphs and introductory sections.
          </p>
          <p className="text-base text-foreground leading-relaxed">
            Regular body — the standard paragraph size. Used for most content
            throughout an interface. LyttleDevelopment combines clarity and
            personality in every pixel.
          </p>
          <p className="text-sm text-foreground">
            Small body — UI labels, captions, helper text, and tight layouts.
          </p>
          <p className="text-xs text-muted-foreground">
            Extra small — metadata, timestamps, legal text.
          </p>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Text Styles">
        <div className="space-y-3">
          <p className="text-muted-foreground">
            Muted foreground — secondary information
          </p>
          <p>
            <strong>Bold text</strong> and <em>italic text</em> and{" "}
            <u>underlined text</u>
          </p>
          <p>
            <code className="bg-muted text-foreground px-1.5 py-0.5 rounded text-sm font-mono">
              inline code
            </code>{" "}
            and regular text side by side
          </p>
          <p>
            <a href="#typography">Hyperlink style</a> — uses brand primary
            colour with underline offset
          </p>
          <p className="line-through text-muted-foreground">Strikethrough text</p>
          <blockquote className="border-l-4 pl-4 italic text-muted-foreground" style={{ borderColor: "var(--brand-base)" }}>
            &ldquo;Great design is about solving problems with clarity, empathy,
            and intention.&rdquo;
          </blockquote>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Inline Elements">
        <div className="flex flex-wrap gap-3 items-center">
          <Badge>Default Badge</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Separator orientation="vertical" className="h-6" />
          <Kbd>Ctrl</Kbd>
          <Kbd>K</Kbd>
          <Separator orientation="vertical" className="h-6" />
          <code className="bg-muted px-2 py-0.5 rounded text-sm font-mono text-foreground">
            code snippet
          </code>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="List Styles">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
              Unordered
            </p>
            <ul className="space-y-1.5 list-disc pl-5 text-foreground">
              <li>Design tokens — semantic & composable</li>
              <li>56 shadcn/ui components</li>
              <li>WCAG AA accessible</li>
              <li>Dark & light mode</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
              Ordered
            </p>
            <ol className="space-y-1.5 list-decimal pl-5 text-foreground">
              <li>Define brand tokens</li>
              <li>Install component library</li>
              <li>Apply theme</li>
              <li>Ship to production</li>
            </ol>
          </div>
        </div>
      </ShowcaseBlock>
    </ShowcaseSection>
  );
}