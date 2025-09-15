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
    }),
})

export const { useGetDriverStatusQuery, useSetAvailablityMutation, useGetEarningsQuery, useUpdateDriverProfileMutation, useGetDriverProfileQuery } = driverApi