import { configureStore } from "@reduxjs/toolkit";
import budgetsReducer from "../features/budget/budgetSlice";

const store = configureStore({
  reducer: {
    budgets: budgetsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
