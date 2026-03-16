"use client";

import * as React from "react";
import { ShowcaseSection, ShowcaseBlock } from "./showcase-section";
import { Input } from "@lyttle/ui";
import { InputGroup, InputGroupInput, InputGroupText } from "@lyttle/ui";
import { Label } from "@lyttle/ui";
import { Textarea } from "@lyttle/ui";
import { Checkbox } from "@lyttle/ui";
import { RadioGroup, RadioGroupItem } from "@lyttle/ui";
import { Switch } from "@lyttle/ui";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@lyttle/ui";
import { NativeSelect } from "@lyttle/ui";
import { Slider } from "@lyttle/ui";
import { Button } from "@lyttle/ui";
import { Field } from "@lyttle/ui";
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@lyttle/ui";
import { Combobox } from "@lyttle/ui";

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "nuxt", label: "Nuxt" },
  { value: "svelte", label: "SvelteKit" },
];

export function SectionForms() {
  const [sliderVal, setSliderVal] = React.useState([40]);

  return (
    <ShowcaseSection
      id="forms"
      title="Forms & Inputs"
      description="All form primitives with accessible labels, validation states, and helper text."
    >
      <ShowcaseBlock title="Text Inputs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="input-default">Default input</Label>
            <Input id="input-default" placeholder="Enter text…" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="input-disabled">Disabled</Label>
            <Input id="input-disabled" placeholder="Not editable" disabled />
          </div>
          <div className="space-y-2">
            <Label htmlFor="input-error">
              Email{" "}
              <span className="text-destructive" aria-hidden="true">*</span>
            </Label>
            <Input
              id="input-error"
              type="email"
              placeholder="you@example.com"
              aria-invalid="true"
              aria-describedby="input-error-msg"
              className="border-destructive focus-visible:ring-destructive"
            />
            <p id="input-error-msg" className="text-xs text-destructive" role="alert">
              Please enter a valid email address.
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="input-success">Username</Label>
            <Input
              id="input-success"
              defaultValue="lyttle_dev"
              aria-describedby="input-success-msg"
              className="border-green-500 focus-visible:ring-green-500"
            />
            <p id="input-success-msg" className="text-xs text-green-600 dark:text-green-400">
              Username is available ✓
            </p>
          </div>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Input Groups" description="Decorated inputs with prefixes/suffixes">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label>Website URL</Label>
            <InputGroup>
              <InputGroupText>https://</InputGroupText>
              <InputGroupInput placeholder="yoursite.com" />
            </InputGroup>
          </div>
          <div className="space-y-2">
            <Label>Amount</Label>
            <InputGroup>
              <InputGroupText>€</InputGroupText>
              <InputGroupInput type="number" placeholder="0.00" />
              <InputGroupText>EUR</InputGroupText>
            </InputGroup>
          </div>
          <div className="space-y-2">
            <Label>Search</Label>
            <InputGroup>
              <InputGroupText>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </InputGroupText>
              <InputGroupInput placeholder="Search components…" />
            </InputGroup>
          </div>
          <div className="space-y-2">
            <Label>Twitter</Label>
            <InputGroup>
              <InputGroupText>@</InputGroupText>
              <InputGroupInput placeholder="username" />
            </InputGroup>
          </div>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Field Component" description="Field wraps label + input + description + error">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Field
            label="Full Name"
            description="As it appears on your ID"
            htmlFor="field-name"
          >
            <Input id="field-name" placeholder="Jane Smith" />
          </Field>
          <Field
            label="Password"
            description="Minimum 8 characters"
            htmlFor="field-pw"
          >
            <Input id="field-pw" type="password" placeholder="••••••••" />
          </Field>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Textarea">
        <div className="space-y-2 max-w-lg">
          <Label htmlFor="textarea-main">Message</Label>
          <Textarea
            id="textarea-main"
            placeholder="Write your message here…"
            rows={4}
            aria-describedby="textarea-hint"
          />
          <p id="textarea-hint" className="text-xs text-muted-foreground">
            Max 500 characters. Plain text only.
          </p>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Select & Combobox">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <Label htmlFor="select-role">Role</Label>
            <Select>
              <SelectTrigger id="select-role" className="w-full">
                <SelectValue placeholder="Select a role…" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Administrator</SelectItem>
                <SelectItem value="editor">Editor</SelectItem>
                <SelectItem value="viewer">Viewer</SelectItem>
                <SelectItem value="guest" disabled>Guest (unavailable)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="native-select">Country</Label>
            <NativeSelect id="native-select">
              <option value="">Select country…</option>
              <option value="be">Belgium</option>
              <option value="nl">Netherlands</option>
              <option value="de">Germany</option>
              <option value="fr">France</option>
            </NativeSelect>
          </div>
          <div className="space-y-2">
            <Label>Framework</Label>
            <Combobox
              options={frameworks}
              placeholder="Select framework…"
              searchPlaceholder="Search frameworks…"
              emptyMessage="No framework found."
            />
          </div>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Checkbox & Radio">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
              Checkboxes
            </p>
            <div className="space-y-3">
              {[
                { id: "cb1", label: "Accept terms and conditions", defaultChecked: true },
                { id: "cb2", label: "Subscribe to newsletter" },
                { id: "cb3", label: "Disabled option", disabled: true },
                { id: "cb4", label: "Disabled checked", disabled: true, defaultChecked: true },
              ].map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <Checkbox
                    id={item.id}
                    defaultChecked={item.defaultChecked}
                    disabled={item.disabled}
                    aria-label={item.label}
                  />
                  <Label
                    htmlFor={item.id}
                    className={item.disabled ? "text-muted-foreground cursor-not-allowed" : "cursor-pointer"}
                  >
                    {item.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
              Radio Group
            </p>
            <RadioGroup defaultValue="standard" aria-label="Delivery speed">
              {[
                { value: "express", label: "Express (1–2 days)", hint: "€8.99" },
                { value: "standard", label: "Standard (3–5 days)", hint: "€3.99" },
                { value: "free", label: "Free (7–10 days)", hint: "Free" },
              ].map((item) => (
                <div key={item.value} className="flex items-center gap-3 rounded-lg border border-border/60 bg-muted/20 px-3 py-2">
                  <RadioGroupItem
                    value={item.value}
                    id={`radio-${item.value}`}
                  />
                  <Label htmlFor={`radio-${item.value}`} className="cursor-pointer flex flex-col gap-1 leading-tight">
                    <span className="block">{item.label}</span>
                    <span className="text-xs text-muted-foreground">{item.hint}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Switch">
        <div className="space-y-4">
          {[
            { id: "sw1", label: "Email notifications", description: "Receive updates via email", defaultChecked: true },
            { id: "sw2", label: "Push notifications", description: "Browser push alerts" },
            { id: "sw3", label: "Disabled option", disabled: true },
          ].map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-4 max-w-sm">
              <div className="space-y-1">
                <Label htmlFor={item.id} className={item.disabled ? "text-muted-foreground" : ""}>
                  {item.label}
                </Label>
                {item.description && (
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                )}
              </div>
              <Switch
                id={item.id}
                defaultChecked={item.defaultChecked}
                disabled={item.disabled}
                aria-label={item.label}
              />
            </div>
          ))}
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Slider">
        <div className="space-y-6 max-w-sm">
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>Volume</Label>
              <span className="text-sm text-muted-foreground">{sliderVal[0]}%</span>
            </div>
            <Slider
              value={sliderVal}
              onValueChange={(v) => setSliderVal(Array.isArray(v) ? [...v] : [v])}
              min={0}
              max={100}
              step={1}
              aria-label="Volume"
            />
          </div>
          <div className="space-y-2">
            <Label>Disabled slider</Label>
            <Slider defaultValue={[25]} disabled aria-label="Disabled slider" />
          </div>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="OTP Input" description="One-time passcode input for 2FA flows">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Enter verification code</Label>
            <InputOTP maxLength={6} aria-label="One-time password">
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <p className="text-xs text-muted-foreground">
              Check your email for the 6-digit code.
            </p>
          </div>
        </div>
      </ShowcaseBlock>

      <ShowcaseBlock title="Complete Form Example" description="A realistic sign-up form using the full system">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-5 max-w-md"
          aria-label="Sign up form"
          noValidate
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="form-first">First name <span className="text-destructive" aria-hidden="true">*</span></Label>
              <Input id="form-first" autoComplete="given-name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="form-last">Last name <span className="text-destructive" aria-hidden="true">*</span></Label>
              <Input id="form-last" autoComplete="family-name" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="form-email">Email <span className="text-destructive" aria-hidden="true">*</span></Label>
            <Input id="form-email" type="email" autoComplete="email" required placeholder="you@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="form-pw">Password <span className="text-destructive" aria-hidden="true">*</span></Label>
            <Input id="form-pw" type="password" autoComplete="new-password" required />
            <p className="text-xs text-muted-foreground">Min 8 chars, one number, one symbol.</p>
          </div>
          <div className="flex items-start gap-3 rounded-lg border border-border/60 bg-muted/20 px-3 py-3">
            <Checkbox id="form-terms" required aria-required="true" className="mt-0.5" />
            <Label htmlFor="form-terms" className="text-sm leading-relaxed cursor-pointer inline">
              I agree to the{" "}
              <a href="#forms" className="text-primary">Terms of Service</a>{" "}
              and{" "}
              <a href="#forms" className="text-primary">Privacy Policy</a>
            </Label>
          </div>
          <Button
            type="submit"
            className="w-full text-white border-0"
            style={{ background: "var(--brand-gradient-primary)" }}
          >
            Create account
          </Button>
        </form>
      </ShowcaseBlock>
    </ShowcaseSection>
  );
}