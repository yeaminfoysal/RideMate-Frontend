/* eslint-disable @typescript-eslint/no-explicit-any */
import RideMap from "@/modules/User/RideMap";
import {
    useCompleteRideMutation,
    useGetActiveRideQuery,
    useRejectRideMutation,
    useUpdateRideStatusMutation,
} from "@/redux/features/ride/rideApi";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";
import { CreditCard, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { useCreatePaymentUrlMutation } from "@/redux/features/payment/paymentApi";

const rideStatuses = ["accepted", "picked_up", "in_transit", "completed"];

export default function ActiveRide() {
    const { data, isLoading } = useGetActiveRideQuery(undefined);
    const [updateRideStatus, { isLoading: updating }] =
        useUpdateRideStatusMutation();
    const [completeRide, { isLoading: updatingComplete }] =
        useCompleteRideMutation();
    const [cancelRide] = useRejectRideMutation();
    const [createPaymentUrl] = useCreatePaymentUrlMutation()

    const [successOpen, setSuccessOpen] = useState(false);
    const [paymentOpen, setPaymentOpen] = useState(false);

    const activeRide = data?.data?.activeRide;

    useEffect(() => {
        if (activeRide?.status === "completed" && !activeRide?.paymentUrl) {
            setPaymentOpen(true);
        }
    }, [activeRide?.status, activeRide?.paymentUrl]);

    if (isLoading) return <p>Loading ride...</p>;
    if (!activeRide) return <p>No active ride found.</p>;

    const currentStatus = activeRide.status;

    const handleUpdateStatus = async (newStatus: string) => {
        try {
            let res
            if (newStatus == "completed") {
                res = await completeRide({
                    rideId: activeRide._id,
                    status: newStatus,
                }).unwrap();
            } else {
                res = await updateRideStatus({
                    rideId: activeRide._id,
                    status: newStatus,
                }).unwrap();
            }

            if (res?.data?.status === "completed") {
                setSuccessOpen(true);
            } else {
                toast.success(`Ride status updated to ${newStatus}`);
            }
        } catch (error: any) {
            toast.error(error?.data?.message || "Failed to update status");
        }
    };

    const handleCancelRide = () => {
        try {
            cancelRide({ id: activeRide._id }).unwrap();
        } catch (error) {
            console.log(error)
        }
    }

    const handlePaymentRequest = async () => {
        try {
            const res = await createPaymentUrl({ rideId: activeRide._id }).unwrap();
            if (res?.data?.url) {
                window.location.href = res.data.url; // redirect to gateway
            }
        } catch (err: any) {
            toast.error("Failed to create payment link", err);
        }
    };


    return (
        <div className="container mx-auto px-4 py-8 space-y-6">
            {/* Map */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        Route Map
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <RideMap
                        pickup={activeRide.pickup}
                        destination={activeRide.destination}
                    />
                </CardContent>
            </Card>

            {/* Ride Info */}
            <Card>
                <CardHeader>
                    <CardTitle>Ride Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                    <p>
                        <strong>Pickup:</strong> {activeRide.pickup.address}
                    </p>
                    <p>
                        <strong>Destination:</strong> {activeRide.destination.address}
                    </p>
                    <p>
                        <strong>Fare:</strong> {activeRide.fare} BDT
                    </p>
                    <p>
                        <strong>Payment:</strong> {activeRide.paymentMethod}
                    </p>
                    <p>
                        <strong>Status:</strong> {activeRide.status}
                    </p>
                </CardContent>
            </Card>

            {/* Status Progress with Action Buttons */}
            <div className="relative flex items-center justify-between">
                {/* Progress Line */}
                <div
                    className="absolute top-4 h-1 bg-gray-300 z-0"
                    style={{
                        left: "12.5%",
                        right: "12.5%",
                    }}
                />
                <div
                    className="absolute top-4 h-1 bg-green-500 z-10 transition-all"
                    style={{
                        left: "12.5%",
                        width: `${(rideStatuses.indexOf(currentStatus) /
                            (rideStatuses.length - 1)) *
                            75
                            }%`,
                    }}
                />

                {rideStatuses.map((status, idx) => {
                    const isActive = rideStatuses.indexOf(currentStatus) >= idx;
                    const isNext = rideStatuses.indexOf(currentStatus) + 1 === idx;

                    return (
                        <div
                            key={status}
                            className="relative flex flex-col items-center w-1/4 z-20"
                        >
                            {/* Step Circle */}
                            <div
                                className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold shadow ${isActive ? "bg-green-500" : "bg-gray-400"
                                    }`}
                            >
                                {idx + 1}
                            </div>

                            {/* Status Label */}
                            <span className="text-xs mt-2 capitalize">
                                {status.replace("_", " ")}
                            </span>

                            {/* Action Button */}
                            <div className="mt-4 w-full px-2">
                                <Button
                                    className="w-full text-xs py-2"
                                    size="sm"
                                    onClick={() => handleUpdateStatus(status)}
                                    disabled={!isNext || updating || updatingComplete}
                                >
                                    {isActive ? "Updated" : `Set to ${status.replace("_", " ")}`}
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Cancel Ride */}
            {currentStatus !== "completed" && (
                <div className="flex justify-center mt-6">
                    <Button
                        variant="destructive"
                        className="w-1/2"
                        onClick={() => handleCancelRide()}
                        disabled={updating}
                    >
                        Cancel Ride
                    </Button>
                </div>
            )}

            {/* ✅ Extra Payment Button */}
            {currentStatus === "completed" && !activeRide.paymentUrl && (
                <Button
                    onClick={() => setPaymentOpen(true)}
                    className="mt-4 bg-emerald-600 text-white hover:bg-emerald-700 flex items-center gap-2"
                >
                    <CreditCard className="h-4 w-4" />
                    Payment Request
                </Button>
            )}


            {/* ✅ Success Dialog */}
            <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-green-600 dark:text-green-400">
                            🎉 Ride Completed
                        </DialogTitle>
                    </DialogHeader>
                    <p className="text-gray-700 dark:text-gray-300">
                        You have successfully completed the ride.
                    </p>
                    <DialogFooter>
                        <Button onClick={() => setSuccessOpen(false)}>OK</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* ✅ Auto Payment Modal */}
            <AlertDialog open={paymentOpen} onOpenChange={setPaymentOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Completed Ride</AlertDialogTitle>
                        <AlertDialogDescription>
                            Your ride has been <span className="font-semibold">completed</span>.
                            Please proceed with the payment of{" "}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setPaymentOpen(false)}>Close</AlertDialogCancel>
                        <AlertDialogAction
                            className="bg-emerald-600 text-white hover:bg-emerald-700 flex items-center gap-2"
                            onClick={handlePaymentRequest}
                        >
                            <CreditCard className="h-4 w-4" />
                            Payment Request
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
