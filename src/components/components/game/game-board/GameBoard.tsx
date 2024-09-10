// styles
import styles from "./game-board.module.css";
// types
import { board } from "../../../../lib/types/settingsTypes";
import { gamefield } from "../../../../lib/types/gameTypes";
import { RootState } from "../../../../lib/redux/store";
// components
import GameField from "./game-field/GameField";
// hooks
import { useSelector } from "react-redux";

const GameBoard = () => {
  const boardSize: board = useSelector(
    (state: RootState) => state.settings.value.board
  );
  const board: gamefield[] = useSelector(
    (state: RootState) => state.game.board
  );
  const fieldSize = boardSize === "g6" ? "small" : "big";

  return (
    <div className={`${styles.gameboard} ${styles[boardSize]}`}>
      {board.map((field, i) => (
        <GameField
          size={fieldSize}
          content={field.name}
          status="active"
          key={`gamefield-${i}`}
        />
      ))}
    </div>
  );
};

export default GameBoard;
