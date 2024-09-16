// styles
import styles from "./game-board.module.css";
// types
import { board } from "../../../../lib/types/settingsTypes";
import { gamefield, turn } from "../../../../lib/types/gameTypes";
import { RootState } from "../../../../lib/redux/store";
// components
import GameField from "./game-field/GameField";
// hooks and utils
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFirstActiveField } from "../../../../lib/redux/slices/gameSlice";
import { setSecondActiveField } from "../../../../lib/redux/slices/gameSlice";

const GameBoard = () => {
  const boardSize: board = useSelector(
    (state: RootState) => state.settings.value.board
  );
  const board: gamefield[] = useSelector(
    (state: RootState) => state.game.board
  );
  const turn: turn = useSelector((state: RootState) => state.game.turn);
  const fieldSize = boardSize === "g6" ? "small" : "big";

  const dispatch = useDispatch();

  function handleFieldClick(i: number, name: string): void {
    if (turn.firstActiveField === null) {
      dispatch(setFirstActiveField(i));
    } else if (turn.secondActiveField === null) {
      dispatch(setSecondActiveField(i));
    } else {
      dispatch(setFirstActiveField(null));
      dispatch(setSecondActiveField(null));
    }
  }

  return (
    <div className={`${styles.gameboard} ${styles[boardSize]}`}>
      {board.map((field, i) => (
        <GameField
          size={fieldSize}
          content={field.name}
          status={
            turn.firstActiveField === i || turn.secondActiveField === i
              ? "active"
              : field.status
          }
          key={`gamefield-${i}`}
          onClick={() => handleFieldClick(i, field.name)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
