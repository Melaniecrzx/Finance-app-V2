import { useForm } from 'react-hook-form';
import Button from '../ui/Button';
import FormField from './FormField.tsx';
import useSignup from '../../hooks/useSignup';

interface SignupFormData {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export default function SignupForm({ onClick }: { onClick: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignupFormData>();

  const { mutate, isError, error } = useSignup();
  const onSubmit = async (data: SignupFormData) => {
    mutate(data);
  };

  return (
    <div className="flex flex-col gap-8 bg-white rounded-xl p-6 md:p-8 w-85.75 md:w-140">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <h3 className="font1">Sign Up</h3>

        <div className="flex flex-col gap-4">
          <FormField label="Name" id="name" error={errors.name}>
            <input
              id="name"
              type="text"
              autoFocus
              className="rounded-lg border border-beige-500 px-5 py-3"
              {...register('name', {
                required: 'Name is required',
                minLength: {
                  value: 2,
                  message: 'Name must be at least 2 characters.',
                },
              })}
            />
          </FormField>

          <FormField label="Email" id="email" error={errors.email}>
            <input
              id="email"
              type="email"
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

          <FormField
            label="Confirm Password"
            id="passwordConfirmation"
            error={errors.passwordConfirmation}
          >
            <input
              id="passwordConfirmation"
              type="password"
              className="rounded-lg border border-beige-500 px-5 py-3"
              {...register('passwordConfirmation', {
                required: 'Please confirm your password.',
                validate: (value) =>
                  value === watch('password') || 'Passwords do not match.',
              })}
            />
          </FormField>
        </div>

        {isError && <p className="text-red text-sm -mt-4">{error?.message}</p>}

        <Button type="submit" mode="primary">
          Sign Up
        </Button>
      </form>

      <p className="text-grey-500 font4-regular text-center">
        Already have an account ?{' '}
        <button
          className="font4-bold text-grey-900 cursor-pointer"
          onClick={onClick}
        >
          Login
        </button>
      </p>
    </div>
  );
}
