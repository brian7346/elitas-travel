import { configureStore } from "@reduxjs/toolkit";
import planeReducer from "./plane/planeSlice";
import planesReducer from './planes/planesSlice'

export const store = configureStore(({
    reducer: {
        planes: planesReducer,
        plane: planeReducer,
    }
}))