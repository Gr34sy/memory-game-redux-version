// styles
import Button from "../../button/Button";
import styles from "./mobile-menu.module.css";
// components

const MobileMenu = () => {
  return (
    <div className={styles["mobile-menu"]}>
      <Button buttonType="primary" onClick={() => {}}>
        Resume
      </Button>
      <Button buttonType="secondary" onClick={() => {}}>
        Restart
      </Button>
      <Button buttonType="secondary" onClick={() => {}}>
        New Game
      </Button>
    </div>
  );
};

export default MobileMenu;
