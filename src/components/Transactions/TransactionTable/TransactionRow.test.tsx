import { render, screen } from "@testing-library/react";
import TransactionRow from "./TransactionRow";
import type { Transaction } from "../../../types";

const baseTransaction: Transaction = {
  id: 1,
  avatar: "/avatar.png",
  name: "Netflix",
  category: "Entertainment",
  recurring: true,
  amount: -15.99,
  date: "2024-08-26T12:00:00Z",
};

describe("TransactionRow", () => {
  it("renders the transaction name", () => {
    render(
      <table>
        <tbody>
          <TransactionRow values={baseTransaction} />
        </tbody>
      </table>,
    );
    expect(screen.getByText("Netflix")).toBeInTheDocument();
  });
  it("renders the amount", () => {
    render(
      <table>
        <tbody>
          <TransactionRow values={baseTransaction} />
        </tbody>
      </table>,
    );
    expect(screen.getByText("-$15.99")).toBeInTheDocument();
  });
  it("renders formats date correcly", () => {
    render(
      <table>
        <tbody>
          <TransactionRow values={baseTransaction} />
        </tbody>
      </table>,
    );
    expect(screen.getAllByText("26 Aug 2024")[0]).toBeInTheDocument();
  });
  it("renders negative amount with minus sign", () => {
    render(
      <table>
        <tbody>
          <TransactionRow values={baseTransaction} />
        </tbody>
      </table>,
    );
    expect(screen.getAllByText("-$15.99")[0]).toBeInTheDocument();
  });

  it("renders positive amount with plus sign", () => {
    const positiveTransaction = { ...baseTransaction, amount: 75.5 };
    render(
      <table>
        <tbody>
          <TransactionRow values={positiveTransaction} />
        </tbody>
      </table>,
    );
    expect(screen.getAllByText("+$75.50")[0]).toBeInTheDocument();
  });

  it("applies green class for positive amount", () => {
    const positiveTransaction = { ...baseTransaction, amount: 75.5 };
    render(
      <table>
        <tbody>
          <TransactionRow values={positiveTransaction} />
        </tbody>
      </table>,
    );
    expect(screen.getAllByText("+$75.50")[0].closest("td")).toHaveClass(
      "text-green",
    );
  });
});
