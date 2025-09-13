"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight, DollarSign, User, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { useGetAvailableRideQuery } from "@/redux/features/ride/rideApi";

type RideRequest = {
  _id: string;
  pickup: { address: string; lat: number; lng: number };
  destination: { address: string; lat: number; lng: number };
  rider: { _id: string; name: string };
  status: string;
  fare: number;
  requestedAt: string;
  rejectedBy: string[];
};

export default function RideRequestsPage() {
  const { data, isLoading, isError } = useGetAvailableRideQuery(undefined);
  const [rides, setRides] = useState<RideRequest[]>([]);

  // Update rides whenever API data changes
  useEffect(() => {
    if (data?.data) {
      const sorted = [...data.data].sort(
        (a, b) =>
          new Date(b.requestedAt).getTime() -
          new Date(a.requestedAt).getTime()
      );
      setRides(sorted);
    }
  }, [data]);

  const handleAction = (rideId: string, action: "accepted" | "rejected") => {
    // Call your mutation here
    toast.success(`Ride ${action.toUpperCase()} successfully!`);
    setRides((prev) => prev.filter((ride) => ride._id !== rideId));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <p className="text-gray-600 dark:text-gray-300 animate-pulse">
          Loading ride requests...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <p className="text-red-600 dark:text-red-400">
          Failed to load ride requests. Please try again.
        </p>
      </div>
    );
  }

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
                    onClick={() => handleAction(ride._id, "accepted")}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => handleAction(ride._id, "rejected")}
                  >
                    Reject
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
