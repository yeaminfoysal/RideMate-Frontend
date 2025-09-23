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

    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card className="overflow-hidden p-0">
                <CardContent className="grid p-0 md:grid-cols-2">
                    <div className="bg-muted relative hidden md:block">
                        <img
                            src="/placeholder.svg"
                            alt="Image"
                            className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                        />
                    </div>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-6 md:p-8">
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">Create an Account</h1>
                                <p className="text-muted-foreground text-balance">
                                    Register to start riding or driving with RideMate
                                </p>
                            </div>

                            {/* Name */}
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John Doe" {...field} />
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
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="john@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />

                            <div className="flex gap-4 items-start">
                                {/* Password */}
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input type="password" placeholder="********" {...field} />
                                            </FormControl>
                                            <FormMessage className="min-h-[20px] text-xs" /> {/* keeps height stable */}
                                        </FormItem>
                                    )}
                                />

                                {/* Confirm Password */}
                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem className="flex-1">
                                            <FormLabel>Confirm Password</FormLabel>
                                            <FormControl>
                                                <Input type="password" placeholder="********" {...field} />
                                            </FormControl>
                                            <FormMessage className="min-h-[20px] text-xs" /> {/* same trick */}
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
                                        <FormLabel>Role</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <SelectTrigger className="w-full">
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
                            <Button type="submit" className="w-full">Register</Button>

                            {/* Divider */}
                            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                                <span className="bg-card text-muted-foreground relative z-10 px-2">
                                    Or continue with
                                </span>
                            </div>

                            {/* Social logins */}
                            <div className="grid grid-cols-2 gap-4">

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
                                    className="w-full"
                                >
                                    Google
                                </Button>
                                <Button
                                    onClick={() => window.open(`${import.meta.env.VITE_BASE_URL}/auth/facebook`)}
                                    variant="outline"
                                    type="button"
                                    className="w-full"
                                >
                                    Facebook
                                </Button>
                            </div>

                            <div className="text-center text-sm">
                                Already have an account?{" "}
                                <Link to="/login" className="underline underline-offset-4">
                                    Login
                                </Link>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>

            <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
                By clicking register, you agree to our <a href="#">Terms of Service</a>{" "}
                and <a href="#">Privacy Policy</a>.
            </div>
        </div>
    )
}
