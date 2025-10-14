interface SubmitButtonProps {
  label: string;
  fullWidth?: boolean;
}

export const SubmitButton = ({ label, fullWidth }: SubmitButtonProps) => {
  return (
    <button
      className={`${
        fullWidth ? "w-full" : ""
      } inline-block font-bold text-white text-md px-6 py-3 rounded-lg shadow-md bg-blue-500 hover:bg-blue-600 transition-all duration-300 ease-in-out`}
      type="submit"
    >
      {label}
    </button>
  );
};
