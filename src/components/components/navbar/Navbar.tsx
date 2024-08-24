// styles
import styles from "./navbar.module.css";

// logo
import logo from "../../../assets/logo.svg";

// hooks
import { useNavigate } from "react-router-dom";

// components
import Button from "../button/Button";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <img
        src={logo}
        alt="memory game logotype"
        onClick={() => navigate("/")}
        className={styles.logo}
      />

      <ul className={styles.list}>
        <li>
          <Button buttonType="primary" onClick={() => {}}>
            Restart
          </Button>
        </li>

        <li>
          <Button buttonType="secondary" onClick={() => navigate("/start")}>
            New Game
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
