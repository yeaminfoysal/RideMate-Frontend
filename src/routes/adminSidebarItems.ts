import Analytics from "@/pages/Admin/Analytics";
import DriverManagement from "@/pages/Admin/DriverManagement";
import RideOversight from "@/pages/Admin/RideOversight";
import UserManagement from "@/pages/Admin/UserManagement";
import ProfileManagement from "@/pages/User/ProfileManagement";
import { Users, UserCog, MapPin, BarChart3, UserCircle } from "lucide-react";


export const adminSidebarItems = [
    {
        title: "Getting Started",
        url: "#",
        items: [
            {
                title: "User Managemment",
                url: "/admin/user-management",
                component: UserManagement,
                icon: Users
            },
            {
                title: "Driver Managemment",
                url: "/admin/driver-management",
                component: DriverManagement,
                icon: UserCog
            },
            {
                title: "Ride Oversight",
                url: "/admin/ride-oversight",
                component: RideOversight,
                icon: MapPin
            },
            {
                title: "Analytics",
                url: "/admin/analytics",
                component: Analytics,
                icon: BarChart3
            },
            {
                title: "Profile Managemment",
                url: "/admin/profile",
                component: ProfileManagement,
                icon: UserCircle
            }
        ],
    },
    // {
    //     title: "Building Your Application",
    //     url: "#",
    //     items: [
    //         {
    //             title: "Routing",
    //             url: "#",
    //         },
    //         {
    //             title: "Data Fetching",
    //             url: "#",
    //             isActive: true,
    //         }
    //     ],
    // }
]