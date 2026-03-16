"use client";

import * as React from "react";
import { ShowcaseSection, ShowcaseBlock } from "./showcase-section";
import { Alert, AlertDescription, AlertTitle } from "@lyttle/ui";
import { Badge } from "@lyttle/ui";
import { Progress } from "@lyttle/ui";
import { Skeleton } from "@lyttle/ui";
import { Spinner } from "@lyttle/ui";
import { Avatar, AvatarFallback, AvatarImage } from "@lyttle/ui";
import { Tooltip, TooltipContent, TooltipTrigger } from "@lyttle/ui";
import { Button } from "@lyttle/ui";
import { Toaster } from "@lyttle/ui";
import { toast } from "sonner";

function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function AlertTriangleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}
function XCircleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  );
}

export function SectionFeedback() {
  const [progress, setProgress] = React.useState(18);

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

  React.useEffect(() => {
    let direction = 1;

    const timer = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 82) {
          direction = -1;
        } else if (current <= 18) {
          direction = 1;
        }

        return current + direction * 2;
      });
    }, 120);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <ShowcaseSection
      id="feedback"
      title="Feedback & Status"
      description="Alerts, toasts, progress, loading states, avatars, badges, and tooltips."
    >
      <ShowcaseBlock title="Alerts" description="Informational, success, warning, and error variants">
        <div className="space-y-3">
          <Alert className="border-blue-500/40 bg-blue-50 text-blue-900 dark:bg-blue-950/30 dark:text-blue-100 [&>svg]:text-blue-600 dark:[&>svg]:text-blue-300">
            <InfoIcon />
            <AlertTitle>Information</AlertTitle>
            <AlertDescription className="text-inherit/80">
              Your account settings have been saved. Changes may take a few moments
              to propagate across the system.
            </AlertDescription>
          </Alert>

          <Alert className="border-green-500/50 bg-green-50 dark:bg-green-950/30 text-green-800 dark:text-green-200 [&>svg]:text-green-600">
            <CheckIcon />
            <AlertTitle>Success</AlertTitle>
            <AlertDescription className="text-inherit/80">
              Your order has been placed successfully. You will receive a
              confirmation email within 5 minutes.
            </AlertDescription>
          </Alert>

          <Alert className="border-yellow-500/50 bg-yellow-50 dark:bg-yellow-950/30 text-yellow-800 dark:text-yellow-200 [&>svg]:text-yellow-600">
            <AlertTriangleIcon />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription className="text-inherit/80">
              Your subscription expires in 3 days. Please update your payment
              method to avoid interruption.
            </AlertDescription>
          </Alert>

          <Alert className="border-red-500/40 bg-red-50 text-red-900 dark:bg-red-950/30 dark:text-red-100 [&>svg]:text-red-600 dark:[&>svg]:text-red-300">
            <XCircleIcon />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription className="text-inherit/80">
              We could not process your request. Please check your input and try
              again, or contact support if the issue persists.
            </AlertDescription>
          </Alert>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Badges" description="Status and label badges in all variants">
        <div className="flex flex-wrap gap-3 items-center">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>

          {/* Custom semantic badges */}
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-200 dark:border-green-800">
            Active
          </Badge>
          <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 border-yellow-200 dark:border-yellow-800">
            Pending
          </Badge>
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-blue-200 dark:border-blue-800">
            In Review
          </Badge>
          <Badge className="bg-muted text-muted-foreground">Archived</Badge>

          {/* Brand badges */}
          <Badge
            className="border-transparent text-white"
            style={primaryGradientStyle}
          >
            Brand
          </Badge>
          <Badge
            className="border-transparent text-white"
            style={accentGradientStyle}
          >
            Accent
          </Badge>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Progress" description="Determinate progress bars">
        <div className="space-y-4 max-w-md">
          <div className="space-y-1.5">
            <div className="flex justify-between text-sm">
              <span className="text-foreground">Upload progress</span>
              <span className="text-muted-foreground">{progress}%</span>
            </div>
            <Progress value={progress} aria-label={`Upload: ${progress}%`} />
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-sm">
              <span className="text-foreground">Profile complete</span>
              <span className="text-muted-foreground">75%</span>
            </div>
            <Progress value={75} aria-label="Profile: 75% complete" />
          </div>
          <div className="space-y-1.5">
            <span className="text-sm text-foreground">Step 2 of 5</span>
            <Progress value={40} aria-label="Step 2 of 5" />
          </div>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Spinners & Loading" description="Loading indicators in all sizes">
        <div className="flex flex-wrap gap-6 items-center">
          <div className="flex flex-col items-center gap-2">
            <Spinner size="sm" />
            <span className="text-xs text-muted-foreground">sm</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner />
            <span className="text-xs text-muted-foreground">default</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="lg" />
            <span className="text-xs text-muted-foreground">lg</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Spinner size="xl" />
            <span className="text-xs text-muted-foreground">xl</span>
          </div>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Skeleton" description="Content placeholder during loading">
        <div className="space-y-4 max-w-sm">
          {/* Card skeleton */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-3 w-3/4" />
                <Skeleton className="h-3 w-1/2" />
              </div>
            </div>
            <Skeleton className="h-32 w-full rounded-lg" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-5/6" />
            <Skeleton className="h-3 w-4/6" />
          </div>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Avatar" description="User avatars with image, fallback, and size variants">
        <div className="flex flex-wrap gap-4 items-end">
          {/* With image */}
          <div className="flex flex-col items-center gap-2">
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://github.com/vercel.png" alt="Profile" />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">With image</span>
          </div>

          {/* Fallback only */}
          <div className="flex flex-col items-center gap-2">
            <Avatar className="h-16 w-16">
              <AvatarFallback
                className="text-white font-semibold"
                style={{ background: "var(--brand-gradient-primary)" }}
              >
                <span className="text-white mix-blend-difference">LD</span>
              </AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">Brand fallback</span>
          </div>

          {/* Size variants */}
          {["h-6 w-6", "h-8 w-8", "h-10 w-10", "h-12 w-12"].map((size) => (
            <Avatar key={size} className={size}>
              <AvatarFallback className="text-xs bg-secondary text-secondary-foreground">
                JD
              </AvatarFallback>
            </Avatar>
          ))}
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Tooltip" description="Accessible tooltips on hover and focus">
        <div className="flex flex-wrap gap-4 items-center">
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline" />}>
              Hover me
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a helpful tooltip</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger render={<Button variant="ghost" size="icon" aria-label="Information" />}>
              <InfoIcon />
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Additional context for this action</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger render={<span className="underline decoration-dotted cursor-help text-foreground" />}>
              What is WCAG?
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p>
                Web Content Accessibility Guidelines — international standards for
                making web content more accessible.
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Toast / Sonner" description="Non-blocking notification toasts">
        <div className="flex flex-wrap gap-3">
          <Button variant="outline" onClick={() => toast("Component saved successfully.")}>
            Default toast
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.success("Changes saved!", { description: "Your profile has been updated." })}
          >
            Success toast
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.error("Something went wrong", { description: "Please try again or contact support." })}
          >
            Error toast
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.warning("Subscription expiring", {
                description: "Your plan expires in 3 days.",
                action: { label: "Renew", onClick: () => {} },
              })
            }
          >
            Warning with action
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.promise(new Promise((res) => setTimeout(res, 2000)), {
                loading: "Saving…",
                success: "Saved!",
                error: "Failed to save.",
              })
            }
          >
            Promise toast
          </Button>
        </div>
        <Toaster />
      </ShowcaseBlock>
    </ShowcaseSection>
  );
}