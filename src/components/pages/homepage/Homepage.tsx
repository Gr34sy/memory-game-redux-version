import GameBoard from "../../components/game/game-board/GameBoard";
import styles from "./homepage.module.css";
import polishPolitcsIcons from "../../../lib/icon-sets/polish-politics";
import GamePanel from "../../components/game/game-panel/GamePanel";

const Homepage = () => {
  return (
    <main className={styles.homepage}>
      <div>Home</div>

      <GameBoard grid="g6" fields={polishPolitcsIcons} />
      <GamePanel />
    </main>
  );
};

export default Homepage;
