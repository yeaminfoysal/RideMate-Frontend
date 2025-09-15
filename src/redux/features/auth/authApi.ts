import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPokemonByName: build.query({
            query: (name) => `pokemon/${name}`,
        }),
        login: build.mutation({
            query: (userInfo) => ({
                url: `/auth/login`,
                method: 'POST',
                body: userInfo,
            }),
        }),
        register: build.mutation({
            query: (userInfo) => ({
                url: `/auth/register`,
                method: 'POST',
                body: userInfo,
            }),
        }),
        userInfo: build.query({
            query: () => "/user/me",
            providesTags: ["User"]
        }),
        logout: build.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            })
        }),
        updateProfile: build.mutation({
            query: (userInfo) => ({
                url: `/user/update-profile`,
                method: 'PATCH',
                body: userInfo,
            }),
            invalidatesTags: ["User"]
        }),
        changePassword: build.mutation({
            query: (userInfo) => ({
                url: `/auth/change-password`,
                method: 'PATCH',
                body: userInfo,
            }),
        }),
    }),
})

export const { useGetPokemonByNameQuery, useLoginMutation, useUserInfoQuery, useLogoutMutation, useRegisterMutation, useUpdateProfileMutation, useChangePasswordMutation } = authApi