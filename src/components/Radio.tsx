import { forwardRef } from "react";

type RadioProps = {
  id: string;
  labelText: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
};

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ id, labelText, value, checked, disabled, ...props }, ref) => {
    return (
      <label className="flex justify-start items-center gap-2 font-semibold text-sm text-gray-900 dark:text-gray-100 opacity-80">
        <input
          className="focus:outline-none focus:ring-0"
          type="radio"
          name={id}
          id={id}
          value={value}
          ref={ref}
          checked={checked}
          disabled={disabled}
          {...props}
        />
        {labelText}
      </label>
    );
  }
);
