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
import { MapPin, Car, Phone, User, CreditCard } from "lucide-react";
import RideMap from "@/modules/User/RideMap";

export default function LiveRide() {
    const { data, isLoading, refetch } = useGetActiveRideQuery(undefined);
    const [cancelRide, { isLoading: isCancelling }] = useCancelRideMutation();
    const [cancelOpen, setCancelOpen] = useState(false);
    const [paymentOpen, setPaymentOpen] = useState(false);

    const activeRide = data?.data?.activeRide;
    console.log(activeRide)

    useEffect(() => {
        if (activeRide?.status === "completed") {
            setPaymentOpen(true);
        }
    }, [activeRide?.status]);

    if (isLoading) return <p>Loading live ride...</p>;
    if (!activeRide) return <p>No ongoing ride right now.</p>;

    const { _id, pickup, destination, fare, paymentMethod, status, driver, paymentUrl } =
        activeRide;

    const handleCancel = async () => {
        try {
            await cancelRide(_id).unwrap();
            setCancelOpen(false);
            refetch();
        } catch (error) {
            console.error(error);
        }
    };

    const handlePayment = () => {
        if (paymentUrl) {
            window.location.href = paymentUrl;
        } else {
            console.error("No payment URL found for this ride.");
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 space-y-6">
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
        </div>
    );
}
