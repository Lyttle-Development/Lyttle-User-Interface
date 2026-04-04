'use client';

import * as React from 'react';
import {ShowcaseBlock, ShowcaseSection} from './showcase-section';
import {
    Button,
    Checkbox,
    Combobox,
    Field,
    Input,
    InputGroup,
    InputGroupInput,
    InputGroupText,
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
    Label,
    NativeSelect,
    RadioGroup,
    RadioGroupItem,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Slider,
    Switch,
    Textarea
} from '@lyttle-development/ui';
import {
    Grid,
    Inline,
    Stack,
    Surface,
    Text
} from '@lyttle-development/ui';

const frameworks = [
    {value: 'next', label: 'Next.js'},
    {value: 'remix', label: 'Remix'},
    {value: 'astro', label: 'Astro'},
    {value: 'nuxt', label: 'Nuxt'},
    {value: 'svelte', label: 'SvelteKit'},
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
                <Grid columns={1} mdColumns={2} gap="lg">
                    <Stack gap="xs" align="start">
                        <Label htmlFor="input-default">Default input</Label>
                        <Input id="input-default" placeholder="Enter text…"/>
                    </Stack>
                    <Stack gap="xs" align="start">
                        <Label htmlFor="input-disabled">Disabled</Label>
                        <Input id="input-disabled" placeholder="Not editable"
                               disabled/>
                    </Stack>
                    <Stack gap="xs" align="start">
                        <Label htmlFor="input-error">
                            Email{' '}
                            <Text as="span" tone="destructive"
                                  aria-hidden="true">*</Text>
                        </Label>
                        <Input
                            id="input-error"
                            type="email"
                            placeholder="you@example.com"
                            aria-invalid="true"
                            aria-describedby="input-error-msg"
                            validation="error"
                        />
                        <Text id="input-error-msg" as="p" size="xs"
                              tone="destructive" role="alert">
                            Please enter a valid email address.
                        </Text>
                    </Stack>
                    <Stack gap="xs" align="start">
                        <Label htmlFor="input-success">Username</Label>
                        <Input
                            id="input-success"
                            defaultValue="lyttle_dev"
                            aria-describedby="input-success-msg"
                            validation="success"
                        />
                        <Text id="input-success-msg" as="p" size="xs"
                              tone="primary">
                            Username is available ✓
                        </Text>
                    </Stack>
                </Grid>
            </ShowcaseBlock>

            <ShowcaseBlock title="Input Groups"
                           description="Decorated inputs with prefixes/suffixes">
                <Grid columns={1} mdColumns={2} gap="lg">
                    <Stack gap="xs" align="start">
                        <Label>Website URL</Label>
                        <InputGroup>
                            <InputGroupText>https://</InputGroupText>
                            <InputGroupInput placeholder="yoursite.com"/>
                        </InputGroup>
                    </Stack>
                    <Stack gap="xs" align="start">
                        <Label>Amount</Label>
                        <InputGroup>
                            <InputGroupText>€</InputGroupText>
                            <InputGroupInput type="number" placeholder="0.00"/>
                            <InputGroupText>EUR</InputGroupText>
                        </InputGroup>
                    </Stack>
                    <Stack gap="xs" align="start">
                        <Label>Search</Label>
                        <InputGroup>
                            <InputGroupText>
                                <svg width="14" height="14" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor"
                                     strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round" aria-hidden="true">
                                    <circle cx="11" cy="11" r="8"/>
                                    <line x1="21" y1="21" x2="16.65"
                                          y2="16.65"/>
                                </svg>
                            </InputGroupText>
                            <InputGroupInput placeholder="Search components…"/>
                        </InputGroup>
                    </Stack>
                    <Stack gap="xs" align="start">
                        <Label>Twitter</Label>
                        <InputGroup>
                            <InputGroupText>@</InputGroupText>
                            <InputGroupInput placeholder="username"/>
                        </InputGroup>
                    </Stack>
                </Grid>
            </ShowcaseBlock>

            <ShowcaseBlock title="Field Component"
                           description="Field wraps label + input + description + error">
                <Grid columns={1} mdColumns={2} gap="lg">
                    <Field
                        label="Full Name"
                        description="As it appears on your ID"
                        htmlFor="field-name"
                    >
                        <Input id="field-name" placeholder="Jane Smith"/>
                    </Field>
                    <Field
                        label="Password"
                        description="Minimum 8 characters"
                        htmlFor="field-pw"
                    >
                        <Input id="field-pw" type="password"
                               placeholder="••••••••"/>
                    </Field>
                </Grid>
            </ShowcaseBlock>

            <ShowcaseBlock title="Textarea">
                <Stack gap="xs" align="start" style={{maxWidth: '32rem'}}>
                    <Label htmlFor="textarea-main">Message</Label>
                    <Textarea
                        id="textarea-main"
                        placeholder="Write your message here…"
                        rows={4}
                        aria-describedby="textarea-hint"
                    />
                    <Text id="textarea-hint" as="p" size="xs" tone="muted">
                        Max 500 characters. Plain text only.
                    </Text>
                </Stack>
            </ShowcaseBlock>

            <ShowcaseBlock title="Select & Combobox">
                <Grid columns={1} mdColumns={3} gap="lg">
                    <Stack gap="xs" align="start">
                        <Label htmlFor="select-role">Role</Label>
                        <Select>
                            <SelectTrigger id="select-role">
                                <SelectValue placeholder="Select a role…"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem
                                    value="admin">Administrator</SelectItem>
                                <SelectItem value="editor">Editor</SelectItem>
                                <SelectItem value="viewer">Viewer</SelectItem>
                                <SelectItem value="guest" disabled>Guest
                                    (unavailable)</SelectItem>
                            </SelectContent>
                        </Select>
                    </Stack>
                    <Stack gap="xs" align="start">
                        <Label htmlFor="native-select">Country</Label>
                        <NativeSelect id="native-select">
                            <option value="">Select country…</option>
                            <option value="be">Belgium</option>
                            <option value="nl">Netherlands</option>
                            <option value="de">Germany</option>
                            <option value="fr">France</option>
                        </NativeSelect>
                    </Stack>
                    <Stack gap="xs" align="start">
                        <Label>Framework</Label>
                        <Combobox
                            options={frameworks}
                            placeholder="Select framework…"
                            searchPlaceholder="Search frameworks…"
                            emptyMessage="No framework found."
                        />
                    </Stack>
                </Grid>
            </ShowcaseBlock>

            <ShowcaseBlock title="Checkbox & Radio">
                <Grid columns={1} mdColumns={2} gap="xl">
                    <Stack gap="sm" align="start">
                        <Text as="p" size="sm" weight="semibold" tone="muted"
                              transform="uppercase">
                            Checkboxes
                        </Text>
                        <Stack gap="sm" align="start">
                            {[
                                {
                                    id: 'cb1',
                                    label: 'Accept terms and conditions',
                                    defaultChecked: true
                                },
                                {id: 'cb2', label: 'Subscribe to newsletter'},
                                {
                                    id: 'cb3',
                                    label: 'Disabled option',
                                    disabled: true
                                },
                                {
                                    id: 'cb4',
                                    label: 'Disabled checked',
                                    disabled: true,
                                    defaultChecked: true
                                },
                            ].map((item) => (
                                <Inline key={item.id} gap="sm" align="center"
                                        wrap={false}>
                                    <Checkbox
                                        id={item.id}
                                        defaultChecked={item.defaultChecked}
                                        disabled={item.disabled}
                                        aria-label={item.label}
                                    />
                                    <Label htmlFor={item.id}>
                                        {item.label}
                                    </Label>
                                </Inline>
                            ))}
                        </Stack>
                    </Stack>
                    <Stack gap="sm" align="start">
                        <Text as="p" size="sm" weight="semibold" tone="muted"
                              transform="uppercase">
                            Radio Group
                        </Text>
                        <RadioGroup defaultValue="standard"
                                    aria-label="Delivery speed">
                            {[
                                {value: 'express', label: 'Express (1–2 days)'},
                                {
                                    value: 'standard',
                                    label: 'Standard (3–5 days)'
                                },
                                {value: 'free', label: 'Free (7–10 days)'},
                            ].map((item) => (
                                <Inline key={item.value} gap="sm" align="center"
                                        wrap={false}>
                                    <RadioGroupItem
                                        value={item.value}
                                        id={`radio-${item.value}`}
                                    />
                                    <Label
                                        htmlFor={`radio-${item.value}`}>{item.label}</Label>
                                </Inline>
                            ))}
                        </RadioGroup>
                    </Stack>
                </Grid>
            </ShowcaseBlock>

            <ShowcaseBlock title="Switch">
                <Stack gap="md" align="start">
                    {[
                        {
                            id: 'sw1',
                            label: 'Email notifications',
                            description: 'Receive updates via email',
                            defaultChecked: true
                        },
                        {
                            id: 'sw2',
                            label: 'Push notifications',
                            description: 'Browser push alerts'
                        },
                        {id: 'sw3', label: 'Disabled option', disabled: true},
                    ].map((item) => (
                        <Inline key={item.id} gap="md" justify="between"
                                style={{width: '100%', maxWidth: '24rem'}}>
                            <Stack gap="xs" align="start">
                                <Label htmlFor={item.id}>
                                    {item.label}
                                </Label>
                                {item.description && (
                                    <Text as="p" size="xs"
                                          tone="muted">{item.description}</Text>
                                )}
                            </Stack>
                            <Switch
                                id={item.id}
                                defaultChecked={item.defaultChecked}
                                disabled={item.disabled}
                                aria-label={item.label}
                            />
                        </Inline>
                    ))}
                </Stack>
            </ShowcaseBlock>

            <ShowcaseBlock title="Slider">
                <Stack gap="lg" align="start" style={{maxWidth: '24rem'}}>
                    <Stack gap="xs" align="start" style={{width: '100%'}}>
                        <Inline justify="between" style={{width: '100%'}}>
                            <Label>Volume</Label>
                            <Text as="span" size="sm"
                                  tone="muted">{sliderVal[0]}%</Text>
                        </Inline>
                        <Slider
                            value={sliderVal}
                            onValueChange={(v) => setSliderVal(Array.isArray(v) ? [...v] : [v])}
                            min={0}
                            max={100}
                            step={1}
                            aria-label="Volume"
                        />
                    </Stack>
                    <Stack gap="xs" align="start" style={{width: '100%'}}>
                        <Label>Disabled slider</Label>
                        <Slider defaultValue={[25]} disabled
                                aria-label="Disabled slider"/>
                    </Stack>
                </Stack>
            </ShowcaseBlock>

            <ShowcaseBlock title="OTP Input"
                           description="One-time passcode input for 2FA flows">
                <Stack gap="md" align="start">
                    <Stack gap="xs" align="start">
                        <Label>Enter verification code</Label>
                        <InputOTP maxLength={6} aria-label="One-time password">
                            <InputOTPGroup>
                                <InputOTPSlot index={0}/>
                                <InputOTPSlot index={1}/>
                                <InputOTPSlot index={2}/>
                            </InputOTPGroup>
                            <InputOTPSeparator/>
                            <InputOTPGroup>
                                <InputOTPSlot index={3}/>
                                <InputOTPSlot index={4}/>
                                <InputOTPSlot index={5}/>
                            </InputOTPGroup>
                        </InputOTP>
                        <Text as="p" size="xs" tone="muted">
                            Check your email for the 6-digit code.
                        </Text>
                    </Stack>
                </Stack>
            </ShowcaseBlock>

            <ShowcaseBlock title="Complete Form Example"
                           description="A realistic sign-up form using the full system">
                <Stack as="form" onSubmit={(e) => e.preventDefault()} gap="lg"
                       aria-label="Sign up form" noValidate
                       style={{maxWidth: '28rem'}}>
                    <Grid columns={2} gap="md">
                        <Stack gap="xs" align="start">
                            <Label htmlFor="form-first">First name <Text
                                as="span" tone="destructive"
                                aria-hidden="true">*</Text></Label>
                            <Input id="form-first" autoComplete="given-name"
                                   required/>
                        </Stack>
                        <Stack gap="xs" align="start">
                            <Label htmlFor="form-last">Last name <Text as="span"
                                                                       tone="destructive"
                                                                       aria-hidden="true">*</Text></Label>
                            <Input id="form-last" autoComplete="family-name"
                                   required/>
                        </Stack>
                    </Grid>
                    <Stack gap="xs" align="start">
                        <Label htmlFor="form-email">Email <Text as="span"
                                                                tone="destructive"
                                                                aria-hidden="true">*</Text></Label>
                        <Input id="form-email" type="email" autoComplete="email"
                               required placeholder="you@example.com"/>
                    </Stack>
                    <Stack gap="xs" align="start">
                        <Label htmlFor="form-pw">Password <Text as="span"
                                                                tone="destructive"
                                                                aria-hidden="true">*</Text></Label>
                        <Input id="form-pw" type="password"
                               autoComplete="new-password" required/>
                        <Text as="p" size="xs" tone="muted">Min 8 chars, one
                            number, one symbol.</Text>
                    </Stack>
                    <Surface tone="muted" padding="md" radius="lg"
                             shadow="none">
                        <Inline gap="sm" align="center" wrap={false}>
                            <Checkbox id="form-terms" required
                                      aria-required="true"/>
                            <Label htmlFor="form-terms"
                                   style={{flex: 1, minWidth: 0, lineHeight: 1.35, cursor: 'pointer'}}>
                                I agree to the{' '}
                                <a href="#forms">Terms of Service</a>{' '}
                                and{' '}
                                <a href="#forms">Privacy Policy</a>
                            </Label>
                        </Inline>
                    </Surface>
                    <Button
                        type="submit"
                        variant="brand"
                        style={{width: '100%'}}
                    >
                        Create account
                    </Button>
                </Stack>
            </ShowcaseBlock>
        </ShowcaseSection>
    );
}