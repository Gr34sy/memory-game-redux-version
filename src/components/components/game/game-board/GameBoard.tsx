// styles
import styles from "./game-board.module.css";
// components
import GameField from "./game-field/GameField";

type GameBoardProps = {
  grid: "g4" | "g6";
  fields: string[];
};

const GameBoard = ({ grid, fields }: GameBoardProps) => {
  const fieldSize = grid === "g6" ? "small" : "big";

  const fieldsToRender = grid === "g4" ? fields.slice(0, 8) : fields;

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
    <div className={`${styles.gameboard} ${styles[grid]}`}>
      {renderFields(fieldsToRender)}
      {renderUndiscoveredFields(fieldsToRender)}
    </div>
  );
};

export default GameBoard;
