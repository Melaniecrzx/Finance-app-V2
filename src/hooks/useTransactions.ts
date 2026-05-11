import { useQuery } from '@tanstack/react-query';
import { authenticatedApi } from '../config/axiosApi';
import type { SortOption, FilterCategory } from '../types';

interface TransactionParams {
  page: number;
  sort: SortOption;
  category: FilterCategory;
  search: string;
}

const sortMap: Record<SortOption, string> = {
  latest: '-date',
  oldest: 'date',
  'a-z': 'name',
  'z-a': '-name',
  highest: '-amount',
  lowest: 'amount',
};

const categoryMap: Record<FilterCategory, string | undefined> = {
  all: undefined,
  entertainment: 'Entertainment',
  bills: 'Bills',
  groceries: 'Groceries',
  dining: 'Dining Out',
  transportation: 'Transportation',
  personalCare: 'Personal Care',
};

const getTransactions = async (params: TransactionParams) => {
  const { data } = await authenticatedApi.get('/transactions', {
    params: {
      ...params,
      sort: sortMap[params.sort],
      category: categoryMap[params.category],
    },
  });
  return data;
};

export const useTransactions = (params: TransactionParams) => {
  return useQuery({
    queryKey: ['transactions', params],
    queryFn: () => getTransactions(params),
    placeholderData: (previousData) => previousData,
  });
};
