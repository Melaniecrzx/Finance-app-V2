import { useMutation } from '@tanstack/react-query';
import { useAuth } from '../context/AuthContext';
import { authenticatedApi } from '../config/axiosApi';
import { useNavigate } from 'react-router-dom';

const useSignup = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: (data: {
      name: string;
      email: string;
      password: string;
      passwordConfirmation: string;
    }) => authenticatedApi.post('/auth/signup', data),
    onSuccess: (response) => {
      login(response.data.data.user, response.data.token);
      navigate('/');
    },
  });

  return { isPending, isError, error, mutate };
};

export default useSignup;
