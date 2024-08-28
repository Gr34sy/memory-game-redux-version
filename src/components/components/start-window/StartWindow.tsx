// styles
import styles from "./start-window.module.css";

// lib utilities
import avialableThemes from "../../../lib/avialableThemes";

// types
import {
  playerAmount,
  playerNames,
  themes,
  board,
} from "../../../lib/settingsTypes";

// components
import Button from "../button/Button";
import ThemeDropdown from "./settings/theme-dropdown/ThemeDropdown";
import SettingsBox from "./settings/settings-box/SettingsBox";

// hooks
import { useState } from "react";

const StartWindow = ({ backAction }: { backAction: () => void }) => {
  const [playerAmount, setPlayerAmount] = useState<playerAmount>(1);
  const [theme, setTheme] = useState<themes>("numbers");
  const [board, setBoard] = useState<board>("g4");

  const INITIAL_PLAYERS = { p1: "" };
  const [playerNames, setPlayerNames] = useState<playerNames>(INITIAL_PLAYERS);

  function handleThemeChange(value: themes){
    setTheme(value);
  };

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    setPlayerNames((prevNames) => {
      return { ...prevNames, [e.target.name]: e.target.value };
    });
  }

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
          onClick={() => setTheme("random")}
          isActive={theme === "random"}
        >
          Random
        </Button>
        <ThemeDropdown action={handleThemeChange} themes={avialableThemes} />
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

      <SettingsBox label="Player 1">
        <input
          type="text"
          placeholder="Name"
          name="p1"
          maxLength={20}
          className={styles.input}
          onChange={handleNameChange}
        />
      </SettingsBox>

      {/* player names */}
      {playerAmount > 1 && (
        <SettingsBox label="Player 2">
          <input
            type="text"
            placeholder="Name"
            name="p2"
            maxLength={20}
            className={styles.input}
            onChange={handleNameChange}
          />
        </SettingsBox>
      )}

      {playerAmount > 2 && (
        <SettingsBox label="Player 3">
          <input
            type="text"
            placeholder="Name"
            name="p3"
            maxLength={20}
            className={styles.input}
            onChange={handleNameChange}
          />
        </SettingsBox>
      )}

      {playerAmount > 3 && (
        <SettingsBox label="Player 4">
          <input
            type="text"
            placeholder="Name"
            name="p4"
            maxLength={20}
            className={styles.input}
            onChange={handleNameChange}
          />
        </SettingsBox>
      )}
      {/* player names */}

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

      <Button buttonType="big" type="submit">
        Start Game
      </Button>
    </form>
  );
};

export default StartWindow;
