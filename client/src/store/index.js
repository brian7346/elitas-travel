import { configureStore } from "@reduxjs/toolkit";
import planeSlice from "./plane/planeSlice";
import planesReducer from './planes/planesSlice'

export const store = configureStore(({
    reducer: {
        planes: planesReducer,
        plane: planeSlice,
    }
}))