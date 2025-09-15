import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { driverSidebarItems } from "@/routes/driverSidebarItems";
import { userSidebarItems } from "@/routes/userSidebarItems";
import type { TRole } from "@/types";

export const role = {
    superAdmin: "SUPER_ADMIN",
    admin: "ADMIN",
    user: "USER",
    driver: "DRIVER",
};

export const getSidebarItems = (userRole: TRole) => {
    switch (userRole) {

        case role.user:
            return [...userSidebarItems];

        case role.driver:
            return [...driverSidebarItems];

        case role.admin:
            return [...adminSidebarItems];

        default:
            return []
    }
}