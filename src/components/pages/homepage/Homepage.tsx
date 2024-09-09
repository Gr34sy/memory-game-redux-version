// styles
import styles from "./homepage.module.css";
// components
import Button from "../../components/button/Button";
import Overlay from "../../components/overlay/Overlay";
import StartWindow from "../../components/start-window/StartWindow";
// types
import { RootState } from "../../../lib/redux/store";
import { settings } from "../../../lib/types/settingsTypes";
// hooks and utils
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Homepage = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const navigate = useNavigate();

  const settings: settings = useSelector(
    (state: RootState) => state.settings.value
  );
  const gameRunning: boolean = useSelector(
    (state: RootState) => state.game.isRunning
  );

  return (
    <main className={styles.homepage}>
      <div>Home</div>

      {gameRunning ? (
        <Button buttonType="primary" onClick={() => navigate("/game")}>
          Game
        </Button>
      ) : (
        <Button buttonType="primary" onClick={() => setShowOverlay(true)}>
          Create
        </Button>
      )}

      <div>
        <h3>Current Settings:</h3>
        <br />
        <p>Board: {settings.board}</p>
        <p>Players: {settings.players.amount}</p>
        <p>Theme: {settings.theme}</p>
      </div>

      <br />

      {showOverlay && (
        <Overlay>
          <StartWindow backAction={() => setShowOverlay(false)} />
        </Overlay>
      )}
    </main>
  );
};

export default Homepage;
