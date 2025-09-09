import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    // FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"

const formSchema = z.object({
    pickup: z.string().min(2, {
        message: "Pickup location is required.",
    }),
    destination: z.string().min(2, {
        message: "Destination is required.",
    }),
})

export function BookingForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            pickup: "",
            destination: "",
        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    return (
        <div className="w-[824px] mx-auto bg-background p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-8 text-center">🚖 Book Your Ride</h2>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

                    {/* Pickup Field */}
                    <FormField
                        control={form.control}
                        name="pickup"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-semibold">Pickup Location</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter pickup location"
                                        className="h-12 text-lg"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Destination Field */}
                    <FormField
                        control={form.control}
                        name="destination"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="font-semibold">Destination</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter destination"
                                        className="h-12 text-lg"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button
                        type="submit"
                        className="w-full h-12 rounded-lg font-semibold text-lg"
                    >
                        Confirm Booking
                    </Button>
                </form>
            </Form>
        </div>
    )
}