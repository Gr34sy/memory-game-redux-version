// styles
import styles from "./gamepage.module.css";

// components
import Navbar from "../../components/navbar/Navbar";
import GameBoard from "../../components/game/game-board/GameBoard";
import GamePanel from "../../components/game/game-panel/GamePanel";

// utils
import generateBoard from "../../../lib/game-handlers/generateBoard";

const Gamepage = () => {
  const boardSize = "g6"
  const board = generateBoard("uncategorized", boardSize)

  return (
    <div>
      <main className={styles.gamepage}>
        <Navbar />

        <GameBoard board={boardSize} fields={board} />
        <GamePanel />
      </main>
    </div>
  );
};

export default Gamepage;
