"use client";

import * as React from "react";
import { ShowcaseSection, ShowcaseBlock } from "./showcase-section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@lyttle/ui";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@lyttle/ui";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@lyttle/ui";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@lyttle/ui";
import { Badge } from "@lyttle/ui";
import { Button } from "@lyttle/ui";
import { Avatar, AvatarFallback, AvatarImage } from "@lyttle/ui";
import { AspectRatio } from "@lyttle/ui";
import { ScrollArea } from "@lyttle/ui";
import { Empty } from "@lyttle/ui";

const invoices = [
  { id: "INV-001", status: "Paid", method: "Credit Card", amount: "€250.00" },
  { id: "INV-002", status: "Pending", method: "Bank Transfer", amount: "€150.00" },
  { id: "INV-003", status: "Paid", method: "PayPal", amount: "€350.00" },
  { id: "INV-004", status: "Overdue", method: "Credit Card", amount: "€90.00" },
  { id: "INV-005", status: "Paid", method: "Bank Transfer", amount: "€120.00" },
];

const statusColors: Record<string, string> = {
  Paid: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  Overdue: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

export function SectionDataDisplay() {
  return (
    <ShowcaseSection
      id="data-display"
      title="Data Display"
      description="Cards, tables, accordions, tabs, scroll areas, and content containers."
    >
      <ShowcaseBlock title="Cards" description="Surface containers with header, content, and footer">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Basic card */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Project Alpha</CardTitle>
              <CardDescription>Design system implementation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Building a comprehensive component library for LyttleDevelopment
                with full WCAG AA compliance.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Badge variant="secondary">In Progress</Badge>
              <Button variant="outline" size="sm">View →</Button>
            </CardFooter>
          </Card>

          {/* Featured card */}
          <Card className="border-primary/20 shadow-sm">
            <CardHeader className="space-y-3">
              <div className="inline-flex w-fit items-center rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                Most popular
              </div>
              <div>
                <CardTitle>Premium Plan</CardTitle>
                <CardDescription>
                  Everything you need for design-system scale.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-foreground">€29<span className="text-lg font-normal text-muted-foreground">/mo</span></div>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                <li>✓ Unlimited projects</li>
                <li>✓ Priority support</li>
                <li>✓ Custom domain</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full border-transparent text-white" style={{ backgroundImage: "var(--brand-gradient-primary)", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%" }}>
                Get started
              </Button>
            </CardFooter>
          </Card>

          {/* Stat card */}
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardDescription>Total Revenue</CardDescription>
              <CardTitle className="text-3xl">€12,450</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-xs text-green-600 dark:text-green-400 font-medium">
                ↑ 12.5% from last month
              </p>
              <div className="rounded-lg border border-border/60 bg-muted/25 px-3 py-2 text-xs text-muted-foreground">
                Best performing segment: enterprise subscriptions.
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Horizontal card */}
        <Card className="mt-4 shadow-sm">
          <div className="flex items-center gap-4 p-6">
            <Avatar className="h-14 w-14">
              <AvatarImage src="https://github.com/shadcn.png" alt="Team member" />
              <AvatarFallback style={{ background: "var(--brand-gradient-primary)" }} className="text-white font-bold">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-foreground">Jane Doe</p>
                <p className="text-sm text-muted-foreground">Senior Designer · LyttleDevelopment</p>
            </div>
            <Button variant="outline" size="sm">Follow</Button>
          </div>
        </Card>
      </ShowcaseBlock>

      <ShowcaseBlock title="Tabs" description="Tabbed content panels">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList aria-label="Project sections">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The overview tab displays a summary of your project. All key
                  metrics, recent activity, and quick actions are accessible from
                  this panel. Keyboard users can navigate between tabs using arrow
                  keys.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground text-sm">
                  Analytics content — charts and metrics go here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground text-sm">
                  Project settings and configuration options.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </ShowcaseBlock>

      <ShowcaseBlock title="Accordion" description="Expandable content sections">
        <Accordion className="w-full max-w-lg">
          {[
            { value: "a1", trigger: "What is the Lyttle Framework?", content: "A complete design system built on shadcn/ui, styled with the LyttleDevelopment brand palette and optimised for WCAG AA accessibility." },
            { value: "a2", trigger: "Does it support dark mode?", content: "Yes — the dark mode IS the LyttleDevelopment aesthetic with the deep navy/purple background (#100429). Toggle it using the button in the top navigation." },
            { value: "a3", trigger: "Is it accessible?", content: "All components meet WCAG 2.1 AA contrast requirements. Focus rings are always visible, touch targets are at least 44×44px, and screen reader semantics are properly set." },
            { value: "a4", trigger: "Can I use this without Tailwind?", content: "Tailwind v4 is required as the underlying engine for shadcn, but all theming is done through CSS custom properties. You work with semantic tokens, not utility classes directly." },
          ].map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{item.content}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ShowcaseBlock>

      <ShowcaseBlock title="Table" description="Accessible data tables with captions">
        <div className="rounded-md border border-border overflow-hidden">
          <Table>
            <TableCaption>Recent invoices for your account</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="w-32 text-right tabular-nums">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((inv) => (
                <TableRow key={inv.id}>
                  <TableCell className="font-medium">{inv.id}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${statusColors[inv.status]}`}>
                      {inv.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{inv.method}</TableCell>
                  <TableCell className="w-32 text-right font-mono tabular-nums">{inv.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Scroll Area" description="Custom-scrolled containers">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-2">Vertical scroll</p>
            <ScrollArea className="h-48 rounded-md border border-border p-4">
              {Array.from({ length: 20 }, (_, i) => (
                <div key={i} className="py-1.5 border-b border-border last:border-0 text-sm text-foreground">
                  Item {i + 1} — scrollable content row
                </div>
              ))}
            </ScrollArea>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-2">Horizontal scroll</p>
            <ScrollArea className="w-full rounded-md border border-border p-4">
              <div className="flex gap-4 pb-2" style={{ width: "max-content" }}>
                {Array.from({ length: 12 }, (_, i) => (
                  <div key={i} className="h-20 w-28 rounded-lg bg-secondary flex items-center justify-center text-xs text-muted-foreground shrink-0">
                    Card {i + 1}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Aspect Ratio" description="Enforces consistent media aspect ratios">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: "16:9 (Video)", ratio: 16 / 9 },
            { label: "1:1 (Square)", ratio: 1 },
            { label: "4:3 (Photo)", ratio: 4 / 3 },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xs text-muted-foreground mb-2">{item.label}</p>
              <AspectRatio ratio={item.ratio} className="bg-muted rounded-lg border border-border overflow-hidden">
                <div
                  className="w-full h-full flex items-center justify-center text-muted-foreground text-sm"
                  style={{ background: "var(--brand-gradient-primary)", opacity: 0.3 }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-foreground text-sm font-medium">
                  {item.label}
                </div>
              </AspectRatio>
            </div>
          ))}
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Empty State" description="Displayed when no content is available">
        <Empty
          title="No results found"
          description="Try adjusting your search or filters to find what you're looking for."
        >
          <Button variant="outline">Clear filters</Button>
        </Empty>
      </ShowcaseBlock>
    </ShowcaseSection>
  );
}