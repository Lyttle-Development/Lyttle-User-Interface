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
import { Grid, Inline, Stack, Surface, Text, Heading } from "@lyttle/ui/components/layout/layout";

const invoices = [
  { id: "INV-001", status: "Paid", method: "Credit Card", amount: "€250.00" },
  { id: "INV-002", status: "Pending", method: "Bank Transfer", amount: "€150.00" },
  { id: "INV-003", status: "Paid", method: "PayPal", amount: "€350.00" },
  { id: "INV-004", status: "Overdue", method: "Credit Card", amount: "€90.00" },
  { id: "INV-005", status: "Paid", method: "Bank Transfer", amount: "€120.00" },
];

const statusVariants: Record<string, "success" | "warning" | "destructive"> = {
  Paid: "success",
  Pending: "warning",
  Overdue: "destructive",
};

export function SectionDataDisplay() {
  return (
    <ShowcaseSection
      id="data-display"
      title="Data Display"
      description="Cards, tables, accordions, tabs, scroll areas, and content containers."
    >
      <ShowcaseBlock title="Cards" description="Surface containers with header, content, and footer">
        <Grid columns={1} mdColumns={3} gap="md">
          {/* Basic card */}
          <Card>
            <CardHeader>
              <CardTitle>Project Alpha</CardTitle>
              <CardDescription>Design system implementation</CardDescription>
            </CardHeader>
            <CardContent>
              <Text as="p" size="sm" tone="muted">
                Building a comprehensive component library for Lyttle Development
                with full WCAG AA compliance.
              </Text>
            </CardContent>
            <CardFooter style={{ justifyContent: "space-between" }}>
              <Badge variant="secondary">In Progress</Badge>
              <Button variant="outline" size="sm">View →</Button>
            </CardFooter>
          </Card>

          {/* Featured card */}
          <Card>
            <CardHeader>
              <Stack gap="sm" align="start">
              <Badge variant="info">Most popular</Badge>
              <Stack gap="xs" align="start">
                <CardTitle>Premium Plan</CardTitle>
                <CardDescription>
                  Everything you need for design-system scale.
                </CardDescription>
              </Stack>
              </Stack>
            </CardHeader>
            <CardContent>
              <Heading as="p" size="4xl">€29<Text as="span" size="lg" tone="muted" weight="regular">/mo</Text></Heading>
              <Stack as="ul" gap="xs" style={{ marginTop: "0.75rem", marginBottom: 0, paddingLeft: "1.25rem" }}>
                <li>✓ Unlimited projects</li>
                <li>✓ Priority support</li>
                <li>✓ Custom domain</li>
              </Stack>
            </CardContent>
            <CardFooter>
              <Button variant="brand" style={{ width: "100%" }}>
                Get started
              </Button>
            </CardFooter>
          </Card>

          {/* Stat card */}
          <Card>
            <CardHeader>
              <CardDescription>Total Revenue</CardDescription>
              <Heading as="p" size="3xl">€12,450</Heading>
            </CardHeader>
            <CardContent>
              <Stack gap="sm" align="start">
              <Text as="p" size="xs" tone="primary" weight="medium">
                ↑ 12.5% from last month
              </Text>
              <Surface tone="muted" padding="sm" radius="lg" shadow="none">
                <Text as="p" size="xs" tone="muted">
                Best performing segment: enterprise subscriptions.
                </Text>
              </Surface>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Horizontal card */}
        <Card style={{ marginTop: "1rem" }}>
          <Inline gap="md" style={{ padding: "1.5rem" }}>
            <Avatar size="lg">
              <AvatarImage src="https://github.com/vercel.png" alt="Team member" />
              <AvatarFallback style={{ background: "var(--brand-gradient-primary)", color: "white", fontWeight: 700 }}>
                JD
              </AvatarFallback>
            </Avatar>
            <Stack gap="xs" align="start" style={{ flex: 1, minWidth: 0 }}>
              <Text as="p" weight="semibold">Jane Doe</Text>
              <Text as="p" size="sm" tone="muted">Senior Designer · Lyttle Development</Text>
            </Stack>
            <Button variant="outline" size="sm">Follow</Button>
          </Inline>
        </Card>
      </ShowcaseBlock>

      <ShowcaseBlock title="Tabs" description="Tabbed content panels">
        <Tabs defaultValue="overview">
          <TabsList aria-label="Project sections">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="disabled" disabled>Disabled</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" style={{ marginTop: "1rem" }}>
            <Card>
              <CardContent style={{ paddingTop: "1.5rem" }}>
                <Text as="p" size="sm" tone="muted">
                  The overview tab displays a summary of your project. All key
                  metrics, recent activity, and quick actions are accessible from
                  this panel. Keyboard users can navigate between tabs using arrow
                  keys.
                </Text>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics" style={{ marginTop: "1rem" }}>
            <Card>
              <CardContent style={{ paddingTop: "1.5rem" }}>
                <Text as="p" size="sm" tone="muted">
                  Analytics content — charts and metrics go here.
                </Text>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings" style={{ marginTop: "1rem" }}>
            <Card>
              <CardContent style={{ paddingTop: "1.5rem" }}>
                <Text as="p" size="sm" tone="muted">
                  Project settings and configuration options.
                </Text>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </ShowcaseBlock>

      <ShowcaseBlock title="Accordion" description="Expandable content sections">
        <Accordion style={{ width: "100%", maxWidth: "32rem" }}>
          {[
            { value: "a1", trigger: "What is Lyttle User Interface?", content: "A complete design system styled with the Lyttle Development brand palette and optimised for WCAG AA accessibility." },
            { value: "a2", trigger: "Does it support dark mode?", content: "Yes — the dark mode IS the Lyttle Development aesthetic with the deep navy/purple background (#100429). Toggle it using the button in the top navigation." },
            { value: "a3", trigger: "Is it accessible?", content: "All components meet WCAG 2.1 AA contrast requirements. Focus rings are always visible, touch targets are at least 44×44px, and screen reader semantics are properly set." },
            { value: "a4", trigger: "How is it themed?", content: "Lyttle User Interface uses shared CSS custom properties, Sass modules, and component-level styles to keep branding and theming consistent across apps." },
          ].map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>
                <Text as="p" tone="muted">{item.content}</Text>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ShowcaseBlock>

      <ShowcaseBlock title="Table" description="Accessible data tables with captions">
        <Surface padding="none" radius="md" shadow="none" style={{ overflow: "hidden" }}>
          <Table>
            <TableCaption>Recent invoices for your account</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead style={{ width: "8rem", textAlign: "right" }}>Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((inv) => (
                <TableRow key={inv.id}>
                  <TableCell style={{ fontWeight: 500 }}>{inv.id}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariants[inv.status]}>{inv.status}</Badge>
                  </TableCell>
                  <TableCell style={{ color: "var(--muted-foreground)" }}>{inv.method}</TableCell>
                  <TableCell style={{ width: "8rem", textAlign: "right", fontFamily: 'var(--font-mono, "SFMono-Regular"), ui-monospace, monospace' }}>{inv.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Surface>
      </ShowcaseBlock>

      <ShowcaseBlock title="Scroll Area" description="Custom-scrolled containers">
        <Grid columns={1} mdColumns={2} gap="md">
          <Stack gap="xs" align="start">
            <Text as="p" size="xs" tone="muted">Vertical scroll</Text>
            <ScrollArea style={{ height: "12rem", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "1rem" }}>
              {Array.from({ length: 20 }, (_, i) => (
                <Text key={i} as="div" size="sm" style={{ padding: "0.375rem 0", borderBottom: i === 19 ? "0" : "1px solid var(--border)" }}>
                  Item {i + 1} — scrollable content row
                </Text>
              ))}
            </ScrollArea>
          </Stack>
          <Stack gap="xs" align="start">
            <Text as="p" size="xs" tone="muted">Horizontal scroll</Text>
            <ScrollArea style={{ width: "100%", border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: "1rem" }}>
              <Inline gap="md" style={{ width: "max-content", paddingBottom: "0.5rem" }}>
                {Array.from({ length: 12 }, (_, i) => (
                  <Surface key={i} tone="secondary" padding="md" radius="lg" shadow="none" style={{ minHeight: "5rem", width: "7rem", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Text as="span" size="xs" tone="muted">Card {i + 1}</Text>
                  </Surface>
                ))}
              </Inline>
            </ScrollArea>
          </Stack>
        </Grid>
      </ShowcaseBlock>

      <ShowcaseBlock title="Aspect Ratio" description="Enforces consistent media aspect ratios">
        <Grid columns={1} mdColumns={3} gap="md">
          {[
            { label: "16:9 (Video)", ratio: 16 / 9 },
            { label: "1:1 (Square)", ratio: 1 },
            { label: "4:3 (Photo)", ratio: 4 / 3 },
          ].map((item) => (
            <Stack key={item.label} gap="xs" align="start">
              <Text as="p" size="xs" tone="muted">{item.label}</Text>
              <AspectRatio ratio={item.ratio} style={{ background: "var(--muted)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)", overflow: "hidden" }}>
                <div
                  style={{ width: "100%", height: "100%", background: "var(--brand-gradient-primary)", opacity: 0.3 }}
                />
                <Inline style={{ position: "absolute", inset: 0, justifyContent: "center", alignItems: "center" }}>
                  <Text as="span" size="sm" weight="medium">{item.label}</Text>
                </Inline>
              </AspectRatio>
            </Stack>
          ))}
        </Grid>
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