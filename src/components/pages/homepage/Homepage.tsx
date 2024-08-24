import GameBoard from "../../components/game/game-board/GameBoard";
import styles from "./homepage.module.css";
import polishPolitcsIcons from "../../../lib/icon-sets/polish-politics";

const Homepage = () => {
  return (
    <main className={styles.homepage}>
      <div>Home</div>

      <GameBoard grid="g6" fields={polishPolitcsIcons} />
    </main>
  );
};

export default Homepage;
