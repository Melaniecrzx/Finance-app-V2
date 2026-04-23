import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Budget } from "../../types";
import { mockBudgets } from "../../api/api";

interface BudgetState {
  value: Budget[];
}
const initialState: BudgetState = {
  value: mockBudgets,
};

export const budgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    addBudget: (state, action: PayloadAction<Budget>) => {
      state.value.push(action.payload);
    },
    editBudget: (state, action: PayloadAction<Budget>) => {
      state.value = state.value.map((b) =>
        b.id === action.payload.id ? action.payload : b,
      );
    },
    deleteBudget: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((b) => b.id !== action.payload);
    },
  },
});

export const { addBudget, editBudget, deleteBudget } = budgetSlice.actions;

export default budgetSlice.reducer;
