import type { Metadata } from "next";
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
    <div className="min-h-screen bg-background">
      <ShowcaseNav />
      <main id="main-content" className="container mx-auto max-w-7xl px-4 py-10 md:py-12">
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
      </main>
      <footer className="mt-20 border-t border-border py-12 text-center text-sm text-muted-foreground md:mt-24">
        <p>
          <strong className="text-foreground">Lyttle Framework</strong> — Built
          with the LyttleDevelopment brand palette · WCAG AA accessible
        </p>
      </footer>
    </div>
  );
}