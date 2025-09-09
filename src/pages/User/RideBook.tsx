import { useState } from "react";
import RideMap from "./RideMap";
import LocationInput from "./LocationInputForm";

const RideBook = () => {
  const [pickup, setPickup] = useState<{ name: string; lat: number; lng: number } | null>(null);
  const [destination, setDestination] = useState<{ name: string; lat: number; lng: number } | null>(null);

  const handleSubmit = () => {
    if (pickup && destination) {
      console.log("Pickup:", pickup);
      console.log("Destination:", destination);
      alert(
        `Pickup: ${pickup.name} (${pickup.lat}, ${pickup.lng})\nDestination: ${destination.name} (${destination.lat}, ${destination.lng})`
      );
    } else {
      alert("Please select both pickup and destination.");
    }
  };

  return (
    <div className="p-10 mx-auto mt-10 space-y-4 grid grid-cols-2 gap-10 border border-red w-full">
      <div>
        <LocationInput label="Pickup Location" onSelect={setPickup} />
        <LocationInput label="Destination Location" onSelect={setDestination} />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Book Ride
        </button>

      </div>
      <RideMap pickup={pickup} destination={destination} />
    </div>
  );
};

export default RideBook;
