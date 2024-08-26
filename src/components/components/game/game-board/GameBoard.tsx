// styles
import styles from "./game-board.module.css";
// types
import { board } from "../../../../lib/settingsTypes";
// components
import GameField from "./game-field/GameField";

type GameBoardProps = {
  board: board;
  fields: string[];
};

const GameBoard = ({ board, fields }: GameBoardProps) => {
  const fieldSize = board === "g6" ? "small" : "big";

  const fieldsToRender = board === "g4" ? fields.slice(0, 8) : fields;

  function renderFields(array: string[]) {
    return array.map((item: string, i: number) => {
      return (
        <GameField size={fieldSize} content={item} status="disabled" key={i} />
      );
    });
  }
  function renderUndiscoveredFields(array: string[]) {
    return array.map((item: string, i: number) => {
      return (
        <GameField
          size={fieldSize}
          content={item}
          status="undiscovered"
          key={i}
        />
      );
    });
  }

  return (
    <div className={`${styles.gameboard} ${styles[board]}`}>
      {renderFields(fieldsToRender)}
      {renderUndiscoveredFields(fieldsToRender)}
    </div>
  );
};

export default GameBoard;
