import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAllUsers: build.query({
            query: (params) => ({
                url: "/user/all-users",
                params
            }),
            providesTags: ["Users"],
            transformResponse: (response) => response.data,
        }),
        blockUser: build.mutation({
            query: (id) => ({
                url: `/user/block/${id}`,
                method: 'PATCH'
            }),
            invalidatesTags: ['Users'],
        }),
        unblockUser: build.mutation({
            query: (id) => ({
                url: `/user/unblock/${id}`,
                method: 'PATCH'
            }),
            invalidatesTags: ['Users'],
        })
    }),
})

export const { useGetAllUsersQuery, useBlockUserMutation, useUnblockUserMutation } = userApi