import RideMap from "../../modules/User/RideMap";
import LocationInput from "../../modules/User/LocationInputForm";
import { useRequestRideMutation } from "@/redux/features/ride/rideApi";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { setPickup, setDestination, resetRide } from "@/redux/features/ride/rideSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useState, useEffect } from "react";
import { useUserInfoQuery } from "@/redux/features/auth/authApi";
import { Navigate, useNavigate } from "react-router";

const RideBook = () => {
  
  useEffect(() => {
    document.title = "RideMate | Book Ride";
  }, []);

  const { data: userInfo } = useUserInfoQuery(undefined);
  const dispatch = useAppDispatch();
  const { pickup, destination } = useAppSelector((state) => state.ride);
  const [requestRide] = useRequestRideMutation();
  const navigate = useNavigate();

  // state for payment method
  const [paymentMethod, setPaymentMethod] = useState("bkash");

  const handleSubmit = async () => {
    if (pickup && destination && paymentMethod) {
      const formatAddress = (address: string) =>
        address.split(",").slice(0, 2).map((part) => part.trim()).join(", ");

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
        paymentMethod, // add payment method
      };

      const toastId = toast.loading("Requesting for ride");

      try {
        await requestRide(rideData).unwrap();
        toast.success("Request Added", { id: toastId });
        navigate("/user/live-ride")

        // reset redux state after success
        dispatch(resetRide());
        setPaymentMethod("bkash"); // reset
      } catch (error) {
        console.log(error);
        const err = error as { data?: { message?: string } };
        toast.error(err.data?.message || "Something went wrong", { id: toastId });
      }
    } else {
      alert("Please select pickup, destination and payment method.");
    }
  };

  if (userInfo?.data.activeRide) return (<Navigate to={"/user/live-ride"}></Navigate>)

  return (
    <div className="p-10 mx-auto mt-10 space-y-4 grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
      <div className="space-y-4">
        <h1 className="text-[50px] font-semibold">Get ready for your ride</h1>
        <p className="mb-10">
          Discover the convenience of RideMate. Request a ride now, or schedule one
          for later directly from your browser.
        </p>

        {/* Pickup & Destination */}
        <LocationInput
          label="Pickup Location"
          value={pickup}
          onSelect={(loc) => dispatch(setPickup(loc))}
        />
        <LocationInput
          label="Destination Location"
          value={destination}
          onSelect={(loc) => dispatch(setDestination(loc))}
        />

        {/* Payment Method Select */}
        <div className="mt-5">
          <label className="block mb-2 font-medium">Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full border rounded-md p-2"
          >
            <option value="bkash">Bkash</option>
            <option value="rocket">Rocket</option>
            <option value="visa">Visa</option>
            <option value="master">MasterCard</option>
          </select>
        </div>

        <Button onClick={handleSubmit} className="w-full mt-10">
          Book Ride
        </Button>
      </div>

      <RideMap pickup={pickup} destination={destination} />
    </div>
  );
};

export default RideBook;
