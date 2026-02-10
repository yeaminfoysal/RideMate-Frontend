import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { useUserInfoQuery } from "@/redux/features/auth/authApi"
// import { useGetDriverInfoQuery, useSetAvailabilityMutation } from "@/redux/features/driver/driverApi"
import { getSidebarItems } from "@/utils/getSidebarItems";
import { Link } from "react-router";
import { Switch } from "@/components/ui/switch"  // shadcn switch
import { useGetDriverStatusQuery, useSetAvailablityMutation } from "@/redux/features/driver/driverApi";
import { Home } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import logo from "@/assets/logo2.png";

type SidebarItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userInfo } = useUserInfoQuery(undefined);
  const { data: driverInfo } = useGetDriverStatusQuery(undefined, {
    skip: userInfo?.data?.role !== "DRIVER",
  });

  const [setAvailability] = useSetAvailablityMutation();

  const isDriver = userInfo?.data?.role === "DRIVER";
  const isOnline = driverInfo?.data?.isOnline ?? false;

  const handleToggle = async (checked: boolean) => {
    await setAvailability({ isOnline: checked });
  };

  const data = {
    navMain: getSidebarItems(userInfo?.data?.role),
  };

  return (
    <Sidebar {...props} className="border-r border-border/50 z-[100]">
      <SidebarHeader className="border-b border-border/50 bg-gradient-to-br from-primary/5 via-background to-background pb-4">
        {/* Logo and Home Link */}
        <Link to="/" className="flex items-center gap-3 px-4 py-3 group">
          <img
            src={logo}
            alt="RideMate"
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <span className="font-semibold text-lg text-foreground">RideMate</span>
        </Link>

        {/* Driver Online Toggle */}
        {isDriver && (
          <div className="flex items-center justify-between px-4 py-2 mt-2 bg-muted/50 rounded-lg mx-3">
            <span className="text-sm font-medium flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${isOnline ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
              {isOnline ? 'Online' : 'Offline'}
            </span>
            <Switch
              checked={isOnline}
              onCheckedChange={handleToggle}
            />
          </div>
        )}

        {/* Quick Home Link */}
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-2 mt-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
        >
          <Home className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </SidebarHeader>

      <SidebarContent className="space-y-2 py-4">
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel className="px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
              {item.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((menuItem: SidebarItem) => {
                  const Icon = menuItem.icon;
                  return (
                    <SidebarMenuItem key={menuItem.title}>
                      <SidebarMenuButton
                        asChild
                        className="group transition-all duration-200 hover:bg-primary/10 hover:text-primary data-[active=true]:bg-primary/15 data-[active=true]:text-primary data-[active=true]:font-semibold"
                      >
                        <Link to={menuItem.url} className="flex items-center gap-3 px-4 py-2">
                          {Icon && (
                            <Icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                          )}
                          <span>{menuItem.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
