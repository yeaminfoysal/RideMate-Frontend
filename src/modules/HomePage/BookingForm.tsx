import { Button } from "@/components/ui/button"
import LocationInput from "@/modules/User/LocationInputForm"
import { useAppDispatch } from "@/redux/hook"
import { setDestination, setPickup } from "@/redux/features/ride/rideSlice"
import { useNavigate } from "react-router";

export function BookingForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/user/ride-book");
  };

  return (
    <div className="w-[280px] sm:w-[600px] md:w-[750px] lg:w-[824px] mx-auto bg-background dark:bg-[#131313] p-6 sm:p-8 rounded-2xl shadow-xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
        🚖 Book Your Ride
      </h2>

      <div className="space-y-4">
        {/* Pickup Field */}
        <LocationInput
          label="Pickup Location"
          onSelect={(loc) => dispatch(setPickup(loc))}
        />

        {/* Destination Field */}
        <LocationInput
          label="Destination Location"
          onSelect={(loc) => dispatch(setDestination(loc))}
        />
      </div>

      <Button
        onClick={handleSubmit}
        type="submit"
        className="w-full rounded-lg font-semibold mt-6"
      >
        Confirm Booking
      </Button>
    </div>
  );
}
