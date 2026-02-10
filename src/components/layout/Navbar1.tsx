import { Menu } from "lucide-react";
import logo from "@/assets/logo2.png";
// import { Book, Sunset, Trees, Zap } from "lucide-react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./theme-toggole";
import { Link } from "react-router";
import { authApi, useLogoutMutation, useUserInfoQuery } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hook";

interface MenuItem {
    title: string;
    url: string;
    role?: "PUBLIC" | "ADMIN" | "USER" | "DRIVER"
    description?: string;
    icon?: React.ReactNode;
    items?: MenuItem[];
}

interface Navbar1Props {
    menu?: MenuItem[];
    auth?: {
        login: {
            title: string;
            url: string;
        };
        signup: {
            title: string;
            url: string;
        };
    };
}

const Navbar1 = ({
    menu = [
        { title: "Home", url: "/", role: "PUBLIC" },
        { title: "About", url: "/about", role: "PUBLIC" },
        { title: "Features", url: "/features", role: "PUBLIC" },
        { title: "FAQ", url: "/faq", role: "PUBLIC" },
        { title: "Contact", url: "/contact", role: "PUBLIC" },
        { title: "Dashboard", url: "/user", role: "USER" },
        { title: "Dashboard", url: "/driver", role: "DRIVER" },
        { title: "Dashboard", url: "/admin", role: "ADMIN" },
    ],
}: Navbar1Props) => {

    const { data } = useUserInfoQuery(undefined);
    const userRole = data?.data?.role || "PUBLIC";
    console.log(data)

    // ✅ filter menu based on role
    const filterMenu = (menuItems: MenuItem[]): MenuItem[] => {
        return menuItems
            .filter((item) => {
                if (!item.role || item.role === "PUBLIC") return true;
                return item.role === userRole;
            })
    };

    const filteredMenu = filterMenu(menu);
    const [logout] = useLogoutMutation();
    const dispathch = useAppDispatch()

    const handleLogout = async () => {
        await logout(undefined);
        dispathch(authApi.util.resetApiState())
    };

    return (
        <section className="pt-2 md:pt-4">
            <div className="container mx-auto border-2 rounded-2xl bg-background px-4 md:py lg:py-3 border-primary/30">
                {/* Desktop Menu */}
                <nav className="hidden justify-between lg:flex">
                    <div className="flex items-center gap-6">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group">
                            <img
                                src={logo}
                                alt="RideMate Logo"
                                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
                            />
                            <h3 className="text-2xl font-semibold">RideMate</h3>
                        </Link>
                        <div className="flex items-center">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    {filteredMenu.map((item) => renderMenuItem(item))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                    </div>
                    <div className="flex gap-2 items-center">
                        <ModeToggle />

                        {data?.data?.email && (
                            <Button
                                onClick={handleLogout}
                                variant="outline"
                                className="text-sm"
                            >
                                Logout
                            </Button>
                        )}

                        {!data?.data?.email && (
                            <Button asChild className="text-sm">
                                <Link to="/login">Login</Link>
                            </Button>
                        )}
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div className="block lg:hidden py-1">
                    <div className="flex items-center justify-between">
                        {/* Mobile Logo */}
                        <Link to="/" className="flex items-center gap-2">
                            <img
                                src={logo}
                                alt="RideMate Logo"
                                className="h-8 w-auto"
                            />
                            <h3 className="text-xl font-semibold">RideMate</h3>
                        </Link>

                        {/* Mobile Right Section */}
                        <div className="flex items-center gap-2">
                            <ModeToggle />
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="outline" size="icon">
                                        <Menu className="size-4" />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent className="overflow-y-auto" side="right">
                                    <SheetHeader>
                                        <SheetTitle>
                                            <span className="text-xl font-semibold">RideMate</span>
                                        </SheetTitle>
                                    </SheetHeader>
                                    <div className="flex flex-col gap-6 p-4 mt-4">
                                        <Accordion
                                            type="single"
                                            collapsible
                                            className="flex w-full flex-col gap-4"
                                        >
                                            {filteredMenu.map((item) => renderMobileMenuItem(item))}
                                        </Accordion>

                                        <div className="flex flex-col gap-3 mt-4">
                                            {data?.data?.email && (
                                                <Button
                                                    onClick={handleLogout}
                                                    variant="outline"
                                                    className="text-sm w-full"
                                                >
                                                    Logout
                                                </Button>
                                            )}

                                            {!data?.data?.email && (
                                                <Button asChild className="text-sm w-full">
                                                    <Link to="/login">Login</Link>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const renderMenuItem = (item: MenuItem) => {
    if (item.items) {
        return (
            <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-popover text-popover-foreground">
                    {item.items.map((subItem) => (
                        <NavigationMenuLink asChild key={subItem.title} className="w-80">
                            <SubMenuLink item={subItem} />
                        </NavigationMenuLink>
                    ))}
                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    }

    return (
        <NavigationMenuItem key={item.title}>
            <Link
                to={item.url}
                className="bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
            >
                {item.title}
            </Link>
        </NavigationMenuItem>
    );
};

const renderMobileMenuItem = (item: MenuItem) => {
    if (item.items) {
        return (
            <AccordionItem key={item.title} value={item.title} className="border-b-0">
                <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
                    {item.title}
                </AccordionTrigger>
                <AccordionContent className="mt-2">
                    {item.items.map((subItem) => (
                        <SubMenuLink key={subItem.title} item={subItem} />
                    ))}
                </AccordionContent>
            </AccordionItem>
        );
    }

    return (
        <Link key={item.title} to={item.url} className="text-md font-semibold">
            {item.title}
        </Link>
    );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
    return (
        <Link
            className="hover:bg-muted hover:text-accent-foreground flex min-w-80 select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
            to={item.url}
        >
            <div className="text-foreground">{item.icon}</div>
            <div>
                <div className="text-sm font-semibold">{item.title}</div>
                {item.description && (
                    <p className="text-muted-foreground text-sm leading-snug">
                        {item.description}
                    </p>
                )}
            </div>
        </Link>
    );
};

export { Navbar1 };
