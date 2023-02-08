import React from "react";
import { Square } from "../Square/Square";
import { calculateWinner } from "./util/calculateWinner";
import "./Board.scss";

interface BoardProps {
  squares: any[];
  onPlay: (nextSquares: any[]) => void;
  xIsNext: boolean;
}

export const Board: React.FC<BoardProps> = ({ squares, onPlay, xIsNext }) => {
  console.log("Squares", squares);
  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  const handleSquareClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  };

  const handleDelete = () => {
    onPlay(new Array(9).fill(null));
  };

  return (
    <>
      <div className="status">{status}</div>
      <hr />
      <div className="board">
        <div className="board__row">
          <Square
            value={squares[0]}
            onSquareClick={() => handleSquareClick(0)}
          />
          <Square
            value={squares[1]}
            onSquareClick={() => handleSquareClick(1)}
          />
          <Square
            value={squares[2]}
            onSquareClick={() => handleSquareClick(2)}
          />
        </div>
        <div className="board__row">
          <Square
            value={squares[3]}
            onSquareClick={() => handleSquareClick(3)}
          />
          <Square
            value={squares[4]}
            onSquareClick={() => handleSquareClick(4)}
          />
          <Square
            value={squares[5]}
            onSquareClick={() => handleSquareClick(5)}
          />
        </div>
        <div className="board__row">
          <Square
            value={squares[6]}
            onSquareClick={() => handleSquareClick(6)}
          />
          <Square
            value={squares[7]}
            onSquareClick={() => handleSquareClick(7)}
          />
          <Square
            value={squares[8]}
            onSquareClick={() => handleSquareClick(8)}
          />
        </div>
        <button onClick={handleDelete}>Retry?</button>
      </div>
    </>
  );
};
