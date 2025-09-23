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
    <Sidebar {...props}>
      <SidebarHeader>
        <div>
          {isDriver && (
            <div className="flex items-center justify-between p-2">
              <span className="text-sm font-medium">Online</span>
              <Switch
                checked={isOnline}
                onCheckedChange={handleToggle}
              />
            </div>
          )}
        </div>
        <div className="px-2 text-sm pt-8">
          <Link to="/">Home</Link>
        </div>
      </SidebarHeader>
      <SidebarContent className="space-y-4">
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
