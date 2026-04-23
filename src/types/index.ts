export type TransactionCategory =
  | "Entertainment"
  | "Bills"
  | "Groceries"
  | "Dining Out"
  | "Transportation"
  | "Personal Care"
  | "General"
  | "Lifestyle"
  | "Shopping"
  | "Education";

export type FilterCategory =
  | "all"
  | "entertainment"
  | "bills"
  | "groceries"
  | "dining"
  | "transportation"
  | "personalCare";

export type SortOption =
  | "latest"
  | "oldest"
  | "a-z"
  | "z-a"
  | "highest"
  | "lowest";

export interface Transaction {
  id: number;
  avatar: string;
  name: string;
  category: TransactionCategory;
  date: string;
  amount: number;
  recurring: boolean;
}

export type ThemeName = "Green" | "Yellow" | "Cyan" | "Navy" | "Red" | "Purple";
export type ThemeColor =
  | "#277C78"
  | "#F2CDAC"
  | "#82C9D7"
  | "#626070"
  | "#C94736"
  | "#826CB0";

export interface Theme {
  id: number;
  name: ThemeName;
  color: ThemeColor;
}

export type BudgetCategory =
  | "Entertainment"
  | "Bills"
  | "Dining Out"
  | "Personal Care";

export interface BudgetStats {
  spentBudget: number;
  spentBudgetPercentage: number;
  remainingBudget: number;
  latestSpending: Transaction[];
}

export interface Budget {
  id: number;
  category: BudgetCategory;
  maximum: number | string;
  theme: string;
}

export interface BudgetWithStats extends Budget, BudgetStats {}

export interface Pot {
  id: number;
  name: string;
  target: number | string;
  total: number;
  theme: string;
}
