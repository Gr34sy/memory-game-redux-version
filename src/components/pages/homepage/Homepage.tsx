import Button from "../../components/button/Button";
import styles from "./homepage.module.css";

const Homepage = () => {
  return (
    <main className={styles.homepage}>
      <div>Home</div>

      <div className={styles["test-wrapper"]}>
        <Button buttonType="primary" onClick={() => console.log("click")}>
          Test
        </Button>
      </div>
    </main>
  );
};

export default Homepage;
