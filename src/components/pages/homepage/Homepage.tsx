import GameBoard from "../../components/game/game-board/GameBoard";
import styles from "./homepage.module.css";

const Homepage = () => {
  return (
    <main className={styles.homepage}>
      <div>Home</div>

      <GameBoard grid="g4" />
    </main>
  );
};

export default Homepage;
