import { configureStore } from "@reduxjs/toolkit";
// import GuestSlice from "./Slice/GuestSlice";
import guestSlice from './Slice/GuestSlice'



const store = configureStore({
    reducer: {

        // guests: GuestSlice
        guests: guestSlice


    },
});

export default store;
