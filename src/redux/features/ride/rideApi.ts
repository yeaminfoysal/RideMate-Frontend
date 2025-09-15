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
            query: ({ id }) => ({
                url: `/ride/reject/${id}`,
                method: 'PATCH',
            }),
            invalidatesTags: ['Rides'],
        }),
        cancelRide: build.mutation({
            query: (id) => ({
                url: `/ride/cancel/${id}`,
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
        getRideDetails: build.query({
            query: (id) => ({
                url: `/ride/details/${id}`,
            }),
            transformResponse: (response) => response.data,
        }),
        getActiveRide: build.query({
            query: () => ({
                url: `/ride/active`,
            }),
            providesTags: ["Rides"]
            // transformResponse: (response) => response.data,
        }),
        updateRideStatus: build.mutation({
            query: ({ rideId, ...body }) => ({
                url: `/ride/status/${rideId}`,
                method: 'PATCH',
                body: body
            }),
            invalidatesTags: ['Rides', "Driver"],
        }),
    }),
})

export const { useGetAvailableRideQuery, useRequestRideMutation, useAcceptRideMutation, useRejectRideMutation, useGetMyRideHistoryQuery, useGetRideDetailsQuery, useGetActiveRideQuery, useUpdateRideStatusMutation, useCancelRideMutation } = rideApi