import type {Meta, StoryObj} from '@storybook/react-vite';
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuTrigger,
    NavigationMenuContent,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from '@lyttle-development/ui';

const meta: Meta<typeof NavigationMenu> = {
    title: 'Components/NavigationMenu',
    component: NavigationMenu,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'A collection of links for navigating websites, with support for dropdowns.',
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
    render: () => (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Getting
                        started</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                            <li>
                                <NavigationMenuLink
                                    href="#"
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline transition-colors hover:bg-accent"
                                >
                                    <div
                                        className="text-sm font-medium leading-none">Introduction
                                    </div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                        Get started with our UI framework.
                                    </p>
                                </NavigationMenuLink>
                            </li>
                            <li>
                                <NavigationMenuLink
                                    href="#"
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline transition-colors hover:bg-accent"
                                >
                                    <div
                                        className="text-sm font-medium leading-none">Installation
                                    </div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                        How to install dependencies and set up
                                        your project.
                                    </p>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:grid-cols-2">
                            {['Alert', 'Badge', 'Button', 'Card', 'Dialog', 'Drawer'].map((item) => (
                                <li key={item}>
                                    <NavigationMenuLink
                                        href="#"
                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline transition-colors hover:bg-accent"
                                    >
                                        <div
                                            className="text-sm font-medium leading-none">{item}</div>
                                    </NavigationMenuLink>
                                </li>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}
                                        href="#">
                        Docs
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    ),
};