// styles
import styles from "./game-board.module.css";
// components
import GameField from "../game-field/GameField";

type GameBoardProps = {
  grid: "g4" | "g6";
};

const GameBoard = ({ grid }: GameBoardProps) => {
  const fieldSize = grid === "g6" ? "small" : "big";

  return (
    <div className={`${styles.gameboard} ${styles[grid]}`}>
      <GameField size={fieldSize} content="1" status="active" />
      <GameField
        size={fieldSize}
        content="fa-solid fa-hand-spock"
        status="disabled"
      />
      <GameField
        size={fieldSize}
        content="fa-solid fa-hand-spock"
        status="disabled"
      />
      <GameField size={fieldSize} content="1" status="active" />
      <GameField size={fieldSize} content="2" status="undiscovered" />
      <GameField size={fieldSize} content="2" status="undiscovered" />
      <GameField size={fieldSize} content="4" status="undiscovered" />
      <GameField size={fieldSize} content="4" status="undiscovered" />
      <GameField size={fieldSize} content="fa-solid fa-car" status="disabled" />
      <GameField size={fieldSize} content="fa-solid fa-car" status="disabled" />
      <GameField
        size={fieldSize}
        content="fa-solid fa-anchor"
        status="disabled"
      />
      <GameField
        size={fieldSize}
        content="fa-solid fa-anchor"
        status="disabled"
      />
      <GameField size={fieldSize} content="4" status="undiscovered" />
      <GameField size={fieldSize} content="4" status="undiscovered" />
      <GameField size={fieldSize} content="4" status="undiscovered" />
      <GameField size={fieldSize} content="4" status="undiscovered" />
    </div>
  );
};

export default GameBoard;
