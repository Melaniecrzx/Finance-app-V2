import potReducer, {
  addPot,
  editPot,
  deletePot,
  addMoney,
  withdrawMoney,
} from "./potSlice";
import type { Pot } from "../../types";
import { mockPots } from "../../api/api";

const initialState = { value: mockPots };

describe("potSlice", () => {
  it("add pot to the state", () => {
    const newPot: Pot = {
      id: 3,
      name: "Laptop",
      target: 600,
      total: 100,
      theme: "#277C78",
    };
    const result = potReducer(initialState, addPot(newPot));
    expect(result.value).toContainEqual(newPot);
  });
  it("edit pot to the state", () => {
    const editedPot = { ...initialState.value[0], total: 500 };
    const result = potReducer(initialState, editPot(editedPot));
    expect(result.value).toContainEqual(editedPot);
  });
  it("delete pot to the state", () => {
    const idToDelete = initialState.value[0].id;
    const result = potReducer(initialState, deletePot(idToDelete));
    expect(result.value).not.toContainEqual(initialState.value[0]);
  });
  it("adds money to a pot", () => {
    const pot = initialState.value[0];
    const result = potReducer(
      initialState,
      addMoney({ id: pot.id, amount: 50 }),
    );
    expect(result.value.find((p) => p.id === pot.id)?.total).toBe(
      pot.total + 50,
    );
  });

  it("withdraws money from a pot", () => {
    const pot = initialState.value[0];
    const result = potReducer(
      initialState,
      withdrawMoney({ id: pot.id, amount: 50 }),
    );
    expect(result.value.find((p) => p.id === pot.id)?.total).toBe(
      pot.total - 50,
    );
  });
});
