import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Pot } from "../../types";
import { mockPots } from "../../api/api";

interface PotState {
  value: Pot[];
}
const initialState: PotState = {
  value: mockPots,
};

export const potSlice = createSlice({
  name: "pot",
  initialState,
  reducers: {
    addPot: (state, action: PayloadAction<Pot>) => {
      state.value.push(action.payload);
    },
    editPot: (state, action: PayloadAction<Pot>) => {
      state.value = state.value.map((p) =>
        p.id === action.payload.id ? action.payload : p,
      );
    },
    deletePot: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((p) => p.id !== action.payload);
    },
    addMoney: (
      state,
      action: PayloadAction<{ id: number; amount: number }>,
    ) => {
      state.value = state.value.map((p) =>
        p.id === action.payload.id
          ? { ...p, total: p.total + action.payload.amount }
          : p,
      );
    },
    withdrawMoney: (
      state,
      action: PayloadAction<{ id: number; amount: number }>,
    ) => {
      state.value = state.value.map((p) =>
        p.id === action.payload.id
          ? { ...p, total: p.total - action.payload.amount }
          : p,
      );
    },
  },
});

export const { addPot, editPot, deletePot, addMoney, withdrawMoney } =
  potSlice.actions;
export default potSlice.reducer;
