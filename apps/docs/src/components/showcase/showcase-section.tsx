"use client";

import * as React from "react";
import { Separator } from "@lyttle/ui";

interface ShowcaseSectionProps {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function ShowcaseSection({
  id,
  title,
  description,
  children,
}: ShowcaseSectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-14 md:py-16">
      <div className="mb-7 md:mb-8">
        <h2 className="mb-2 text-3xl font-bold tracking-tight text-foreground">{title}</h2>
        {description && (
          <p className="max-w-2xl text-base text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      <Separator className="mb-8 md:mb-10" />
      <div className="space-y-8 md:space-y-10">{children}</div>
    </section>
  );
}

interface ShowcaseBlockProps {
  title: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
}

export function ShowcaseBlock({
  title,
  description,
  children,
  className = "",
}: ShowcaseBlockProps) {
  return (
    <div className={className}>
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground mt-0.5">{description}</p>
        )}
      </div>
      <div className="rounded-xl border border-border/80 bg-card p-5 shadow-sm md:p-6">
        {children}
      </div>
    </div>
  );
}