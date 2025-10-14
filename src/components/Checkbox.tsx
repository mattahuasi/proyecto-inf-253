export const Checkbox = ({
  id,
  labelText,
}: {
  id: string;
  labelText: string;
}) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <input
        className="rounded-md border border-gray-400 outline-none focus:ring-1 focus:ring-offset-0 transition-all duration-300 ease-in-out"
        type="checkbox"
        name={id}
        id={id}
      />
      <label
        className="font-semibold text-sm text-gray-900 dark:text-gray-100 opacity-60"
        htmlFor={id}
      >
        {labelText}
      </label>
    </div>
  );
};
