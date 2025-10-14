import { forwardRef } from "react";

type TextAreaProps = {
  id: string;
  labelText: string;
  value?: string;
  rows?: number;
  cols?: number;
  error?: string;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ id, labelText, value, rows, cols, error, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col gap-2">
        <label
          className="font-semibold text-sm text-gray-900 dark:text-gray-100 opacity-80"
          htmlFor={id}
        >
          {labelText}:
        </label>
        <textarea
          className="w-full py-3 text-sm bg-gray-100 rounded-lg border border-gray-300 outline-none transition-all duration-300 ease-in-out"
          name={id}
          id={id}
          ref={ref}
          value={value}
          rows={rows}
          cols={cols}
          {...props}
        />
        <p className="ml-2 text-xs text-red-500">{error}</p>
      </div>
    );
  }
);
