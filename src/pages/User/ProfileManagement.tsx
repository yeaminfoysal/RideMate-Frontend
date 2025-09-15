/* eslint-disable @typescript-eslint/no-explicit-any */
import { useChangePasswordMutation, useUpdateProfileMutation, useUserInfoQuery } from "@/redux/features/auth/authApi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useForm } from "react-hook-form";
import { User, Shield, Mail, Phone } from "lucide-react";
import { toast } from "sonner";

export default function ProfileManagement() {
    const { data, isLoading } = useUserInfoQuery(undefined);
    const [updateProfile] = useUpdateProfileMutation()
    const [changePassword] = useChangePasswordMutation()

    const profile = data?.data;

    // Forms
    const {
        register: registerProfile,
        handleSubmit: handleProfileSubmit,
    } = useForm<{ name: string; phone: string }>();

    const {
        register: registerPassword,
        handleSubmit: handlePasswordSubmit,
    } = useForm<{ currentPassword: string; newPassword: string }>();

    const onProfileUpdate = async (values: { name: string; phone: string }) => {
        const toastId = toast.loading("Updating profile");

        try {
            const res = await updateProfile(values).unwrap();
            if (res.success) toast.success("Profile updated successfully", { id: toastId })

        } catch (error) {
            console.log(error);
            toast.error("Profile updated failed, ", { id: toastId })
        }
    };

    const onPasswordChange = async (values: {
        currentPassword: string;
        newPassword: string;
    }) => {
        const toastId = toast.loading("Changing password");

        try {
            const res = await changePassword(values).unwrap();
            if (res.success) toast.success("Password changed successfully", { id: toastId })

        } catch (error: any) {
            console.log(error);
            toast.error(`Password changing failed, ${error.data.message}`, { id: toastId })
        }
    };

    if (isLoading) {
        return (
            <p className="text-center text-muted-foreground">Loading profile...</p>
        );
    }

    if (!profile) {
        return (
            <p className="text-center text-muted-foreground">No profile found.</p>
        );
    }

    return (
        <section className="container mx-auto px-4 py-8 space-y-6">
            <h1 className="text-2xl font-bold">👤 Profile Management</h1>

            {/* Profile Overview */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5 text-primary" />
                        Profile Overview
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>Email: {profile.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-muted-foreground" />
                        <span>Role: {profile.role}</span>
                    </div>
                </CardContent>
            </Card>

            {/* Tabs for Editing */}
            <Tabs defaultValue="profile" className="w-full">
                <TabsList className="grid grid-cols-2 md:w-[400px]">
                    <TabsTrigger value="profile">Edit Profile</TabsTrigger>
                    <TabsTrigger value="password">Change Password</TabsTrigger>
                </TabsList>

                {/* Edit Profile */}
                <TabsContent value="profile">
                    <Card>
                        <CardHeader>
                            <CardTitle>Edit Profile</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form
                                onSubmit={handleProfileSubmit(onProfileUpdate)}
                                className="space-y-4"
                            >
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input
                                        id="name"
                                        defaultValue={profile.name}
                                        {...registerProfile("name")}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone Number</Label>
                                    <div className="flex items-center gap-2">
                                        <Phone className="h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="phone"
                                            defaultValue={profile?.phone}
                                            placeholder="Enter phone number"
                                            {...registerProfile("phone")}
                                        />
                                    </div>
                                </div>

                                <Button type="submit" className="w-full">
                                    Save Changes
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>

                {/* Change Password */}
                <TabsContent value="password">
                    <Card>
                        <CardHeader>
                            <CardTitle>Change Password</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form
                                onSubmit={handlePasswordSubmit(onPasswordChange)}
                                className="space-y-4"
                            >
                                <div className="space-y-2">
                                    <Label htmlFor="currentPassword">Current Password</Label>
                                    <Input
                                        id="currentPassword"
                                        type="password"
                                        {...registerPassword("currentPassword")}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="newPassword">New Password</Label>
                                    <Input
                                        id="newPassword"
                                        type="password"
                                        {...registerPassword("newPassword")}
                                    />
                                </div>

                                <Button type="submit" className="w-full">
                                    Update Password
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </section>
    );
}
