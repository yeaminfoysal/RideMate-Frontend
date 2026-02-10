/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    useChangePasswordMutation,
    useUpdateProfileMutation,
    useUserInfoQuery,
} from "@/redux/features/auth/authApi";
import {
    useGetDriverProfileQuery,
    useUpdateDriverProfileMutation,
} from "@/redux/features/driver/driverApi";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useForm } from "react-hook-form";
import { User, Shield, Mail, Phone, Car, IdCard } from "lucide-react";
import { toast } from "sonner";
import { useEffect } from "react";

export default function ProfileManagement() {
    useEffect(() => {
        document.title = "RideMate | Profile";
    }, []);

    const { data, isLoading } = useUserInfoQuery(undefined);
    const { data: driverProfile } = useGetDriverProfileQuery(undefined, {
        skip: data?.data?.role !== "DRIVER",
    });
    const [updateProfile] = useUpdateProfileMutation();
    const [changePassword] = useChangePasswordMutation();
    const [updateDriverProfile] = useUpdateDriverProfileMutation();

    const profile = data?.data;

    // Profile form
    const { register: registerProfile, handleSubmit: handleProfileSubmit } =
        useForm<{ name: string; phone: string }>();

    // Password form
    const { register: registerPassword, handleSubmit: handlePasswordSubmit } =
        useForm<{ currentPassword: string; newPassword: string }>();

    // Profile form
    const { register: registerEmergencyContact, handleSubmit: handleEmergencyContact } =
        useForm<{ email: string; phone: string }>();

    // Driver Profile form
    const { register: registerDriver, handleSubmit: handleDriverSubmit } =
        useForm<{ licenseNumber: string; vehicle: string }>();

    // Profile update handler
    const onProfileUpdate = async (values: { name: string; phone: string }) => {
        const toastId = toast.loading("Updating profile...");
        try {
            const res = await updateProfile(values).unwrap();
            if (res.success) toast.success("Profile updated successfully", { id: toastId });
        } catch (error) {
            console.log(error);
            toast.error("Profile update failed", { id: toastId });
        }
    };

    // Emergency Contact update handler
    const onEmergencyContactUpdate = async (values: { email: string; phone: string }) => {
        const emergencyContact = values


        const toastId = toast.loading("Updating Emergency Contact...");
        try {

            const res = await updateProfile({ emergencyContact }).unwrap();
            if (res.success) toast.success("Emergency Contact updated successfully", { id: toastId });

        } catch (error) {
            console.log(error);
            toast.error("Profile update failed", { id: toastId });
        }
    };

    // Password change handler
    const onPasswordChange = async (values: {
        currentPassword: string;
        newPassword: string;
    }) => {
        const toastId = toast.loading("Changing password...");
        try {
            const res = await changePassword(values).unwrap();
            if (res.success) toast.success("Password changed successfully", { id: toastId });
        } catch (error: any) {
            console.log(error);
            toast.error(`Password change failed: ${error.data?.message}`, { id: toastId });
        }
    };

    // Driver profile update handler
    const onDriverUpdate = async (values: {
        licenseNumber: string;
        vehicle: string;
    }) => {
        const toastId = toast.loading("Updating driver profile...");
        try {
            const res = await updateDriverProfile(values).unwrap();
            if (res.success) toast.success("Driver profile updated", { id: toastId });
        } catch (error) {
            console.log(error);
            toast.error("Driver profile update failed", { id: toastId });
        }
    };

    if (isLoading) {
        return <p className="text-center text-muted-foreground">Loading profile...</p>;
    }

    if (!profile) {
        return <p className="text-center text-muted-foreground">No profile found.</p>;
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
                        <span>Email: {profile?.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4 text-muted-foreground" />
                        <span>Role: {profile?.role}</span>
                    </div>
                    {profile.role == "DRIVER" && (
                        <div className="flex items-center gap-2">
                            <Shield className="h-4 w-4 text-muted-foreground" />
                            <span>Approval Status: {driverProfile?.data?.approvalStatus}</span>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Tabs for Editing */}
            <Tabs defaultValue="profile" className="w-full">
                <TabsList
                    className={`grid ${profile?.role === "DRIVER" ? "grid-cols-4" : "grid-cols-3 "
                        } md:w-[650px]`}
                >
                    <TabsTrigger className="text-xs sm:text-[16px]" value="profile">Edit Profile</TabsTrigger>
                    <TabsTrigger className="text-xs sm:text-[16px]" value="password">Password</TabsTrigger>
                    <TabsTrigger className="text-xs sm:text-[16px]" value="emergencyContact">Emergency <span className="hidden sm:block">Contact</span></TabsTrigger>
                    {profile.role === "DRIVER" && (
                        <TabsTrigger className="text-xs sm:text-[16px]" value="driver">Driver Profile</TabsTrigger>
                    )}
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

                {/* Emergency Contact */}
                <TabsContent value="emergencyContact">
                    <Card>
                        <CardHeader>
                            <CardTitle>Emergency Contact</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form
                                onSubmit={handleEmergencyContact(onEmergencyContactUpdate)}
                                className="space-y-4"
                            >
                                <div className="space-y-2">
                                    <Label htmlFor="name">Email</Label>
                                    <Input
                                        id="email"
                                        defaultValue={profile?.emergencyContact?.email}
                                        {...registerEmergencyContact("email")}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="phone">Phone</Label>
                                    <div className="flex items-center gap-2">
                                        <Phone className="h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="phone"
                                            defaultValue={profile?.emergencyContact?.phone}
                                            placeholder="Enter phone number"
                                            {...registerEmergencyContact("phone")}
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

                {/* Driver Profile */}
                <TabsContent value="driver">
                    <Card>
                        <CardHeader>
                            <CardTitle>Driver Profile</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form
                                onSubmit={handleDriverSubmit(onDriverUpdate)}
                                className="space-y-4"
                            >
                                <div className="space-y-2">
                                    <Label htmlFor="licenseNumber">License Number</Label>
                                    <div className="flex items-center gap-2">
                                        <IdCard className="h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="licenseNumber"
                                            defaultValue={driverProfile?.data.licenseNumber}
                                            placeholder="Enter license number"
                                            {...registerDriver("licenseNumber")}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="vehicleModel">Vehicle Model</Label>
                                    <div className="flex items-center gap-2">
                                        <Car className="h-4 w-4 text-muted-foreground" />
                                        <Input
                                            id="vehicle"
                                            defaultValue={driverProfile?.data.vehicle}
                                            placeholder="Enter vehicle model"
                                            {...registerDriver("vehicle")}
                                        />
                                    </div>
                                </div>

                                <Button type="submit" className="w-full">
                                    Save Driver Info
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </section>
    );
}
