import { Button } from "@/components/ui/button";
import LocationInput from "@/modules/User/LocationInputForm";
import { useAppDispatch } from "@/redux/hook";
import { setDestination, setPickup } from "@/redux/features/ride/rideSlice";
import { useNavigate } from "react-router";
import { MapPin, Navigation, Car, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function BookingForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/user/ride-book");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }}
      className="w-[280px] sm:w-[500px] md:w-[650px] lg:w-[750px] xl:w-[824px] mx-auto bg-background dark:bg-[#131313] backdrop-blur-sm p-5 sm:p-6 md:p-7 lg:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-primary/20 hover:border-primary/30 transition-colors duration-300"
    >
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8"
      >
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
          className="p-2 sm:p-2.5 md:p-3 bg-primary/10 rounded-lg sm:rounded-xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Car className="w-5 h-5 sm:w-6 sm:h-6 text-primary relative z-10" />
        </motion.div>
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent"
          >
            Book a Ride
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1"
          >
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            Where do you want to go today?
          </motion.p>
        </div>
      </motion.div>

      <div className="relative space-y-5 sm:space-y-6">
        {/* Animated Connecting Line */}
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
          className="absolute left-[21px] top-[45px] bottom-[45px] w-0.5 border-l-2 border-dashed border-gray-200 dark:border-gray-700 pointer-events-none origin-top"
        />

        {/* Animated Dots on Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute left-[17px] top-[45px] w-2 h-2 bg-blue-500 rounded-full pointer-events-none shadow-lg shadow-blue-500/50"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute left-[17px] bottom-[45px] w-2 h-2 bg-red-500 rounded-full pointer-events-none shadow-lg shadow-red-500/50"
        />

        {/* Pickup Field */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="relative"
        >
          <LocationInput
            label="Pickup Location"
            icon={<Navigation className="w-4 h-4 text-blue-500 fill-blue-500/20" />}
            onSelect={(loc) => dispatch(setPickup(loc))}
            className="bg-gray-50 dark:bg-card transition-all duration-300 rounded-xl hover:shadow-md hover:shadow-blue-500/10"
          />
        </motion.div>

        {/* Destination Field */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="relative"
        >
          <LocationInput
            label="Destination Location"
            icon={<MapPin className="w-4 h-4 text-red-500 fill-red-500/20" />}
            onSelect={(loc) => dispatch(setDestination(loc))}
            className="bg-gray-50 dark:bg-card transition-all duration-300 rounded-xl hover:shadow-md hover:shadow-red-500/10"
          />
        </motion.div>
      </div>

      {/* Enhanced Premium Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-6 sm:mt-8"
      >
        <Button
          onClick={handleSubmit}
          className="group relative w-full h-12 sm:h-14 md:h-16 text-sm sm:text-base md:text-lg font-bold rounded-xl sm:rounded-2xl overflow-hidden border-2 border-primary/30 hover:border-primary/60 transition-all duration-500 shadow-2xl hover:shadow-primary/50 hover:scale-[1.02] active:scale-[0.98]"
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-yellow-400 to-primary bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-700" />
          
          {/* Shimmer Effect Layer 1 */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
          
          {/* Shimmer Effect Layer 2 */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1200 delay-100" />

          {/* Animated Border Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-[-2px] bg-gradient-to-r from-primary/50 via-yellow-400/50 to-primary/50 rounded-2xl blur-lg animate-gradient" />
          </div>

          {/* Inner Shadow for Depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-2xl" />
          
          {/* Button Content */}
          <span className="relative flex items-center justify-center gap-2 sm:gap-3 text-black drop-shadow-sm">
            {/* Left Icon with Animation */}
            <motion.div
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-black/10 rounded-lg flex items-center justify-center group-hover:bg-black/20 transition-all duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Car className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            </motion.div>

            {/* Text with Letter Spacing */}
            <span className="font-bold tracking-wide">
              Confirm Booking
            </span>

            {/* Right Arrow with Pulse */}
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </motion.div>
          </span>

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent blur-xl" />
          </div>

          {/* Pulsing Dots Animation */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex gap-1">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                className="w-1 h-1 bg-black/40 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                className="w-1 h-1 bg-black/40 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                className="w-1 h-1 bg-black/40 rounded-full"
              />
            </div>
          </div>

          <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="flex gap-1">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                className="w-1 h-1 bg-black/40 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                className="w-1 h-1 bg-black/40 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                className="w-1 h-1 bg-black/40 rounded-full"
              />
            </div>
          </div>

          {/* Sparkle Effect on Hover */}
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            whileHover={{ scale: 1, rotate: 180 }}
            transition={{ duration: 0.5 }}
            className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-black/30" />
          </motion.div>
        </Button>

        {/* Button Helper Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-center text-[10px] sm:text-xs text-muted-foreground mt-2 sm:mt-3 flex items-center justify-center gap-1"
        >
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full animate-pulse" />
          Safe & secure booking process
        </motion.p>
      </motion.div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{ 
              opacity: [0, 0.5, 0],
              y: [100, -20],
              x: [0, Math.random() * 50 - 25]
            }}
            transition={{
              duration: 3,
              delay: i * 0.8 + 1.5,
              repeat: Infinity,
              repeatDelay: 2
            }}
            className="absolute bottom-0 left-1/2 w-1 h-1 bg-primary rounded-full"
            style={{ left: `${30 + i * 20}%` }}
          />
        ))}
      </div>
    </motion.div>
  );
}