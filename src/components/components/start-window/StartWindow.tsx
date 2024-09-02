// styles
import styles from "./start-window.module.css";
// types
import {
  playerAmount,
  playerNames,
  themes,
  board,
} from "../../../lib/settingsTypes";

// components
import Button from "../button/Button";
import Board from "./settings/Board";
import Players from "./settings/Players";
import Theme from "./settings/theme/Theme";

// hooks and utils
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSettings } from "../../../lib/redux/slices/settingsSlice";
import { setRunning } from "../../../lib/redux/slices/gameSlice";

const StartWindow = ({ backAction }: { backAction: () => void }) => {
  const INITIAL_PLAYER_NAMES = { p1: "", p2: "", p3: "", p4: "" };
  const [playerNames, setPlayerNames] =
    useState<playerNames>(INITIAL_PLAYER_NAMES);
  const [playerAmount, setPlayerAmount] = useState<playerAmount>(1);
  const [theme, setTheme] = useState<themes>("numbers");
  const [board, setBoard] = useState<board>("g4");

  const dispatch = useDispatch();

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    setPlayerNames((prevNames) => {
      return { ...prevNames, [e.target.name]: e.target.value };
    });
  }

  return (
    <form className={styles.grid}>
      <button
        className="back-button"
        onClick={(e) => {
          backAction();
          e.preventDefault();
        }}
      >
        Back
      </button>

      <Theme setTheme={setTheme} />

      <Players
        setPlayerAmount={setPlayerAmount}
        handleNameChange={handleNameChange}
        currentPlayerAmount={playerAmount}
        currentPlayerNames={playerNames}
      />

      <Board setBoard={setBoard} currentBoard={board} />

      <Button
        buttonType="big"
        // type="submit"
        onClick={(e) => {
          dispatch(setSettings({
            theme: theme,
            players: {
              amount: playerAmount,
              names: playerNames,
            },
            board: board,
          }));

          dispatch(setRunning(true));
        }}
      >
        Start Game
      </Button>
    </form>
  );
};

export default StartWindow;
