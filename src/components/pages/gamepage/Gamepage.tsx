// styles
import styles from "./gamepage.module.css";

// components
import Navbar from "../../components/navbar/Navbar";
import GameBoard from "../../components/game/game-board/GameBoard";
import GamePanel from "../../components/game/game-panel/GamePanel";

// icons
import natureIcons from "../../../lib/icon-sets/nature";

const Gamepage = () => {
  return (
    <main className={styles.gamepage}>
      <Navbar />

      <GameBoard grid="g6" fields={natureIcons} />
      <GamePanel />
    </main>
  );
};

export default Gamepage;
