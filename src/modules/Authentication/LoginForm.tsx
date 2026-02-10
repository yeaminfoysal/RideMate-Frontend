/* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useLoginMutation } from "@/redux/features/auth/authApi"
import { Link, useNavigate } from "react-router"
import { toast } from "sonner"
import Lottie from 'lottie-react';
import animationData from '../../assets/signup-animation.json';

const formSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(2, {
        message: "Password must be at least 2 characters.",
    }),
})

export function LoginForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const [login] = useLoginMutation();
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Signing....")
        try {
            await login(data).unwrap();
            toast.success("Login successfull", { id: toastId })
            navigate("/")
        } catch (err: any) {
            console.error(err.data.message);
            toast.error(err.data.message, { id: toastId })
        }
    };

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 shadow-2xl shadow-primary/5 backdrop-blur-xl p-0">
                <CardContent className="grid p-0 md:grid-cols-2">

                    {/* Form Section */}
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-8 md:p-10">
                            {/* Header */}
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="h-1.5 w-8 rounded-full bg-primary" />
                                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                                        RideMate
                                    </span>
                                </div>
                                <h1 className="text-3xl font-bold tracking-tight text-foreground">
                                    Welcome back
                                </h1>
                                <p className="text-sm text-muted-foreground">
                                    Sign in to continue your journey with RideMate
                                </p>
                            </div>

                            {/* Email Field */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-foreground/70 dark:text-foreground/70 text-sm font-medium">
                                            Email Address
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="john@example.com"
                                                {...field}
                                                value={field.value || ""}
                                                className="h-12 rounded-xl border-border bg-black/[0.03] dark:bg-white/5 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Password Field */}
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center justify-between">
                                            <FormLabel className="text-foreground/70 dark:text-foreground/70 text-sm font-medium">
                                                Password
                                            </FormLabel>
                                            <a
                                                href="#"
                                                className="text-xs text-primary/80 hover:text-primary transition-colors"
                                            >
                                                Forgot password?
                                            </a>
                                        </div>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="••••••••"
                                                {...field}
                                                value={field.value || ""}
                                                className="h-12 rounded-xl border-border bg-black/[0.03] dark:bg-white/5 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 active:scale-[0.98]"
                            >
                                Sign In
                            </Button>

                            {/* Divider */}
                            <div className="relative flex items-center gap-3">
                                <div className="h-px flex-1 bg-border" />
                                <span className="text-xs text-muted-foreground uppercase tracking-wider">or</span>
                                <div className="h-px flex-1 bg-border" />
                            </div>

                            {/* Sign Up Link */}
                            <p className="text-center text-sm text-muted-foreground">
                                Don&apos;t have an account?{" "}
                                <Link
                                    to="/register"
                                    className="text-primary font-medium hover:text-primary/80 transition-colors underline underline-offset-4"
                                >
                                    Create account
                                </Link>
                            </p>
                        </form>
                    </Form>

                    {/* Lottie Animation Section */}
                    <div className="relative hidden md:flex items-center justify-center overflow-hidden rounded-r-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
                        {/* Background decorative elements */}
                        <div className="absolute inset-0">
                            <div className="absolute top-10 right-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
                            <div className="absolute bottom-10 left-10 h-24 w-24 rounded-full bg-primary/15 blur-2xl" />
                            {/* Grid pattern */}
                            <div
                                className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
                                style={{
                                    backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                                    backgroundSize: `24px 24px`,
                                }}
                            />
                        </div>

                        {/* Lottie Animation */}
                        <div className="relative z-10 flex flex-col items-center gap-6 p-8">
                            <Lottie
                                animationData={animationData}
                                loop={true}
                                className="w-full max-w-[320px] drop-shadow-2xl"
                            />
                            {/* Tagline below animation */}
                            <div className="text-center space-y-2">
                                <h3 className="text-lg font-semibold text-foreground/90">
                                    Your Ride, Your Way
                                </h3>
                                <p className="text-xs text-muted-foreground max-w-[240px] leading-relaxed">
                                    Fast, reliable, and comfortable rides at your fingertips
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Footer */}
            <p className="text-center text-xs text-muted-foreground/60">
                By continuing, you agree to our{" "}
                <a href="#" className="text-muted-foreground/80 hover:text-primary transition-colors underline underline-offset-4">
                    Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-muted-foreground/80 hover:text-primary transition-colors underline underline-offset-4">
                    Privacy Policy
                </a>
            </p>
        </div>
    )
}
