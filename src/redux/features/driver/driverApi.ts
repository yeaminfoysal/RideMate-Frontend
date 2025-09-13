import { baseApi } from "@/redux/baseApi";

export const driverApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getDriverStatus: build.query({
            query: () => "/driver/availability-status",
            providesTags: ["Driver"]
        }),
        setAvailablity: build.mutation({
            query: (body) => ({
                url: "/driver/availability",
                method: 'PATCH',
                body
            }),
            invalidatesTags: ['Driver'],
        })
    }),
})

export const { useGetDriverStatusQuery, useSetAvailablityMutation } = driverApi