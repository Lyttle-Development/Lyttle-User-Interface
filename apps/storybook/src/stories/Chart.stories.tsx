import type {Meta, StoryObj} from '@storybook/react-vite';
import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from '@lyttle-development/ui';
import {
    Area,
    AreaChart,
    Bar,
    BarChart,
    CartesianGrid,
    Line,
    LineChart,
    XAxis,
    YAxis,
} from 'recharts';

const meta: Meta = {
    title: 'Components/Chart',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Beautiful charts built with Recharts and the Chart component.',
            },
        },
    },
};

export default meta;
type Story = StoryObj;

const barData = [
    {month: 'Jan', desktop: 186, mobile: 80},
    {month: 'Feb', desktop: 305, mobile: 200},
    {month: 'Mar', desktop: 237, mobile: 120},
    {month: 'Apr', desktop: 73, mobile: 190},
    {month: 'May', desktop: 209, mobile: 130},
    {month: 'Jun', desktop: 214, mobile: 140},
];

const chartConfig = {
    desktop: {label: 'Desktop', color: 'hsl(var(--chart-1))'},
    mobile: {label: 'Mobile', color: 'hsl(var(--chart-2))'},
};

export const BarChartStory: Story = {
    name: 'Bar Chart',
    render: () => (
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <BarChart data={barData}>
                <CartesianGrid vertical={false}/>
                <XAxis dataKey="month" tickLine={false} tickMargin={10}
                       axisLine={false}/>
                <ChartTooltip
                    content={(props) => <ChartTooltipContent {...props} />}/>
                <ChartLegend
                    content={(props) => <ChartLegendContent {...props} />}/>
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4}/>
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4}/>
            </BarChart>
        </ChartContainer>
    ),
};

export const LineChartStory: Story = {
    name: 'Line Chart',
    render: () => (
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <LineChart data={barData}>
                <CartesianGrid vertical={false}/>
                <XAxis dataKey="month" tickLine={false} tickMargin={10}
                       axisLine={false}/>
                <YAxis tickLine={false} axisLine={false}/>
                <ChartTooltip
                    content={(props) => <ChartTooltipContent {...props} />}/>
                <ChartLegend
                    content={(props) => <ChartLegendContent {...props} />}/>
                <Line type="monotone" dataKey="desktop"
                      stroke="var(--color-desktop)" strokeWidth={2}
                      dot={false}/>
                <Line type="monotone" dataKey="mobile"
                      stroke="var(--color-mobile)" strokeWidth={2} dot={false}/>
            </LineChart>
        </ChartContainer>
    ),
};

export const AreaChartStory: Story = {
    name: 'Area Chart',
    render: () => (
        <ChartContainer config={chartConfig} className="h-[300px] w-full">
            <AreaChart data={barData}>
                <CartesianGrid vertical={false}/>
                <XAxis dataKey="month" tickLine={false} tickMargin={10}
                       axisLine={false}/>
                <YAxis tickLine={false} axisLine={false}/>
                <ChartTooltip
                    content={(props) => <ChartTooltipContent {...props} />}/>
                <ChartLegend
                    content={(props) => <ChartLegendContent {...props} />}/>
                <Area type="monotone" dataKey="desktop"
                      fill="var(--color-desktop)" fillOpacity={0.2}
                      stroke="var(--color-desktop)" strokeWidth={2}/>
                <Area type="monotone" dataKey="mobile"
                      fill="var(--color-mobile)" fillOpacity={0.2}
                      stroke="var(--color-mobile)" strokeWidth={2}/>
            </AreaChart>
        </ChartContainer>
    ),
};