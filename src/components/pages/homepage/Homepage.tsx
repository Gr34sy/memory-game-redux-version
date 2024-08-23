import GameField from "../../components/game/game-field/GameField";
import styles from "./homepage.module.css";

const Homepage = () => {
  return (
    <main className={styles.homepage}>
      <div>Home</div>

      <div className={styles["test-wrapper"]}>
        <GameField content="1" size="big" status="active" />
      </div>
    </main>
  );
};

export default Homepage;
