/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useEffect, useState } from "react";
import { useCancelRideMutation, useGetActiveRideQuery } from "@/redux/features/ride/rideApi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { MapPin, Car, Phone, User, CreditCard, AlertTriangle, SearchX } from "lucide-react";
import RideMap from "@/modules/User/RideMap";
import { useCreatePaymentUrlMutation } from "@/redux/features/payment/paymentApi";
import { toast } from "sonner";
import { useUserInfoQuery } from "@/redux/features/auth/authApi";
import { useNavigate } from "react-router";
import { Link } from "react-router";

export default function LiveRide() {
    const { data, isLoading, refetch } = useGetActiveRideQuery(undefined);
    const [cancelRide, { isLoading: isCancelling }] = useCancelRideMutation();
    const [cancelOpen, setCancelOpen] = useState(false);
    const [paymentOpen, setPaymentOpen] = useState(false);
    const [sosOpen, setSosOpen] = useState(false);
    const [createPaymentUrl] = useCreatePaymentUrlMutation();
    const { data: userInfo } = useUserInfoQuery(undefined);
    const navigate = useNavigate();

    //   const emergencyEmail = userInfo?.data.emergencyContact?.email;
    const emergencyPhone = userInfo?.data.emergencyContact?.phone;

    const activeRide = data?.data?.activeRide;

    useEffect(() => {
        document.title = "RideMate | Active Ride";
        if (activeRide?.status === "completed") {
            setPaymentOpen(true);
        }
    }, [activeRide?.status]);

    // Loading State with Skeleton
    if (isLoading) {
        return (
            <div className="container mx-auto px-4 py-8 space-y-6">
                {/* Map Skeleton */}
                <Card className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                        <div className="flex items-center gap-2">
                            <div className="h-5 w-5 bg-primary/20 rounded animate-pulse" />
                            <div className="h-6 w-40 bg-primary/20 rounded animate-pulse" />
                        </div>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="h-96 bg-gradient-to-br from-muted/50 to-muted/30 animate-pulse flex items-center justify-center">
                            <div className="text-center space-y-3">
                                <MapPin className="h-12 w-12 mx-auto text-muted-foreground/30 animate-bounce" />
                                <p className="text-sm text-muted-foreground">Loading map...</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Driver Details Skeleton */}
                <Card className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                        <div className="flex items-center gap-2">
                            <div className="h-5 w-5 bg-primary/20 rounded animate-pulse" />
                            <div className="h-6 w-32 bg-primary/20 rounded animate-pulse" />
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-3 py-6">
                        <div className="h-4 w-3/4 bg-muted rounded animate-pulse" />
                        <div className="h-4 w-1/2 bg-muted rounded animate-pulse" />
                        <div className="h-4 w-2/3 bg-muted rounded animate-pulse" />
                    </CardContent>
                </Card>

                {/* Ride Info Skeleton */}
                <Card className="overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                        <div className="h-6 w-40 bg-primary/20 rounded animate-pulse" />
                    </CardHeader>
                    <CardContent className="space-y-3 py-6">
                        <div className="h-4 w-full bg-muted rounded animate-pulse" />
                        <div className="h-4 w-5/6 bg-muted rounded animate-pulse" />
                        <div className="h-4 w-1/3 bg-muted rounded animate-pulse" />
                        <div className="h-4 w-1/2 bg-muted rounded animate-pulse" />
                        <div className="h-4 w-2/5 bg-muted rounded animate-pulse" />
                    </CardContent>
                </Card>
            </div>
        );
    }

    // No Active Ride State
    if (!activeRide) {
        return (
            <div className="container mx-auto px-4 py-8">
                <Card className="max-w-2xl mx-auto overflow-hidden border-2 py-0">
                    <CardHeader className="bg-gradient-to-br from-primary/10 via-primary/5 to-background pb-8 pt-4">
                        <CardTitle className="text-center text-2xl">Active Ride</CardTitle>
                    </CardHeader>
                    <CardContent className="py-12">
                        <div className="text-center space-y-6">
                            {/* Animated Icon */}
                            <div className="relative inline-block">
                                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                                <div className="relative bg-gradient-to-br from-primary/20 to-primary/10 p-8 rounded-full">
                                    <SearchX className="h-16 w-16 text-primary animate-bounce" />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-foreground">
                                    No Active Ride
                                </h3>
                                <p className="text-muted-foreground max-w-md mx-auto">
                                    You don't have any ongoing rides at the moment. Book a new ride to get started!
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary/80 shadow-lg"
                                >
                                    <Link to="/user/ride-book" className="flex items-center gap-2">
                                        <Car className="h-5 w-5" />
                                        Book a Ride
                                    </Link>
                                </Button>
                                <Button
                                    asChild
                                    variant="outline"
                                    size="lg"
                                >
                                    <Link to="/user/ride-history">
                                        View Ride History
                                    </Link>
                                </Button>
                            </div>

                            {/* Additional Info */}
                            <div className="pt-6 border-t mt-8">
                                <p className="text-sm text-muted-foreground">
                                    Need help? Visit our{" "}
                                    <Link to="/faq" className="text-primary hover:underline font-medium">
                                        FAQ page
                                    </Link>{" "}
                                    or{" "}
                                    <Link to="/contact" className="text-primary hover:underline font-medium">
                                        contact support
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    const { _id, pickup, destination, fare, paymentMethod, status, driver, paymentUrl } = activeRide;

    const handleCancel = async () => {
        const toastId = toast.loading("Cenceling....")
        try {
            await cancelRide(_id).unwrap();
            setCancelOpen(false);
            refetch();
            toast.success("Login successfull", { id: toastId })
            navigate("/book-ride")
        } catch (error: any) {
            console.error(error.data.message);
            toast.error(error.data.message, { id: toastId })
        }

    };

    const handlePayment = async () => {
        if (!_id) {
            toast.error("Ride ID is missing!");
            return;
        }
        const toastId = toast.loading("Processing payment...");
        try {
            if (paymentUrl) {
                window.location.href = paymentUrl;
                toast.dismiss(toastId);
                return;
            }
            const res = await createPaymentUrl(_id).unwrap();
            if (res?.data.updatedPayment.paymentUrl) {
                toast.success("Now you can make payment", { id: toastId });
                window.location.href = res?.data.updatedPayment.paymentUrl;
            } else {
                toast.error("Payment URL not found", { id: toastId });
            }
        } catch (error: any) {
            console.error(error);
            toast.error(error?.message || "Something went wrong", { id: toastId });
        }
    };

    // ✅ Emergency actions
    const getCurrentLocation = async (): Promise<string> => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords;
                    resolve(`https://www.google.com/maps?q=${latitude},${longitude}`);
                },
                (err) => reject(err),
                { enableHighAccuracy: true }
            );
        });
    };

    const notifyEmergencyContact = async () => {
        try {
            const locationUrl = await getCurrentLocation();
            if (emergencyPhone) {
                window.open(
                    `https://wa.me/${emergencyPhone}?text=🚨 I need help! My live location: ${locationUrl}`,
                    "_blank"
                );
                toast.success("Emergency contact notified via WhatsApp");
            } else {
                toast.error("No emergency phone number saved");
            }
        } catch (err: any) {
            toast.error("Failed to get location", err);
        }
    };

    const callPolice = () => {
        window.location.href = "tel:999";
    };

    return (
        <div className="container mx-auto px-4 py-8 space-y-6 relative">
            {/* Map */}
            <Card className="overflow-hidden shadow-lg border-2 py-0 relative z-0">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b pt-5">
                    <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        Live Ride Tracking
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <RideMap pickup={pickup} destination={destination} />
                </CardContent>
            </Card>

            {/* Driver Details */}
            <Card className="overflow-hidden shadow-lg border-2 py-0">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b pt-5">
                    <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5 text-primary" />
                        Driver Details
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm py-6">
                    {driver ? (
                        <div className="space-y-3">
                            <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                                <strong className="text-foreground/80 min-w-[80px]">Name:</strong>
                                <span className="font-medium">{driver?.user?.name}</span>
                            </div>
                            <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                                <Phone className="h-4 w-4 text-primary" />
                                <strong className="text-foreground/80 min-w-[80px]">Phone:</strong>
                                <span className="font-medium">{driver?.user?.phone}</span>
                            </div>
                            <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                                <Car className="h-4 w-4 text-primary" />
                                <strong className="text-foreground/80 min-w-[80px]">Vehicle:</strong>
                                <span className="font-medium">{driver?.vehicle} ({driver?.licenseNumber})</span>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center py-8">
                            <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                                <p className="text-muted-foreground italic flex items-center justify-center gap-2">
                                    <AlertTriangle className="h-4 w-4 text-amber-500" />
                                    No driver has accepted this ride yet.
                                </p>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>

            {/* Ride Info */}
            <Card className="overflow-hidden shadow-lg border-2 py-0">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 border-b pt-5">
                    <CardTitle>Ride Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm py-6">
                    <div className="grid gap-3">
                        <div className="flex gap-2 p-3 bg-muted/50 rounded-lg">
                            <strong className="text-foreground/80 min-w-[100px]">Pickup:</strong>
                            <span>{pickup.address}</span>
                        </div>
                        <div className="flex gap-2 p-3 bg-muted/50 rounded-lg">
                            <strong className="text-foreground/80 min-w-[100px]">Destination:</strong>
                            <span>{destination.address}</span>
                        </div>
                        <div className="flex gap-2 p-3 bg-muted/50 rounded-lg">
                            <strong className="text-foreground/80 min-w-[100px]">Fare:</strong>
                            <span className="font-semibold text-primary">{fare} BDT</span>
                        </div>
                        <div className="flex gap-2 p-3 bg-muted/50 rounded-lg">
                            <strong className="text-foreground/80 min-w-[100px]">Payment:</strong>
                            <span className="capitalize">{paymentMethod}</span>
                        </div>
                        <div className="flex gap-2 p-3 bg-muted/50 rounded-lg">
                            <strong className="text-foreground/80 min-w-[100px]">Status:</strong>
                            <span
                                className={`capitalize font-semibold ${status === "completed"
                                    ? "text-emerald-500"
                                    : status === "canceled"
                                        ? "text-red-500"
                                        : "text-blue-500"
                                    }`}
                            >
                                {status.replace("_", " ")}
                            </span>
                        </div>
                    </div>

                    {/* Cancel Ride */}
                    {status === "requested" && (
                        <AlertDialog open={cancelOpen} onOpenChange={setCancelOpen}>
                            <Button
                                variant="destructive"
                                className="mt-4 w-full"
                                onClick={() => setCancelOpen(true)}
                            >
                                Cancel Ride
                            </Button>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>Cancel Ride?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Are you sure you want to cancel this ride? This action cannot be undone.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Keep Ride</AlertDialogCancel>
                                    <AlertDialogAction
                                        onClick={handleCancel}
                                        className="bg-red-600 text-white hover:bg-red-700"
                                        disabled={isCancelling}
                                    >
                                        {isCancelling ? "Cancelling..." : "Yes, Cancel Ride"}
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    )}

                    {/* ✅ Extra Payment Button */}
                    {status === "completed" && (
                        <Button
                            onClick={() => setPaymentOpen(true)}
                            className="mt-4 w-full bg-emerald-600 text-white hover:bg-emerald-700 flex items-center justify-center gap-2"
                        >
                            <CreditCard className="h-4 w-4" />
                            Make Payment
                        </Button>
                    )}
                </CardContent>
            </Card>

            {/* ✅ Auto Payment Modal */}
            <AlertDialog open={paymentOpen} onOpenChange={setPaymentOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Complete Payment</AlertDialogTitle>
                        <AlertDialogDescription>
                            Your ride has been <span className="font-semibold">completed</span>.
                            Please proceed with the payment of{" "}
                            <strong>{fare} BDT</strong>.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setPaymentOpen(false)}>Close</AlertDialogCancel>
                        <AlertDialogAction
                            className="bg-emerald-600 text-white hover:bg-emerald-700 flex items-center gap-2"
                            onClick={handlePayment}
                        >
                            <CreditCard className="h-4 w-4" />
                            Pay Now
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            {/* 🚨 Floating SOS Button */}
            {status !== "completed" && status !== "canceled" && (
                <>
                    <button
                        onClick={() => setSosOpen(true)}
                        className="fixed bottom-6 right-6 z-50 p-4 bg-red-600 text-white rounded-full shadow-2xl hover:bg-red-700 transition-all duration-300 hover:scale-110 animate-pulse"
                        aria-label="Emergency SOS"
                    >
                        <AlertTriangle className="h-6 w-6" />
                    </button>

                    <AlertDialog open={sosOpen} onOpenChange={setSosOpen}>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Emergency Options</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Choose an emergency action:
                                </AlertDialogDescription>
                            </AlertDialogHeader>

                            {/* ✅ Custom layout for emergency buttons */}
                            <div className="flex flex-col gap-3 mt-4">
                                <Button
                                    onClick={callPolice}
                                    className="bg-red-600 hover:bg-red-700 text-white w-full"
                                >
                                    🚔 Call Police
                                </Button>
                                <Button
                                    onClick={notifyEmergencyContact}
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white w-full"
                                >
                                    📞 Notify Emergency Contact
                                </Button>
                            </div>

                            <AlertDialogFooter className="mt-4">
                                <AlertDialogCancel className="w-full">Close</AlertDialogCancel>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </>
            )}
        </div>
    );
}

