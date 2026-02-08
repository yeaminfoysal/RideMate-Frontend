import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";

// ✅ Zod schema
const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(3, "Subject must be at least 3 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactSection() {
    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    function onSubmit(data: ContactFormValues) {
        console.log("Simulated submission:", data);

        toast.success("Your message has been sent successfully (simulated)!");
        form.reset();
    }

    return (
        <section className="py-12 sm:py-16 md:py-20">
            <div className="px-4 sm:px-6 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
                {/* Left Info */}
                <div className="space-y-4 sm:space-y-6">
                    <h2 className="text-3xl sm:text-4xl md:text-[50px] font-semibold">
                        Get in <span className="text-primary">Touch.</span>
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground">
                        We’re here to help! Reach out with any questions, feedback, or support requests, and we’ll respond promptly.
                    </p>

                    <div className="space-y-4 sm:space-y-6 md:space-y-8">
                        <div className="flex items-center gap-3 sm:gap-4">
                            <div className="p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl bg-foreground text-primary flex-shrink-0">
                                <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-[34px] md:h-[34px]" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Location</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground">
                                    Jl. Merdeka Raya No.73B, Kuta, Badung, Bali
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 sm:gap-4">
                            <div className="p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl bg-primary text-black flex-shrink-0">
                                <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-[35px] md:h-[35px]" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Phone</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground">
                                    (+62) 8896-2220 | (021) 111 444 90
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 sm:gap-4">
                            <div className="p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl bg-background shadow text-primary flex-shrink-0">
                                <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-[35px] md:h-[35px]" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Email</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground">
                                    support@domain.com | admin@domain.com
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                        <h3 className="font-semibold text-sm sm:text-base">Social Media:</h3>
                        <div className="flex gap-2 sm:gap-3">
                            <Button size="icon" className="bg-primary hover:bg-yellow-600 rounded-md w-8 h-8 sm:w-10 sm:h-10">
                                f
                            </Button>
                            <Button size="icon" className="bg-foreground hover:bg-gray-800 text-background rounded-md w-8 h-8 sm:w-10 sm:h-10">
                                x
                            </Button>
                            <Button size="icon" className="bg-primary hover:bg-yellow-600 text-background rounded-md w-8 h-8 sm:w-10 sm:h-10">
                                w
                            </Button>
                            <Button size="icon" className="bg-foreground hover:bg-gray-800 text-background rounded-md w-8 h-8 sm:w-10 sm:h-10">
                                in
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Right Form */}
                <div className="bg-background shadow-xl rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6 md:space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm sm:text-base">Name</FormLabel>
                                            <FormControl>
                                                <Input className="h-12 sm:h-14 md:h-16 text-sm sm:text-base" placeholder="Your Name" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm sm:text-base">Email</FormLabel>
                                            <FormControl>
                                                <Input className="h-12 sm:h-14 md:h-16 text-sm sm:text-base" placeholder="Your Email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm sm:text-base">Subject</FormLabel>
                                        <FormControl>
                                            <Input className="h-12 sm:h-14 md:h-16 text-sm sm:text-base" placeholder="Subject" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm sm:text-base">Message</FormLabel>
                                        <FormControl>
                                            <Textarea className="h-24 sm:h-28 md:h-30 text-sm sm:text-base" rows={5} placeholder="Message" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="w-full bg-primary text-foreground text-sm sm:text-base py-3 sm:py-4 md:py-5">
                                Send Message
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    );
}
