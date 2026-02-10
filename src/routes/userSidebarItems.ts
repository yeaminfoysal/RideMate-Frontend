import LiveRide from "@/pages/User/LiveRide";
import ProfileManagement from "@/pages/User/ProfileManagement";
import RideBook from "@/pages/User/RideBook";
import RideHistory from "@/pages/User/RideHistory";
import { Car, Radio, History, UserCircle } from "lucide-react";

export const userSidebarItems = [
    {
        title: "Getting Started",
        url: "#",
        items: [
            {
                title: "Ride Book",
                url: "/user/ride-book",
                component: RideBook,
                icon: Car
            },
            {
                title: "Live Ride",
                url: "/user/live-ride",
                component: LiveRide,
                icon: Radio
            },
            {
                title: "Ride History",
                url: "/user/ride-history",
                component: RideHistory,
                icon: History
            },
            {
                title: "Profile Management",
                url: "/user/profile",
                component: ProfileManagement,
                icon: UserCircle
            },
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