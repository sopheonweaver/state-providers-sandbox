import React from 'react';
import { SquareContext } from './SquareProvider';

interface SquareProps {
  id: string;
}

const Square = ({ id }: SquareProps) => {
  const { counters, increment } = React.useContext(SquareContext);

  return (
    <div className="square">
      <button onClick={() => increment(id)}>
        Square {id} - {counters[id] ?? 0}
      </button>
    </div>
  );
};

export default Square;
