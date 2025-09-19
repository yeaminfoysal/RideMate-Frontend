import DriverManagement from "@/pages/Admin/DriverManagement";
import UserManagement from "@/pages/Admin/UserManagement";
import ProfileManagement from "@/pages/User/ProfileManagement";


export const adminSidebarItems = [
    {
        title: "Getting Started",
        url: "#",
        items: [
            {
                title: "User Managemment",
                url: "/admin/user-management",
                component: UserManagement
            },
            {
                title: "Driver Managemment",
                url: "/admin/driver-management",
                component: DriverManagement
            },
            {
                title: "Profile Managemment",
                url: "/admin/profile",
                component: ProfileManagement
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