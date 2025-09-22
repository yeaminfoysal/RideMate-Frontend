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
import { MapPin, Car, Phone, User, CreditCard, AlertTriangle } from "lucide-react";
import RideMap from "@/modules/User/RideMap";
import { useCreatePaymentUrlMutation } from "@/redux/features/payment/paymentApi";
import { toast } from "sonner";
import { useUserInfoQuery } from "@/redux/features/auth/authApi";

export default function LiveRide() {
    const { data, isLoading, refetch } = useGetActiveRideQuery(undefined);
    const [cancelRide, { isLoading: isCancelling }] = useCancelRideMutation();
    const [cancelOpen, setCancelOpen] = useState(false);
    const [paymentOpen, setPaymentOpen] = useState(false);
    const [sosOpen, setSosOpen] = useState(false);
    const [createPaymentUrl] = useCreatePaymentUrlMutation();
    const { data: userInfo } = useUserInfoQuery(undefined);

    //   const emergencyEmail = userInfo?.data.emergencyContact?.email;
    const emergencyPhone = userInfo?.data.emergencyContact?.phone;

    const activeRide = data?.data?.activeRide;

    useEffect(() => {
        if (activeRide?.status === "completed") {
            setPaymentOpen(true);
        }
    }, [activeRide?.status]);

    if (isLoading) return <p>Loading live ride...</p>;
    if (!activeRide) return <p>No ongoing ride right now.</p>;

    const { _id, pickup, destination, fare, paymentMethod, status, driver, paymentUrl } = activeRide;

    const handleCancel = async () => {
        try {
            await cancelRide(_id).unwrap();
            setCancelOpen(false);
            refetch();
        } catch (error) {
            console.error(error);
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
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        Live Ride Tracking
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <RideMap pickup={pickup} destination={destination} />
                </CardContent>
            </Card>

            {/* Driver Details */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5 text-primary" />
                        Driver Details
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                    {driver ? (
                        <>
                            <p><strong>Name:</strong> {driver?.user?.name}</p>
                            <p className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-muted-foreground" />
                                {driver?.user?.phone}
                            </p>
                            <p className="flex items-center gap-2">
                                <Car className="h-4 w-4 text-muted-foreground" />
                                {driver?.vehicle} ({driver?.licenseNumber})
                            </p>
                        </>
                    ) : (
                        <p className="text-muted-foreground italic">No driver has accepted this ride yet.</p>
                    )}
                </CardContent>
            </Card>

            {/* Ride Info */}
            <Card>
                <CardHeader>
                    <CardTitle>Ride Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                    <p><strong>Pickup:</strong> {pickup.address}</p>
                    <p><strong>Destination:</strong> {destination.address}</p>
                    <p><strong>Fare:</strong> {fare} BDT</p>
                    <p><strong>Payment:</strong> {paymentMethod}</p>
                    <p>
                        <strong>Status:</strong>{" "}
                        <span
                            className={`capitalize font-medium ${status === "completed"
                                ? "text-emerald-500"
                                : status === "canceled"
                                    ? "text-red-500"
                                    : "text-blue-500"
                                }`}
                        >
                            {status.replace("_", " ")}
                        </span>
                    </p>

                    {/* Cancel Ride */}
                    {status === "requested" && (
                        <AlertDialog open={cancelOpen} onOpenChange={setCancelOpen}>
                            <Button
                                variant="destructive"
                                className="mt-4"
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
                            className="mt-4 bg-emerald-600 text-white hover:bg-emerald-700 flex items-center gap-2"
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
                        className="fixed bottom-6 right-6 z-50 p-4 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700"
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
