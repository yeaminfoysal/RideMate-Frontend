import ActiveRide from "@/pages/driver/ActiveRide";
import RideRequests from "@/pages/driver/RideRequests";

export const driverSidebarItems = [
    {
        title: "Getting Started",
        url: "#",
        items: [
            {
                title: "Ride Requests",
                url: "/driver/ride-requests",
                component: RideRequests
            },
            {
                title: "Active Ride",
                url: "/driver/active-ride",
                component: ActiveRide
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