import { Badge } from "@lyttle/ui";

export function ShowcaseHero() {
  return (
    <div className="relative mb-14 overflow-hidden rounded-3xl border border-white/10 bg-brand-gradient px-6 py-16 text-center text-white shadow-xl md:mb-16 md:px-14 md:py-24">
      {/* decorative circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #6C63FF 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #FF6363 0%, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-3xl space-y-6">
        <Badge
          variant="secondary"
          className="border-white/20 bg-white/10 px-4 py-1 text-sm text-white hover:bg-white/20"
        >
          Design Framework v1.0
        </Badge>

        <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Lyttle{" "}
          <span className="text-violet-200">Framework</span>
        </h1>

        <p className="text-lg leading-relaxed text-white/85 md:text-xl">
          A complete design system built on shadcn/ui — styled with the
          LyttleDevelopment brand palette, improved for WCAG AA accessibility,
          and ready for any web project.
        </p>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <a
            href="#colors"
            className="inline-flex min-h-11 items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-violet-900 shadow-lg transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Explore Components
          </a>
          <a
            href="https://github.com/lyttledevelopment"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-white/40 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            View on GitHub
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-5 pt-4 text-sm text-white/70">
          <span>✦ 56 components</span>
          <span>✦ Dark &amp; Light mode</span>
          <span>✦ WCAG AA</span>
          <span>✦ CSS variables</span>
          <span>✦ TypeScript</span>
        </div>
      </div>
    </div>
  );
}