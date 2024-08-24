// styles
import styles from "./gamepage.module.css";

// components
import GameBoard from "../../components/game/game-board/GameBoard";
import GamePanel from "../../components/game/game-panel/GamePanel";

// icons
import polishPolitcsIcons from "../../../lib/icon-sets/polish-politics";

const Gamepage = () => {
  return (
    <div className={styles["game-layout"]}>
      <GameBoard grid="g6" fields={polishPolitcsIcons} />
      <GamePanel />
    </div>
  );
};

export default Gamepage;
