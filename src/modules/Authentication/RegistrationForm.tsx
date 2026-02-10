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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRegisterMutation } from "@/redux/features/auth/authApi"
import { Link, useNavigate } from "react-router"
import { toast } from "sonner"
import Lottie from 'lottie-react';
import animationData from '../../assets/signup-animation.json';

const formSchema = z
    .object({
        name: z.string().min(2, "Name must be at least 2 characters"),
        email: z.string().email("Invalid email address"),
        password: z
            .string()
            .min(8, "Password must be at least 8 characters")
            .regex(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                "Password must contain uppercase, lowercase, number, and special character"
            ),
        confirmPassword: z.string(),
        role: z.enum(["USER", "DRIVER"], { error: "Role is required", }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        path: ["confirmPassword"],
        message: "Passwords do not match",
    });


export function RegistrationForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    const [registerUser] = useRegisterMutation()
    const navigate = useNavigate()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: undefined,
        },
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("Registering....")
        try {
            await registerUser(data).unwrap()
            toast.success("Registeration successfull", { id: toastId })
            navigate("/login")
        } catch (err: any) {
            console.error(err)
            toast.error(err.data.message, { id: toastId })
        }
    }

    const inputClassName = "h-12 rounded-xl border-border bg-black/[0.03] dark:bg-white/5 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300"

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 shadow-2xl shadow-primary/5 backdrop-blur-xl p-0">
                <CardContent className="grid p-0 md:grid-cols-2">

                    {/* Lottie Animation Section — Left Side */}
                    <div className="relative hidden md:flex items-center justify-center overflow-hidden rounded-l-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
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
                                className="w-full max-w-[300px] drop-shadow-2xl"
                            />
                            {/* Tagline below animation */}
                            <div className="text-center space-y-2">
                                <h3 className="text-lg font-semibold text-foreground/90">
                                    Join RideMate Today
                                </h3>
                                <p className="text-xs text-muted-foreground max-w-[240px] leading-relaxed">
                                    Create your account and start your journey with us
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form Section — Right Side */}
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 p-8 md:p-10">
                            {/* Header */}
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="h-1.5 w-8 rounded-full bg-primary" />
                                    <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                                        RideMate
                                    </span>
                                </div>
                                <h1 className="text-3xl font-bold tracking-tight text-foreground">
                                    Create an Account
                                </h1>
                                <p className="text-sm text-muted-foreground">
                                    Register to start riding or driving with RideMate
                                </p>
                            </div>

                            {/* Name */}
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-foreground/70 text-sm font-medium">Full Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="John Doe"
                                                {...field}
                                                className={inputClassName}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />

                            {/* Email */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-foreground/70 text-sm font-medium">Email Address</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="john@example.com"
                                                {...field}
                                                className={inputClassName}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />

                            {/* Password Row */}
                            <div className="flex gap-4 items-start">
                                {/* Password */}
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel className="text-foreground/70 text-sm font-medium">Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    placeholder="••••••••"
                                                    {...field}
                                                    className={inputClassName}
                                                />
                                            </FormControl>
                                            <FormMessage className="min-h-[20px] text-xs" />
                                        </FormItem>
                                    )}
                                />

                                {/* Confirm Password */}
                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel className="text-foreground/70 text-sm font-medium">Confirm Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    placeholder="••••••••"
                                                    {...field}
                                                    className={inputClassName}
                                                />
                                            </FormControl>
                                            <FormMessage className="min-h-[20px] text-xs" />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            {/* Role Selection */}
                            <FormField
                                control={form.control}
                                name="role"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-foreground/70 text-sm font-medium">Role</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <SelectTrigger className={cn(inputClassName, "w-full")}>
                                                    <SelectValue placeholder="Select your role" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="USER">Rider</SelectItem>
                                                    <SelectItem value="DRIVER">Driver</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 active:scale-[0.98]"
                            >
                                Create Account
                            </Button>

                            {/* Divider */}
                            <div className="relative flex items-center gap-3">
                                <div className="h-px flex-1 bg-border" />
                                <span className="text-xs text-muted-foreground uppercase tracking-wider">or continue with</span>
                                <div className="h-px flex-1 bg-border" />
                            </div>

                            {/* Social logins */}
                            <div className="">
                                <Button
                                    onClick={() => {
                                        const selectedRole = form.getValues("role");
                                        if (!selectedRole) {
                                            toast.error("Please select a role before continuing with Google signup.");
                                            return;
                                        }
                                        window.open(`${import.meta.env.VITE_BASE_URL}/auth/google?role=${selectedRole}`, "_self");
                                    }}
                                    variant="outline"
                                    type="button"
                                    className="w-full h-11 rounded-xl border-border bg-black/[0.02] dark:bg-white/5 hover:bg-black/[0.05] dark:hover:bg-white/10 transition-all duration-300"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4 mr-2">
                                        <path
                                            d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    Google
                                </Button>
                            </div>

                            {/* Login Link */}
                            <p className="text-center text-sm text-muted-foreground">
                                Already have an account?{" "}
                                <Link
                                    to="/login"
                                    className="text-primary font-medium hover:text-primary/80 transition-colors underline underline-offset-4"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </form>
                    </Form>
                </CardContent>
            </Card>

            {/* Footer */}
            <p className="text-center text-xs text-muted-foreground/60">
                By registering, you agree to our{" "}
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
