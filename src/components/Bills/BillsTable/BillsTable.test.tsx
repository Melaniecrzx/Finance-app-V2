import { render, screen } from "@testing-library/react";
import BillsTable from "./BillsTable";
import type { Transaction } from "../../../types";

const mockBill: Transaction = {
  id: 1,
  avatar: "/avatar.png",
  name: "Netflix",
  category: "Entertainment",
  recurring: true,
  amount: -15.99,
  date: "2024-08-26",
};

describe("BillsTable", () => {
  it("renders bills when list not empty", () => {
    render(<BillsTable recurringBills={[mockBill]} />);
    expect(screen.getByText("Netflix")).toBeInTheDocument();
  });
  it("renders no results found when list is empty", () => {
    render(<BillsTable recurringBills={[]} />);
    expect(screen.getByText("No results found")).toBeInTheDocument();
  });
});
