import { useUserInfoQuery } from "@/redux/features/auth/authApi";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType, requiredRole: string) => {
    return function AuthWrapper() {
        const { data, isLoading } = useUserInfoQuery(undefined);

        if (!isLoading && !data?.data?.email) {
            return <Navigate to={"/login"} />
        }

        if (!isLoading && data?.data?.isBlocked) {
            return <Navigate to={"/account-status"} />
        }

        if (requiredRole && !isLoading && requiredRole !== data?.data?.role) {
            return <Navigate to={"/unauthorized"} />
        }

        return <Component />
    }
}