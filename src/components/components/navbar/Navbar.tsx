// styles
import styles from "./navbar.module.css";

// logo
import logo from "../../../assets/logo.svg";

// hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// components
import Button from "../button/Button";
import Overlay from "../overlay/Overlay";

const Navbar = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const navigate = useNavigate();

  return (
    <>
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
            <Button buttonType="secondary" onClick={() => setShowOverlay(true)}>
              New Game
            </Button>
          </li>
        </ul>
      </nav>
      {showOverlay && (
        <Overlay>
          <div className={styles["overlay-container"]}>
            <div className={styles["return-button"]}>
              <Button
                buttonType="secondary"
                onClick={() => setShowOverlay(false)}
              >
                Return
              </Button>
            </div>
          </div>
        </Overlay>
      )}
    </>
  );
};

export default Navbar;
