import { baseApi } from "@/redux/baseApi";

export const paymentApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createPaymentUrl: build.mutation({
            query: (rideId) => ({
                url: `/payment/init-payment/${rideId}`,
                method: 'POST'
            }),
        }),
    }),
})

export const { useCreatePaymentUrlMutation } = paymentApi