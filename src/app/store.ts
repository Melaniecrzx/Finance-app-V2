import { configureStore } from "@reduxjs/toolkit";
import budgetsReducer from "../features/budget/budgetSlice";
import potsReducer from "../features/pot/potSlice";

const store = configureStore({
  reducer: {
    budgets: budgetsReducer,
    pots: potsReducer,
  },
});

export { store };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
