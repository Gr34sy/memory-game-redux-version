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


  return (
    <div className={`${styles.gameboard} ${styles[board]}`}>
      {fields.map((field, i) => <GameField size={fieldSize} content={field} status="disabled" key={`gamefield-${i}`} />)}
    </div>
  );
};

export default GameBoard;
