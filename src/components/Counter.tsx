import { Button } from "./Button";

interface CounterProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const Counter: React.FC<CounterProps> = ({ count, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center gap-4 mt-4">
      <Button color="primary" label="-" onClick={onDecrease} />
      <p className="text-lg font-semibold">{count}</p>
      <Button color="primary" label="+" onClick={onIncrease} />
    </div>
  );
};

export { Counter };
