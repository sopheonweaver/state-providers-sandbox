import Square from './Square';

const Board = () => {
  return (
    <div className="board">
      Redux Board
      <Square id="a" />
      <Square id="b" />
      <Square id="c" />
      <Square id="d" />
    </div>
  );
};

export default Board;
