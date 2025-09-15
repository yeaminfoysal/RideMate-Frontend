import LiveRide from "@/pages/User/LiveRide";
import ProfileManagement from "@/pages/User/ProfileManagement";
import RideBook from "@/pages/User/RideBook";
import RideHistory from "@/pages/User/RideHistory";

export const userSidebarItems = [
    {
        title: "Getting Started",
        url: "#",
        items: [
            {
                title: "Ride Book",
                url: "/user/ride-book",
                component: RideBook
            },
            {
                title: "Live Ride",
                url: "/user/live-ride",
                component: LiveRide
            },
            {
                title: "Ride History",
                url: "/user/ride-history",
                component: RideHistory
            },
            {
                title: "Profile Management",
                url: "/user/profile",
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