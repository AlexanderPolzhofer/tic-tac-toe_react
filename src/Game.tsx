import React from "react";
import { Board } from "./components/Board/Board";
import "./Game.scss";

const Game: React.FC = () => {
  const [history, setHistory] = React.useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = React.useState(0);
  const xIsNext = currentMove % 2 === 0;

  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: any[]) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (move: number) => {
    setCurrentMove(move);
  };

  const moves = history.map((_, move) => {
    let description;
    if (move > 0) {
      description = `Go to move #${move}`;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="App">
      <Board squares={currentSquares} onPlay={handlePlay} xIsNext={xIsNext} />
      <ol>{moves}</ol>
    </div>
  );
};

export default Game;
