import { useState } from "react";
import { useCancelRideMutation, useGetActiveRideQuery } from "@/redux/features/ride/rideApi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { MapPin, Car, Phone, User } from "lucide-react";
import RideMap from "@/modules/User/RideMap";

export default function LiveRide() {
    const { data, isLoading, refetch } = useGetActiveRideQuery(undefined);
    const [cancelRide, { isLoading: isCancelling }] = useCancelRideMutation();
    const [open, setOpen] = useState(false);

    if (isLoading) return <p>Loading live ride...</p>;

    const activeRide = data?.data?.activeRide;
    if (!activeRide) return <p>No ongoing ride right now.</p>;

    const { _id, pickup, destination, fare, paymentMethod, status, driver } = activeRide;

    const handleCancel = async () => {
        try {
            await cancelRide(_id).unwrap();
            setOpen(false);
            refetch();
        } catch (error) {
            console.error(error);
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
                        <p className="text-muted-foreground italic">
                            No driver has accepted this ride yet.
                        </p>
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
                        <span className="capitalize text-emerald-500 font-medium">
                            {status.replace("_", " ")}
                        </span>
                    </p>

                    {/* Cancel button only if status is requested */}
                    {status === "requested" && (
                        <AlertDialog open={open} onOpenChange={setOpen}>
                            <AlertDialogTrigger asChild>
                                <Button variant="destructive" className="mt-4">
                                    Cancel Ride
                                </Button>
                            </AlertDialogTrigger>
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
                </CardContent>
            </Card>
        </div>
    );
}
