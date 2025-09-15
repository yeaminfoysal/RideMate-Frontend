import { useParams, useNavigate } from "react-router";
import { useGetRideDetailsQuery } from "@/redux/features/ride/rideApi";
import RideMap from "@/modules/User/RideMap";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
    ArrowLeft,
    CalendarIcon,
    Car,
    CheckCircle2,
    Clock,
    DollarSign,
    MapPin,
    User,
} from "lucide-react";

export default function RideDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, isLoading } = useGetRideDetailsQuery(id, { skip: !id });

    const ride = data;

    if (isLoading) {
        return (
            <p className="text-center text-muted-foreground">Loading ride details...</p>
        );
    }

    if (!ride) {
        return (
            <p className="text-center text-muted-foreground">No ride details found.</p>
        );
    }

    return (
        <section className="container mx-auto px-4 py-8 space-y-6">
            {/* 🔙 Back button & Title */}
            <div className="flex items-center justify-between mb-4">
                <Button
                    variant="ghost"
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                </Button>
                <h1 className="text-2xl font-bold">🚖 Ride Details</h1>
            </div>

            {/* 🗺️ Map */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-primary" />
                        Route Map
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <RideMap pickup={ride.pickup} destination={ride.destination} />
                </CardContent>
            </Card>

            {/* 👤 Driver Info (if available) */}
            {ride.driver ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Ride Info */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Car className="h-5 w-5 text-primary" />
                                Ride Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-sm">
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                <span>Pickup: {ride.pickup.address}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                <span>Destination: {ride.destination.address}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <DollarSign className="h-4 w-4 text-muted-foreground" />
                                <span>Fare: {ride.fare} BDT</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                                <span>
                                    Status:{" "}
                                    <Badge variant="outline" className="capitalize">
                                        {ride.status}
                                    </Badge>
                                </span>
                            </div>
                            {/* 💳 Payment Method */}
                            <div className="flex items-center gap-2">
                                <span className="text-xs font-medium text-muted-foreground">
                                    Payment Method:
                                </span>
                                <Badge variant="secondary" className="capitalize">
                                    {ride.paymentMethod ?? "Not provided"}
                                </Badge>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Driver Info */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <User className="h-5 w-5 text-primary" />
                                Driver Information
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3 text-sm">
                            <div className="flex items-center gap-3">
                                <Avatar>
                                    <AvatarFallback>
                                        {ride.driver?.user?.name
                                            ? ride.driver.user.name[0].toUpperCase()
                                            : "?"}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-medium">
                                        {ride.driver?.user?.name ?? "Unknown Driver"}
                                    </div>
                                    <div className="text-xs text-muted-foreground">
                                        {ride.driver?.user?.email ?? "No email available"}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Car className="h-4 w-4 text-muted-foreground" />
                                <span>Vehicle: {ride.driver.vehicle}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-muted-foreground">
                                    License: {ride.driver.licenseNumber}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            ) : (
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <User className="h-5 w-5 text-muted-foreground" />
                            Driver Info
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">
                            No driver assigned yet.
                        </p>
                    </CardContent>
                </Card>
            )}

            {/* ⏳ Timeline */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-primary" />
                        Ride Timeline
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-2">
                        {/* Requested */}
                        <li className="mb-6 ml-4">
                            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                                <CalendarIcon className="h-3 w-3" />
                            </span>
                            <p className="text-sm font-medium">Requested</p>
                            <p className="text-xs text-muted-foreground">
                                {new Date(ride.requestedAt).toLocaleString()}
                            </p>
                        </li>

                        {/* Accepted */}
                        {ride.acceptedAt && (
                            <li className="mb-6 ml-4">
                                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-600 text-white">
                                    <CheckCircle2 className="h-3 w-3" />
                                </span>
                                <p className="text-sm font-medium">Accepted</p>
                                <p className="text-xs text-muted-foreground">
                                    {new Date(ride.acceptedAt).toLocaleString()}
                                </p>
                            </li>
                        )}

                        {/* Picked Up */}
                        {ride.pickedUpAt && (
                            <li className="mb-6 ml-4">
                                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white">
                                    <Car className="h-3 w-3" />
                                </span>
                                <p className="text-sm font-medium">Picked Up</p>
                                <p className="text-xs text-muted-foreground">
                                    {new Date(ride.pickedUpAt).toLocaleString()}
                                </p>
                            </li>
                        )}

                        {/* Completed */}
                        {ride.completedAt && (
                            <li className="ml-4">
                                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white">
                                    <CheckCircle2 className="h-3 w-3" />
                                </span>
                                <p className="text-sm font-medium">Completed</p>
                                <p className="text-xs text-muted-foreground">
                                    {new Date(ride.completedAt).toLocaleString()}
                                </p>
                            </li>
                        )}
                    </ol>
                </CardContent>
            </Card>
        </section>
    );
}
