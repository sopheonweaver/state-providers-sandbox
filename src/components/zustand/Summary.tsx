import { useCounterStore } from './store';

const Summary = () => {
  const total = useCounterStore((state) => Object.entries(state.counters).reduce((acc, curr) => acc + curr[1], 0));
  return <div>Total: {total}</div>;
};

export default Summary;
