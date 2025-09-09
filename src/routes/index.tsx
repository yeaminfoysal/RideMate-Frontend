import App from "@/App";
import HomePage from "@/pages/HomePage";
import LoginPage from "@/pages/Login";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                Component: HomePage,
                index: true
            }
        ]
    },
    {
        path: "/login",
        Component: LoginPage
    },
]);