import { useSelector } from 'react-redux';
import { RootState } from './store';

const Summary = () => {
  const total = useSelector<RootState, number>((state) => Object.entries(state.counter.counters).reduce((acc, curr) => acc + curr[1], 0));

  return <div>Total: {total}</div>;
};

export default Summary;
