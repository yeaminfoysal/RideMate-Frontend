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

        // 👉 এখানে simulated submission
        toast.success("Your message has been sent successfully (simulated)!");
        form.reset();
    }

    return (
        <section className="py-20">
            <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-start">
                {/* Left Info */}
                <div className="space-y-6">
                    <h2 className="text-[50px] font-semibold">
                        Get in <span className="text-primary">Touch.</span>
                    </h2>
                    <p className="text-muted-foreground">
                        Lorem ipsum dolor sit amet consectetuer adipiscing elit. Aenean commodo ligula eget dolor. dolor sit amet consectetuer adipiscing elit.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="p-5 rounded-xl bg-foreground text-primary">
                                <MapPin size={34} />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Location</h3>
                                <p className="text-sm text-muted-foreground">
                                    Jl. Merdeka Raya No.73B, Kuta, Badung, Bali
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-5 rounded-xl bg-primary text-black">
                                <Phone size={35} />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Phone</h3>
                                <p className="text-sm text-muted-foreground">
                                    (+62) 8896-2220 | (021) 111 444 90
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="p-5 rounded-xl bg-background shadow text-primary">
                                <Mail size={35} />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-2">Email</h3>
                                <p className="text-sm text-muted-foreground">
                                    support@domain.com | admin@domain.com
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="pt-4 flex  items-center justify-between">
                        <h3 className="font-semibold">Social Media:</h3>
                        <div className="flex gap-3 mt-2">
                            <Button size="icon" className="bg-primary hover:bg-yellow-600  rounded-md">
                                f
                            </Button>
                            <Button size="icon" className="bg-foreground hover:bg-gray-800 text-background rounded-md">
                                x
                            </Button>
                            <Button size="icon" className="bg-primary hover:bg-yellow-600 text-background rounded-md">
                                w
                            </Button>
                            <Button size="icon" className="bg-foreground hover:bg-gray-800 text-background rounded-md">
                                in
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Right Form */}
                <div className="bg-background shadow-xl rounded-2xl p-12">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Name</FormLabel>
                                            <FormControl>
                                                <Input className="h-16" placeholder="Your Name" {...field} />
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
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input className="h-16"  placeholder="Your Email" {...field} />
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
                                        <FormLabel>Subject</FormLabel>
                                        <FormControl>
                                            <Input className="h-16"  placeholder="Subject" {...field} />
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
                                        <FormLabel>Message</FormLabel>
                                        <FormControl>
                                            <Textarea className="h-30"  rows={5} placeholder="Message" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="w-full bg-primary  text-foreground">
                                Send Message
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    );
}
