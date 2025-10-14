import { forwardRef } from "react";

type InputProps = {
  id: string;
  labelText: string;
  type: string;
  value?: string | number;
  placeholder: string;
  error?: string;
  disabled?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { id, labelText, type, value, placeholder, error, disabled, ...props },
    ref
  ) => {
    return (
      <div className="w-full flex flex-col gap-2">
        <label
          className="font-semibold text-sm text-gray-900 dark:text-gray-100 opacity-80"
          htmlFor={id}
        >
          {labelText}:
        </label>
        <input
          className="w-full py-3 text-sm bg-gray-100 rounded-lg border border-gray-300 outline-none transition-all duration-300 ease-in-out"
          type={type}
          name={id}
          id={id}
          value={value}
          placeholder={placeholder}
          ref={ref}
          disabled={disabled}
          {...props}
        />
        <p className="ml-2 text-xs text-red-500">{error}</p>
      </div>
    );
  }
);
