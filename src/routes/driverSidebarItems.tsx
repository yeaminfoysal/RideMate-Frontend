import ActiveRide from "@/pages/driver/ActiveRide";
import EarningsDashboard from "@/pages/driver/EarningsDashboard";
import IncomingRequestsPage from "@/pages/driver/IncomingRequestsPage";
import ProfileManagement from "@/pages/User/ProfileManagement";
import RideHistory from "@/pages/User/RideHistory";

export const driverSidebarItems = [
    {
        title: "Getting Started",
        url: "#",
        items: [
            {
                title: "Incoming Requests",
                url: "/driver/incoming-request",
                component: IncomingRequestsPage
            },
            {
                title: "Active Ride",
                url: "/driver/active-ride",
                component: ActiveRide
            },
            {
                title: "Ride History",
                url: "/driver/ride-history",
                component: RideHistory
            },
            {
                title: "Earnings Dashboard",
                url: "/driver/earnings",
                component: EarningsDashboard
            },
            {
                title: "Profile Management",
                url: "/driver/profile",
                component: ProfileManagement
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