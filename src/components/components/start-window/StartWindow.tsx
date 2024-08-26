// styles
import styles from "./start-window.module.css";

// types
import { playerAmount, theme, board } from "../../../lib/settingsTypes";

// components
import Button from "../button/Button";
import ThemeDropdown from "./settings/theme-dropdown/ThemeDropdown";
import SettingsBox from "./settings/settings-box/SettingsBox";

// hooks
import { useState } from "react";

const StartWindow = ({ backAction }: { backAction: () => void }) => {
  const INITIAL_PLAYERS = { p1: "" };
  const [playerAmount, setPlayerAmount] = useState<playerAmount>(1);
  const [theme, setTheme] = useState<theme>("numbers");
  const [board, setBoard] = useState<board>("g4");

  const PlayerNames = () => {
    return (
      <>
        <SettingsBox label="Player 1">
          <input
            type="text"
            placeholder="Name"
            name="p1"
            className={styles.input}
          />
        </SettingsBox>

        {playerAmount > 1 && (
          <SettingsBox label="Player 2">
            <input
              type="text"
              placeholder="Name"
              name="p2"
              className={styles.input}
            />
          </SettingsBox>
        )}

        {playerAmount > 2 && (
          <SettingsBox label="Player 3">
            <input
              type="text"
              placeholder="Name"
              name="p3"
              className={styles.input}
            />
          </SettingsBox>
        )}

        {playerAmount > 3 && (
          <SettingsBox label="Player 4">
            <input
              type="text"
              placeholder="Name"
              name="p4"
              className={styles.input}
            />
          </SettingsBox>
        )}
      </>
    );
  };

  return (
    <form className={styles.grid}>
      <button
        className={styles["back-button"]}
        onClick={(e) => {
          backAction();
          e.preventDefault();
        }}
      >
        Back
      </button>

      <SettingsBox label="Select Theme" bigItems>
        <Button
          buttonType="selection"
          onClick={() => setTheme("numbers")}
          isActive={theme === "numbers"}
        >
          Numbers
        </Button>
        <Button
          buttonType="selection"
          onClick={() => setTheme("icons")}
          isActive={theme === "icons"}
        >
          Icons
        </Button>
      </SettingsBox>

      <SettingsBox label="Number of Players">
        <Button
          buttonType="selection"
          onClick={() => setPlayerAmount(1)}
          isActive={playerAmount === 1}
        >
          1
        </Button>
        <Button
          buttonType="selection"
          onClick={() => setPlayerAmount(2)}
          isActive={playerAmount === 2}
        >
          2
        </Button>
        <Button
          buttonType="selection"
          onClick={() => setPlayerAmount(3)}
          isActive={playerAmount === 3}
        >
          3
        </Button>
        <Button
          buttonType="selection"
          onClick={() => setPlayerAmount(4)}
          isActive={playerAmount === 4}
        >
          4
        </Button>
      </SettingsBox>

      <PlayerNames />

      <SettingsBox label="Board Size">
        <Button
          buttonType="selection"
          onClick={() => setBoard("g4")}
          isActive={board === "g4"}
        >
          4x4
        </Button>
        <Button
          buttonType="selection"
          onClick={() => setBoard("g6")}
          isActive={board === "g6"}
        >
          6x6
        </Button>
      </SettingsBox>

      <Button buttonType="big">Start Game</Button>
    </form>
  );
};

export default StartWindow;
