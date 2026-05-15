import type { Transaction } from "../types";

export const paidBills = (
  recurringBills: Transaction[],
  date: string,
): Transaction[] => {
  return recurringBills.filter((r) => new Date(r.date) < new Date(date));
};

export const upcomingBills = (
  recurringBills: Transaction[],
  date: string,
): Transaction[] => {
  return recurringBills.filter((r) => new Date(r.date) > new Date(date));
};

export const dueSoonBills = (
  recurringBills: Transaction[],
  date: string,
): Transaction[] => {
  return recurringBills.filter((r) => {
    const dateTime = new Date(r.date).getTime();
    const diff = (dateTime - new Date(date).getTime()) / (1000 * 60 * 60 * 24);
    return diff >= 0 && diff <= 5;
  });
};
