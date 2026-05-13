import { useForm } from 'react-hook-form';
import Button from '../ui/Button';
import FormField from './FormField.tsx';
import useLogin from '../../hooks/useLogin';

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginForm({ onClick }: { onClick: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const { mutate, isError, error } = useLogin();

  const onSubmit = async (data: LoginFormData) => {
    mutate(data);
  };

  return (
    <div className="flex flex-col gap-8 bg-white rounded-xl p-6 md:p-8 w-85.75 md:w-140">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <h3 className="font1">Login</h3>

        <div className="flex flex-col gap-4">
          <FormField label="Email" id="email" error={errors.email}>
            <input
              id="email"
              type="email"
              autoFocus
              className="rounded-lg border border-beige-500 px-5 py-3"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Please provide a valid email address.',
                },
              })}
            />
          </FormField>

          <FormField label="Password" id="password" error={errors.password}>
            <input
              id="password"
              type="password"
              className="rounded-lg border border-beige-500 px-5 py-3"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters.',
                },
              })}
            />
          </FormField>
        </div>

        {isError && <p className="text-red text-sm -mt-4">{error?.message}</p>}

        <Button type="submit" mode="primary">
          Login
        </Button>
      </form>

      <p className="text-grey-500 font4-regular text-center">
        Need to create an account ?{' '}
        <button
          className="font4-bold text-grey-900 cursor-pointer"
          onClick={onClick}
        >
          Sign Up
        </button>
      </p>
    </div>
  );
}
