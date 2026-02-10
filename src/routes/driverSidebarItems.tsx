import ActiveRide from "@/pages/driver/ActiveRide";
import EarningsDashboard from "@/pages/driver/EarningsDashboard";
import IncomingRequestsPage from "@/pages/driver/IncomingRequestsPage";
import ProfileManagement from "@/pages/User/ProfileManagement";
import RideHistory from "@/pages/User/RideHistory";
import { Bell, Navigation, History, DollarSign, UserCircle } from "lucide-react";

export const driverSidebarItems = [
    {
        title: "Getting Started",
        url: "#",
        items: [
            {
                title: "Incoming Requests",
                url: "/driver/incoming-request",
                component: IncomingRequestsPage,
                icon: Bell
            },
            {
                title: "Active Ride",
                url: "/driver/active-ride",
                component: ActiveRide,
                icon: Navigation
            },
            {
                title: "Ride History",
                url: "/driver/ride-history",
                component: RideHistory,
                icon: History
            },
            {
                title: "Earnings Dashboard",
                url: "/driver/earnings",
                component: EarningsDashboard,
                icon: DollarSign
            },
            {
                title: "Profile Management",
                url: "/driver/profile",
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