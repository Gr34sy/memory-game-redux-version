// styles
import styles from "./gamepage.module.css";
// components
import Navbar from "../../components/navbar/Navbar";
import GameBoard from "../../components/game/game-board/GameBoard";
import GamePanel from "../../components/game/game-panel/GamePanel";
// hooks
import { useSelector } from "react-redux";
// utils
import { RootState } from "../../../lib/redux/store";

const Gamepage = () => {
  const boardSize = useSelector(
    (state: RootState) => state.settings.value.board
  );
  const board = useSelector((state: RootState) => state.game.board);
  console.log(board);

  return (
    <div>
      <main className={styles.gamepage}>
        <Navbar />

        <GameBoard boardSize={boardSize} fields={board} />
        <GamePanel />
      </main>
    </div>
  );
};

export default Gamepage;
