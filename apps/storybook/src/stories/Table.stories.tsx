import type {Meta, StoryObj} from '@storybook/react-vite';
import {
    Badge,
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@lyttle-development/ui';
import {MoreHorizontal} from 'lucide-react';

const meta: Meta<typeof Table> = {
    title: 'Components/Table',
    component: Table,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Responsive table component. Compose with TableHeader, TableBody, TableRow, TableHead, and TableCell.',
            },
        },
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof Table>;

const users = [
    {
        name: 'Jane Doe',
        email: 'jane@example.com',
        role: 'Admin',
        status: 'Active',
        joined: 'Jan 2024'
    },
    {
        name: 'John Smith',
        email: 'john@example.com',
        role: 'Member',
        status: 'Active',
        joined: 'Feb 2024'
    },
    {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        role: 'Member',
        status: 'Pending',
        joined: 'Mar 2024'
    },
    {
        name: 'Bob Wilson',
        email: 'bob@example.com',
        role: 'Viewer',
        status: 'Inactive',
        joined: 'Apr 2024'
    },
];

const statusVariant: Record<string, 'default' | 'secondary' | 'outline' | 'destructive'> = {
    Active: 'default',
    Pending: 'secondary',
    Inactive: 'outline',
};

export const Simple: Story = {
    render: () => (
        <div className="p-4">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Role</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {users.slice(0, 3).map((u) => (
                        <TableRow key={u.email}>
                            <TableCell
                                className="font-medium">{u.name}</TableCell>
                            <TableCell>{u.email}</TableCell>
                            <TableCell>{u.role}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    ),
};

export const WithStatusAndActions: Story = {
    name: 'Real World: Users table',
    render: () => (
        <div className="p-4">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Team members</h2>
                <Button size="sm">Invite user</Button>
            </div>
            <div className="border border-border rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead
                                className="hidden sm:table-cell">Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead
                                className="hidden md:table-cell">Joined</TableHead>
                            <TableHead className="w-10"/>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((u) => (
                            <TableRow key={u.email}>
                                <TableCell
                                    className="font-medium">{u.name}</TableCell>
                                <TableCell
                                    className="hidden sm:table-cell text-muted-foreground">{u.email}</TableCell>
                                <TableCell
                                    className="text-muted-foreground">{u.role}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={statusVariant[u.status]}>{u.status}</Badge>
                                </TableCell>
                                <TableCell
                                    className="hidden md:table-cell text-muted-foreground text-sm">{u.joined}</TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="icon"
                                            aria-label={`More options for ${u.name}`}>
                                        <MoreHorizontal className="h-4 w-4"/>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    ),
};

export const InvoiceTable: Story = {
    name: 'Real World: Invoice table',
    render: () => (
        <div className="p-4">
            <div className="border border-border rounded-lg overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Invoice</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Amount</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead
                                className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {[
                            {
                                id: 'INV-001',
                                date: '1 Jan 2024',
                                amount: '€120.00',
                                status: 'Paid'
                            },
                            {
                                id: 'INV-002',
                                date: '1 Feb 2024',
                                amount: '€120.00',
                                status: 'Paid'
                            },
                            {
                                id: 'INV-003',
                                date: '1 Mar 2024',
                                amount: '€145.00',
                                status: 'Pending'
                            },
                            {
                                id: 'INV-004',
                                date: '1 Apr 2024',
                                amount: '€145.00',
                                status: 'Overdue'
                            },
                        ].map((inv) => (
                            <TableRow key={inv.id}>
                                <TableCell
                                    className="font-mono text-sm font-medium">{inv.id}</TableCell>
                                <TableCell
                                    className="text-muted-foreground">{inv.date}</TableCell>
                                <TableCell>{inv.amount}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant={inv.status === 'Paid' ? 'default' : inv.status === 'Pending' ? 'secondary' : 'destructive'}>
                                        {inv.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost"
                                            size="sm">Download</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    ),
};