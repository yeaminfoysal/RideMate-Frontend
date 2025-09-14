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
        getMyRideHistory: build.query({
            query: (params) => ({
                url: `/ride/me`,
                params: params
            }),
            providesTags: ['Rides'],
            transformResponse: (response) => response.data,
        }),
    }),
})

export const { useGetAvailableRideQuery, useRequestRideMutation, useAcceptRideMutation, useRejectRideMutation, useGetMyRideHistoryQuery } = rideApi