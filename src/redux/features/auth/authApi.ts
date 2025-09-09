import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPokemonByName: build.query({
            query: (name) => `pokemon/${name}`,
        }),
        login: build.mutation({
            query: (userInfo) => ({
                url: `auth/login`,
                method: 'POST',
                body: userInfo,
            }),
        })
    }),
})

export const { useGetPokemonByNameQuery, useLoginMutation } = authApi