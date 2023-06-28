import { createSlice } from "@reduxjs/toolkit";

const guestSlice = createSlice({
  name: "guests",
  initialState: {
    guests: [],
  },
  reducers: {
    getGuest: (state, action) => {
      if (Array.isArray(action.payload)) {
        state.guests = action.payload.map((guest) => {
          return {
            name: guest.Guest_Name,
            number: guest.Guest_Number,
            address: guest.Address,
            email: guest.Email,
            roomno: guest.Room_Number,
            roomquantity: guest.Room_Quantity,
            BDT: guest.Booking_Date_Time,
            CDT: guest.Checkin_Date_Time,
            CODT: guest.Checkout_Date_Time,
            NOC: guest.Number_Of_Children,
            NOA: guest.Number_Of_Adults,
          };
        });
      }
    },
  },
});

export const { getGuest } = guestSlice.actions;
export default guestSlice.reducer;
