import { useCounterStore } from './store';

interface SquareProps {
  id: string;
}

const Square = ({ id }: SquareProps) => {
  const count = useCounterStore((state) => state.counters[id] ?? 0);
  const increment = useCounterStore((state) => state.increment);

  return (
    <div className="square">
      <button onClick={() => increment(id)}>
        Square {id} - {count}
      </button>
    </div>
  );
};

export default Square;
