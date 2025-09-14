import ActiveRide from "@/pages/driver/ActiveRide";
import IncomingRequestsPage from "@/pages/driver/IncomingRequestsPage";
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