import type { Transaction } from "../types";
import { paidBills, upcomingBills, dueSoonBills } from "./billsUtils";

const makeTransaction = (date: string, amount: number = -10): Transaction => ({
  id: 1,
  avatar: "/avatar.png",
  name: "Netflix",
  category: "Entertainment",
  recurring: true,
  amount,
  date,
});

const DATE = "2024-08-20";

describe("paidBills", () => {
  it("returns bills before Date ", () => {
    const bills = [
      makeTransaction("2024-08-10"),
      makeTransaction("2024-08-25"),
    ];
    expect(paidBills(bills, DATE)).toHaveLength(1);
    expect(paidBills(bills, DATE)[0].date).toBe("2024-08-10");
  });
  it("returns  empty if no bills are paid ", () => {
    const bills = [makeTransaction("2024-08-25")];
    expect(paidBills(bills, DATE)).toHaveLength(0);
  });
});

describe("upcomingBills", () => {
  it("returns bills after Date ", () => {
    const bills = [
      makeTransaction("2024-08-10"),
      makeTransaction("2024-08-25"),
    ];
    expect(upcomingBills(bills, DATE)).toHaveLength(1);
    expect(upcomingBills(bills, DATE)[0].date).toBe("2024-08-25");
  });
  it("returns  empty if no bills are paid ", () => {
    const bills = [makeTransaction("2024-08-10")];
    expect(upcomingBills(bills, DATE)).toHaveLength(0);
  });
});

describe("dueSoonBills", () => {
  it("returns bills after Date and due within 5 days ", () => {
    const bills = [
      makeTransaction("2024-08-30"),
      makeTransaction("2024-08-22"),
    ];
    expect(dueSoonBills(bills, DATE)).toHaveLength(1);
    expect(dueSoonBills(bills, DATE)[0].date).toBe("2024-08-22");
  });
  it("returns  empty if no bills are paid ", () => {
    const bills = [makeTransaction("2024-08-30")];
    expect(dueSoonBills(bills, DATE)).toHaveLength(0);
  });
});
