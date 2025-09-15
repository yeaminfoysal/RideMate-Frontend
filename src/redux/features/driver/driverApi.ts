import { baseApi } from "@/redux/baseApi";

export const driverApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getDriverStatus: build.query({
            query: () => "/driver/availability-status",
            providesTags: ["Driver"]
        }),
        getEarnings: build.query({
            query: () => "/driver/earnings",
        }),
        setAvailablity: build.mutation({
            query: (body) => ({
                url: "/driver/availability",
                method: 'PATCH',
                body
            }),
            invalidatesTags: ['Driver'],
        }),
        updateDriverProfile: build.mutation({
            query: (body) => ({
                url: "/driver/update-profile",
                method: 'PATCH',
                body
            }),
            invalidatesTags: ['Driver'],
        }),
        getDriverProfile: build.query({
            query: () => "/driver/profile",
            providesTags: ["Driver"]
        }),
        setDriverApprovalStatus: build.mutation({
            query: ({ id, ...rest }) => ({
                url: `/approval/${id}`,
                method: 'PATCH',
                body: rest
            }),
            invalidatesTags: ['Drivers'],
        }),
        getAllDrivers: build.query({
            query: (params) => ({
                url: "/driver/all-drivers",
                params
            }),
            providesTags: ["Drivers"],
            transformResponse: (response) => response.data,
        }),
    }),
})

export const { useGetDriverStatusQuery, useSetAvailablityMutation, useGetEarningsQuery, useUpdateDriverProfileMutation, useGetDriverProfileQuery, useSetDriverApprovalStatusMutation, useGetAllDriversQuery } = driverApi