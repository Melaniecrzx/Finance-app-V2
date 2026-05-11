import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authenticatedApi } from '../config/axiosApi';
import type { Pot } from '../types';

const getPots = async (): Promise<Pot[]> => {
  const { data } = await authenticatedApi.get('/pots');
  return data.data.pots;
};

export const usePots = () => {
  return useQuery<Pot[]>({
    queryKey: ['pots'],
    queryFn: getPots,
  });
};

export const useCreatePot = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (budget: Omit<Pot, '_id'>) =>
      authenticatedApi.post('/pots', budget),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pots'] });
    },
  });
};

export const useEditPot = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Pot> }) => {
      return authenticatedApi.patch(`/pots/${id}`, data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pots'] });
    },
  });
};

export const useDeletePot = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => {
      return authenticatedApi.delete(`/pots/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pots'] });
    },
  });
};
