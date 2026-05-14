import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authenticatedApi } from '../config/axiosApi';
import type { Pot } from '../types';
import toast from 'react-hot-toast';

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
      toast.success('Pot created!');
    },
    onError: () => {
      toast.error('Something went wrong.');
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
      toast.success('Pot updated!');
    },
    onError: () => {
      toast.error('Something went wrong.');
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
      toast.success('Pot deleted!');
    },
    onError: () => {
      toast.error('Something went wrong.');
    },
  });
};

export const useDeposit = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, amount }: { id: string; amount: number }) => {
      return authenticatedApi.post(`/pots/${id}/deposit`, { amount });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pots'] });
      toast.success('Money add successfully!');
    },
    onError: () => {
      toast.error('Something went wrong.');
    },
  });
};

export const useWithdraw = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, amount }: { id: string; amount: number }) => {
      return authenticatedApi.post(`/pots/${id}/withdraw`, { amount });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pots'] });
      toast.success('Money withdraw successfully!');
    },
    onError: () => {
      toast.error('Something went wrong.');
    },
  });
};
