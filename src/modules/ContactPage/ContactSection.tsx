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
        <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Gradient Orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: "1s" }} />

                {/* Floating Particles */}
                <div className="absolute top-32 left-[15%] w-2 h-2 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "0s" }} />
                <div className="absolute top-48 right-[20%] w-3 h-3 bg-yellow-500/20 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
                <div className="absolute bottom-40 left-[25%] w-2 h-2 bg-primary/40 rounded-full animate-float" style={{ animationDelay: "2.5s" }} />
                <div className="absolute bottom-56 right-[30%] w-3 h-3 bg-yellow-400/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />
            </div>

            <div className="px-4 sm:px-6 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-start relative z-10">
                {/* Left Info */}
                <div className="space-y-6 sm:space-y-8 animate-fade-in">
                    {/* Enhanced Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-primary text-sm font-bold tracking-wide uppercase">Contact Us</span>
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
                    </div>

                    {/* Gradient Title */}
                    <h2 className="text-3xl sm:text-4xl md:text-[50px] font-black leading-tight">
                        <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent inline-block">
                            Get in Touch
                        </span>
                        <span className="text-primary">.</span>
                    </h2>

                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        We're here to help! Reach out with any questions, feedback, or support requests, and we'll respond promptly.
                    </p>

                    {/* Decorative Line */}
                    <div className="relative w-24 h-1">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full blur-sm animate-pulse" />
                    </div>

                    {/* Enhanced Contact Cards */}
                    <div className="space-y-5 sm:space-y-6">
                        {/* Location Card */}
                        <div className="group relative flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-background via-background to-primary/5 border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-lg overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative">
                                <div className="absolute inset-0 bg-foreground/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative p-4 md:p-5 rounded-xl bg-foreground text-primary group-hover:scale-110 transition-transform duration-300">
                                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-[34px] md:h-[34px]" />
                                </div>
                            </div>

                            <div className="relative">
                                <h3 className="font-bold text-sm sm:text-base mb-1 group-hover:text-primary transition-colors duration-300">Location</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground">
                                    Jl. Merdeka Raya No.73B, Kuta, Badung, Bali
                                </p>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="group relative flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-background via-background to-primary/5 border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-lg overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative p-4 md:p-5 rounded-xl bg-primary text-black group-hover:scale-110 transition-transform duration-300">
                                    <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-[35px] md:h-[35px]" />
                                </div>
                            </div>

                            <div className="relative">
                                <h3 className="font-bold text-sm sm:text-base mb-1 group-hover:text-primary transition-colors duration-300">Phone</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground">
                                    (+62) 8896-2220 | (021) 111 444 90
                                </p>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="group relative flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-background via-background to-primary/5 border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-lg overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative p-4 md:p-5 rounded-xl bg-background shadow-lg border border-primary/20 text-primary group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-[35px] md:h-[35px]" />
                                </div>
                            </div>

                            <div className="relative">
                                <h3 className="font-bold text-sm sm:text-base mb-1 group-hover:text-primary transition-colors duration-300">Email</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground">
                                    support@domain.com | admin@domain.com
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Socials */}
                    <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                        <h3 className="font-bold text-sm sm:text-base">Social Media:</h3>
                        <div className="flex gap-3">
                            <Button size="icon" className="bg-primary hover:bg-yellow-600 rounded-lg w-10 h-10 hover:scale-110 transition-transform duration-300">
                                f
                            </Button>
                            <Button size="icon" className="bg-foreground hover:bg-gray-800 text-background rounded-lg w-10 h-10 hover:scale-110 transition-transform duration-300">
                                x
                            </Button>
                            <Button size="icon" className="bg-primary hover:bg-yellow-600 text-background rounded-lg w-10 h-10 hover:scale-110 transition-transform duration-300">
                                w
                            </Button>
                            <Button size="icon" className="bg-foreground hover:bg-gray-800 text-background rounded-lg w-10 h-10 hover:scale-110 transition-transform duration-300">
                                in
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Enhanced Right Form */}
                <div className="group relative bg-background shadow-2xl rounded-2xl p-6 sm:p-8 md:p-10 border border-primary/10 hover:border-primary/30 transition-all duration-500 overflow-hidden animate-fade-in" style={{ animationDelay: "100ms" }}>
                    {/* Glowing Border Effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-yellow-500 to-primary opacity-10 blur-md animate-gradient-xy" />
                    </div>

                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="relative space-y-5 sm:space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm sm:text-base font-semibold">Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="h-12 sm:h-14 text-sm sm:text-base border-2 border-primary/10 focus:border-primary/30 transition-colors duration-300"
                                                    placeholder="Your Name"
                                                    {...field}
                                                />
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
                                            <FormLabel className="text-sm sm:text-base font-semibold">Email</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="h-12 sm:h-14 text-sm sm:text-base border-2 border-primary/10 focus:border-primary/30 transition-colors duration-300"
                                                    placeholder="Your Email"
                                                    {...field}
                                                />
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
                                        <FormLabel className="text-sm sm:text-base font-semibold">Subject</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="h-12 sm:h-14 text-sm sm:text-base border-2 border-primary/10 focus:border-primary/30 transition-colors duration-300"
                                                placeholder="Subject"
                                                {...field}
                                            />
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
                                        <FormLabel className="text-sm sm:text-base font-semibold">Message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                className="min-h-[120px] text-sm sm:text-base border-2 border-primary/10 focus:border-primary/30 transition-colors duration-300"
                                                placeholder="Your message..."
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className="relative w-full bg-primary hover:bg-yellow-600 text-foreground text-sm sm:text-base py-6 font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden group/btn"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                                <span className="relative">Send Message</span>
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </section>
    );
}
