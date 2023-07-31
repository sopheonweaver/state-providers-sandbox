import { useDispatch, useSelector } from 'react-redux';
import { increment } from './counterSlice';
import { RootState } from './store';

interface SquareProps {
  id: string;
}

const Square = ({ id }: SquareProps) => {
  const dispatch = useDispatch();
  const count = useSelector<RootState, number>((state) => state.counter.counters[id] ?? 0);

  return (
    <div className="square">
      <button onClick={() => dispatch(increment(id))}>
        Square {id} - {count}
      </button>
    </div>
  );
};

export default Square;
