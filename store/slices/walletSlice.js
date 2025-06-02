import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  balance: 2500.0,
  currency: "USD",
}

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    updateBalance: (state, action) => {
      state.balance += action.payload
    },
    deductBalance: (state, action) => {
      state.balance -= action.payload
    },
  },
})

export const { updateBalance, deductBalance } = walletSlice.actions
export default walletSlice.reducer
