import React from "react";
import "./Square.scss";

interface SquareProps {
  value?: "X" | "O";
  onSquareClick: () => void;
}

export const Square: React.FC<SquareProps> = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};
