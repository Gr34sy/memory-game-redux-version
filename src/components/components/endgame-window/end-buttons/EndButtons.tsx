import styles from "./end-buttons.module.css";
import Button from "../../button/Button";

const EndButtons = () => {
  return (
    <div className={styles.container}>
      <Button buttonType="primary">Restart</Button>

      <Button buttonType="secondary">Setup New Game</Button>
    </div>
  );
};

export default EndButtons;
