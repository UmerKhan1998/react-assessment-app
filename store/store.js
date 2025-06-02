import { configureStore } from "@reduxjs/toolkit"
import projectsReducer from "./slices/projectsSlice"
import walletReducer from "./slices/walletSlice"
import purchasesReducer from "./slices/purchasesSlice"

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    wallet: walletReducer,
    purchases: purchasesReducer,
  },
})
