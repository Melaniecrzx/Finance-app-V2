import { useQuery } from '@tanstack/react-query';
import { authenticatedApi } from '../config/axiosApi';
import type { Transaction } from '../types';

const getBills = async (): Promise<Transaction[]> => {
  const { data } = await authenticatedApi.get('/bills');
  return data.data.bills;
};

export const useBills = () => {
  return useQuery<Transaction[]>({
    queryKey: ['bills'],
    queryFn: getBills,
  });
};
