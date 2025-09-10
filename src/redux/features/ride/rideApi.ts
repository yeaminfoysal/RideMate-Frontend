import { baseApi } from "@/redux/baseApi";

export const rideApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPokemonByName: build.query({
            query: (name) => `pokemon/${name}`,
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

export const { useRequestRideMutation } = rideApi