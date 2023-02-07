import React from "react";
import { Board } from "./components/Board/Board";
import "./Game.scss";

const Game: React.FC = () => {
  const [squares, setSquares] = React.useState(new Array(9).fill(null));
  const [xIsNext, setXisNext] = React.useState(true);

  return (
    <div className="App">
      <Board
        squares={squares}
        onChange={setSquares}
        xIsNext={xIsNext}
        onChangePlayer={setXisNext}
      />
    </div>
  );
};

export default Game;
