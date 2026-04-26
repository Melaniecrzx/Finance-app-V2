import { render, screen } from "@testing-library/react";
import BillsRow from "./BillsRow";
import type { Transaction } from "../../../types";

const baseTransaction: Transaction = {
  id: 1,
  avatar: "/avatar.png",
  name: "Netflix",
  category: "Entertainment",
  recurring: true,
  amount: -15.99,
  date: "2024-08-26",
};

describe("BillsRow", () => {
  it("renders the transaction name", () => {
    render(
      <table>
        <tbody>
          <BillsRow recurringBill={baseTransaction} />
        </tbody>
      </table>,
    );
    expect(screen.getByText("Netflix")).toBeInTheDocument();
  });
  it("renders the amount", () => {
    render(
      <table>
        <tbody>
          <BillsRow recurringBill={baseTransaction} />
        </tbody>
      </table>,
    );
    expect(screen.getByText("$15.99")).toBeInTheDocument();
  });
  it("renders paid icon when bill is paid (date before DATE_FICTIVE)", () => {
    const paidBill = { ...baseTransaction, date: "2024-08-10" };
    render(
      <table>
        <tbody>
          <BillsRow recurringBill={paidBill} />
        </tbody>
      </table>,
    );
    expect(screen.getByAltText("paid")).toBeInTheDocument();
  });
  it("renders due soon icon when bill is due  within 5 days", () => {
    const dueSoonBill = { ...baseTransaction, date: "2024-08-22" };
    render(
      <table>
        <tbody>
          <BillsRow recurringBill={dueSoonBill} />
        </tbody>
      </table>,
    );
    expect(screen.getByAltText("due soon")).toBeInTheDocument();
  });
  it("renders no icon when bill is upcoming and not due soon", () => {
    render(
      <table>
        <tbody>
          <BillsRow recurringBill={baseTransaction} />
        </tbody>
      </table>,
    );
    expect(screen.queryByAltText("paid")).not.toBeInTheDocument();
    expect(screen.queryByAltText("due soon")).not.toBeInTheDocument();
  });
  it("renders formats date correcly", () => {
    render(
      <table>
        <tbody>
          <BillsRow recurringBill={baseTransaction} />
        </tbody>
      </table>,
    );
    expect(screen.getByText("Monthly-26th")).toBeInTheDocument();
  });
});
