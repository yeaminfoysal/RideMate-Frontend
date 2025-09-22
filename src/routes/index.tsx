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
import FaqPage from "@/pages/FAQPage";
import RegistrationPage from "@/pages/Registration";
import AccountStatusPage from "@/pages/AccountStatusPage";
import { driverSidebarItems } from "./driverSidebarItems";
import RideDetails from "@/pages/User/RideDetails";
import { adminSidebarItems } from "./adminSidebarItems";
import PaymentSucccess from "@/pages/User/PaymentSuccess";
import PaymentFailed from "@/pages/User/PaymentFaild";
import PaymentCancel from "@/pages/User/PaymentCanceled";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                Component: HomePage,
                index: true
                // path: "/home",
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
            },
            {
                Component: FaqPage,
                path: "/faq",
            }
        ]
    },
    {
        path: "/login",
        Component: LoginPage
    },
    {
        path: "/register",
        Component: RegistrationPage
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
        path: "/account-status",
        Component: AccountStatusPage
    },
    {
        path: "/user",
        Component: withAuth(DashboardLayout, role.user),
        children: [
            {
                index: true,
                element: <Navigate to={"/user/ride-book"} />
            },
            {
                path: "ride-details/:id",
                Component: RideDetails
            },
            {
                path: "payment/success",
                Component: PaymentSucccess
            },
            {
                path: "payment/fail",
                Component: PaymentFailed
            },
            {
                path: "payment/cancel",
                Component: PaymentCancel
            },
            ...generateRoutes(userSidebarItems)
        ]
    },
    {
        path: "/driver",
        Component: withAuth(DashboardLayout, role.driver),
        children: [
            {
                index: true,
                element: <Navigate to={"/driver/incoming-request"} />
            },
            ...generateRoutes(driverSidebarItems)
        ]
    },
    {
        path: "/admin",
        Component: withAuth(DashboardLayout, role.admin),
        children: [
            {
                index: true,
                element: <Navigate to={"/admin/user-management"} />
            },
            ...generateRoutes(adminSidebarItems)
        ]
    },
]);