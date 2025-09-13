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
        }),
        acceptRide: build.mutation({
            query: ({ id }) => ({
                url: `/ride/accept/${id}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['Rides'],
        }),
        rejectRide: build.mutation({
            query: (id) => ({
                url: `/ride/reject/${id}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['Rides'],
        }),
    }),
})

export const { useGetAvailableRideQuery, useRequestRideMutation, useAcceptRideMutation, useRejectRideMutation } = rideApi