import { Button } from "@/components/ui/button";
import LocationInput from "@/modules/User/LocationInputForm";
import { useAppDispatch } from "@/redux/hook";
import { setDestination, setPickup } from "@/redux/features/ride/rideSlice";
import { useNavigate } from "react-router";
import { MapPin, Navigation, Car } from "lucide-react";
import { motion } from "framer-motion";

export function BookingForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/user/ride-book");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-[280px] sm:w-[600px] md:w-[750px] lg:w-[824px] mx-auto  bg-background dark:bg-[#131313] backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-primary/10 rounded-xl">
          <Car className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            Book a Ride
          </h2>
          <p className="text-sm text-muted-foreground">
            Where do you want to go today?
          </p>
        </div>
      </div>

      <div className="relative space-y-6">
        {/* Connecting Line */}
        <div className="absolute left-[21px] top-[45px] bottom-[45px] w-0.5 border-l-2 border-dashed border-gray-200 dark:border-gray-700 pointer-events-none" />

        {/* Pickup Field */}
        <div className="relative">
          <LocationInput
            label="Pickup Location"
            icon={<Navigation className="w-4 h-4 text-blue-500 fill-blue-500/20" />}
            onSelect={(loc) => dispatch(setPickup(loc))}
            className="bg-gray-50 dark:bg-card transition-colors rounded-xl"
          />
        </div>

        {/* Destination Field */}
        <div className="relative">
          <LocationInput
            label="Destination Location"
            icon={<MapPin className="w-4 h-4 text-red-500 fill-red-500/20" />}
            onSelect={(loc) => dispatch(setDestination(loc))}
            className="bg-gray-50 dark:bg-card transition-colors rounded-xl"
          />
        </div>
      </div>

      <Button
        onClick={handleSubmit}
        className="w-full h-12 text-lg font-semibold mt-8 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 bg-primary hover:scale-[1.02] active:scale-[0.98]"
      >
        Confirm Booking
      </Button>
    </motion.div>
  );
}
