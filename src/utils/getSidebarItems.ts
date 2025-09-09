import { userSidebarItems } from "@/routes/userSidebarItems";
import type { TRole } from "@/types";

export const role = {
    superAdmin: "SUPER_ADMIN",
    admin: "ADMIN",
    user: "USER",
};

export const getSidebarItems = (userRole: TRole) => {
    switch (userRole) {
        case role.user:
            return [...userSidebarItems];
        default:
            return []
    }
}