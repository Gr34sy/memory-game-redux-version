// styles
import styles from "./gamepage.module.css";
// components
import Navbar from "../../components/navbar/Navbar";
import GameBoard from "../../components/game/game-board/GameBoard";
import GamePanel from "../../components/game/game-panel/GamePanel";
import { Navigate } from "react-router-dom";
// hooks
import { useSelector } from "react-redux";
import { RootState } from "../../../lib/redux/store";

const Gamepage = () => {
  const isGameRunning = useSelector((state: RootState) => state.game.isRunning);

  if (!isGameRunning) {
    return <Navigate replace to="/" />;
  }

  return (
    <div>
      <main className={styles.gamepage}>
        <Navbar />

        <GameBoard />

        <GamePanel />
      </main>
    </div>
  );
};

export default Gamepage;
