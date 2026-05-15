import type { FieldError } from 'react-hook-form';

export default function FormField({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error: FieldError | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1 font5-bold">
      <label htmlFor={id} className="text-grey-500">
        {label}
      </label>
      {children}
      {error && <p className="text-red text-sm mt-1">{error.message}</p>}
    </div>
  );
}
