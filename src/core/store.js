import { configureStore } from "@reduxjs/toolkit";
import homepageReducer from "../features/Homepage/homepageSlice";

export default configureStore({
    reducer: {
        homepage: homepageReducer,
    }
})