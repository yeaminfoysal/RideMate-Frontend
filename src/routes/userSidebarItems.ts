import RideBook from "@/pages/User/RideBook";

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