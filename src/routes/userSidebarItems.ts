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
                title: "Ride History",
                url: "/user/ride-history",
                component: RideHistory
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