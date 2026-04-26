import { render, screen } from "@testing-library/react";
import BillsSummary from "./BillsSummary";
import type { Transaction } from "../../types";

const makeTransaction = (date: string, amount: number): Transaction => ({
  id: 1,
  avatar: "/avatar.png",
  name: "Netflix",
  category: "Entertainment",
  recurring: true,
  amount,
  date,
});

const mockBills: Transaction[] = [
  makeTransaction("2024-08-10T00:00:00Z", -10),
  makeTransaction("2024-08-22T00:00:00Z", -20),
  makeTransaction("2024-08-30T00:00:00Z", -15),
];

describe("BillsSummary", () => {
  it("renders total bills amount", () => {
    render(<BillsSummary recurringBills={mockBills} />);
    expect(screen.getByText("$45.00")).toBeInTheDocument();
  });

  it("renders paid bills count and total", () => {
    render(<BillsSummary recurringBills={mockBills} />);
    expect(screen.getByText("1 ($10.00)")).toBeInTheDocument();
  });

  it("renders upcoming bills count and total", () => {
    render(<BillsSummary recurringBills={mockBills} />);
    expect(screen.getByText("2 ($35.00)")).toBeInTheDocument();
  });

  it("renders due soon bills count and total", () => {
    render(<BillsSummary recurringBills={mockBills} />);
    expect(screen.getByText("1 ($20.00)")).toBeInTheDocument();
  });

  it("renders zero total when no bills", () => {
    render(<BillsSummary recurringBills={[]} />);
    expect(screen.getByText("$0.00")).toBeInTheDocument();
  });
});
