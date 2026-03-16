import type { Metadata } from "next";
import { Container, Text } from "@lyttle/ui";
import { ShowcaseHero } from "@/components/showcase/showcase-hero";
import { ShowcaseNav } from "@/components/showcase/showcase-nav";
import { SectionTypography } from "@/components/showcase/section-typography";
import { SectionButtons } from "@/components/showcase/section-buttons";
import { SectionForms } from "@/components/showcase/section-forms";
import { SectionFeedback } from "@/components/showcase/section-feedback";
import { SectionDataDisplay } from "@/components/showcase/section-data-display";
import { SectionNavigation } from "@/components/showcase/section-navigation";
import { SectionOverlays } from "@/components/showcase/section-overlays";
import { SectionLayout } from "@/components/showcase/section-layout";
import { SectionColors } from "@/components/showcase/section-colors";

export const metadata: Metadata = {
  title: "Component Showcase",
};

export default function Home() {
  return (
    <div>
      <ShowcaseNav />
      <Container as="main" id="main-content" size="7xl" padding="md" style={{ paddingBlock: "2.5rem" }}>
        <ShowcaseHero />
        <SectionColors />
        <SectionTypography />
        <SectionButtons />
        <SectionForms />
        <SectionFeedback />
        <SectionDataDisplay />
        <SectionNavigation />
        <SectionOverlays />
        <SectionLayout />
      </Container>
      <footer style={{ marginTop: "5rem", borderTop: "1px solid var(--border)", paddingBlock: "3rem" }}>
        <Container size="7xl" padding="md">
          <Text as="p" size="sm" tone="muted" align="center">
            <strong style={{ color: "var(--foreground)" }}>Lyttle User Interface</strong> — Built with the
            {" "}Lyttle Development brand palette · WCAG AA accessible
          </Text>
        </Container>
      </footer>
    </div>
  );
}