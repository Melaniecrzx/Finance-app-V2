import { useQuery } from '@tanstack/react-query';
import { authenticatedApi } from '../config/axiosApi';

const getOverview = async () => {
  const { data } = await authenticatedApi.get('/overview');
  return data.data;
};

export const useOverview = () => {
  return useQuery({
    queryKey: ['overview'],
    queryFn: () => getOverview(),
  });
};
