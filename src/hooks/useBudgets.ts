import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authenticatedApi } from '../config/axiosApi';
import type { Budget } from '../types';

const getBudgets = async (): Promise<Budget[]> => {
  const { data } = await authenticatedApi.get('/budgets');
  return data.data.budgets;
};

export const useBudgets = () => {
  return useQuery<Budget[]>({
    queryKey: ['budgets'],
    queryFn: getBudgets,
  });
};

export const useCreateBudget = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (budget: Omit<Budget, '_id'>) =>
      authenticatedApi.post('/budgets', budget),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['budgets'] });
    },
  });
};

export const useEditBudget = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Budget> }) => {
      return authenticatedApi.patch(`/budgets/${id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['budgets'] });
    },
  });
};

export const useDeleteBudget = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => {
      return authenticatedApi.delete(`/budgets/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['budgets'] });
    },
  });
};
