import { useState } from "react";
import RideMap from "./RideMap";
import LocationInput from "./LocationInputForm";
import { useRequestRideMutation } from "@/redux/features/ride/rideApi";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const RideBook = () => {
  const [pickup, setPickup] = useState<{ name: string; lat: number; lng: number } | null>(null);
  const [destination, setDestination] = useState<{ name: string; lat: number; lng: number } | null>(null);
  const [requestRide] = useRequestRideMutation();

  const handleSubmit = async () => {
    if (pickup && destination) {

      const formatAddress = (address: string) =>
        address.split(",").slice(0, 2).map(part => part.trim()).join(", ");

      // Backend-ready object
      const rideData = {
        pickup: {
          lat: pickup.lat,
          lng: pickup.lng,
          address: formatAddress(pickup.name),
        },
        destination: {
          lat: destination.lat,
          lng: destination.lng,
          address: formatAddress(destination.name),
        },
      };

      const toastId = toast.loading("Requesting for ride")

      try {
        await requestRide(rideData).unwrap();
        toast.success("Request Added", { id: toastId });

      } catch (error) {
        console.log(error);
        const err = error as { data?: { message?: string } };
        toast.error(err.data?.message || "Something went wrong", { id: toastId });
      }

    } else {
      alert("Please select both pickup and destination.");
    }
  };


  return (
    <div className="p-10 mx-auto mt-10 space-y-4 grid grid-cols-2 gap-10 w-full">
      <div className="space-y-4">
        <h1 className="text-[50px] font-semibold">Get ready for your ride</h1>
        <p className="mb-10">Discover the convenience of RideMate. Request a ride now, or schedule one for later directly from your browser.</p>
        <LocationInput label="Pickup Location" onSelect={setPickup} />
        <LocationInput label="Destination Location" onSelect={setDestination} />
        <Button
          onClick={handleSubmit}
          className="w-full mt-10"
        >
          Book Ride
        </Button>

      </div>
      <RideMap pickup={pickup} destination={destination} />
    </div>
  );
};

export default RideBook;
