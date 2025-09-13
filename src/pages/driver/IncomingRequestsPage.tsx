/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, DollarSign, User, Clock, WifiOff } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  useAcceptRideMutation,
  useGetAvailableRideQuery,
  useRejectRideMutation,
} from "@/redux/features/ride/rideApi";
import { useNavigate } from "react-router";
import { useGetDriverStatusQuery } from "@/redux/features/driver/driverApi";

type IncomingRequests = {
  _id: string;
  pickup: { address: string; lat: number; lng: number };
  destination: { address: string; lat: number; lng: number };
  rider: { _id: string; name: string };
  status: string;
  fare: number;
  requestedAt: string;
  rejectedBy: string[];
};

export default function IncomingRequestsPage() {
  const { data, isLoading, isError } = useGetAvailableRideQuery(undefined);
  const { data: driverStatus } = useGetDriverStatusQuery(undefined);
  const [rides, setRides] = useState<IncomingRequests[]>([]);
  const [acceptRide, { isLoading: isAccepting }] = useAcceptRideMutation();
  const [rejectRide, { isLoading: isRejecting }] = useRejectRideMutation();
  const navigate = useNavigate();

  const isOnline = driverStatus?.data?.isOnline ?? false;

  // Update rides whenever API data changes
  useEffect(() => {
    if (data?.data) {
      const sorted = [...data.data].sort(
        (a, b) =>
          new Date(b.requestedAt).getTime() - new Date(a.requestedAt).getTime()
      );
      setRides(sorted);
    }
  }, [data]);

  const handleAction = async (rideId: string, action: "accepted" | "rejected") => {
    try {
      if (action === "accepted") {
        await acceptRide({ id: rideId }).unwrap();
        toast.success("Ride accepted successfully!");
        navigate("/active-ride");
      } else {
        await rejectRide({ id: rideId }).unwrap();
        toast.success("Ride rejected successfully!");
      }
      setRides((prev) => prev.filter((ride) => ride._id !== rideId));
    } catch (err: any) {
      toast.error(err?.data?.message || "Something went wrong!");
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <p className="text-gray-600 dark:text-gray-300 animate-pulse">
          Loading ride requests...
        </p>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <p className="text-red-600 dark:text-red-400">
          Failed to load ride requests. Please try again.
        </p>
      </div>
    );
  }

  // If driver is offline → show notice
  if (!isOnline) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-6">
        <WifiOff className="w-16 h-16 text-gray-500 dark:text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
          You are currently Offline
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-md">
          While you’re offline, you won’t receive any new ride requests.
          Please switch your status to <span className="font-semibold">Online</span> 
          from the sidebar to start accepting rides.
        </p>
      </div>
    );
  }

  // Driver is online → show ride requests
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-6 transition-colors duration-300">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
        🚖 Available Ride Requests
      </h1>

      <div className="grid gap-6 max-w-3xl mx-auto">
        {rides.map((ride, index) => (
          <motion.div
            key={ride._id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-lg text-gray-900 dark:text-gray-100">
                  <span className="flex items-center gap-2">
                    <User className="w-5 h-5 text-blue-500 dark:text-blue-400" />
                    {ride.rider.name}
                  </span>
                  <span className="flex items-center gap-1 text-green-600 dark:text-green-400 font-semibold">
                    <DollarSign className="w-5 h-5" />
                    {ride.fare} BDT
                  </span>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <MapPin className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />
                  <span>{ride.pickup.address}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <ArrowRight className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  <span>{ride.destination.address}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                  <Clock className="w-4 h-4" />
                  {new Date(ride.requestedAt).toLocaleString()}
                </div>

                <div className="flex justify-between mt-4">
                  <Button
                    className="bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600"
                    disabled={isAccepting}
                    onClick={() => handleAction(ride._id, "accepted")}
                  >
                    {isAccepting ? "Accepting..." : "Accept"}
                  </Button>
                  <Button
                    variant="destructive"
                    disabled={isRejecting}
                    onClick={() => handleAction(ride._id, "rejected")}
                  >
                    {isRejecting ? "Rejecting..." : "Reject"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {rides.length === 0 && (
          <div className="text-center text-gray-600 dark:text-gray-400 mt-20">
            🎉 No new ride requests available.
          </div>
        )}
      </div>
    </div>
  );
}
