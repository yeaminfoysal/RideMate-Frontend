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
            // {
            //     title: "Project Structure",
            //     url: "#",
            // },
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