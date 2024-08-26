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
import StartWindow from "../start-window/StartWindow";
import MobileMenu from "./mobile-menu/MobileMenu";

const Navbar = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const INITIAL_CONTENT = <div></div>;
  const [overlayContent, setOverlayContent] = useState(INITIAL_CONTENT);

  const navigate = useNavigate();

  const GameStart = () => {
    return (
      <div className={styles["start-game-container"]}>
        <div className={styles["return-button"]}>
          <Button buttonType="secondary" onClick={() => setShowOverlay(false)}>
            Return
          </Button>
        </div>
        <StartWindow />
      </div>
    );
  };

  return (
    <>
      <nav className={styles.navbar}>
        <img
          src={logo}
          alt="memory game logotype"
          onClick={() => {
            navigate("/");
          }}
          className={styles.logo}
        />

        <ul className={styles.list}>
          <li>
            <Button buttonType="primary" onClick={() => {}}>
              Restart
            </Button>
          </li>

          <li>
            <Button
              buttonType="secondary"
              onClick={() => {
                setOverlayContent(<GameStart />);
                setShowOverlay(true);
              }}
            >
              New Game
            </Button>
          </li>
        </ul>

        <div className={styles["mobile-menu-button"]}>
          <Button
            buttonType="secondary"
            onClick={() => {
              setOverlayContent(
                <MobileMenu
                  resume={() => setShowOverlay(false)}
                  restart={() => navigate("/game")}
                  newGame={() => setOverlayContent(<GameStart />)}
                />
              );
              setShowOverlay(true);
            }}
          >
            Menu
          </Button>
        </div>
      </nav>
      {showOverlay && <Overlay>{overlayContent}</Overlay>}
    </>
  );
};

export default Navbar;
