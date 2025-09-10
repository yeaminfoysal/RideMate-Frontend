import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Location {
  name: string;
  lat: number;
  lng: number;
}

export interface RideState {
  pickup: Location | null;
  destination: Location | null;
}

const initialState: RideState = {
  pickup: null,
  destination: null,
};

const rideSlice = createSlice({
  name: "ride",
  initialState,
  reducers: {
    setPickup: (state, action: PayloadAction<Location>) => {
      state.pickup = action.payload;
    },
    setDestination: (state, action: PayloadAction<Location>) => {
      state.destination = action.payload;
    },
    resetRide: (state) => {
      state.pickup = null;
      state.destination = null;
    },
  },
});

export const { setPickup, setDestination, resetRide } = rideSlice.actions;
export default rideSlice.reducer;
