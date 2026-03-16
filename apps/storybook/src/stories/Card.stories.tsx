import type {Meta, StoryObj} from '@storybook/react-vite';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    Button,
    Badge,
} from '@lyttle-development/ui';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'Cards are surface containers for related content. Use the sub-components CardHeader, CardTitle, CardDescription, CardContent, and CardFooter to compose layouts.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Simple: Story = {
    render: () => (
        <Card className="w-80">
            <CardHeader>
                <CardTitle>Card title</CardTitle>
                <CardDescription>A short description of the card
                    content.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">
                    This is the main content area of the card. You can put
                    anything here.
                </p>
            </CardContent>
        </Card>
    ),
};

export const WithFooter: Story = {
    render: () => (
        <Card className="w-80">
            <CardHeader>
                <CardTitle>Confirm action</CardTitle>
                <CardDescription>This action cannot be undone.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">
                    Are you sure you want to delete this item? All associated
                    data will be permanently removed.
                </p>
            </CardContent>
            <CardFooter className="flex gap-2 justify-end">
                <Button variant="outline" size="sm">Cancel</Button>
                <Button variant="destructive" size="sm">Delete</Button>
            </CardFooter>
        </Card>
    ),
};

export const PricingCard: Story = {
    name: 'Real World: Pricing card',
    render: () => (
        <Card className="w-72">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle>Pro</CardTitle>
                    <Badge variant="default">Popular</Badge>
                </div>
                <CardDescription>For growing teams</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <span className="text-4xl font-bold">€29</span>
                    <span
                        className="text-muted-foreground text-sm"> / month</span>
                </div>
                <ul className="text-sm space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                        <span className="text-primary">✓</span> Unlimited
                        projects
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-primary">✓</span> Priority support
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-primary">✓</span> Advanced
                        analytics
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-primary">✓</span> Custom domains
                    </li>
                </ul>
            </CardContent>
            <CardFooter>
                <Button
                    className="w-full text-white border-0"
                    style={{background: 'var(--brand-gradient-primary)'}}
                >
                    Get started
                </Button>
            </CardFooter>
        </Card>
    ),
};

export const StatCard: Story = {
    name: 'Real World: Stat card',
    render: () => (
        <div className="grid grid-cols-3 gap-4 w-full max-w-2xl">
            {[
                {
                    label: 'Total users',
                    value: '12,847',
                    change: '+12%',
                    up: true
                },
                {label: 'Revenue', value: '€48,295', change: '+8.2%', up: true},
                {
                    label: 'Churn rate',
                    value: '2.4%',
                    change: '+0.3%',
                    up: false
                },
            ].map((stat) => (
                <Card key={stat.label}>
                    <CardHeader className="pb-1">
                        <CardDescription>{stat.label}</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div
                            className={`text-xs mt-1 ${stat.up ? 'text-primary' : 'text-destructive'}`}>
                            {stat.change} vs last month
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    ),
};

export const ProfileCard: Story = {
    name: 'Real World: Profile card',
    render: () => (
        <Card className="w-72">
            <CardHeader className="text-center pb-2">
                <div
                    className="mx-auto w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-2"
                    style={{background: 'var(--brand-gradient-primary)'}}
                    aria-hidden="true"
                >
                    JD
                </div>
                <CardTitle>Jane Doe</CardTitle>
                <CardDescription>Senior Frontend Engineer</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
                <div className="flex justify-center gap-4 text-sm">
                    <div>
                        <div className="font-semibold">142</div>
                        <div className="text-muted-foreground">Projects</div>
                    </div>
                    <div>
                        <div className="font-semibold">4.9k</div>
                        <div className="text-muted-foreground">Followers</div>
                    </div>
                    <div>
                        <div className="font-semibold">317</div>
                        <div className="text-muted-foreground">Following</div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="gap-2">
                <Button className="flex-1" size="sm">Follow</Button>
                <Button variant="outline" className="flex-1"
                        size="sm">Message</Button>
            </CardFooter>
        </Card>
    ),
};