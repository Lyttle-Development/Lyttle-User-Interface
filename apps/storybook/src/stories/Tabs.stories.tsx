import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs, TabsList, TabsTrigger, TabsContent, Card, CardContent, CardHeader, CardTitle, CardDescription, Input, Label, Button, Badge } from "@lyttle/ui";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: "text",
      description: "The initially active tab value",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Simple: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-96">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="pt-4">
        <p className="text-sm text-muted-foreground">Manage your account details here.</p>
      </TabsContent>
      <TabsContent value="password" className="pt-4">
        <p className="text-sm text-muted-foreground">Change your password here.</p>
      </TabsContent>
      <TabsContent value="notifications" className="pt-4">
        <p className="text-sm text-muted-foreground">Configure notification preferences.</p>
      </TabsContent>
    </Tabs>
  ),
};

export const SettingsPanel: Story = {
  name: "Real World: Settings panel",
  render: () => (
    <Tabs defaultValue="profile" className="w-full max-w-xl">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Update your public profile information.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" defaultValue="Jane" />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" defaultValue="Doe" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="bio">Bio</Label>
              <Input id="bio" placeholder="Tell us about yourself" />
            </div>
            <Button size="sm">Save changes</Button>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="security">
        <Card>
          <CardHeader>
            <CardTitle>Security</CardTitle>
            <CardDescription>Manage your password and 2FA settings.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="current-pw">Current password</Label>
              <Input id="current-pw" type="password" placeholder="••••••••" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="new-pw">New password</Label>
              <Input id="new-pw" type="password" placeholder="••••••••" />
            </div>
            <Button size="sm">Update password</Button>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="billing">
        <Card>
          <CardHeader>
            <CardTitle>Billing</CardTitle>
            <CardDescription>Manage your subscription and payment details.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 border border-border rounded-lg">
              <div>
                <div className="font-medium text-sm">Pro plan</div>
                <div className="text-xs text-muted-foreground">€29 / month</div>
              </div>
              <Badge variant="default">Active</Badge>
            </div>
            <Button variant="outline" size="sm">Manage subscription</Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const ContentTabs: Story = {
  name: "Real World: Content tabs",
  render: () => (
    <Tabs defaultValue="overview" className="w-full max-w-xl">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="mt-4">
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: "Active users", value: "2,847" },
            { label: "Sessions today", value: "9,132" },
          ].map((item) => (
            <Card key={item.label}>
              <CardContent className="pt-4">
                <div className="text-2xl font-bold">{item.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="analytics" className="mt-4">
        <p className="text-sm text-muted-foreground">Analytics charts would render here.</p>
      </TabsContent>
      <TabsContent value="reports" className="mt-4">
        <p className="text-sm text-muted-foreground">Downloadable reports would appear here.</p>
      </TabsContent>
    </Tabs>
  ),
};