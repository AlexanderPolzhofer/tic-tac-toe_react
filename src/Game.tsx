import React from "react";
import { Board } from "./components/Board/Board";
import "./Game.scss";

const Game: React.FC = () => {
  const [history, setHistory] = React.useState([Array(9).fill(null)]);
  const [xIsNext, setXisNext] = React.useState(true);

  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares: any[]) => {
    setHistory([...history, nextSquares]);
    setXisNext(!xIsNext);
  };

  return (
    <div className="App">
      <Board squares={currentSquares} onPlay={handlePlay} xIsNext={xIsNext} />
    </div>
  );
};

export default Game;
