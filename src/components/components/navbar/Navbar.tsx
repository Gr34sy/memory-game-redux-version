// styles
import styles from "./navbar.module.css";

// logo
import logo from "../../../assets/logo.svg";

// hooks and utils
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setRunning } from "../../../lib/redux/slices/gameSlice";

// components
import Button from "../button/Button";
import Overlay from "../overlay/Overlay";
import StartWindow from "../start-window/StartWindow";
import MobileMenu from "./mobile-menu/MobileMenu";
import EndgameWindow from "../endgame-window/EndgameWindow";

const Navbar = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const INITIAL_CONTENT = <div></div>;
  const [overlayContent, setOverlayContent] = useState(INITIAL_CONTENT);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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
            <Button
              buttonType="primary"
              onClick={() => {
                dispatch(setRunning(false))
                setShowOverlay(false);
              }}
            >
              Restart
            </Button>
          </li>

          <li>
            <Button
              buttonType="secondary"
              onClick={() => {
                setOverlayContent(
                  <StartWindow backAction={() => setShowOverlay(false)} />
                );
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
                  restart={() => {
                    setShowOverlay(false);
                  }}
                  newGame={() =>
                    setOverlayContent(
                      <StartWindow backAction={() => setShowOverlay(false)} />
                    )
                  }
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
