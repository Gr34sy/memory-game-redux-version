// styles
import styles from "./game-board.module.css";
// types
import { board } from "../../../../lib/types/settingsTypes";
import { gamefield, turn } from "../../../../lib/types/gameTypes";
import { RootState } from "../../../../lib/redux/store";
// components
import GameField from "./game-field/GameField";
// hooks
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
// game handlers
import { setFirstActiveField } from "../../../../lib/redux/slices/gameSlice";
import { passTurn } from "../../../../lib/redux/slices/gameSlice";
import { setSecondActiveField } from "../../../../lib/redux/slices/gameSlice";
import { incrementPlayerPairs } from "../../../../lib/redux/slices/gameSlice";
import { decrementPairsLeft } from "../../../../lib/redux/slices/gameSlice";
import { setFieldStatus } from "../../../../lib/redux/slices/gameSlice";

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

  useEffect(() => {
    if (turn.firstActiveField !== null && turn.secondActiveField !== null) {
      if (
        board[turn.firstActiveField].name === board[turn.secondActiveField].name
      ) {
        dispatch(
          setFieldStatus({ fieldId: turn.firstActiveField, status: "disabled" })
        );
        dispatch(
          setFieldStatus({
            fieldId: turn.secondActiveField,
            status: "disabled",
          })
        );
        dispatch(incrementPlayerPairs(turn.player));
        dispatch(decrementPairsLeft());
        console.log("Match action");

        const timeout = setTimeout(() => {
          dispatch(setFirstActiveField(null));
          dispatch(setSecondActiveField(null));
        }, 2000);

        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          dispatch(passTurn());
        }, 2000);

        return () => clearTimeout(timeout);
      }
    }
  }, [turn]);

  function handleFieldClick(i: number, name: string): void {
    if (turn.firstActiveField === null) {
      dispatch(setFirstActiveField(i));
    } else if (turn.secondActiveField === null) {
      dispatch(setSecondActiveField(i));
    } else {
      return;
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
          onClick={() =>
            turn.secondActiveField ? null : handleFieldClick(i, field.name)
          }
        />
      ))}
    </div>
  );
};

export default GameBoard;
