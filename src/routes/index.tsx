import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/Login";
import Unauthorized from "@/pages/Unauthorized";
import { generateRoutes } from "@/utils/generateRoute";
import { role } from "@/utils/getSidebarItems";
import { withAuth } from "@/utils/withAuth";
import { createBrowserRouter, Navigate } from "react-router";
import { userSidebarItems } from "./userSidebarItems";
import AboutPage from "@/pages/AboutPage";
import FeaturesPage from "@/pages/FeaturesPage";
import ContactPage from "@/pages/ContactPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                Component: HomePage,
                index: true
            },
            {
                Component: AboutPage,
                path: "/about",
            },
            {
                Component: FeaturesPage,
                path: "/features",
            },
            {
                Component: ContactPage,
                path: "/contact",
            }
        ]
    },
    {
        path: "/login",
        Component: LoginPage
    },
    {
        path: "/user",
        Component: DashboardLayout
    },
    {
        path: "/unauthorized",
        Component: Unauthorized
    },
    {
        path: "/user",
        Component: withAuth(DashboardLayout, role.user),
        children: [
            {
                index: true,
                element: <Navigate to={"/user/ride-book"} />
            },
            ...generateRoutes(userSidebarItems)
        ]
    }
]);