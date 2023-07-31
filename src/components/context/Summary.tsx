import React from 'react';
import { SquareContext } from './SquareProvider';

const Summary = () => {
  const { counters } = React.useContext(SquareContext);
  const total = Object.values(counters).reduce((acc, curr) => acc + curr, 0);

  return <div>Total: {total}</div>;
};

export default Summary;
