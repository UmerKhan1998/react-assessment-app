import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  purchases: [
    {
      id: 1,
      projectId: 1,
      projectTitle: "Modern E-commerce Platform",
      quantity: 1,
      price: 299,
      total: 299,
      date: "2024-01-15",
      status: "Completed",
    },
    {
      id: 2,
      projectId: 2,
      projectTitle: "Mobile App UI Kit",
      quantity: 2,
      price: 149,
      total: 298,
      date: "2024-01-10",
      status: "Completed",
    },
  ],
}

const purchasesSlice = createSlice({
  name: "purchases",
  initialState,
  reducers: {
    addPurchase: (state, action) => {
      const newPurchase = {
        id: Date.now(),
        ...action.payload,
        date: new Date().toISOString().split("T")[0],
        status: "Completed",
      }
      state.purchases.unshift(newPurchase)
    },
  },
})

export const { addPurchase } = purchasesSlice.actions
export default purchasesSlice.reducer
