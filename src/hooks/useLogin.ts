import { useMutation } from '@tanstack/react-query';
import { useAuth } from '../context/AuthContext.tsx';
import { authenticatedApi } from '../config/axiosApi';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: (data: { email: string; password: string }) =>
      authenticatedApi.post('/auth/login', data),
    onSuccess: (response) => {
      login(response.data.data.user, response.data.token);
      navigate('/');
    },
  });

  return { isPending, isError, error, mutate };
};

export default useLogin;
