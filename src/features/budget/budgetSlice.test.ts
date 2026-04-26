import budgetReducer, {
  addBudget,
  editBudget,
  deleteBudget,
} from "./budgetSlice";
import type { Budget } from "../../types";
import { mockBudgets } from "../../api/api";

const initialState = { value: mockBudgets };

describe("budgetSlice", () => {
  it("add budget to the state", () => {
    const newBudget: Budget = {
      id: 3,
      category: "Entertainment",
      maximum: 100,
      theme: "#277C78",
    };
    const result = budgetReducer(initialState, addBudget(newBudget));
    expect(result.value).toContainEqual(newBudget);
  });
  it("edit budget to the state", () => {
    const editedBudget = { ...initialState.value[0], maximum: 999 };
    const result = budgetReducer(initialState, editBudget(editedBudget));
    expect(result.value).toContainEqual(editedBudget);
  });
  it("delete budget to the state", () => {
    const idToDelete = initialState.value[0].id;
    const result = budgetReducer(initialState, deleteBudget(idToDelete));
    expect(result.value).not.toContainEqual(initialState.value[0]);
  });
});
