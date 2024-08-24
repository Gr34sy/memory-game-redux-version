// styles
import styles from "./gamepage.module.css";

// components
import Navbar from "../../components/navbar/Navbar";
import GameBoard from "../../components/game/game-board/GameBoard";
import GamePanel from "../../components/game/game-panel/GamePanel";

// icons
import polishPolitcsIcons from "../../../lib/icon-sets/polish-politics";

const Gamepage = () => {
  return (
    <main className={styles.gamepage}>
      <Navbar />

      <GameBoard grid="g4" fields={polishPolitcsIcons} />
      <GamePanel />
    </main>
  );
};

export default Gamepage;
