// styles
import styles from "./homepage.module.css";

// components
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <main className={styles.homepage}>
      <div>Home</div>

      <Link to="/game">Game</Link>
    </main>
  );
};

export default Homepage;
