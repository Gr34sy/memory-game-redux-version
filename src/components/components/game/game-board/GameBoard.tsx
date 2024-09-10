// styles
import styles from "./game-board.module.css";
// types
import { board } from "../../../../lib/types/settingsTypes";
import { gamefield } from "../../../../lib/types/gameTypes";
// components
import GameField from "./game-field/GameField";

type GameBoardProps = {
  boardSize: board;
  fields: gamefield[];
};

const GameBoard = ({ boardSize, fields }: GameBoardProps) => {
  const fieldSize = boardSize === "g6" ? "small" : "big";

  return (
    <div className={`${styles.gameboard} ${styles[boardSize]}`}>
      {fields.map((field, i) => (
        <GameField
          size={fieldSize}
          content={field.name}
          status="disabled"
          key={`gamefield-${i}`}
        />
      ))}
    </div>
  );
};

export default GameBoard;
