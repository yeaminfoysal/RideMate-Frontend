
import { Button } from "@/components/ui/button"
import LocationInput from "@/pages/User/LocationInputForm"
import { useAppDispatch } from "@/redux/hook"
import { setDestination, setPickup } from "@/redux/features/ride/rideSlice"
import { useNavigate } from "react-router";


export function BookingForm() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate("/user/ride-book")
    }

    return (
        <div className="w-[824px] mx-auto bg-background dark:bg-[#131313] p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold mb-8 text-center">🚖 Book Your Ride</h2>

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

            <Button
                onClick={handleSubmit}
                type="submit"
                className="w-full rounded-lg font-semibold mt-6"
            >
                Confirm Booking
            </Button>
        </div>
    )
}