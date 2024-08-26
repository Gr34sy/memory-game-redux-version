// styles
import styles from "./start-window.module.css";
// types
import { numberOfPlayers, theme, board } from "../../../lib/settingsTypes";
import { Dispatch } from "react";
// components
import Button from "../button/Button";
import ThemeDropdown from "./settings/theme-dropdown/ThemeDropdown";
import SettingsBox from "./settings/settings-box/SettingsBox";
// hooks
import { useState } from "react";

// type playersType = [numberOfPlayers, Dispatch<React.SetStateAction<number>>];
// type themeType = [theme, Dispatch<React.SetStateAction<number>>];
// type boardType = [board, Dispatch<React.SetStateAction<number>>];

const StartWindow = ({ backAction }: { backAction: () => void }) => {
  const [players, setPlayers] = useState(1);
  const [theme, setTheme] = useState("numbers");
  const [board, setBoard] = useState("g4");

  return (
    <div className={styles.grid}>
      <button className={styles["back-button"]} onClick={backAction}>
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
          onClick={() => setPlayers(1)}
          isActive={players === 1}
        >
          1
        </Button>
        <Button
          buttonType="selection"
          onClick={() => setPlayers(2)}
          isActive={players === 2}
        >
          2
        </Button>
        <Button
          buttonType="selection"
          onClick={() => setPlayers(3)}
          isActive={players === 3}
        >
          3
        </Button>
        <Button
          buttonType="selection"
          onClick={() => setPlayers(4)}
          isActive={players === 4}
        >
          4
        </Button>
      </SettingsBox>

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
    </div>
  );
};

export default StartWindow;
