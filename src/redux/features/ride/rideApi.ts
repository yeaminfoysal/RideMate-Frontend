import { baseApi } from "@/redux/baseApi";

export const rideApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAvailableRide: build.query({
            query: () => `ride/available`,
        }),
        requestRide: build.mutation({
            query: (rideInfo) => ({
                url: `/ride/request`,
                method: 'POST',
                body: rideInfo,
            }),
        })
    }),
})

export const { useGetAvailableRideQuery, useRequestRideMutation } = rideApi